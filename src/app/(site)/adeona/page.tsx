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
              The Goddess of Abode and Keeper of Presence
            </p>
            <p className="text-lg text-white mb-6 md:text-xl font-light">
              Where brands stop wandering and start resonating. Your story
              deserves a place. Your brand deserves a voice.
            </p>
          </div>
        </div>
      </section>

      {/* About Adeona Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-6">
            <p>
              Welcome to Adeona, the goddess of abode and the keeper of
              presence. In AAUCo's universe, she is the one who holds space for
              your story to settle, shine, and stretch across time. This is
              where brands stop wandering and start resonating.
            </p>
            <p>
              Adeona is not just a service. She's a vibe. A digital hearth where
              your institutional identity is curated, celebrated, and amplified.
              Whether you're a university, a movement, or a visionary founder,
              Adeona helps you build a home for your legacy—one caption, one
              milestone, one scroll-stopping moment at a time.
            </p>
            <p>
              We craft social media ecosystems that speak your truth. We build
              hashtag vaults that echo your values. We design milestone features
              that make your journey visible, vibrant, and unforgettable.
            </p>
            <p className="font-semibold text-xl text-black">
              This is where your brand stops being a logo and starts becoming a
              landmark.
            </p>
            <p>
              So if you're ready to settle into your story, to build a presence
              that feels like home and moves like magic—Adeona is waiting.
            </p>
            <p className="text-center text-xl font-semibold text-yellow-700 mt-8">
              Your story deserves a place. Your brand deserves a voice. Adeona
              is both.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-black md:text-5xl mb-4">
              Features
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Unlock tools to amplify your brand and legacy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 max-w-7xl mx-auto">
            {/* Card 1: Caption Library */}
            <div className="bg-white border-2 border-blue-200 rounded-xl p-8 flex flex-col items-center hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-5 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Caption Library
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Curated captions for every occasion and campaign.
              </p>
            </div>
            {/* Card 2: Engagement Highlights */}
            <div className="bg-white border-2 border-green-200 rounded-xl p-8 flex flex-col items-center hover:shadow-2xl hover:border-green-400 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-5 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
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
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Engagement Highlights
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Showcase your top-performing posts and milestones.
              </p>
            </div>
            {/* Card 3: Partner Spotlights */}
            <div className="bg-white border-2 border-yellow-200 rounded-xl p-8 flex flex-col items-center hover:shadow-2xl hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-5 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Partner Spotlights
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Highlight collaborations and strategic partnerships.
              </p>
            </div>
            {/* Card 4: Request a Feature */}
            <div className="bg-white border-2 border-purple-200 rounded-xl p-8 flex flex-col items-center hover:shadow-2xl hover:border-purple-400 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-5 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Request a Feature
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
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
