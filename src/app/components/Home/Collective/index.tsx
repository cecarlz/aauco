"use client";

import React, { useRef } from "react";
import Image from "next/image";

const profiles = [
  {
    name: "Jennifer Montero ",
    image: "/images/collective/jenni.jpg",
  },

  {
    name: "Robin Serrano",
    image: "/images/collective/robin.jpg",
  },
  {
    name: "Dr. Muhammad Mustafa",
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
    name: "???",
    image: "/images/collective/who.jpg",
  },

  {
    name: "Johnric Vargas",
    image: "/images/collective/johnric.jpg",
  },
];

const Collective = () => {
  const [current, setCurrent] = React.useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Custom slide distribution: 4 cards on first slide, 3 on second
  const slides = [
    profiles.slice(0, 4), // First 4 profiles
    profiles.slice(4, 7), // Remaining 3 profiles
  ];
  const totalSlides = slides.length;

  React.useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 7000);
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
        <div className="max-w-7xl mx-auto text-gray-700 text-base md:text-sm space-y-2 my-10">
          <p className="text-center text-justify">
            The Quantum Collective is a global circle of seven men, each placed
            with intention and purpose. As a team we are moving with mastery,
            trust, and shared conviction. From the Philippines to Canada, across
            Asia and the Pacific, Europe and the Middle East every member brings
            a distinct strength that fuels AAUCo’s mission forward. These are
            women and men who walk with me in clarity and courage, committed to
            bridging gaps, creating hope, and carrying the legacy of AAUCo with
            joy, freedom, and love for life and service. <br /> <br /> Six have
            already stepped into place, each one a companion in purpose. The
            seventh is on the way, drawn by something greater than invitation.
            Together, we are positioned to serve across continents, ready to
            build what the world needs next. This is the Quantum Collective,
            where vision breathes, and legacy lives.
          </p>
        </div>
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
            {slides.map((slideProfiles, slideIdx) => (
              <div
                key={slideIdx}
                className="min-w-full flex gap-6 px-12 justify-center"
              >
                {slideProfiles.map((profile, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-lg flex flex-col items-center w-64 mx-2"
                  >
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      width={256}
                      height={256}
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
