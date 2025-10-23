import React from "react";

const CompanyPartnersPage = () => {
  return (
    <>
      {/* Hero/Intro Section */}
      <section className="relative h-[600px] flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('images/company/bg.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-bold text-white mb-4">COMPANY</h1>

            <p className="text-xl text-white mb-8 md:text-2xl lg:text-3xl font-light tracking-wide">
              OUR GLOBAL NETWORK
            </p>

            <p className="text-xl text-white mb-6 md:text-2xl font-light">
              AAUCo is built on trust, transformation, and shared missions.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Logos Carousel Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="flex flex-row justify-center items-center gap-32 mb-10">
              <img
                src="/images/company/connection.svg"
                alt="Connection"
                className="w-32 h-32"
              />
              <img
                src="/images/company/mission.svg"
                alt="Mission"
                className="w-32 h-32"
              />
              <img
                src="/images/company/transformation.svg"
                alt="Transformation"
                className="w-32 h-32"
              />
              <img
                src="/images/company/trust.svg"
                alt="Trust"
                className="w-32 h-32"
              />
              <img
                src="/images/company/synergy.svg"
                alt="Synergy"
                className="w-32 h-32"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyPartnersPage;
