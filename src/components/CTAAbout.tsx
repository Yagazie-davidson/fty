// import { IoLogoGooglePlaystore, IoLogoApple } from &apos;react-icons/io5&apos;
import { IoLogoAndroid } from "react-icons/io";

const CTAAbout = () => {
  return (
    <div
      className="px-10 py-4 md:px-28 md:py-6 2xl:px-48 2xl:py-8"
      id="cta-about"
    >
      <div className="bg-gradient-to-r from-lightGreen to-primaryGreen md:bg-[url('../../public/mask-group.png')] bg-no-repeat bg-cover py-12 px-8 text-center flex flex-col md:flex-row rounded-3xl md:rounded-[70px] cta-about">
        <div className="flex flex-col md:flex-row items-center md:justify-center mb-4 md:mb-0">
          <img src="logo-square.svg" alt="logo" className="h-[200px]" />
          <div className="text-white">
            <p className="hero-font font-extrabold text-4xl">Frootify</p>
            <p>Health</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:ml-auto space-y-5 md:space-y-0 md:space-x-3 md:px-12">
          {/* <button className="bg-white px-6 py-4 2xl:px-10 2xl:py-6 flex items-center justify-center md:justify-start rounded-xl 2xl:rounded-3xl">
                        <IoLogoGooglePlaystore className="h-6 w-6" />
                        <p className="font-semibold">Download on Google Play</p>
                    </button>
                    <button className="bg-white px-6 py-4 2xl:px-10 2xl:py-6 flex items-center justify-center md:justify-start rounded-xl 2xl:rounded-3xl">
                        <IoLogoApple className="h-6 w-6" />
                        <p className="font-semibold">Download on Apple Store</p>
                    </button> */}
          <a
            href="https://play.google.com/store/apps/details?id=com.frootify.frootifyapp&hl=en_US"
            className="bg-white px-6 py-4 2xl:px-10 2xl:py-6 flex md:flex-row flex-col items-center justify-center md:justify-center rounded-xl 2xl:rounded-3xl hover:cursor-pointer"
          >
            <IoLogoAndroid className="h-6 w-6 mr-1" />
            <p className="font-semibold">Download the App</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTAAbout;
