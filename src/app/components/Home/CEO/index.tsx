import React from "react";
import Image from "next/image";

const CEO = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left: Text */}
          <div className="flex-1 max-w-3xl">
            <div className="mb-8">
              <h2 className="text-xl md:text-4xl font-bold text-black leading-tight relative inline-block">
                <span className="relative inline-block">
                  Message
                  <div className="w-42 h-3 bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 absolute left-0 right-auto bottom-0 translate-y-full"></div>
                </span>{" "}
                from the CEO & Founder
              </h2>
            </div>

            <div className="text-gray-700 text-base md:text-sm leading-relaxed space-y-5">
              <p>
                I didn't build AAUCo in a moment of triumph. I built it along
                with fellow believers and visionaries in the quiet 21st floor of
                a condo unit in the heart of Manila, on a worn sheet of manila
                paper, with a fading pentel pen, during the stillness of a world
                in lockdown. There was no applause, no blueprint, no certainty.
                Just a woman listening to the silence, trusting that something
                meaningful was trying to speak.
              </p>
              <p className="pl-4 bg-gray-100 py-3 px-6 italic border-l-[6px] [border-image:linear-gradient(to_bottom,_#fde047,#f59e42,#facc15)_1]">
                I believed that this path was never inherited instead, it
                appeared, with faith slowly, painfully, and with purpose. I
                climbed through doubt, through systems that weren't built for
                me, through spaces where my voice had to fight to be heard. And
                in that long ascent, the vision became clear: education must
                move with depth, speak with integrity, and build with
                consequence.
              </p>
              <p>
                I grew up in an environment where structure was essential and
                precision was expected. That early discipline shaped how I lead,
                with clarity, careful judgment, and a deep respect for purpose.
                I learned to focus not on being loud, but on being intentional.
                Not on chasing titles, but on staying true to direction.
              </p>
              <p>
                As a woman, I’ve had to build without permission. I’ve had to
                create without precedent. And I’ve had to trust that vision when
                rooted in service will always find its way.
              </p>
              <p>
                My journey has taken me across institutions and continents from
                policy tables to university corridors, from grassroots
                classrooms to global roundtables. Along the way, I absorbed the
                principles that shape enduring systems: resilience as strategy,
                compassion as intelligence, obsession as scale, and architecture
                as legacy.
              </p>

              <p>
                AAUCo is the embodiment of those principles. It is not a
                platform. It is a living system. A sovereign space where
                universities, industries, and youth leaders co-design futures.
                Through thematic startups, global incubation, and strategic
                diplomacy, we don’t replicate models. We build legacies.
              </p>

              <p>
                Today, AAUCo-GUI expands through trust and design. The Quantum
                Collective unites youth led ventures and global allies who move
                with clarity. The Guild of Experts is a circle of educators and
                strategists who shape futures not from templates, but from lived
                insight.
              </p>

              <p>
                If you are a student with a spark, a university with a vision,
                or a partner ready to build AAUCo-GUI is your space. In trends,
                in shaped trajectories, and in liberation of the creative soul.
              </p>

              <p>
                I didn’t stumble onto this path, it was always there, waiting. I
                just had to keep climbing, step by step, through the fog of
                doubt and the weight of silence, until the view cleared and I
                finally recognized it as mine, ours.
              </p>

              <p className="font-semibold text-xl text-black mt-8 mb-6">
                Everything I build, everything I give - it's for something
                greater than myself.
              </p>
            </div>

            {/* Author Info Card */}
            <div className="mt-10 p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl border border-gray-300 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-1 h-16 bg-gradient-to-b from-yellow-300 via-orange-400 to-yellow-500 rounded-full"></div>
                <div>
                  <p className="font-bold text-xl md:text-2xl text-black mb-1">
                    Jennifer "Jenni" Montero
                  </p>
                  <p className="text-gray-700 text-sm md:text-base font-medium">
                    Founder and CEO, AAUCo | Global University Incubator
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-shrink-0 w-full lg:w-[480px] xl:w-[540px]">
            <div className="relative group">
              {/* Decorative element */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-300 via-orange-500 to-yellow-700 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative">
                <Image
                  src="/images/ceo.jpg"
                  alt="Jennifer Jenni Montero, CEO of AAUCo"
                  width={540}
                  height={540}
                  className="rounded-2xl object-cover shadow-2xl w-full h-auto ring-4 ring-gray-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Carl's Journey Card */}
        <div className="mt-16">
          <div className="flex flex-col lg:flex-row items-center bg-gradient-to-br from-white via-slate-50 to-white rounded-xl border border-gray-300 shadow-md overflow-hidden max-w-5xl mx-auto">
            {/* Left: Image */}
            <div className="flex-shrink-0 w-full lg:w-[340px] xl:w-[400px] p-4 lg:p-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 rounded-2xl opacity-20 blur-xl"></div>
                <div className="relative">
                  <Image
                    src="/images/carl.jpg"
                    alt="Carl with his dog on a mountain at sunrise, symbolizing stewardship and resilience"
                    width={600}
                    height={600}
                    className="rounded-xl object-cover shadow-xl w-full h-auto ring-4 ring-yellow-100"
                  />
                </div>
              </div>
            </div>
            {/* Right: Content */}
            <div className="flex-1 p-4 lg:p-6">
              <h3 className="text-2xl md:text-4xl font-bold text-black mb-6">
                Carl's Journey of Inspired Stewardship
              </h3>
              <div className="text-gray-700 text-sm md:text-sm leading-relaxed space-y-1">
                <p>Carl's story is part of AAUCo's climb.</p>
                <p>
                  He began as a working student in marketing quiet, focused, and
                  unwavering. When the world shifted during the pandemic, Carl
                  stayed. Virtually, he helped build what didn't yet exist. He
                  believed in the vision before it had form and shaped its
                  foundation with steady hands.
                </p>
                <p>
                  His contribution wasn't loud. It was lasting. Carl seldom
                  spoke, but his work spoke volumes. From zero resources to a
                  thriving global platform, his fingerprints are on every
                  system, every post, every page. Like blood flowing through the
                  body, his presence runs through AAUCo's digital core
                  connecting continents, powering growth, and holding the
                  structure together.
                </p>
                <p>
                  His technical precision and quiet loyalty helped AAUCo expand
                  across Canada, the Middle East, the Philippines, Asia Pacific,
                  India, Pakistan, and Latvia.
                </p>

                <p className="pl-3 mt-2 bg-gray-100 py-3 px-6 italic border-l-[6px] [border-image:linear-gradient(to_bottom,_#facc15,#f59e42,#eab308)_1] mb-2">
                  “Inspired Stewardship is not just a concept to me. It is the
                  way I build. Whether I am navigating a mountain trail or
                  designing a digital system, I create with care for people, for
                  platforms, and for the planet. That mindset was shaped by Ms.
                  Jenni, my mentor and guide, whose vision for AAUCo rooted in
                  ASEAN, Africa, Canada, the Middle East, and the Pacific taught
                  me that purpose must lead not only our practice but our way of
                  life. This is why I continue to walk with AAUCo, where ideas
                  are not only incubated but elevated into global impact.”
                  <div className="font-semibold mt-5 text-black text-base md:text-sm">
                    — Carl, AAUCO Technical Specialist
                  </div>
                </p>

                <p>
                  The mountain image featured on our website isn't symbolic.
                  It's real. Captured through Carl's lens during one of his
                  climbs, it reflects the spirit of AAUCo: resilience,
                  elevation, and the quiet strength of those who build not for
                  applause but for purpose.
                </p>
                <p>
                  Carl's work is now part of the view guiding the next
                  generation as they climb.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEO;
