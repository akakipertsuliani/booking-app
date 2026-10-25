"use client";
import { useState } from "react";
import { contactEmail, contactLink } from "@/config/business";

export default function ContactRequest({ unsubscribe = false }: { unsubscribe?: boolean }) {
  const [type, setType] = useState(unsubscribe ? "Stop promotional emails" : "Delete my personal data");
  const body = `Hello Book barber,\n\nPlease process this request: ${type}.\n\nPlease reply to this sending address. Let me know if you need proportionate information to locate my record.\n\nThank you.`;
  const href = contactLink(type, body);
  return <div>
    {!unsubscribe && <div className="field">
      <label htmlFor="request-type">Request type</label>
      <select id="request-type" value={type} onChange={event => setType(event.target.value)}>
        <option>Delete my personal data</option>
        <option>Access my personal data</option>
        <option>Correct my personal data</option>
        <option>Withdraw consent</option>
        <option>Ask a privacy question</option>
      </select>
    </div>}
    <p>We do not need a separate form with your name, phone number, or identity document.
      Your email address is provided by your email application when you send the request.</p>
    {href ? <a className="button" href={href}>Open email request</a>
      : <p role="status">A valid contact email must be configured before requests can be sent.</p>}
    <p>This opens an editable email draft; it does not submit a request automatically.
      If no email application opens, email <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      {" "}with the subject “{type}”. A request is not completed until the operator handles it.</p>
  </div>;
}
