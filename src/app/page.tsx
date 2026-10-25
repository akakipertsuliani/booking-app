import Link from "next/link";

export default function Home() {
  return <div className="container page">
    <div className="notice"><strong>Demonstration only.</strong> Example barbers and prices.
      No appointments, accounts, payments, or marketing sign-ups are accepted.</div>
    <section className="hero" aria-labelledby="hero-title">
      <div>
        <p className="eyebrow">Barberly booking preview</p>
        <h1 id="hero-title">Choose a service.<br />Explore your options.</h1>
        <p>Browse an example catalog and review a service selection before a future booking.</p>
        <div className="actions">
          <Link className="button" href="/barbers">Explore example barbers</Link>
          <Link className="button secondary" href="/book">Preview a booking</Link>
        </div>
      </div>
      <div className="illustration" aria-hidden="true">Cut.<br />Style.<br />Your choice.</div>
    </section>
    <section id="how-it-works" aria-labelledby="how-heading" className="prose">
      <h2 id="how-heading">How this preview works</h2>
      <ol>
        <li>Choose an example barber and see their services, duration, and sample price.</li>
        <li>Select a preferred date and time. These are preferences, not available slots.</li>
        <li>Review the selection. Nothing is reserved or charged.</li>
      </ol>
      <p>We do not ask for your name, phone number, or email in this preview.</p>
    </section>
  </div>;
}
