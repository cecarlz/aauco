import React from "react";
import { Icon } from "@iconify/react";

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
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1
              className="font-bold text-white mb-4"
              style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}
            >
              UNLIMITED SERVICE
            </h1>

            <p className="text-xl text-white mb-8 md:text-2xl lg:text-3xl font-light tracking-wide">
              INCUBATION OFFERINGS
            </p>

            <p className="text-lg md:text-xl text-white font-light">
              Incubation without borders. AAUCo supports ventures in health,
              <br /> sports, SDGs, academics, and global mobility.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Layout Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Health & Wellness", icon: "tabler:heart" },
              { title: "Sports & Movement", icon: "tabler:run" },
              { title: "Sustainability & SDGs", icon: "tabler:leaf" },
              { title: "Academic Innovation", icon: "tabler:school" },
              { title: "Internationalization", icon: "tabler:world" },
              { title: "Legacy & Leadership", icon: "tabler:crown" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-neutral-50 border-2 border-neutral-200 rounded-lg p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-neutral-100">
                    <Icon
                      icon={item.icon}
                      className="text-neutral-600 text-3xl"
                    />
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UnlimitedServicesPage;
