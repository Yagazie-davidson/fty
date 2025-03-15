import BtnFloat from "@app/components/BtnFloat";
import CTAAbout from "@app/components/CTAAbout";
import DownloadBtn from "@app/components/DownloadBtn";
import HeroContact from "@app/components/HeroContact";

const Contact = () => {
  return (
    <div className="relative">
      <HeroContact />
      <BtnFloat />
      <div className="px-10 mt-10 md:px-28 2xl:px-48 bg-white">
        <div className="grid md:grid-cols-2 gap-12 md:justify-between items-center">
          <div className="flex flex-col items-center text-center space-y-2 md:block md:text-start md:space-y-0">
            <div className="bg-[#6ABC3529] opacity-85 px-10 py-6 2xl:px-20 2xl:py-12 rounded-full inline-block">
              <p className="text-[#6ABC35] font-semibold text-xl 2xl:text-3xl">
                For Mobile App Support
              </p>
            </div>
            <div>
              <h1 className="hero-font font-extrabold text-4xl 2xl:text-6xl my-4 2xl:my-8">
                Need Help with the{" "}
                <span className="text-[#6ABC35]">Frootify App?</span>
              </h1>
              <p className="mb-4">
                We are always here to assist you with any challenge you come
                across on our mobile app. Contact us throng our email our dial
                our customer care -{" "}
                <span className="text-primaryOrange">08055471860</span>
              </p>
              <DownloadBtn
                showSmallScreens={true}
                text="Contact email support"
                borderRadius={"rounded-full md:rounded-lg"}
                link={"/contact#questions"}
              />
            </div>
          </div>
          <img src="person.svg" alt="Frootify app" className="2xl:h-[700px]" />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-2 gap-12 justify-between items-center 2xl:mb-40 px-10 py-14  md:px-28 md:py-28 2xl:px-48 2xl:py-48 bg-[#F0F8EB]">
        <img
          src="partnership-health.svg"
          alt="Frootify app"
          className="2xl:h-[700px]"
        />
        <div className="flex flex-col items-center text-center space-y-2 md:block md:text-start md:space-y-0">
          <div className="bg-[#6ABC3529] opacity-85 px-10 py-6 2xl:px-20 2xl:py-12 rounded-full inline-block">
            <p className="text-[#6ABC35] font-semibold text-xl 2xl:text-3xl">
              Partner with Frootify
            </p>
          </div>
          <div>
            <h1 className="hero-font font-extrabold text-4xl 2xl:text-6xl my-4 2xl:my-8">
              Become a <span className="text-[#6ABC35]">Health Buddy</span>
            </h1>
            <p>
              Are you a licensed health care professional looking to earn money
              by becoming an health buddy?
            </p>

            <p className="mb-4">
              Please reach out to our team using the contact details provided
              below. We&apos;re always open to exploring new partnerships and
              opportunities to promote a healthier lifestyle.
            </p>
            <DownloadBtn
              showSmallScreens={true}
              text="Partner with Us"
              borderRadius={"rounded-full md:rounded-lg"}
              link={"https://app.frootify.tech/healthbuddy/register"}
            />
          </div>
        </div>
      </div>
      <div className="hidden md:grid md:grid-cols-2 gap-12 justify-between items-center mb-20 2xl:mb-40 px-10 pb-14 md:px-28 md:pb-28 2xl:px-48 2xl:py-48 bg-[#F0F8EB]">
        <div className="flex flex-col items-center text-center space-y-2 md:block md:text-start md:space-y-0">
          <div className="bg-[#6ABC3529] opacity-85 px-10 py-6 2xl:px-20 2xl:py-12 rounded-full inline-block">
            <p className="text-[#6ABC35] font-semibold text-xl 2xl:text-3xl">
              Partner with Frootify
            </p>
          </div>
          <div>
            <h1 className="hero-font font-extrabold text-4xl 2xl:text-6xl my-4 2xl:my-8">
              Become a <span className="text-[#6ABC35]">Logistics Partner</span>
            </h1>
            <p>
              Do you want to work with Frootify to deliver health care products?
            </p>

            <p className="mb-4">
              Please reach out to our team using the contact details provided
              below. We&apos;re always open to exploring new partnerships and
              opportunities to promote a healthier lifestyle.
            </p>
            <DownloadBtn
              showSmallScreens={true}
              text="Partner with Us"
              borderRadius={"rounded-full md:rounded-lg"}
              link={"https://app.frootify.tech/deliveryagents/register"}
            />
          </div>
        </div>
        <img
          src="partnership-logistics.svg"
          alt="Frootify app"
          className="2xl:h-[700px]"
        />
      </div>

      {/* Mobile */}
      <div className="md:hidden grid md:grid-cols-2 gap-12 justify-between items-center mb-20 2xl:mb-40 px-10 py-14  md:px-28 md:py-28 2xl:px-48 2xl:py-48 bg-[#F0F8EB]">
        <div className="flex flex-col items-center text-center space-y-2 md:block md:text-start md:space-y-0">
          <div className="bg-[#6ABC3529] opacity-85 px-10 py-6 2xl:px-20 2xl:py-12 rounded-full inline-block">
            <p className="text-[#6ABC35] font-semibold text-xl 2xl:text-3xl">
              Partner with Frootify
            </p>
          </div>
          <div>
            <h1 className="hero-font font-extrabold text-4xl 2xl:text-6xl my-4 2xl:my-8">
              Become a <span className="text-[#6ABC35]">Health Buddy</span>
            </h1>
            <p>
              Are you a licensed health care professional looking to earn money
              by becoming an health buddy? Do you want to work with Frootify to
              deliver health care products?
            </p>

            <p className="mb-4">
              Please reach out to our team using the contact details provided
              below. We&apos;re always open to exploring new partnerships and
              opportunities to promote a healthier lifestyle.
            </p>
            <DownloadBtn
              showSmallScreens={true}
              text="Partner with Us"
              borderRadius={"rounded-full md:rounded-lg"}
              link={"/contact#questions"}
            />
          </div>
        </div>
        <img
          src="partnership-health.svg"
          alt="Frootify app"
          className="2xl:h-[700px]"
        />
        <div className="flex flex-col items-center text-center space-y-2 md:block md:text-start md:space-y-0">
          <div className="bg-[#6ABC3529] opacity-85 px-10 py-6 2xl:px-20 2xl:py-12 rounded-full inline-block">
            <p className="text-[#6ABC35] font-semibold text-xl 2xl:text-3xl">
              Partner with Frootify
            </p>
          </div>
          <div>
            <h1 className="hero-font font-extrabold text-4xl 2xl:text-6xl my-4 2xl:my-8">
              Become a <span className="text-[#6ABC35]">Logistics Partner</span>
            </h1>
            <p>
              Are you a licensed health care professional looking to earn money
              by becoming an health buddy?
            </p>

            <p className="mb-4">
              Please reach out to our team using the contact details provided
              below. We&apos;re always open to exploring new partnerships and
              opportunities to promote a healthier lifestyle.
            </p>
            <DownloadBtn
              showSmallScreens={true}
              text="Partner with Us"
              borderRadius={"rounded-full md:rounded-lg"}
              link={"/contact#questions"}
            />
          </div>
        </div>
        <img
          src="partnership-logistics.svg"
          alt="Frootify app"
          className="2xl:h-[700px]"
        />
      </div>

      <div className="flex flex-col items-center bg-white" id="questions">
        <h1 className="hero-font hero-text text-center px-2 my-4 max-w-4xl 2xl:max-w-6xl">
          Have Another Question or Inquiry?
        </h1>
        <p className="max-w-xl text-center mb-4 2xl:mb-8">
          Take your time to fill the form below
        </p>
        <form className="w-[90%] md:w-[70%] text-center mb-12">
          <input
            type="text"
            placeholder="Tell us your name"
            className="px-8 py-4 rounded-full bg-[#F0F8EB] outline-none w-full"
          />
          <input
            type="email"
            placeholder="What Email would you like us to contact you through?"
            className="px-8 py-4 rounded-full bg-[#F0F8EB] outline-none w-full my-4"
          />
          <textarea
            rows={3}
            placeholder="A brief description of the purpose of your enquiry"
            className="px-8 py-4 rounded-3xl bg-[#F0F8EB] outline-none w-full"
          />
          <DownloadBtn
            showSmallScreens={true}
            text="Submit Information"
            borderRadius="rounded-full w-full md:w-auto block ml-auto mt-4"
            link={""}
          />
        </form>
      </div>

      <CTAAbout />
    </div>
  );
};

export default Contact;
