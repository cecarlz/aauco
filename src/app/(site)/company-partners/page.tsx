import React from "react";

const CompanyPartnersPage = () => {
  return (
    <>
      {/* Hero/Intro Section */}
      <section className="relative h-[700px] flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('images/company/bg.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1
              className="font-bold text-white mb-6"
              style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}
            >
              COMPANY PARTNERS
            </h1>

            <p className="text-lg text-white mb-8 md:text-3xl lg:text-4xl font-light tracking-wide">
              OUR GLOBAL NETWORK
            </p>

            <p className="text-xs  text-white mb-8 md:text-3xl lg:text-4xl font-light tracking-wide">
              AAUCo is built on trust, transformation, <br /> and shared
              mission.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              A Living Tapestry of Global Collaboration
            </h2>
            <p>
              The Company Partners Network is AAUCo’s constellation of
              co-creators—more than 300 strong and rising toward 500. This is
              not a directory. It is a living tapestry of institutions,
              industries, and individuals who move with purpose and build with
              heart.
            </p>
            <p>
              From universities and academic incubators to venture capitalists,
              urban planners, and creative economy leaders, our partners span
              continents and sectors. They are the ones shaping cities,
              designing futures, funding movements, and crafting cultural
              frameworks that matter.
            </p>
            <p>
              Each partner is a thread in our global weave. Together, they
              activate systems that serve people, platforms, and the planet.
              They bring rhythm to our mission and resonance to our message.
            </p>
            <p>
              We optimize every connection. We amplify every story. We celebrate
              every milestone.
            </p>
            <p>
              This network is designed for movement. It is built for continuity.
              It is alive with possibility.
            </p>
            <p>
              Whether you are launching a startup, scaling an institution,
              designing a city, or leading a cultural wave—AAUCo’s partners are
              ready to walk with you.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              This is the Company Partners Network
            </h2>
            <div className="text-xl md:text-2xl space-y-3 text-gray-700">
              <p>Where legacy finds its collaborators.</p>
              <p>Where every connection is a catalyst.</p>
              <p className="text-blue-600 font-semibold">
                Where the future is built together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyPartnersPage;
