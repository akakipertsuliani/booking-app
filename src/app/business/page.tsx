import type { Metadata } from "next";
import { business, contactEmail } from "@/config/business";
export const metadata: Metadata = { title: "Business details" };
export default function Business() {
  return <article className="container prose page">
    <h1>Business details</h1>
    <dl>
      <dt><strong>Business name supplied by the operator</strong></dt><dd>{business.name}</dd>
      <dt><strong>Country</strong></dt><dd>{business.country}</dd>
      <dt><strong>Address supplied by the operator</strong></dt><dd>{business.address}</dd>
      <dt><strong>Contact, privacy requests, and complaints</strong></dt>
      <dd><a href={`mailto:${contactEmail}`}>{contactEmail}</a></dd>
      <dt><strong>Registration / tax identifier</strong></dt>
      <dd>{business.registration || "Not yet provided — verification required before commercial launch."}</dd>
    </dl>
    <p className="notice">This site is a demonstration. No appointments or payments are accepted.
      The operator must verify the registered legal identity, complete address, provider catalog,
      and applicable business requirements before launching paid services.</p>
    <p>Email opens your email application. No message is sent until you choose to send it.
      We use Gmail for this contact address. Avoid sending card details, identification documents,
      or sensitive health information.</p>
  </article>;
}
