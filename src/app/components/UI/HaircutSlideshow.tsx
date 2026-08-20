"use client";

import { useEffect, useState } from "react";

const images = [
  "/HairCut/HairCut_1.jpg",
  "/HairCut/HairCut_2.jpg",
  "/HairCut/HairCut_3.jpg",
  "/HairCut/HairCut_4.jpg",
  "/HairCut/HairCut_5.jpg",
];

export default function HaircutSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-130">
      <div className="relative aspect-4/5 overflow-hidden rounded-4xl">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Haircut style ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1400 ease-out ${
              index === current
                ? "scale-100 opacity-100"
                : "scale-[1.04] opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />

        <div className="absolute bottom-6 left-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            Featured style
          </p>

          <p className="mt-1 text-xl font-semibold">
            Find your next look
          </p>
        </div>

        <div className="absolute bottom-6 right-6 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-7 bg-white"
                  : "w-1.5 bg-white/50"
              }`}
              aria-label={`Show image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
