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
            backgroundImage: "url('/company/bg.jpg')",
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl mb-4">
              Our Partners
            </h2>
            {/* Partner Banner Image */}
            <div className="flex justify-center mb-10">
              <img
                src="/company/partners.jpg"
                alt="Partner Institutions Banner"
                className="max-w-full h-auto rounded-lg"
                style={{ maxHeight: 400 }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyPartnersPage;
