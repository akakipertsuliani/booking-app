import NavBar from "./components/layout/NavBar";
import HaircutSlideshow from "./components/UI/HaircutSlideshow";

export default function Home() {
	return (
		<main className="h-screen bg-[#FFF5EE]">
			<NavBar />
			<section className="mx-auto min-h-screen max-w-screen flex items-center justify-center gap-10 px-6 py-20">
				<div className="max-w-3xl" >
					<h1 className="text-5xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-6xl">
						FIND YOUR NEXT HAIRCUT
					</h1>

					<p className="mt-2 max-w-2xl text-lg leading-8 text-zinc-500">
						Find a barber. Choose your style. Book your time.
					</p>

					<div className="mt-6 flex gap-4">
						<button className="rounded-lg bg-zinc-950 px-6 py-3 font-medium text-white transition hover:bg-zinc-800">
							Book an appointment
						</button>
					</div>
				</div>
        <HaircutSlideshow />
			</section>
		</main>
	);
}
