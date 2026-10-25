# Book barber fixes — implementation report
Date: 25 October 2026

## Implemented
- Privacy, terms, refund/cancellation and cookie policy routes, linked from every page.
- Business name, country, address and contact email supplied by the owner.
- A nonblocking cookie/privacy banner. No optional tracking SDKs are installed.
  The only saved preference is notice dismissal, and only after an unchecked Remember choice.
- Minimal data use: booking preview needs no name, email, phone, birth date or payment details.
- Separate, unchecked preview acknowledgement. No marketing consent bundled with terms.
- Manual deletion/access/correction/consent-withdrawal email request route.
- Email preference request route; future marketing templates reject a missing/insecure unsubscribe URL.
- Removed unverified ratings, "popular" recommendations, promotional defaults and inactive sign-in.
- Explicit example catalog and sample prices; no hidden charges or false booking confirmation.
- Shared barber-specific services, working links, review summary and business-zone date checks.
- Native keyboard controls, skip navigation, visible focus, responsive wrapping and high contrast.
- Removed automatic slideshow and unverified stock photos; decorative artwork hidden from screen readers.
- System fonts; licence inventory and licence texts for installed production software.
- Third-party dependency/data-flow audit, security headers, CI and regression tests.
- Next.js updated to 16.4.3; React/React DOM updated to 19.3.1.
  Unnecessary direct SDK/form/date/icon dependencies removed.

## Validation
- Strict lint: passed, zero warnings.
- Type generation and TypeScript: passed.
- Production build: passed.
- Unit tests: 7 passed.
- Browser tests: 10 passed across desktop (1280 px) and mobile (390 px).
  Automated WCAG checks ran on all 12 public pages at both widths, with no detected violations.
  The suite checked keyboard navigation, consent persistence/clearing, sample prices,
  request-draft links, no horizontal overflow and no unexpected third-party requests/cookies.
- npm audit: zero known vulnerabilities in the final dependency tree.

## Important boundaries
This is a privacy-conscious frontend preview, not a production appointment system.
No real appointments, payments, automatic emails or customer accounts are enabled.
The changes do not implement a database, atomic conflict prevention or transactional email delivery.
Email opt-out and data deletion are manual requests, not automatic backend actions.
A future marketing sender still needs recorded separate consent, a durable suppression list,
an operational unsubscribe endpoint and appropriate delivery headers.

The policies describe the current preview. Verify registered identity, complete address,
required registration/tax details, hosting provider/log retention, email processing,
cross-border safeguards and the actual service terms before commercial launch.
Automated accessibility checks do not establish complete WCAG conformance.
No implementation can guarantee protection from lawsuits.

## Cancellation/refund recommendation
The internal proposal recommends starting without prepayments or deposits,
free cancellation/rescheduling before the appointment, and no automatic no-show charges.
Ask for 24 hours' notice when possible, without imposing a fee.
The proposed policy still requires owner approval and Georgian legal review.
The public refund page currently states only actual behavior: no payments are taken.

## Image rights
The owner described the photos as free stock, but exact sources and licence terms are unknown.
The new tree removes the files from public distribution. Git history may still contain them.
Record creator, source, commercial permissions, attribution and applicable releases before reusing them.
