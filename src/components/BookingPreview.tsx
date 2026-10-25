"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { barbers } from "@/Data/barbers";
import { businessDate, dateAfter, findSelection, validPreference } from "@/lib/booking";

export default function BookingPreview({ initialBarberId }: { initialBarberId: number }) {
  const initial = barbers.find(barber => barber.id === initialBarberId) ?? barbers[0];
  const [barberId, setBarberId] = useState(initial.id);
  const [serviceId, setServiceId] = useState<number | null>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [acknowledged, setAcknowledged] = useState(false);
  const [reviewed, setReviewed] = useState(false);
  const [error, setError] = useState("");
  const errorRef = useRef<HTMLParagraphElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const barber = barbers.find(item => item.id === barberId)!;
  const selection = serviceId === null ? null : findSelection(barberId, serviceId);

  // Set bounds after hydration and refresh while open, using the business zone.
  // The date is never derived from build-time HTML or a visitor's local zone.
  useEffect(() => {
    function updateBounds() {
      const today = businessDate();
      if (dateRef.current) {
        dateRef.current.min = dateAfter(today, 1);
        dateRef.current.max = dateAfter(today, 90);
      }
    }
    updateBounds();
    const interval = setInterval(updateBounds, 60_000);
    return () => clearInterval(interval);
  }, []);
  function edited() { setReviewed(false); setError(""); }
  function review(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selection || !acknowledged || !validPreference(date, time)) {
      setError("Choose a service and a valid preferred date between tomorrow and 90 days ahead, a time, and acknowledge the preview.");
      requestAnimationFrame(() => errorRef.current?.focus());
      return;
    }
    setError("");
    setReviewed(true);
    requestAnimationFrame(() => summaryRef.current?.focus());
  }
  return <form onSubmit={review} className="prose">
    <p className="notice"><strong>Preview only.</strong> No booking is submitted,
      reserved, or charged. Dates and times are preferences, not live availability.
      Times use Georgia time (Asia/Tbilisi).</p>
    <div className="field">
      <label htmlFor="barber">Example barber</label>
      <select id="barber" value={barberId} onChange={event => {
        setBarberId(Number(event.target.value)); setServiceId(null);
        setAcknowledged(false); edited();
      }}>
        {barbers.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
      </select>
    </div>
    <fieldset>
      <legend>Choose a service (required)</legend>
      {barber.services.map(service => <label className="choice" key={service.id}>
        <input type="radio" name="service" required value={service.id}
          checked={serviceId === service.id} onChange={() => { setServiceId(service.id); edited(); }} />
        <span>{service.name}<br /><span className="muted">{service.duration} minutes · {service.price} GEL sample total</span></span>
      </label>)}
    </fieldset>
    <div className="field">
      <label htmlFor="date">Preferred date (required)</label>
      <input ref={dateRef} id="date" type="date" required value={date}
        aria-describedby="date-help" onChange={event => { setDate(event.target.value); edited(); }} />
      <p id="date-help">Tomorrow through 90 days ahead, using Georgia time. No availability is promised.</p>
    </div>
    <div className="field">
      <label htmlFor="time">Preferred time in Georgia (required)</label>
      <input id="time" type="time" required value={time}
        onChange={event => { setTime(event.target.value); edited(); }} />
    </div>
    <p>No customer name, email, phone number, date of birth, or payment information is needed.
      Your selection stays in this page and is not stored by the application.</p>
    <p>Read the <Link href="/terms">terms</Link>, <Link href="/refunds">refund policy</Link>,
      and <Link href="/privacy">privacy notice</Link>.</p>
    <label className="check">
      <input type="checkbox" required checked={acknowledged}
        onChange={event => { setAcknowledged(event.target.checked); edited(); }} />
      <span>I understand this is a preview and does not reserve an appointment.</span>
    </label>
    <p>No marketing consent is requested. Reading a privacy notice is not consent to advertising.</p>
    {error && <p ref={errorRef} tabIndex={-1} role="alert">{error}</p>}
    <button type="submit">Review preview</button>
    {reviewed && selection && <section ref={summaryRef} tabIndex={-1} className="summary" aria-labelledby="summary-title">
      <h2 id="summary-title">Your preview — not a reservation</h2>
      <dl>
        <dt>Example barber</dt><dd>{selection.barber.name}</dd>
        <dt>Service</dt><dd>{selection.service.name}</dd>
        <dt>Preferred date</dt><dd>{date}</dd>
        <dt>Preferred time</dt><dd>{time} (Georgia)</dd>
        <dt>Duration</dt><dd>{selection.service.duration} minutes</dd>
        <dt>Sample total</dt><dd>{selection.service.price} GEL</dd>
        <dt>Charged now</dt><dd>0 GEL</dd>
      </dl>
      <p>No booking, platform, deposit, or cancellation fees are charged in this preview.
        Actual business pricing must be verified before real bookings launch.</p>
      <p><strong>Online confirmation is unavailable.</strong> Nothing has been sent to a barber.</p>
      <Link href="/business">View business contact details</Link>
    </section>}
  </form>;
}
