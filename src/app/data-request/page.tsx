import type { Metadata } from "next";
import Link from "next/link";
import ContactRequest from "@/components/ContactRequest";
export const metadata: Metadata = { title: "Request data deletion" };
export default function DataRequest() {
  return <article className="container prose page">
    <h1>Request data deletion or access</h1>
    <p>The preview has no customer accounts or stored appointments. You can still request
      help with emails you sent or other personal data the business may hold.</p>
    <ContactRequest />
    <h2>What happens next</h2>
    <p>The operator will review your request, identify relevant records, and explain any identity
      checks or legal retention requirements. Do not attach an identity document to your initial request.
      We cannot erase hosting or email-provider records automatically from this page.</p>
    <p>To remove the local notice preference, use Cookie settings in the footer and select
      Clear saved preference. <Link href="/privacy">Read the privacy notice</Link>.</p>
  </article>;
}
