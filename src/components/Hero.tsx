// import {
//     IoLogoGooglePlaystore,
//     IoLogoApple,
// } from &apos;react-icons/io5&apos;

import { IoLogoAndroid } from "react-icons/io";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-primaryGreen relative" id="hero">
      <Navbar />
      <div className="md:h-[140vh] 2xl:h-screen flex flex-col md:flex-row md:justify-between items-center text-white px-10 pt-[80px] md:pt-[70px] pb-4 md:px-28 md:pb-6 2xl:px-48">
        <div className="text-center md:text-start max-w-lg 2xl:max-w-2xl mt-8 md:mt-0">
          <h1 className="hero-font hero-text mb-6 2xl:mb-10">
            Healthcare for the <span className="text-primaryOrange"> BOLD</span>
          </h1>
          <p className="mb-6 2xl-mb-10">
            Access healthcare services, create nutritious blends, connect health
            buddies, and manage your most valuable asset - your health, with a
            personalized healthcare solution that fits your lifestyle. It&apos;s
            a BOLD new revolution!
          </p>
          <div className="flex flex-col md:flex-row space-y-1 md:space-x-5 md:space-y-0">
            <a
              href="https://play.google.com/store/apps/details?id=com.frootify.frootifyapp&hl=en_US"
              className="download-btn"
            >
              <IoLogoAndroid className="h-6 w-6" />
              <p className="ml-1">Download the App</p>
            </a>
            {/* <button className="download-btn">
                            <IoLogoGooglePlaystore className="h-6 w-6" />
                            <p className="ml-1">Get on Google Play</p>
                        </button> */}
            {/* <button className="download-btn">
                            <IoLogoApple className="h-6 w-6" />
                            <p className="ml-1">Get on Apple Store</p>
                        </button> */}
          </div>
        </div>
        <div>
          <img
            src="hero-img.svg"
            alt="Man opening frootify app on his phone"
            className="2xl:h-[700px] 2xl:w-[700px] my-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
