import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Barberly | Booking preview", template: "%s | Barberly" },
  description: "Explore an example barber catalog and preview a service selection. Online booking is not yet available.",
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <Header />
    <main id="main-content" tabIndex={-1}>{children}</main>
    <Footer />
  </body></html>;
}
