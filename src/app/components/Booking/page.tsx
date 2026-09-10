"use client";

import { useMemo, useState } from "react";
import { addDays, format, startOfDay } from "date-fns";
import {
	CalendarDays,
	Check,
	ChevronLeft,
	ChevronRight,
	Clock,
} from "lucide-react";

const services = [
	{
		id: 1,
		name: "Classic Cut",
		price: 25,
		duration: 30,
	},
	{
		id: 2,
		name: "Skin Fade",
		price: 30,
		duration: 40,
		recommended: true,
	},
	{
		id: 3,
		name: "Hair + Beard",
		price: 40,
		duration: 55,
	},
];

const times = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"];

export default function BookingPage() {
	const today = startOfDay(new Date());

	const defaultService =
		services.find((service) => service.recommended) ?? services[0];

	const [selectedService, setSelectedService] = useState(defaultService.id);

	const [weekOffset, setWeekOffset] = useState(0);

	const dates = useMemo(() => {
		const firstDay = addDays(today, 1 + weekOffset);

		return Array.from({ length: 7 }, (_, index) =>
			addDays(firstDay, index),
		);
	}, [weekOffset]);

	const [selectedDate, setSelectedDate] = useState(
		format(addDays(today, 1), "yyyy-MM-dd"),
	);

	const [selectedTime, setSelectedTime] = useState(times[0]);

	const service = services.find((service) => service.id === selectedService)!;

	const selectedDateObject = new Date(`${selectedDate}T00:00:00`);

	function changeWeek(direction: "previous" | "next") {
		const nextOffset =
			direction === "next" ? weekOffset + 7 : Math.max(0, weekOffset - 7);

		setWeekOffset(nextOffset);

		const firstDateOfWeek = addDays(today, 1 + nextOffset);

		setSelectedDate(format(firstDateOfWeek, "yyyy-MM-dd"));
	}

	return (
		<main className="min-h-[100svh] bg-[#f4f1ea] px-6 py-8 lg:px-8 lg:py-6">
			<div className="mx-auto max-w-6xl">
				{/* HEADER */}
				<div className="max-w-2xl">
					<div className="flex items-center gap-3">
						<span className="h-px w-10 bg-[#b58b52]" />

						<p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7547]">
							Book appointment
						</p>
					</div>

					<h1 className="font-display mt-3 text-4xl leading-[0.95] tracking-[-0.045em] text-zinc-950 sm:text-5xl">
						Pick what works
						<br />
						for you.
					</h1>

					<p className="mt-3 max-w-xl text-sm text-zinc-500">
						We already selected a recommended option. Change
						anything you want.
					</p>
				</div>

				{/* MAIN */}
				<div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
					{/* LEFT */}
					<div className="space-y-7">
						{/* SERVICE */}
						<section>
							<div className="flex items-end justify-between">
								<div>
									<p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b7547]">
										01
									</p>

									<h2 className="mt-1 text-xl font-semibold text-zinc-950">
										Choose service
									</h2>
								</div>

								<p className="hidden text-sm text-zinc-400 sm:block">
									Recommended option selected
								</p>
							</div>

							<div className="mt-4 grid gap-3 sm:grid-cols-3">
								{services.map((item) => {
									const active = selectedService === item.id;

									return (
										<button
											key={item.id}
											onClick={() =>
												setSelectedService(item.id)
											}
											className={`relative rounded-2xl border p-4 text-left transition duration-200 ${
												active
													? "border-zinc-950 bg-zinc-950 text-white shadow-lg"
													: "border-zinc-200 bg-white text-zinc-950 hover:-translate-y-0.5 hover:border-zinc-400"
											}`}
										>
											{item.recommended && (
												<span
													className={`text-[10px] font-bold uppercase tracking-[0.15em] ${
														active
															? "text-[#d7ae76]"
															: "text-[#9b7547]"
													}`}
												>
													Popular
												</span>
											)}

											<div className="mt-3 flex items-start justify-between gap-3">
												<div>
													<p className="font-semibold">
														{item.name}
													</p>

													<div
														className={`mt-2 flex items-center gap-1.5 text-sm ${
															active
																? "text-zinc-400"
																: "text-zinc-500"
														}`}
													>
														<Clock size={14} />
														{item.duration} min
													</div>
												</div>

												{active && (
													<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-zinc-950">
														<Check
															size={14}
															strokeWidth={3}
														/>
													</span>
												)}
											</div>

											<p className="mt-4 text-lg font-semibold">
												{item.price} GEL
											</p>
										</button>
									);
								})}
							</div>
						</section>

						{/* DATE + TIME */}
						<div className="grid gap-7 md:grid-cols-2">
							{/* DATE */}
							<section>
								<div className="flex items-end justify-between">
									<div>
										<p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b7547]">
											02
										</p>

										<h2 className="mt-1 text-xl font-semibold text-zinc-950">
											Choose date
										</h2>
									</div>

									<CalendarDays
										size={20}
										className="text-zinc-400"
									/>
								</div>

								{/* MODERN DATE PICKER */}
								<div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-3">
									{/* MONTH + ARROWS */}
									<div className="flex items-center justify-between px-1 pb-3">
										<p className="text-sm font-semibold text-zinc-950">
											{format(dates[0], "MMMM yyyy")}
										</p>

										<div className="flex gap-1">
											<button
												onClick={() =>
													changeWeek("previous")
												}
												disabled={weekOffset === 0}
												className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-25"
												aria-label="Previous week"
											>
												<ChevronLeft size={17} />
											</button>

											<button
												onClick={() =>
													changeWeek("next")
												}
												className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100"
												aria-label="Next week"
											>
												<ChevronRight size={17} />
											</button>
										</div>
									</div>

									{/* DAYS */}
									<div className="grid grid-cols-7 gap-1">
										{dates.map((item) => {
											const value = format(
												item,
												"yyyy-MM-dd",
											);

											const active =
												selectedDate === value;

											return (
												<button
													key={value}
													onClick={() =>
														setSelectedDate(value)
													}
													className={`group flex min-w-0 flex-col items-center rounded-xl px-1 py-2.5 transition duration-200 ${
														active
															? "bg-zinc-950 text-white shadow-md"
															: "text-zinc-950 hover:bg-[#f4f1ea]"
													}`}
												>
													<span
														className={`text-[9px] font-bold uppercase tracking-[0.08em] ${
															active
																? "text-zinc-400"
																: "text-zinc-400"
														}`}
													>
														{format(item, "EEE")}
													</span>

													<span className="mt-1 text-lg font-semibold">
														{format(item, "d")}
													</span>

													<span
														className={`mt-1 h-1 w-1 rounded-full ${
															active
																? "bg-[#d7ae76]"
																: "bg-transparent"
														}`}
													/>
												</button>
											);
										})}
									</div>
								</div>
							</section>

							{/* TIME */}
							<section>
								<div>
									<p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b7547]">
										03
									</p>

									<h2 className="mt-1 text-xl font-semibold text-zinc-950">
										Choose time
									</h2>
								</div>

								<div className="mt-4 grid grid-cols-3 gap-2">
									{times.map((time) => {
										const active = selectedTime === time;

										return (
											<button
												key={time}
												onClick={() =>
													setSelectedTime(time)
												}
												className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
													active
														? "border-zinc-950 bg-zinc-950 text-white"
														: "border-zinc-200 bg-white text-zinc-900 hover:border-zinc-500"
												}`}
											>
												{time}
											</button>
										);
									})}
								</div>
							</section>
						</div>
					</div>

					{/* SUMMARY */}
					<aside className="lg:sticky lg:top-6 lg:self-start">
						<div className="rounded-[2rem] bg-white p-6 shadow-sm">
							<p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b7547]">
								Your booking
							</p>

							<h2 className="mt-4 text-2xl font-semibold text-zinc-950">
								{service.name}
							</h2>

							<div className="mt-5 space-y-3 border-y border-zinc-100 py-5">
								<div className="flex justify-between gap-4 text-sm">
									<span className="text-zinc-500">Date</span>

									<span className="font-semibold text-zinc-950">
										{format(
											selectedDateObject,
											"EEE, MMM d",
										)}
									</span>
								</div>

								<div className="flex justify-between gap-4 text-sm">
									<span className="text-zinc-500">Time</span>

									<span className="font-semibold text-zinc-950">
										{selectedTime}
									</span>
								</div>

								<div className="flex justify-between gap-4 text-sm">
									<span className="text-zinc-500">
										Duration
									</span>

									<span className="font-semibold text-zinc-950">
										{service.duration} min
									</span>
								</div>
							</div>

							<div className="mt-5 flex items-end justify-between">
								<span className="text-sm text-zinc-500">
									Total
								</span>

								<span className="text-3xl font-semibold text-zinc-950">
									{service.price} GEL
								</span>
							</div>

							<button className="mt-6 w-full rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-800">
								Continue →
							</button>

							<p className="mt-3 text-center text-xs text-zinc-400">
								You can review everything before confirming.
							</p>
						</div>
					</aside>
				</div>
			</div>
		</main>
	);
}
