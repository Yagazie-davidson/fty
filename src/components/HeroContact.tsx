import Navbar from "./Navbar";

const HeroContact = () => {
  return (
    <div className="relative" id="hero-contact">
      <Navbar />
      <div className="md:h-[140vh] 2xl:h-screen u-shaped-contact text-center relative flex flex-col md:flex-row md:justify-between items-center bg-[#F0F8EB] px-10 pt-[80px] pb-4 md:px-28 md:pt-[200px] md:pb-6 2xl:px-48">
        <div className="text-center md:text-start max-w-lg 2xl:max-w-2xl mt-8 md:mt-0">
          <h1 className="hero-font hero-text mt-4">
            Have any <span className="text-[#6ABC35]">Question?</span>
          </h1>
          <p className="max-w-md 2xl:max-w-3xl text-center md:text-start my-4">
            We&apos;d love to hear from you! Feel free to reach out to us using
            the contact details provided below.
          </p>
        </div>
        <div>
          <img
            src="hero-contact.png"
            alt="Customer service"
            className="2xl:h-[700px] z-20 md:hidden my-8"
          />
          <img
            src="hero-contact.png"
            alt="Customer service"
            className="2xl:h-[900px] z-20 h-[700px] hidden md:block absolute bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContact;
