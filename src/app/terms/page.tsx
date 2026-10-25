import type { Metadata } from "next";
import Link from "next/link";
import PolicyLayout from "@/components/PolicyLayout";
export const metadata: Metadata = { title: "Terms of service" };
export default function Terms() {
  return <PolicyLayout title="Terms of service">
    <h2>Scope of the demonstration</h2>
    <p>This website currently lets you browse illustrative barber listings and review a sample
      service selection. Names, areas, and prices in the example catalog are not offers from
      verified service providers. No appointment or service contract is created by using the preview.</p>
    <h2>No online payments or fees</h2>
    <p>The website does not accept payments, deposits, or card details. Reviewing a selection costs
      nothing. No subscription, booking fee, cancellation fee, or other automatic charge is created.</p>
    <h2>Before real bookings launch</h2>
    <p>We must publish verified provider details, total prices including applicable taxes and fees,
      availability, cancellation terms, and a genuine confirmation process before accepting bookings.
      No service will be substituted or charged without your agreement.</p>
    <h2>Responsible use</h2>
    <p>Please do not misuse the website, attempt unauthorised access, or send sensitive information
      that is not needed for an enquiry. You may stop using the preview at any time.</p>
    <h2>Content and accessibility</h2>
    <p>No customer ratings, testimonials, accreditation, or guaranteed results are claimed.
      Tell us if content is inaccurate or you encounter an accessibility barrier.</p>
    <h2>Questions and legal rights</h2>
    <p><Link href="/business">Contact the operator</Link> with questions or complaints.
      These terms do not exclude mandatory consumer rights or liability that cannot lawfully
      be excluded. Rules for a paid service must be reviewed under the laws that apply to that service.</p>
    <p>See the <Link href="/privacy">privacy policy</Link> and <Link href="/refunds">refund policy</Link>.</p>
  </PolicyLayout>;
}
