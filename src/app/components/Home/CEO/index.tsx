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
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight relative inline-block">
                Message from the{" "}
                <span className="relative inline-block">
                  CEO
                  <div className="w-26 h-3 bg-gradient-to-r from-gray-400 to-gray-800 absolute right-0 left-auto bottom-0 translate-y-full"></div>
                </span>
              </h2>
            </div>

            <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-5">
              <p>
                I didn't build AAUCo in a moment of triumph. I built it along
                with fellow believers and visionaries in the quiet - on a worn
                sheet of manila paper, with a fading pentel pen, during the
                stillness of a world in lockdown. There was no applause, no
                blueprint, no certainty. Just a woman listening to the silence,
                trusting that something meaningful was trying to speak.
              </p>
              <p className="pl-4 bg-gray-100 py-3 px-6 italic border-l-[6px] [border-image:linear-gradient(to_bottom, #facc15,#f59e42,#eab308)_1]">
                I believed that this path was never inherited – instead, it
                appeared, with faith - slowly, painfully, and with purpose. I
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
                create without precedent. And I’ve had to trust that vision—when
                rooted in service—will always find its way.
              </p>
              <p>
                My journey has taken me across institutions and continents—from
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
                Collective unites youth-led ventures and global allies who move
                with clarity. The Guild of Experts is a circle of educators and
                strategists who shape futures not from templates, but from lived
                insight.
              </p>

              <p>
                If you are a student with a spark, a university with a vision,
                or a partner ready to build - AAUCo GUI is your space. In
                trends, in shaped trajectories, and in liberation of the
                creative soul.
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
                <div className="w-1 h-16 bg-gradient-to-b from-gray-700 to-black rounded-full"></div>
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
      </div>
    </section>
  );
};

export default CEO;
