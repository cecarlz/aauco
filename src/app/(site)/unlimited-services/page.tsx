import React from "react";

const UnlimitedServicesPage = () => {
  return (
    <>
      {/* Hero/Intro Section */}
      <section className="relative h-[700px] flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/services/bg.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1
              className="font-bold text-white mb-6"
              style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}
            >
              UNLIMITED SERVICES
            </h1>

            <p className="text-2xl text-white mb-8 md:text-3xl lg:text-4xl font-light tracking-wide">
              Where Your Mission Meets Movement
            </p>

            <p className="text-lg md:text-xl text-white font-light leading-relaxed">
              At AAUCo, "unlimited" means exactly that. We offer a vibrant mix
              of services designed to support institutions, startups, and
              movements that want to grow with purpose, move across borders, and
              live their brand out loud.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-700 text-base md:text-lg leading-relaxed space-y-4">
            <p className="text-xl md:text-2xl font-semibold text-black">
              Whether you're building a university, launching a venture, or
              leading a cultural wave—we've got you.
            </p>
            <p>
              Here are our top three service constellations, each packed with
              possibilities:
            </p>
          </div>
        </div>
      </section>

      {/* Service Constellations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service 1: Global Identity & Legacy Design */}
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 border-2 border-blue-200 rounded-2xl p-6 lg:p-8 hover:shadow-2xl hover:border-blue-400 transition-all duration-300 flex flex-col">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 text-center">
                Global Identity & Legacy Design
              </h3>
              <p className="text-base lg:text-lg text-blue-700 font-semibold mb-4 text-center">
                Build a brand that travels, teaches, and transforms.
              </p>
              <ul className="space-y-2 text-sm lg:text-base text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Institutional branding & milestone mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Cultural fluency & language innovation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Social media ecosystems & hashtag vaults</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Legacy systems & storytelling architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Sports diplomacy & wellness branding</span>
                </li>
              </ul>
            </div>

            {/* Service 2: Academic Innovation & Internationalization */}
            <div className="bg-gradient-to-br from-purple-50 via-white to-purple-50 border-2 border-purple-200 rounded-2xl p-6 lg:p-8 hover:shadow-2xl hover:border-purple-400 transition-all duration-300 flex flex-col">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 text-center">
                Academic Innovation & Internationalization
              </h3>
              <p className="text-base lg:text-lg text-purple-700 font-semibold mb-4 text-center">
                Design futures that educate, elevate, and expand.
              </p>
              <ul className="space-y-2 text-sm lg:text-base text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">•</span>
                  <span>Curriculum design & circular leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">•</span>
                  <span>University incubation & applied futures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">•</span>
                  <span>Eduverse & immersive learning labs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">•</span>
                  <span>Global mobility & partnership strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">•</span>
                  <span>Language fluency & cross-border education</span>
                </li>
              </ul>
            </div>

            {/* Service 3: Advocacy, Impact & Venture Activation */}
            <div className="bg-gradient-to-br from-yellow-50 via-white to-orange-50 border-2 border-yellow-200 rounded-2xl p-6 lg:p-8 hover:shadow-2xl hover:border-yellow-400 transition-all duration-300 flex flex-col">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 text-center">
                Advocacy, Impact & Venture Activation
              </h3>
              <p className="text-base lg:text-lg text-orange-700 font-semibold mb-4 text-center">
                Launch movements that matter and ventures that last.
              </p>
              <ul className="space-y-2 text-sm lg:text-base text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2 mt-1">•</span>
                  <span>Sustainable development goals & reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2 mt-1">•</span>
                  <span>Cultural diplomacy & media campaigns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2 mt-1">•</span>
                  <span>Impact labs & startup prototyping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2 mt-1">•</span>
                  <span>Community resilience & wellness design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2 mt-1">•</span>
                  <span>Sports, arts & youth engagement platforms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              This is AAUCo's Unlimited Services
            </h2>
            <div className="text-xl md:text-2xl text-gray-700 space-y-2">
              <p>Where your idea becomes a movement.</p>
              <p>Where your brand becomes a legacy.</p>
              <p className="text-yellow-700 font-semibold">
                Where your journey becomes a global rhythm.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UnlimitedServicesPage;
