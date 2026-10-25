import { expect, it } from "vitest";
import { renderEmail, type EmailMessage } from "../../src/lib/email";
const message: EmailMessage = {
  kind: "marketing", subject: "News", body: "A test message",
  businessName: "Example business", postalAddress: "Example address",
  contactEmail: "operator@example.com",
};
it("blocks marketing without a secure unsubscribe destination", () => {
  expect(() => renderEmail(message)).toThrow(/unsubscribe/i);
  expect(() => renderEmail({ ...message, unsubscribeUrl: "http://example.com/stop" })).toThrow(/HTTPS/);
  expect(() => renderEmail({ ...message, unsubscribeUrl: "javascript:alert(1)" })).toThrow();
});
it("includes sender identity and an unsubscribe link in marketing text", () => {
  const email = renderEmail({ ...message, unsubscribeUrl: "https://example.com/unsubscribe/token" });
  expect(email.text).toContain("Unsubscribe from promotional emails: https://example.com/unsubscribe/token");
  expect(email.text).toContain("Example address");
});
it("does not imply that transactional messages subscribe a recipient", () => {
  expect(renderEmail({ ...message, kind: "transactional" }).text).toContain("not a marketing subscription");
});
it("rejects header injection and incomplete sender details", () => {
  expect(() => renderEmail({ ...message, subject: "News\r\nBcc: other@example.com" })).toThrow();
  expect(() => renderEmail({ ...message, postalAddress: "" })).toThrow();
});
