import NavBar from "./components/layout/NavBar";
import HaircutSlideshow from "./components/UI/HaircutSlideshow";

const services = [
  {
    name: "Classic Cut",
    description: "Clean, timeless and tailored to you.",
    price: "25 GEL",
    duration: "30 min",
  },
  {
    name: "Skin Fade",
    description: "Sharp fade with a clean modern finish.",
    price: "30 GEL",
    duration: "40 min",
  },
  {
    name: "Hair + Beard",
    description: "Complete cut and beard refinement.",
    price: "40 GEL",
    duration: "55 min",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f4f1ea]">
      <NavBar />

      {/* HERO */}
      <section className="mx-auto grid min-h-svh max-w-7xl items-center gap-10 px-6 pb-8 pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-10 lg:pt-24">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#b58b52]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7547]">
              Barber booking, simplified
            </span>
          </div>

          <h1 className="font-display text-[clamp(4rem,8vw,7.5rem)] leading-[0.9] tracking-[-0.055em] text-zinc-950">
            Find your
            <br />
            next haircut.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
            Discover local barbers, explore styles, compare prices and book
            your next appointment without phone calls or waiting.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="group rounded-full bg-zinc-950 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-800">
              Find a barber
              <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <button className="rounded-full border border-zinc-300 px-7 py-4 text-sm font-semibold text-zinc-800 transition hover:border-zinc-500">
              Explore styles
            </button>
          </div>

          <div className="mt-10 flex gap-10 border-t border-zinc-300/70 pt-6">
            <div>
              <p className="text-2xl font-semibold text-zinc-950">50+</p>
              <p className="mt-1 text-sm text-zinc-500">
                Hair styles
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-zinc-950">20+</p>
              <p className="mt-1 text-sm text-zinc-500">
                Local barbers
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-zinc-950">4.9</p>
              <p className="mt-1 text-sm text-zinc-500">
                Average rating
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HaircutSlideshow />
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="styles"
        className="bg-zinc-950 px-6 py-24 text-white lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c39a64]">
                Popular services
              </p>

              <h2 className="font-display mt-4 max-w-2xl text-5xl leading-tight tracking-[-0.04em] sm:text-6xl">
                Choose your style.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-zinc-400">
              Browse popular cuts before booking and know the price and
              estimated time before you arrive.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="group bg-zinc-950 p-8 transition duration-300 hover:bg-zinc-900"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold text-zinc-500">
                    0{index + 1}
                  </span>

                  <span className="text-sm text-zinc-400">
                    {service.duration}
                  </span>
                </div>

                <h3 className="mt-14 text-2xl font-semibold">
                  {service.name}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-400">
                  {service.description}
                </p>

                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-xl font-semibold">
                    {service.price}
                  </span>

                  <button className="text-sm font-semibold text-[#c39a64] transition group-hover:translate-x-1">
                    Book →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-6 py-28 lg:px-8"
      >
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7547]">
              How it works
            </p>

            <h2 className="font-display mt-4 text-5xl leading-none tracking-[-0.04em] text-zinc-950">
              Three steps.
              <br />
              No hassle.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["01", "Choose", "Pick a barber and the style you want."],
              ["02", "Book", "Select an available date and time."],
              ["03", "Go", "Get directions and arrive when it's your turn."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-3xl border border-zinc-300/80 bg-white/50 p-7"
              >
                <span className="text-xs font-semibold text-[#9b7547]">
                  {number}
                </span>

                <h3 className="mt-10 text-xl font-semibold text-zinc-950">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
