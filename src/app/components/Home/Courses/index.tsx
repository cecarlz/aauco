"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CourseType } from "@/app/types/course";
import CourseSkeleton from "../../Skeleton/Course";

const iconMap = [
  "tabler:certificate",
  "tabler:building",
  "tabler:users-group",
  "tabler:home",
];

const ProgramsMobility = () => {
  return (
    <section
      id="programs-mobility"
      className="scroll-mt-12 py-20 bg-gray-900 relative"
      style={{
        backgroundImage: "url('/images/framework/bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2
            className="text-white text-4xl font-bold mb-4"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}
          >
            The Framework: From Dots to Space
          </h2>
          <p className="text-gray-300 text-xl italic">
            Filling the gaps. Designing the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* DOTS - The Disconnected Landscape */}
          <div className="bg-black/70 border border-yellow-600 rounded-2xl p-6 flex flex-col items-center">
            <div className="w-32 h-32 bg-yellow-600 rounded-full flex items-center justify-center mb-6 overflow-hidden">
              <Image
                src="/images/framework/dots.svg"
                alt="Dots"
                width={96}
                height={96}
                className="object-contain w-24 h-24"
              />
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2 text-center">DOTS</h3>
              <h4 className="text-xl font-semibold mb-3 text-center">
                The Disconnected Landscape
              </h4>
              <p className="text-sm italic mb-4 text-center">
                What the world offers: <br /> scattered programs, isolated
                efforts, <br /> fragmented impact.
              </p>
              <div className="text-sm space-y-1 mt-2 text-left">
                <p>
                  <br /> Youth initiatives without continuity
                </p>
                <p>Institutions operating as silos</p>
                <p>Stories untold, ventures unlaunched</p>
                <p>Social impact measured but not sustained</p>
                <p>Global mobility without meaning</p>
                <p className="font-semibold mt-3">Dots are moments.</p>
                <p className="font-semibold">AAUCo turns them into movement.</p>
              </div>
            </div>
          </div>

          {/* LINES - The Strategic Thread */}
          <div className="bg-black/70 border border-yellow-500 rounded-2xl p-6 flex flex-col items-center">
            <div className="w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center mb-6 overflow-hidden">
              <Image
                src="/images/framework/lines.svg"
                alt="Lines"
                width={96}
                height={96}
                className="object-contain w-24 h-24"
              />
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2 text-center">LINES</h3>
              <h4 className="text-xl font-semibold mb-3 text-center">
                The Strategic Thread
              </h4>
              <p className="text-sm italic mb-4 text-center">
                What AAUCo builds: <br /> alignment, resonance, and formation.
              </p>
              <div className="text-xs space-y-2 text-left">
                <p>
                  <strong>ABEONA</strong> – Thematic startups that align purpose
                  with platform
                </p>
                <p>
                  <strong>ADEONA</strong> – Digital presence that transforms
                  milestones into legacy
                </p>
                <p>
                  <strong>UNLIMITED SERVICE</strong> – Incubation across
                  ideologies, borders, and geographies
                </p>
                <p>
                  <strong>COMPANY</strong> – A network of companionship partners
                  who co-create impact
                </p>
                <p>
                  <strong>COMPETITIONS & PLATFORMS</strong> – Stages where
                  voices rise and tools do not shine
                </p>
                <p className="font-semibold mt-3">
                  Lines are connections. AAUCo turns them into continuity.
                </p>
              </div>
            </div>
          </div>

          {/* SPACE - The Claimed Horizon */}
          <div className="bg-black/70 border border-yellow-400 rounded-2xl p-6 flex flex-col items-center">
            <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center mb-6 overflow-hidden">
              <Image
                src="/images/framework/space.svg"
                alt="Space"
                width={96}
                height={96}
                className="object-contain w-24 h-24"
              />
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2 text-center">SPACE</h3>
              <h4 className="text-xl font-semibold mb-3 text-center">
                The Claimed Horizon
              </h4>
              <p className="text-sm italic mb-4 text-center">
                What AAUCo creates: <br /> a sovereign ecosystem for legacy,{" "}
                <br />
                leadership, and global formation.
              </p>
              <div className="text-xs space-y-2 text-left">
                <p>
                  AAUCo does not inherit space it architects it. Through
                  deliberate formation and cross-border resonance, we cultivate
                  an ecosystem where institutions rise, youth lead, and futures
                  are quietly shaped. This is not borrowed ground; it is claimed
                  altitude.
                </p>
                <p className="font-semibold mt-3">
                  Space is not given. AAUCo designs it. Where early beginnings
                  become legacy, and every voice becomes an asset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsMobility;
