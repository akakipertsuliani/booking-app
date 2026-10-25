import Link from "next/link";
import { business, policyVersion } from "@/config/business";
export default function PolicyLayout({ title, children }: {
  title: string; children: React.ReactNode;
}) {
  return <article className="container prose page">
    <p><Link href="/business">Business &amp; contact details</Link></p>
    <h1>{title}</h1>
    <p className="muted">Version {policyVersion} · {business.name || "Business identity pending"}</p>
    <p className="notice">This notice describes the current demonstration website.
      Online appointments and payments are unavailable. Policies must be reviewed
      for the actual service before launch.</p>
    {children}
  </article>;
}
