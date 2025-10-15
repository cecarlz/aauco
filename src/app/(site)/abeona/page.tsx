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
              WHERE PURPOSEFUL JOURNEYS BEGIN:
            </p>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                SDG'S
              </h2>
              <p className="text-xl text-white md:text-2xl">
                Ventures Launching
              </p>
              <p className="text-xl text-white md:text-2xl">
                through AAUCO Framework
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AAU Framework Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              AAUCo Framework
            </h2>
          </div>

          {/* Three Column Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Card 1: Applied Futures */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Applied Futures
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2 text-blue-600">•</span>
                  Eduverse
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-600">•</span>
                  Wellspring
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-600">•</span>
                  ImpactLab
                </li>
              </ul>
            </div>

            {/* Card 2: Advocacy & Awareness */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Advocacy & Awareness
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2 text-green-600">•</span>
                  Media
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-600">•</span>
                  SDGs
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-600">•</span>
                  Cultural Diplomacy
                </li>
              </ul>
            </div>

            {/* Card 3: University Incubation */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-purple-600"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                University Incubation
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2 text-purple-600">•</span>
                  Academic Innovation
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-purple-600">•</span>
                  Internationalization
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-purple-600">•</span>
                  Leadership
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AbeonaPage;
