import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("public pages have accessible landmarks, contrast and no horizontal overflow", async ({ page, baseURL }) => {
  const thirdParty: string[] = [];
  page.on("request", request => {
    if (new URL(request.url()).origin !== new URL(baseURL!).origin) thirdParty.push(request.url());
  });
  for (const path of ["/", "/barbers", "/book", "/privacy", "/terms", "/refunds",
    "/cookies", "/business", "/data-request", "/email-preferences", "/accessibility", "/licenses"]) {
    await page.goto(path);
    await expect(page.locator("main")).toHaveCount(1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
    expect(results.violations, path).toEqual([]);
  }
  expect(thirdParty).toEqual([]);
  expect(await page.context().cookies()).toEqual([]);
});
test("barber selection retains the correct service and never promises confirmation", async ({ page }) => {
  await page.goto("/barbers");
  await page.getByRole("link", { name: "Preview services for Example barber B" }).click();
  await expect(page.getByLabel("Example barber")).toHaveValue("2");
  await expect(page.getByRole("radio")).toHaveCount(1);
  await expect(page.getByRole("radio")).not.toBeChecked();
  await page.getByRole("radio").check();
  const bounds = await page.getByLabel("Preferred date (required)").getAttribute("min");
  await page.getByLabel("Preferred date (required)").fill(bounds!);
  await page.getByLabel("Preferred time in Georgia (required)").fill("12:00");
  await expect(page.getByRole("checkbox", { name: /I understand/ })).not.toBeChecked();
  await page.getByRole("button", { name: "Review preview" }).click();
  await expect(page.getByRole("heading", { name: "Your preview — not a reservation" })).toHaveCount(0);
  await page.getByRole("checkbox", { name: /I understand/ }).check();
  await page.getByRole("button", { name: "Review preview" }).click();
  const summary = page.getByRole("region", { name: "Your preview — not a reservation" });
  await expect(summary).toBeFocused();
  await expect(summary).toContainText("20 GEL");
  await expect(summary).toContainText("0 GEL");
  await expect(summary).toContainText("Nothing has been sent");
  await page.getByLabel("Example barber").selectOption("3");
  await expect(page.getByRole("radio")).not.toBeChecked();
  await expect(summary).toHaveCount(0);
});
test("cookie notice persists only an explicit preference and supports clearing", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Cookies & privacy choices" })).toBeVisible();
  await expect(page.getByRole("checkbox")).not.toBeChecked();
  await page.getByRole("button", { name: "Continue without optional cookies" }).click();
  expect(await page.evaluate(() => localStorage.length)).toBe(0);
  await page.reload();
  await expect(page.getByRole("heading", { name: "Cookies & privacy choices" })).toBeVisible();
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Continue without optional cookies" }).click();
  expect(await page.evaluate(() => localStorage.getItem("barberly-privacy-notice-v1"))).toBe("dismissed");
  await page.reload();
  await expect(page.getByRole("heading", { name: "Cookies & privacy choices" })).toHaveCount(0);
  await page.getByRole("button", { name: "Cookie settings" }).click();
  await page.getByRole("button", { name: "Clear saved preference" }).click();
  expect(await page.evaluate(() => localStorage.length)).toBe(0);
});
test("keyboard skip link and native choices are usable", async ({ page }) => {
  await page.goto("/book");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to main content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await page.getByRole("radio").first().focus();
  await page.keyboard.press("Space");
  await expect(page.getByRole("radio").first()).toBeChecked();
});
test("data requests are explicit email drafts with no extra identity collection", async ({ page }) => {
  await page.goto("/data-request");
  const draft = page.getByRole("link", { name: "Open email request" });
  await expect(draft).toHaveAttribute("href", /^mailto:akakiferculiani@gmail.com\?subject=Delete/);
  expect(await page.locator("input").count()).toBeLessThanOrEqual(1); // notice preference only
  await page.getByLabel("Request type").selectOption("Access my personal data");
  await expect(draft).toHaveAttribute("href", /subject=Access/);
});
