export default function Navbar() {
  return (
    <nav className="absolute w-full border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <div className="flex text-xl font-bold gap-16">
            <a href="#" className="text-xl font-bold text-gray-900 hover:text-gray-700">
                Logo
            </a>
            <div className="flex items-center gap-8">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Home
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
