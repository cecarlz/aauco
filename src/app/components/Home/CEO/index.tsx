import React from "react";
import Image from "next/image";

const CEO = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
          {/* Left: Text */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              MESSAGE FROM THE CEO and FOUNDER
            </h2>
            <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4">
              <p>
                I didn’t inherit this path. I built it.
                <br />
                <br />
                AAUCo was born not from comfort, but from clarity. At the height
                of the pandemic, when borders closed and institutions paused, I
                saw a deeper need—not just for access, but for formation. In
                that stillness, I launched #ReSpACE (Redesigning of Specialized
                Access of Connectivity and Engagement), a glocalized model that
                reimagined how international programs could move, connect, and
                uplift. It wasn’t a workaround. It was a blueprint.
              </p>
              <p>
                My journey has never been linear. I grew up in a home shaped by
                discipline and scarcity, where precision was taught not as a
                skill but as a way of life. That foundation became my compass.
                Over the years, I served in government, led international
                offices, and built bridges across Canada, ASEAN, and the Middle
                East. Every role, every partnership, every roadshow was a step
                toward one truth: education must move with purpose.
              </p>
              <p>
                AAUCo is that movement. It is a sovereign space where
                universities, industries, and youth leaders co-create futures.
                Through thematic startups, legacy branding, and global
                incubation, we do more than connect dots. We claim space.
              </p>
              <p>
                Today, AAUCo-GUI expands not just through partnerships but
                through architecture. The AAUCo Quantum Collective brings
                together leaders all over the world with youth-led ventures and
                thematic startups that move with intention. The AAUCo Guild of
                Experts is a circle of educators, strategists, and institutional
                allies who co-design futures with us. These are not just
                networks. They are ecosystems of trust, diplomacy, and
                transformation.
              </p>
              <p>
                If you are a student with a spark, a university with a vision,
                or a partner ready to move, AAUCo is your platform. Together, we
                build futures that speak, systems that scale, and memories that
                last.
              </p>
              <p className="font-semibold">
                This is my story. This is our movement. This is our legacy!
              </p>
            </div>
            <div className="mt-8">
              <p className="font-bold text-gray-900">
                Jennifer “Jenni” Montero
              </p>
              <p className="text-gray-500">
                Founder and CEO, AAUCo | Global University Incubator
              </p>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-shrink-0 w-full md:w-[500px] flex justify-center md:justify-end mb-8 md:mb-0">
            <Image
              src="/images/ceo.jpg"
              alt="Jennifer Jenni Montero, CEO of AAUCo"
              width={500}
              height={500}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEO;
