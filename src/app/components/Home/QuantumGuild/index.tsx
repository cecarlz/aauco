import React from "react";

const QuantumGuild = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">
            The Quantum Guild
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-yellow-700 mb-6">
            A Constellation of Trust, Mastery, and Shared Purpose
          </h3>
        </div>

        {/* Cards Row */}
        <div className="flex flex-row gap-8 overflow-x-auto pb-4">
          {/* Card 1 */}
          <div className="flex flex-col lg:flex-col items-center bg-white rounded-xl border border-gray-300 shadow-md overflow-hidden min-w-[340px] max-w-xs">
            <div className="flex-1 p-6 lg:p-8">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                The Quantum Guild is a circle of brilliance—formed through
                trust, shaped by experience, and united by a shared commitment
                to AAUCo's mission. These individuals are more than experts.
                They are companions in purpose, each holding a meaningful place
                in my journey and in the evolution of AAUCo.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col lg:flex-col items-center bg-white rounded-xl border border-gray-300 shadow-md overflow-hidden min-w-[340px] max-w-xs">
            <div className="flex-1 p-6 lg:p-8">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Their wisdom helped shape our earliest steps. Their presence
                continues to guide our path. From foundational strategy to
                global expansion, they bring insight, clarity, and care to every
                initiative we launch.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col lg:flex-col items-center bg-white rounded-xl border border-gray-300 shadow-md overflow-hidden min-w-[340px] max-w-xs">
            <div className="flex-1 p-6 lg:p-8">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Each member of the guild brings a distinct voice, a lived story,
                and a legacy of contribution. They are resource leaders,
                mentors, and quiet architects of the future—ready to be called
                upon when the next chapter begins.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col lg:flex-col items-center bg-white rounded-xl border border-gray-300 shadow-md overflow-hidden min-w-[340px] max-w-xs">
            <div className="flex-1 p-6 lg:p-8">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                The Quantum Guild belongs to the Quantum Collective—a space
                where ideas are nurtured, collaborations are born, and global
                movements take root. It is where I return when the vision
                expands and the world asks for something new.
              </p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="flex flex-col lg:flex-col items-center bg-white rounded-xl border border-gray-300 shadow-md overflow-hidden min-w-[340px] max-w-xs">
            <div className="flex-1 p-6 lg:p-8">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                This is a living constellation. Every name here carries a story.
                Every story carries light.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumGuild;
