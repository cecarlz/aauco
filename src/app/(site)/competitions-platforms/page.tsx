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
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore the Competition
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Navigate through our competition journey from start to finish
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Competition Timeline", icon: "tabler:calendar-event", color: "blue" },
              { title: "Mechanics & Rubrics", icon: "tabler:clipboard-list", color: "green" },
              { title: "Finalist Gallery", icon: "tabler:photo", color: "purple" },
              { title: "Bangkok Finale", icon: "tabler:trophy", color: "amber" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white border-2 border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-md hover:shadow-2xl hover:border-gray-300 hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Subtle background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-110 transition-transform duration-300">
                    <Icon icon={item.icon} className="text-gray-700 text-4xl" />
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="relative z-10 text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompetitionsPlatformsPage;
