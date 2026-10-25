# Release boundaries and checklist

## Implemented in this change
- Four policy pages describe the actual preview; business/contact details supplied by owner.
- No fake ratings, testimonials, "popular" labels, recommendation defaults or scarcity.
- No payment collection or hidden fees; sample amounts separated from charged-now zero.
- Native, labelled controls, explicit unchecked acknowledgement, skip link and focus handling.
- Responsive wrapping, high-contrast palette and no motion/slideshow.
- No external font requests or unverified stock photos distributed in the new tree.
- Data deletion/access/consent-withdrawal email draft and manual email preference request.
- No marketing list or sender. A future marketing template requires an unsubscribe URL.
- No optional tracking. Browser preference is explicitly requested, clearable and nonblocking.
- Shared catalog, barber selection links, business-zone date validation and preview review.
- Security headers, regression/accessibility tests, CI and dependency updates.

## Before public commercial launch
- Verify registered legal name: supplied name "Book barber" is not independently verified.
- Verify "Kutaisi street N1" is the full public business address; add required registration/tax ID.
- Obtain owner approval for the proposed future cancellation/refund policy.
- Have actual Georgian terms/privacy requirements reviewed; add appropriate Georgian-language content.
- Identify hosting provider, processor contracts, retention schedule and international safeguards.
- Set operational response procedures and legal deadlines for data and complaint requests.
- Configure mailbox access/MFA, request tracking, proportionate identity checks and deletion handling.
- Verify provider inventory, service prices/taxes, hours, and rights to any future images.
- Real bookings require server validation, durable database, atomic overlap prevention,
  idempotency, abuse controls, time-zone handling, confirmation and cancellation.
- Customer forms should collect only necessary contact details; no unnecessary health/ID fields.
- Add terms acknowledgement for the real contract if needed; keep optional marketing consent
  separate, unselected and independently withdrawable. Record consent text/version and time.
- Any marketing sender requires verified consent, suppression persistence, an operational
  signed unsubscribe endpoint, one-click unsubscribe headers where applicable, tested removal,
  and accurate postal sender details. A template link alone does not implement unsubscribe.
- Verify production cookies and requests; re-audit if host-injected features are enabled.
- Test with assistive technology and real devices; automated axe checks are not certification.

No code or policy can guarantee freedom from litigation. This branch does not certify compliance.

## Technical references
- Georgia data protection: https://matsne.gov.ge/en/document/view/5827307
- Georgia consumer protection: https://matsne.gov.ge/en/document/view/5420598
- W3C WCAG 2.2: https://www.w3.org/TR/WCAG22/
- ICO cookies (useful design reference, not an assertion of UK applicability):
  https://ico.org.uk/for-the-public/online/cookies
