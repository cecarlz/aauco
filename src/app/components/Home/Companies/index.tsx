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
          <ul className="text-lg text-gray-800 list-disc list-inside mb-6">
            <li>Abeona (startups)</li>
            <li>Adeona (branding)</li>
            <li>Unlimited Service (incubation)</li>
            <li>Company & Competitions (partners and platforms)</li>
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
