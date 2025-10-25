"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// No carousel needed
const Companies = () => {
  return (
    <section
      className="relative py-20"
      style={{
        backgroundImage: "url('/images/about-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Opacity overlay */}
      <div className="absolute inset-0 bg-white/70 pointer-events-none"></div>
      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-3xl font-bold text-primary mb-4">
            ABOUT AAUCo <br /> GLOBAL UNIVERSITY INCUBATOR
          </h2>
          <p className="text-lg text-gray-800 mb-6">
            Born in a time of global uncertainty in 2020, <br /> AAUCo - Global
            University Incubator (GUI) emerged as a <br /> formation-driven
            incubator for universities, industries, <br /> and youth leaders
            ready to move.
          </p>
          <p className="text-lg text-gray-800 mb-6">
            We transform ideas into ventures, stories into systems, and
            beginnings into legacy. With active networks across Canada, <br />
            the Middle East, Philippines and Asia Pacific, India, Pakistan,
            Latvia, AAUCo - GUI curates cross-border incubation through thematic
            startups, youth forums, and institutional showcases. Our strategic
            presence signals a quite expansion, anchored in diplomacy,
            sustainability, and global mobility.
          </p>
          <p className="text-lg text-gray-800 font-bold mb-6">
            THROUGH FOUR PILLARS:
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-2 mb-6">
            <li className="flex flex-col items-center p-4 text-center border-2 rounded-xl bg-white/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Diamond Icon */}
              <svg
                className="h-16 w-16 mb-3 text-gray-700 drop-shadow-md"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="32,8 56,32 32,56 8,32"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
              <span className="text-lg text-gray-900 font-bold mb-2">
                Abeona
              </span>
              <ul className="list-disc list-inside text-xs font-normal text-gray-700 text-left">
                <li>startups</li>
              </ul>
            </li>
            <li className="flex flex-col items-center p-4 text-center border-2 rounded-xl bg-white/50  transition-shadow duration-300">
              {/* Star Icon */}
              <svg
                className="h-16 w-16 mb-3 text-gray-700 drop-shadow-md"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="32,8 39,26 58,26 42,38 48,56 32,45 16,56 22,38 6,26 25,26"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
              <span className="text-lg text-gray-900 font-bold mb-2">
                Adeona
              </span>
              <ul className="list-disc list-inside text-xs font-normal text-gray-700 text-left">
                <li>branding</li>
              </ul>
            </li>
            <li className="flex flex-col items-center p-4 text-center border-2 rounded-xl bg-white/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Pentagon Icon */}
              <svg
                className="h-16 w-16 mb-3 text-gray-700 drop-shadow-md"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="32,8 56,26 46,56 18,56 8,26"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
              <span className="text-lg text-gray-900 font-bold mb-2">
                Unlimited Service
              </span>
              <ul className="list-disc list-inside text-xs font-normal text-gray-700 text-left">
                <li>incubation</li>
                <li>internationalization</li>
                <li>inspired stewardship</li>
              </ul>
            </li>
            <li className="flex flex-col items-center p-4 text-center border-2 rounded-xl bg-white/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Octagon Icon */}
              <svg
                className="h-16 w-16 mb-3 text-gray-700 drop-shadow-md"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="20,8 44,8 56,20 56,44 44,56 20,56 8,44 8,20"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
              <span className="text-lg text-gray-900 font-bold mb-2">
                Company & Competitions
              </span>
              <ul className="list-disc list-inside text-xs font-normal text-gray-700 text-left">
                <li>partners and platforms</li>
              </ul>
            </li>
          </ul>
          <p className="text-lg text-gray-800">
            AAUCo offers a full-circle experience for those who build with
            purpose, platform, and a movement, where formation becomes future,
            and every voice finds its venture.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/images/banner/aauco-photo.webp"
            alt="AAUCo - Global University Incubator"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Companies;
