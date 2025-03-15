import Navbar from "./Navbar";

const HeroAbout = () => {
  return (
    <div className=" relative" id="hero-about">
      <Navbar />
      <div className="md:h-[140vh] 2xl:h-screen u-shaped text-center flex flex-col items-center bg-primaryGreen bg-cover text-white px-10 pt-[80px] pb-4 md:px-28 md:pt-[200px] md:pb-6 2xl:px-48">
        <h1 className="hero-font hero-text mt-12 md:mt-4 2xl:mt-24">
          Africa&apos;s largest consumer{" "}
          <span className="text-[#FFC823]">Preventive </span>
          healthcare platform
        </h1>
        <img
          src="globe.png"
          alt="Globe"
          className="absolute z-20 bottom-0 2xl:h-[1080] hidden md:block"
        />
        <img src="globe-mobile.png" alt="Globe" className="md:hidden my-8" />
      </div>
    </div>
  );
};

export default HeroAbout;
