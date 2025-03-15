// import { IoLogoGooglePlaystore, IoLogoApple } from &apos;react-icons/io5&apos;
import { IoLogoAndroid } from "react-icons/io";

const CTA = () => {
  return (
    <div className="py-12 px-8 text-center" id="cta">
      <p className="hero-font font-extrabold text-3xl text-white md:text-4xl 2xl:text-6xl">
        Take the BOLD step
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:justify-center md:space-x-5 md:space-y-0 my-4">
        {/* <button className="bg-white px-6 py-4 2xl:px-10 2xl:py-6 flex items-center justify-center md:justify-start rounded-xl 2xl:rounded-3xl">
                    <IoLogoGooglePlaystore className="h-6 w-6" />
                    <p className="ml-1">Download on Google Play</p>
                </button>
                <button className="bg-white px-6 py-4 2xl:px-10 2xl:py-6 flex items-center justify-center md:justify-start rounded-xl 2xl:rounded-3xl">
                    <IoLogoApple className="h-6 w-6" />
                    <p className="ml-1">Download on Apple Store</p>
                </button> */}
        <a
          href="https://play.google.com/store/apps/details?id=com.frootify.frootifyapp&hl=en_US"
          className="bg-white px-6 py-4 2xl:px-10 2xl:py-6 flex items-center justify-center md:justify-start rounded-xl 2xl:rounded-3xl"
        >
          <IoLogoAndroid className="h-6 w-6" />
          <p className="ml-1">Download the App</p>
        </a>
      </div>
    </div>
  );
};

export default CTA;
