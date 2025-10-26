"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutSection() {
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
          <p className="text-md text-gray-800 mb-6">
            Born in a time of global uncertainty in 2020, <br /> AAUCo - Global
            University Incubator (GUI) emerged as a <br /> formation-driven
            incubator for universities, industries, <br /> and youth leaders
            ready to move.
          </p>
          <p className="text-md text-gray-800 mb-6">
            We transform ideas into ventures, stories into systems, and
            beginnings into legacy. With active networks across Canada, <br />
            the Middle East, Philippines and Asia Pacific, India, Pakistan,
            Latvia, AAUCo - GUI curates cross-border incubation through thematic
            startups, youth forums, and institutional showcases. Our strategic
            presence signals a quite expansion, anchored in diplomacy,
            sustainability, and global mobility.
          </p>
          <p className="text-md text-gray-800 font-bold mb-6">
            THROUGH FOUR PILLARS:
          </p>

          <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
            <li className="flex flex-col items-center p-4 text-center border-2 rounded-xl bg-white/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Abeona Icon */}
              <Image
                src="/images/about/abeona.svg"
                alt="Abeona Icon"
                width={100}
                height={100}
                className="mb-3 drop-shadow-md"
              />
              <span className="text-md text-gray-900 font-bold mb-2">
                Abeona
              </span>
              <ul className="list-disc list-inside text-xs font-normal text-gray-700 text-left">
                <li>startups</li>
              </ul>
            </li>
            <li className="flex flex-col items-center p-4 text-center border-2 rounded-xl bg-white/50  transition-shadow duration-300">
              {/* Adeona Icon */}
              <Image
                src="/images/about/adeona.svg"
                alt="Adeona Icon"
                width={100}
                height={100}
                className="mb-3 drop-shadow-md"
              />
              <span className="text-md text-gray-900 font-bold mb-2">
                Adeona
              </span>
              <ul className="list-disc list-inside text-xs font-normal text-gray-700 text-left">
                <li>branding</li>
              </ul>
            </li>
            <li className="flex flex-col items-center p-4 text-center border-2 rounded-xl bg-white/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Unlimited Service Icon */}
              <Image
                src="/images/about/unlimited-services.svg"
                alt="Unlimited Service Icon"
                width={100}
                height={100}
                className="mb-3 drop-shadow-md"
              />
              <span className="text-md text-gray-900 font-bold mb-2">
                Unlimited Service
              </span>
              <ul className="list-disc list-inside text-xs font-normal text-gray-700 text-left">
                <li>incubation</li>
                <li>internationalization</li>
                <li>inspired stewardship</li>
              </ul>
            </li>
            <li className="flex flex-col items-center p-4 text-center border-2 rounded-xl bg-white/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Company & Competitions Icon */}
              <Image
                src="/images/about/competition.svg"
                alt="Company & Competitions Icon"
                width={100}
                height={100}
                className="mb-3 drop-shadow-md"
              />
              <span className="text-md text-gray-900 font-bold mb-2">
                Company & Competitions
              </span>
              <ul className="list-disc list-inside text-xs font-normal text-gray-700 text-left">
                <li>partners and platforms</li>
              </ul>
            </li>
          </ul>

          <p className="text-md text-gray-800">
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
}
