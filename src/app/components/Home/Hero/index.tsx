const Hero = () => {
  return (
    <section
      id="home-section"
      className="bg-slate-gray relative flex items-center justify-center"
      style={{
        backgroundImage: "url(/images/banner/banner.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "700px",
      }}
    >
      <div className="text-center px-4">
        <h1
          className="text-white font-semibold leading-tight capitalize break-words"
          style={{
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
          }}
        >
          <span
            className="block text-6xl md:text-9xl font-extrabold"
            style={{ letterSpacing: "0.3em" }}
          >
            AAUCo
          </span>
          <span
            className="block text-3xl md:text-5xl font-bold mt-2"
            style={{ letterSpacing: "0.2em" }}
          >
            GLOBAL UNIVERSITY INCUBATOR
          </span>
        </h1>
        <p
          className="text-white mt-7 text-xl md:text-2xl font-medium"
          style={{ letterSpacing: "0.3em" }}
        >
          WHERE LEGACY BEGINS AND FUTURES ARE INCUBATED
        </p>
      </div>
    </section>
  );
};

export default Hero;
