import { defineConfig, devices } from "@playwright/test";
const channel = process.env.PLAYWRIGHT_CHANNEL;
const port = Number(process.env.BOOKING_TEST_PORT ?? 3100);
if (!Number.isInteger(port) || port < 1024 || port > 65535) throw new Error("Invalid test port");
export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  workers: 1,
  reporter: "list",
  use: { baseURL: `http://localhost:${port}`, trace: "retain-on-failure" },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], channel } },
    { name: "mobile", use: { ...devices["Desktop Chrome"], channel, viewport: { width: 390, height: 844 } } },
  ],
  webServer: {
    command: `node node_modules/next/dist/bin/next start --port ${port}`,
    url: `http://localhost:${port}`,
    reuseExistingServer: process.env.BOOKING_REUSE_SERVER === "1",
    timeout: 60_000,
  },
});
