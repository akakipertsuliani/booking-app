import type { Metadata } from "next";
import ContactRequest from "@/components/ContactRequest";
export const metadata: Metadata = { title: "Email preferences" };
export default function EmailPreferences() {
  return <article className="container prose page">
    <h1>Email preferences</h1>
    <p>This application has no mailing list, automated email sender, or marketing sign-up.
      Selecting a booking preview does not subscribe you to anything.</p>
    <p>If you received a promotional email from the business through another channel, you can
      request that those messages stop using the contact option below. This is a manual request,
      not an automatic unsubscribe confirmation.</p>
    <ContactRequest unsubscribe />
  </article>;
}
