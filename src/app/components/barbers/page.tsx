import { barbers } from "@/Data/barbers";
import BarberCard from "./BarberCard";

export default function BarbersPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7547]">
            Our barbers
          </p>

          <h1 className="font-display mt-4 text-5xl leading-tight tracking-[-0.04em] text-zinc-950 sm:text-6xl">
            Find the right barber for your style.
          </h1>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {barbers.map((barber) => (
            <BarberCard key={barber.id} barber={barber} />
          ))}
        </div>
      </div>
    </main>
  );
}