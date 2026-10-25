// Public information only. Never put secrets in NEXT_PUBLIC_* variables.
export const business = {
  name: process.env.NEXT_PUBLIC_BUSINESS_LEGAL_NAME?.trim() ?? "Book barber",
  country: process.env.NEXT_PUBLIC_BUSINESS_COUNTRY?.trim() ?? "Georgia",
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS?.trim() ?? "Kutaisi street N1",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL?.trim() ?? "akakiferculiani@gmail.com",
  registration: process.env.NEXT_PUBLIC_BUSINESS_REGISTRATION?.trim() ?? "",
};
export const contactEmail = /^[^\s@?&#%]+@[^\s@?&#%]+\.[^\s@?&#%]+$/.test(business.email)
  ? business.email : "";
export const businessDetailsComplete = Boolean(
  business.name && business.country && business.address && contactEmail
);
export const policyVersion = "2026-10-25";
export function contactLink(subject: string, body = "") {
  return contactEmail
    ? `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    : null;
}
