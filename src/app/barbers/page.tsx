import type { Metadata } from "next";
import BarberDirectory from "@/components/BarberDirectory";
export const metadata: Metadata = { title: "Example barbers" };
export default function BarbersPage() {
  return <div className="container page">
    <h1>Explore example barbers</h1>
    <p className="notice">These are illustrative listings, not verified businesses or customer reviews.</p>
    <BarberDirectory />
  </div>;
}
