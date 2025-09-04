import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const Hero = () => {
  return (
    <section
      id="home-section"
      className="bg-slate-gray relative"
      style={{
        backgroundImage: "url(/images/banner/banner.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for text highlight */}
      <div className="absolute inset-0 bg-black/15 z-0" />
      <div className="container pt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-1 gap-10 items-center">
          <div className="col-span-6 flex flex-col gap-8">
            <h1
              className="text-white lg:text-start text-center font-semibold leading-tight capitalize"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
            >
              student innovation meets indigenous wisdom
            </h1>
            <div className="flex justify-center lg:justify-start">
              <a
                href="/join-movement"
                className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-primary/80 hover:text-white transition"
              >
                Join the movement
              </a>
            </div>
          </div>
          <div className="col-span-6 flex justify-center">
            <Image
              src="/images/banner/mahila.webp"
              alt="nothing"
              width={480}
              height={480}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
