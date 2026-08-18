"use client";

import { useState, useEffect } from "react";

export default function HaircutSlideshow() {
	const [current, setCurrent] = useState(0);
	const images = [
		"/HairCut/HairCut_1.jpg",
		"/HairCut/HairCut_2.jpg",
		"/HairCut/HairCut_3.jpg",
		"/HairCut/HairCut_4.jpg",
		"/HairCut/HairCut_5.jpg",
	];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % images.length);
		}, 3000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl">
			{images.map((image, index) => (
				<img
					key={image}
					src={image}
					alt="Haircut style"
					className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
						index === current ? "opacity-100" : "opacity-0"
					}`}
				/>
			))}
		</div>
	);
}
