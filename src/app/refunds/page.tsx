import type { Metadata } from "next";
import Link from "next/link";
import PolicyLayout from "@/components/PolicyLayout";
export const metadata: Metadata = { title: "Refund and cancellation policy" };
export default function Refunds() {
  return <PolicyLayout title="Refund and cancellation policy">
    <h2>Current website</h2>
    <p>No payments or deposits are accepted. No appointments are reserved.
      There is nothing to cancel or refund within the preview, and no cancellation fee applies.</p>
    <h2>If you believe you were charged</h2>
    <p><Link href="/business">Contact Book barber</Link> with the transaction date, amount,
      and reference if available. Do not email full card numbers or identification documents.
      A payment made through another channel must be checked with the business that took it.
      This preview cannot automatically reverse a payment.</p>
    <h2>Future bookings</h2>
    <p>A paid booking service is not enabled. Its cancellation, no-show, refund method, and processing
      time rules must be agreed and published before any payment is accepted. This page does not
      introduce a deposit, a no-refund rule, or a penalty.</p>
    <h2>Your rights</h2>
    <p>Nothing here limits mandatory consumer rights, including rights relating to a service that
      is not provided or does not meet legal requirements.</p>
  </PolicyLayout>;
}
