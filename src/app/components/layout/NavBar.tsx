export default function Navbar() {
  return (
    <nav className="absolute w-screen border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <div className="flex text-xl font-bold gap-16">
            <a href="#" className="text-xl font-bold text-gray-900 hover:text-gray-700">
                Logo
            </a>
            <div className="flex items-center gap-8">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Home
                </a>

                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Pricing
                </a>

                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Contact
                </a>
            </div>
        </div>


        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Login
          </a>

          <button className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}