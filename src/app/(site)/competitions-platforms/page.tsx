import React from "react";
import { Icon } from "@iconify/react";

const CompetitionsPlatformsPage = () => {
  return (
    <>
      {/* Hero/Intro Section */}
      <section className="relative h-[700px] flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/competition/bg.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-bold text-white mb-4">
              COMPETITION <br /> AND PLATFORMS
            </h1>

            <p className="text-xl text-white mb-6 md:text-2xl font-light">
              Voices that embody truth, courage, and transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* SVG Icon Left Side replaced with image */}
            <div className="flex-shrink-0 mb-8 md:mb-0">
              <img
                src="/images/competition/competition.svg"
                alt="Competition Icon"
                className="w-32 h-32 lg:w-40 lg:h-40"
                draggable="false"
              />
            </div>
            {/* Text Content Right Side */}
            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-700 w-full">
              <p>
                AAUCo’s Competitions & Platforms are designed like
                launchpads—spacious, intentional, and built for bold ideas to
                take flight. This is where creativity meets courage, and where
                every voice becomes a vessel for transformation.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Welcome to the orbit of competitions & platforms
              </h2>
              <p>
                AAUCo’s cosmic playground for truth, courage, and creative
                elevation. Inspired by the spirit of SpaceX and the soul of
                mindful design, this space is not just about winning. It’s about
                awakening.
              </p>
              <p>
                We build platforms that feel like liftoff. We host competitions
                that feel like ceremony. We invite voices that feel like
                prophecy.
              </p>
              <p>
                Each initiative is crafted to be expansive, playful, and deeply
                intentional—whether it’s a global pitch, a cultural showcase, a
                youth-led summit, or a design sprint that reimagines futures.
                These aren’t events. They’re experiences. They’re portals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section - Separated */}
      <section className="py-16 bg-slate-50">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 text-center">
            Our framework is built on three launch zones:
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Creative Missions */}
            <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 border-2 border-pink-200 rounded-2xl p-6 flex flex-col">
              <div className="flex justify-center mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">
                Creative Missions
              </h4>
              <p className="text-pink-700 font-semibold mb-4 text-center">
                Where imagination becomes infrastructure.
              </p>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>Design labs</li>
                <li>Storytelling challenges</li>
                <li>Cultural showcases</li>
                <li>Language and fluency games</li>
              </ul>
            </div>
            {/* Impact Orbits */}
            <div className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 border-2 border-cyan-200 rounded-2xl p-6 flex flex-col">
              <div className="flex justify-center mb-4">
                <span className="text-3xl">🌌</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">
                Impact Orbits
              </h4>
              <p className="text-cyan-700 font-semibold mb-4 text-center">
                Where ideas become movements.
              </p>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>SDG-aligned competitions</li>
                <li>Youth-led innovation platforms</li>
                <li>Community resilience sprints</li>
                <li>Circular economy prototypes</li>
              </ul>
            </div>
            {/* Academic Launchpads */}
            <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 border-2 border-amber-200 rounded-2xl p-6 flex flex-col">
              <div className="flex justify-center mb-4">
                <span className="text-3xl">🛰️</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">
                Academic Launchpads
              </h4>
              <p className="text-amber-700 font-semibold mb-4 text-center">
                Where learning becomes legacy.
              </p>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>University-hosted pitch events</li>
                <li>Curriculum-based challenges</li>
                <li>Internationalization showcases</li>
                <li>Applied futures simulations</li>
              </ul>
            </div>
          </div>
          <div className="text-xl md:text-2xl space-y-2 text-gray-700 text-center mt-12">
            <p>
              Every platform is a vessel. Every competition is a constellation.
              Every participant is a pioneer.
            </p>
            <p className="font-bold">
              This is AAUCo’s Competitions & Platforms.
            </p>
            <p>
              Where bold ideas lift off. Where truth is celebrated. Where
              transformation is the destination.
            </p>
            <p className="text-base text-gray-500 mt-4">
              Let me know if you'd like this styled into a visual scroll,
              interactive challenge map, or branded campaign series. We can also
              create a digital badge system for participants and hosts across
              the network.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompetitionsPlatformsPage;
