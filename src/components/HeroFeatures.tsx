import Navbar from "./Navbar";

const HeroFeatures = () => {
  return (
    <div className="bg-primaryGreen relative" id="hero-features">
      <Navbar />
      <div className="md:h-[140vh] 2xl:h-screen u-shaped-features flex flex-col items-center text-white px-10 pt-[80px] pb-4 md:px-28 md:pt-[200px] md:pb-6 2xl:px-48">
        <h1 className="hero-font hero-text max-w-4xl 2xl:max-w-7xl text-center mt-8 mb-4 2xl:my-8">
          Explore <span className="text-[#FFC823]">Frootify </span>
          mobile app features
        </h1>
        <p className="max-w-lg 2xl:max-w-3xl text-center">
          Explore some of Frootify&apos;s commonly used features. Dive in below
        </p>

        <img
          src="features.svg"
          alt="Frootify's features"
          className="hidden md:block absolute z-20 bottom-0"
        />
        <img
          src="features-mobile.svg"
          alt="Frootify's features"
          className="md:hidden my-8"
        />
      </div>
    </div>
  );
};

export default HeroFeatures;
