# Third-party integration and data-flow audit

Date: 2026-10-25. Scope: application source, package declarations/lockfile,
browser requests in the automated suite, and current frontend behavior.
This is not an audit of the production hosting account.

| Component | Data / behavior | Decision |
| --- | --- | --- |
| Next.js / React | Same-origin page delivery, scripts, routing | Retained; patch framework and enforce audit checks |
| Tailwind / PostCSS | Build-time styles | Retained; no browser tracking |
| React Compiler | Build-time transformation | Retained |
| TypeScript / ESLint / test tools | Development and CI | Retained; no production tracking SDK |
| date-fns / lucide / hook-form / resolvers / zod | Previously declared; no longer needed | Removed direct dependencies |
| Google Fonts | Previously used by next/font at build time | Removed; system fonts |
| Stock images | Source and commercial licence not documented | Removed from public tree, not merely hidden in UI |
| Gmail contact mailbox | Voluntary email enquiries and requests | Disclosed; operator must review Google account settings, retention and contractual requirements |
| Hosting provider | IP/network details, access/security logs | Provider and settings not supplied; production inventory/retention review required |
| Analytics / ads / maps / video / chat / payment SDK | No integration found | Not installed or loaded |

Browser storage: only barberly-privacy-notice-v1 in localStorage, containing
"dismissed", written only after the visitor checks Remember and dismisses.
It is never a visitor identifier or a signal to enable tracking.
Page selections live in React memory and are not persisted.

Operational tasks: name the actual host and regions; document access/log retention;
verify whether the host adds cookies, analytics or injected scripts; review email
processing and cross-border transfers; restrict mailbox access and enable MFA.
Do not claim any account, host or external provider has been audited by this code review.

Dependencies: npm packages can have transitive internal copies of removed direct
packages. Run npm audit after every lockfile update. Test tooling does not ship
as a user-facing SDK. Do not use forced audit upgrades without review.
