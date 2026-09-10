"use client";

import { useState } from "react";
import { barbers } from "@/Data/barbers";
import BarberCard from "./BarberCard";

export default function BarbersPage() {
	const locations = [
		"All",
		...Array.from(new Set(barbers.map((barber) => barber.location))),
	];

	const [selectedLocation, setSelectedLocation] = useState("All");

	const visibleBarbers = (
		selectedLocation === "All"
			? barbers
			: barbers.filter((barber) => barber.location === selectedLocation)
	).toSorted((a, b) => b.rating - a.rating);

	return (
		<section className="min-h-screen bg-[#f4f1ea] px-6 py-24 lg:px-8">
			<div className="mx-auto max-w-7xl">
				{/* Heading */}
				<div className="max-w-2xl">
					<p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7547]">
						Our barbers
					</p>

					<h1 className="font-display mt-4 text-5xl leading-tight tracking-[-0.04em] text-zinc-950 sm:text-6xl">
						Find your barber.
					</h1>

					<p className="mt-5 text-zinc-500">
						Choose an area and discover barbers working near you.
					</p>
				</div>

				{/* Location selector */}
				<div className="mt-10 flex flex-wrap gap-3">
					{locations.map((location) => (
						<button
							key={location}
							onClick={() => setSelectedLocation(location)}
							className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
								selectedLocation === location
									? "bg-zinc-950 text-white"
									: "bg-white text-zinc-600 hover:text-zinc-950"
							}`}
						>
							{location}
						</button>
					))}
				</div>

				{/* Results */}
				<div className="mt-12">
					<p className="mb-5 text-sm text-zinc-500">
						{visibleBarbers.length}{" "}
						{visibleBarbers.length === 1 ? "barber" : "barbers"}{" "}
						found
					</p>

					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{visibleBarbers.map((barber) => (
							<BarberCard key={barber.id} barber={barber} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
