import type { Metadata } from "next";
import { contactEmail } from "@/config/business";
export const metadata: Metadata = { title: "Accessibility" };
export default function Accessibility() {
  return <article className="container prose page">
    <h1>Accessibility</h1>
    <p>We aim to make the preview usable with a keyboard, screen reader, mobile device, or zoom.</p>
    <ul>
      <li>Use Tab and Shift+Tab to move between links and controls; visible outlines show focus.</li>
      <li>The first link skips navigation and moves to the main content.</li>
      <li>Native select, radio, checkbox, date, and time controls support standard keyboard interaction.</li>
      <li>There is no automatic slideshow, flashing content, or time limit.</li>
      <li>The layout wraps on small screens and text uses high-contrast colours.</li>
    </ul>
    <p>Decorative text artwork is hidden from assistive technology. No content photos are currently
      displayed. Future informative images must have meaningful alternative text; decorative images
      must have an empty alternative.</p>
    <p>These are implementation measures, not a certification of full accessibility compliance.
      If something prevents you from using the website, email
      {" "}<a href={`mailto:${contactEmail}`}>{contactEmail}</a> with the page and problem.
      You do not need to disclose a disability or medical information.</p>
  </article>;
}
