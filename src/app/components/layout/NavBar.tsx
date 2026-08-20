export default function Navbar() {
  return (
    <nav className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-8">
        <div className="flex items-center gap-10">
          <a
            href="#"
            className="text-xl font-bold tracking-[-0.04em] text-zinc-950"
          >
            BARBERLY
          </a>

          <div className="hidden items-center gap-7 md:flex">
            <a
              href="#barbers"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              Barbers
            </a>

            <a
              href="#styles"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              Styles
            </a>

            <a
              href="#how-it-works"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              How it works
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className="hidden text-sm font-medium text-zinc-700 transition hover:text-zinc-950 sm:block">
            Sign in
          </button>

          <button className="rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-800">
            Book now
          </button>
        </div>
      </div>
    </nav>
  );
}
