import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";
export const metadata: Metadata = { title: "Cookie policy" };
export default function Cookies() {
  return <PolicyLayout title="Cookie policy">
    <h2>No optional tracking</h2>
    <p>The application does not set analytics or advertising cookies and loads no tracking SDKs,
      embedded maps, videos, chat widgets, or remote font services. You can use the preview
      without accepting tracking.</p>
    <h2>Browser storage inventory</h2>
    <p>If you tick “Remember that I dismissed this notice” and continue, the application writes
      a localStorage entry named <code>barberly-privacy-notice-v1</code> with the value
      <code> dismissed</code>. It only remembers your dismissal on this device. It contains no
      personal identifier and is not sent to our server. Without that checkbox, the notice
      dismissal is not persisted.</p>
    <p>This preference remains until cleared through Cookie settings or browser controls.
      Reopen Cookie settings in the footer and choose Clear saved preference to remove it.
      Blocking storage does not stop the preview working.</p>
    <h2>Hosting and future changes</h2>
    <p>The production hosting provider and any infrastructure cookies must be verified before
      launch. Development tooling is not part of the public cookie inventory.
      If optional analytics or marketing is introduced, it must remain blocked until a separate,
      freely chosen consent and offer equally accessible refusal and withdrawal controls.</p>
  </PolicyLayout>;
}
