import type { Metadata } from "next";
import BookingPreview from "@/components/BookingPreview";
export const metadata: Metadata = { title: "Booking preview" };
export default async function BookPage({ searchParams }: {
  searchParams: Promise<{ barber?: string | string[] }>
}) {
  const query = await searchParams;
  const id = typeof query.barber === "string" ? Number(query.barber) : 1;
  return <div className="container page"><h1>Preview your selection</h1>
    <BookingPreview initialBarberId={Number.isSafeInteger(id) ? id : 1} />
  </div>;
}
