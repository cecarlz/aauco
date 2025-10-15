"use client";

import React, { useRef } from "react";
import Image from "next/image";

const profiles = [
  {
    name: "Robin Serrano",
    image: "/images/collective/robin.jpg",
  },
  {
    name: "Dr Muhammad Mustafa",
    image: "/images/collective/dr muhammad.jpg",
  },
  {
    name: "Jyoti Zongluju",
    image: "/images/collective/jyoti.jpg",
  },
  {
    name: "ANITA LARIOVA",
    image: "/images/collective/anita.jpg",
  },
  {
    name: "Johnric Vargas",
    image: "/images/collective/johnric.jpg",
  },
];

const Collective = () => {
  const [current, setCurrent] = React.useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cardsToShow = 3;
  const totalSlides = Math.ceil(profiles.length / cardsToShow);

  React.useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, totalSlides]);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 text-center">
          THE AAUCO QUANTUM COLLECTIVE
        </h2>
        <div className="relative overflow-hidden">
          {/* Previous Arrow */}
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides)
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIdx) => (
              <div key={slideIdx} className="min-w-full flex gap-3 px-12">
                {profiles
                  .slice(slideIdx * cardsToShow, (slideIdx + 1) * cardsToShow)
                  .map((profile, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl shadow-lg flex flex-col items-center w-72 mx-auto"
                    >
                      <Image
                        src={profile.image}
                        alt={profile.name}
                        width={288}
                        height={288}
                        className="rounded-t-2xl object-cover w-full aspect-square"
                      />
                      <h3 className="text-lg font-bold p-5 text-gray-900 text-center">
                        {profile.name}
                      </h3>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % totalSlides)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-5 transition-all"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === current ? "bg-gray-800" : "bg-gray-300"
                }`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collective;
