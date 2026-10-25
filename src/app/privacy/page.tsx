import type { Metadata } from "next";
import Link from "next/link";
import PolicyLayout from "@/components/PolicyLayout";
import { business, contactEmail } from "@/config/business";
export const metadata: Metadata = { title: "Privacy policy" };
export default function Privacy() {
  return <PolicyLayout title="Privacy policy">
    <h2>Who operates this website</h2>
    <p>{business.name}, {business.address}, {business.country}.
      Contact: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      Business details are supplied by the operator; registration details remain to be verified.</p>
    <h2>Information used in this preview</h2>
    <ul>
      <li>Barber, service, and preferred date/time selections exist in the current page memory only.
        They are not submitted to a booking server or saved by the application.</li>
      <li>If you explicitly ask us to remember dismissal of the cookie notice, one local browser
        preference is saved. You can clear it through Cookie settings.</li>
      <li>Normal web requests expose network information such as IP address, requested page,
        browser details, and time to the hosting provider. Actual host logging and retention
        must be confirmed before production launch.</li>
      <li>If you email us, we receive your email address and the information you choose to include.
        Our published contact address uses Gmail, so Google processes those emails.
        Your own email provider may also process your message.</li>
    </ul>
    <h2>Purpose and legal basis</h2>
    <p>Page requests are used to deliver and protect the website. Information you voluntarily
      send by email is used to answer that request. A requested browser preference remembers
      your choice. We do not use booking-preview data for marketing or profiling.
      The operator must document the appropriate legal basis under applicable Georgian law
      and any other law that applies before processing real customer bookings.</p>
    <h2>Data minimisation and sharing</h2>
    <p>The preview does not request names, phone numbers, birth dates, addresses, account passwords,
      payment details, or health information. No analytics, advertising, social-media embeds,
      payment SDKs, or automated marketing services are integrated into the application.
      We do not sell preview data. Avoid sending identification documents or sensitive details
      with an initial enquiry.</p>
    <h2>Retention and international processing</h2>
    <p>Preview selections disappear when the page is discarded. The optional dismissal preference
      remains until you clear it or your browser removes it. Email retention, hosting retention,
      provider locations, contracts, and any cross-border safeguards still require operator review.
      They are not represented as audited or final.</p>
    <h2>Your requests</h2>
    <p>You may contact us to request access, correction, deletion, information about processing,
      or withdrawal of any consent you have given. We may need proportionate identity verification
      to protect your information. Some records may need to be kept where the law requires it;
      we will explain any such restriction. Contact the competent data-protection authority
      if you believe your rights have been infringed.</p>
    <p><Link href="/data-request">Make a data request or request deletion</Link>.
      The application does not provide automatic deletion of provider logs or emails.</p>
    <h2>Changes</h2>
    <p>We will update this notice when processing changes. Adding booking, accounts, payments,
      analytics, or marketing requires a fresh review and appropriate notices and choices.</p>
  </PolicyLayout>;
}
