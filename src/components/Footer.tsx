import Link from "next/link";
import { business, businessDetailsComplete, contactEmail } from "@/config/business";
import CookieNotice from "./CookieNotice";

export default function Footer() {
  return <footer className="site-footer">
    <div className="container">
      <p><strong>{business.name || "Barberly — demonstration website"}</strong></p>
      {!businessDetailsComplete && <p>Business details are incomplete. Online bookings and payments are unavailable.</p>}
      {business.address && <p>{business.address}</p>}
      {contactEmail && <p><a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>}
      <nav aria-label="Policies and help" className="footer-links">
        <Link href="/privacy">Privacy policy</Link>
        <Link href="/terms">Terms of service</Link>
        <Link href="/refunds">Refund policy</Link>
        <Link href="/cookies">Cookie policy</Link>
        <Link href="/data-request">Request data deletion</Link>
        <Link href="/email-preferences">Email preferences</Link>
        <Link href="/business">Business details</Link>
        <Link href="/accessibility">Accessibility</Link>
        <Link href="/licenses">Asset licences</Link>
      </nav>
      <CookieNotice />
    </div>
  </footer>;
}
