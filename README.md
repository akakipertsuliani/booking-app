# Book barber / Barberly booking preview

Next.js, React, TypeScript and Tailwind frontend for an example barber catalog.

## What works
- Responsive navigation, example-area filtering and barber-specific service selection.
- Date/time preferences in Asia/Tbilisi; review summary with no reservation or charge.
- Privacy, terms, refund, cookie, business, accessibility and asset-licence pages.
- No optional trackers. Optional local preference only when explicitly requested.
- Email-draft routes for privacy/deletion and promotional-email opt-out requests.

## What is not enabled
There is no booking database, authentication, payment gateway, live availability,
marketing list, email sender, or automatic data-deletion/unsubscribe backend.
All catalog entries are clearly marked examples. No customer details are collected
in the preview. Do not market this repository as a live appointment service.

## Development
Requires Node.js 22 or later.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. Run `npm run build` then `npm start` for production.
Public environment values are bundled at build time; rebuild after changing them.
Verify the owner's supplied name/address and add registration details where required.

## Checks
```sh
npm run lint
npm run typecheck
npm test
npm run build
npx playwright install chromium
npm run test:e2e
npm audit
```

Browser tests start the production server on port 3100 and require a prior build.
Set PLAYWRIGHT_CHANNEL=msedge to use an installed Microsoft Edge on Windows.
See docs/RELEASE-CHECKLIST.md, docs/THIRD-PARTY-AUDIT.md and
docs/CANCELLATION-PROPOSAL.md for outstanding launch requirements.

## Privacy and email boundaries
Changing cookie preferences does not authorise loading any SDK. No optional SDK
loader exists. Add purpose-specific refusal/withdrawal before introducing tracking.
The required booking checkbox acknowledges preview status; it is not marketing consent.
Data requests open a mailto draft. An operator must actually process each request.
src/lib/email.ts enforces sender details and an HTTPS unsubscribe link on any future
marketing template. It does not implement delivery, consent records, suppression, or
one-click unsubscribe. These are release blockers for any future marketing sender.

## Assets
Unverified stock photos and starter logos are removed from the published tree.
System fonts require no bundled font files. The simple favicon and decorative text
panel are authored for this change. Document provenance before adding any new asset.
Third-party software retains its own licence; see THIRD-PARTY-NOTICES.md.
