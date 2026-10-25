// No sender or marketing list is enabled. Use this guard if email is integrated later.
// A marketing sender must also enforce separate consent and a durable suppression list.
export type EmailMessage = {
  kind: "transactional" | "marketing";
  subject: string;
  body: string;
  businessName: string;
  postalAddress: string;
  contactEmail: string;
  unsubscribeUrl?: string;
};
export function renderEmail(message: EmailMessage) {
  if (!message.businessName.trim() || !message.postalAddress.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(message.contactEmail)) {
    throw new Error("Verified sender details are required.");
  }
  if (/[\r\n]/.test(message.subject + message.contactEmail)) {
    throw new Error("Email headers cannot contain line breaks.");
  }
  if (message.kind === "marketing") {
    if (!message.unsubscribeUrl) throw new Error("Marketing email requires an unsubscribe link.");
    const url = new URL(message.unsubscribeUrl);
    if (url.protocol !== "https:" || url.username || url.password) {
      throw new Error("Unsubscribe URL must be HTTPS with no embedded credentials.");
    }
  }
  const footer = `\n\n${message.businessName}\n${message.postalAddress}\nContact: ${message.contactEmail}`;
  return {
    subject: message.subject,
    text: message.body + footer + (message.kind === "marketing"
      ? `\nUnsubscribe from promotional emails: ${message.unsubscribeUrl}`
      : "\nThis is a service message, not a marketing subscription."),
  };
}
