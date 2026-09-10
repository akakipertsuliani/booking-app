import type { Barber } from "@/Data/barbers";

type BarberCardProps = {
  barber: Barber;
};

export default function BarberCard({ barber }: BarberCardProps) {
  const lowestPrice = Math.min(
    ...barber.services.map((service) => service.price)
  );

  return (
    <article className="group w-full min-w-0 overflow-hidden rounded-4xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-4/3 overflow-hidden">
        <img
          src={barber.image}
          alt={barber.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h2 className="truncate text-xl font-semibold text-zinc-950">
              {barber.name}
            </h2>

            <p className="mt-1 truncate text-sm text-zinc-500">
              {barber.address}
            </p>
          </div>

          <span className="shrink-0 rounded-full text-zinc-800 bg-[#f4f1ea] px-3 py-1 text-sm font-semibold">
            ★ {barber.rating}
          </span>
        </div>

        <div className="mt-6 border-t border-zinc-100 pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
            From
          </p>

          <div className="mt-2 flex items-center justify-between gap-3">
            <span className="text-xl font-semibold text-zinc-950">
              {lowestPrice} GEL
            </span>

            <button className="shrink-0 text-sm font-semibold text-[#9b7547] transition group-hover:translate-x-1">
              View barber →
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
