import React from "react";

const QuantumGuild = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">
            The Quantum Guild
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-yellow-700 mb-6">
            A Constellation of Trust, Mastery, and Shared Purpose
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Content stacked in rows */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Card 1: Circle of Brilliance */}
            <div className="group bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:translate-x-2">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  The Quantum Guild is a circle of brilliance formed through
                  trust, shaped by experience, and united by a shared commitment
                  to AAUCo's mission. These individuals are more than experts.
                  They are companions in purpose, each holding a meaningful
                  place in my journey and in the evolution of AAUCo.
                </p>
              </div>
            </div>

            {/* Card 2: Guiding Wisdom */}
            <div className="group bg-gradient-to-br from-green-50 to-white border-l-4 border-green-500 shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:translate-x-2">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  Their wisdom helped shape our earliest steps. Their presence
                  continues to guide our path. From foundational strategy to
                  global expansion, they bring insight, clarity, and care to
                  every initiative we launch.
                </p>
              </div>
            </div>

            {/* Card 3: Distinct Voices */}
            <div className="group bg-gradient-to-br from-purple-50 to-white border-l-4 border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:translate-x-2">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  Each member of the guild brings a distinct voice, a lived
                  story, and a legacy of contribution. They are resource
                  leaders, mentors, and quiet architects of the future ready to
                  be called upon when the next chapter begins.
                </p>
              </div>
            </div>

            {/* Card 4: Quantum Collective */}
            <div className="group bg-gradient-to-br from-yellow-50 to-white border-l-4 border-yellow-500 shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:translate-x-2">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  The Quantum Guild belongs to the Quantum Collective a space
                  where ideas are nurtured, collaborations are born, and global
                  movements take root. It is where I return when the vision
                  expands and the world asks for something new.
                </p>
              </div>
            </div>

            {/* Card 5: Living Constellation */}
            <div className="group bg-gradient-to-br from-orange-50 to-white border-l-4 border-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:translate-x-2">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  5
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  This is a living constellation. Every name here carries a
                  story. Every story carries light.
                </p>
              </div>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/images/about/quantum-guild.jpg"
              alt="Quantum Guild"
              className="rounded-2xl shadow-xl object-cover w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumGuild;
