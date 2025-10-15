import React from "react";

const AdeonaPage = () => {
  return (
    <>
      {/* Hero Banner Section */}
      <section className="relative h-[700px] flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/adeona/bg.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-bold text-white mb-4">ADEONA</h1>
            <p className="text-xl text-white mb-8 md:text-2xl lg:text-3xl font-light tracking-wide">
              SOCIAL MEDIA & LEGACY BRANDING
            </p>
            <p className="text-lg text-white mb-6 md:text-xl font-light">
              Your story deserves resonance. Optimize your institutional
              presence with curated captions, hashtag vaults, and milestone
              features.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl mb-4">
              Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unlock tools to amplify your brand and legacy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Card 1: Caption Library */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Caption Library
              </h3>
              <p className="text-gray-600 text-center">
                Curated captions for every occasion and campaign.
              </p>
            </div>
            {/* Card 2: Engagement Highlights */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                {/* Changed icon to a check-circle for reliability */}
                <svg
                  className="w-7 h-7 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2l4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Engagement Highlights
              </h3>
              <p className="text-gray-600 text-center">
                Showcase your top-performing posts and milestones.
              </p>
            </div>
            {/* Card 3: Partner Spotlights */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 10c-4.418 0-8-1.79-8-4V7c0-2.21 3.582-4 8-4s8 1.79 8 4v7c0 2.21-3.582 4-8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Partner Spotlights
              </h3>
              <p className="text-gray-600 text-center">
                Highlight collaborations and strategic partnerships.
              </p>
            </div>
            {/* Card 4: Request a Feature */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-7 h-7 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Request a Feature
              </h3>
              <p className="text-gray-600 text-center">
                Suggest new tools or enhancements for your brand vault.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdeonaPage;
