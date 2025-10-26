import React from "react";

const AbeonaPage = () => {
  return (
    <>
      {/* Hero Banner Section */}
      <section className="relative h-[700px] flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/abeona/bg.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 "></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-bold text-white mb-6">ABEONA</h1>
            <p className="text-xl text-white mb-8 md:text-2xl lg:text-3xl font-light tracking-wide">
              Your Gateway to Purposeful Global Movement
            </p>
          </div>
        </div>
      </section>

      {/* About Abeona Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-6 flex flex-col md:flex-row items-center justify-center text-left">
            <div className="flex-shrink-0 flex justify-center items-center mr-0 md:mr-8 mb-6 md:mb-0">
              <img
                src="/images/about/abeona.svg"
                alt="Abeona Icon"
                className="w-75 h-75"
                draggable="false"
              />
            </div>
            <div className="flex-1">
              <p>
                Abeona is AAUCo's dedicated pathway for ventures ready to expand
                with clarity, care, and global relevance. Inspired by the
                goddess of travel and new beginnings, Abeona welcomes startups,
                clients, and partners into a framework designed to incubate
                innovation, elevate advocacy, and activate futures.
              </p>{" "}
              <br />
              <p className="font-semibold text-xl text-black">
                Whether you're launching, scaling, or collaborating, Abeona
                offers a space where ideas move with meaning—and where every
                journey is guided by purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black md:text-5xl mb-4">
              Framework for Engagement
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Three pillars guiding ventures toward meaningful global impact
            </p>
          </div>

          {/* Three Column Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
            {/* Card 1: Applied Futures */}
            <div className="bg-white border-2 border-blue-200 rounded-xl p-8 hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Applied Futures
              </h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold text-lg text-blue-700 mb-1">
                    Eduverse
                  </p>
                  <p className="text-sm">Immersive learning ecosystems</p>
                </div>
                <div>
                  <p className="font-semibold text-lg text-blue-700 mb-1">
                    Wallspring
                  </p>
                  <p className="text-sm">
                    Community resilience and design labs
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-lg text-blue-700 mb-1">
                    Impact Lab
                  </p>
                  <p className="text-sm">
                    Venture prototyping and systems building
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Advocacy & Awareness */}
            <div className="bg-white border-2 border-green-200 rounded-xl p-8 hover:shadow-2xl hover:border-green-400 hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Advocacy & Awareness
              </h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold text-lg text-green-700 mb-1">
                    Media
                  </p>
                  <p className="text-sm">
                    Strategic storytelling and campaigns
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-lg text-green-700 mb-1">
                    Sustainable Development Goals
                  </p>
                  <p className="text-sm">Aligned action and reporting</p>
                </div>
                <div>
                  <p className="font-semibold text-lg text-green-700 mb-1">
                    Cultural Diplomacy
                  </p>
                  <p className="text-sm">
                    Cross-border dialogue and engagement
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: University Incubation */}
            <div className="bg-white border-2 border-purple-200 rounded-xl p-8 hover:shadow-2xl hover:border-purple-400 hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                University Incubation
              </h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold text-lg text-purple-700 mb-1">
                    Academic Innovation
                  </p>
                  <p className="text-sm">Future-ready curriculum design</p>
                </div>
                <div>
                  <p className="font-semibold text-lg text-purple-700 mb-1">
                    Internationalization
                  </p>
                  <p className="text-sm">Global mobility and partnerships</p>
                </div>
                <div>
                  <p className="font-semibold text-lg text-purple-700 mb-1">
                    Circular Economic Leadership
                  </p>
                  <p className="text-sm">
                    Regenerative models and policy shaping
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AbeonaPage;
