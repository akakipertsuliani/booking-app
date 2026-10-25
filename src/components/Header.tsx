import Link from "next/link";

export default function Header() {
  return <header className="site-header">
    <nav aria-label="Main navigation" className="container nav">
      <Link href="/" className="brand">Barberly</Link>
      <div className="nav-links">
        <Link href="/barbers">Example barbers</Link>
        <Link href="/#how-it-works">How it works</Link>
        <Link href="/business">Business details</Link>
        <Link href="/book" className="button">Preview booking</Link>
      </div>
    </nav>
  </header>;
}
