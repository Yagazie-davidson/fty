import BtnFloat from "@app/components/BtnFloat";
import CTAAbout from "@app/components/CTAAbout";
import FAQs from "@app/components/FAQs";
import FeaturesInfo from "@app/components/FeaturesInfo";
import HeroFeatures from "@app/components/HeroFeatures";

const Features = () => {
  const infoData = [
    {
      id: "bmi",
      images: [
        {
          text: "Fill in your Bio Data",
          img: "bio-data-1.svg",
          imgMobile: "bio-data-1-mobile.svg",
        },
        {
          text: "Insert your Height and Weight",
          img: "bio-data-2.svg",
          imgMobile: "bio-data-2-mobile.svg",
        },
        {
          text: "Frootify gets it just for you",
          img: "bio-data-3.svg",
          imgMobile: "bio-data-3-mobile.svg",
        },
      ],
      heading: "Check your",
      colouredText: "BMI Easily",
      headingCtd: "",
      text: "In just two easy steps, you get to learn more about what your body is saying about your health through your Body Mass Index (BMI)",
      btnText: "Try Now",
      link: "/features/#cta-about",
    },
    {
      id: "buddy",
      images: [
        {
          text: "Select Speak with a Health Buddy",
          img: "health-buddy-1.svg",
          imgMobile: "health-buddy-1-mobile.svg",
        },
        {
          text: "Choose a Topic",
          img: "health-buddy-2.svg",
          imgMobile: "health-buddy-2-mobile.svg",
        },
        {
          text: "Describe your Situation",
          img: "health-buddy-3.svg",
          imgMobile: "health-buddy-3-mobile.svg",
        },
        {
          text: "Choose what time works best for you",
          img: "health-buddy-4.svg",
          imgMobile: "health-buddy-4-mobile.svg",
        },
        {
          text: "Pay Easily with your card",
          img: "health-buddy-5.svg",
          imgMobile: "health-buddy-5-mobile.svg",
        },
        {
          text: "Wait for your Schedule",
          img: "health-buddy-6.svg",
          imgMobile: "health-buddy-6-mobile.svg",
        },
        {
          text: "Enjoy your session",
          img: "health-buddy-7.svg",
          imgMobile: "health-buddy-7-mobile.svg",
        },
      ],
      heading: "Speak with a",
      colouredText: "Health Buddy",
      headingCtd: "",
      text: "Say goodbye to waiting in a long queue to speak to a health professional, because with health buddy the solution is right in the palm of your hands. Test out this straightforward technique and speak to a health professional in no time.",
      btnText: "Speak with a Healthbuddy",
      link: "/features/#cta-about",
    },
    {
      id: "blongo",
      images: [
        {
          text: "Select a Feature",
          img: "blongo-1.png",
          imgMobile: "blongo-1-mobile.svg",
        },
        {
          text: "Select a product",
          img: "blongo-2.png",
          imgMobile: "blongo-2-mobile.png",
        },
        {
          text: "See how much you&apos;ll be saving",
          img: "blongo-3.png",
          imgMobile: "blongo-3-mobile.png",
        },
      ],
      heading: "Blend on the go -",
      colouredText: "Blongo",
      headingCtd: "",
      text: "Always on the go? Then Blongo blends- on- the- go is for you. Have an available health blend of your choice delivered to your doorstep. It’s fast and convenient for the busy bee in you.",
      btnText: "Order Now",
      link: "/features/#cta-about",
    },
  ];

  return (
    <div className="relative">
      <HeroFeatures />
      <BtnFloat />
      <div className="px-10 py-14 md:px-28 md:p-16 2xl:px-48 2xl:py-48">
        <div className="my-20 2px:my-40">
          <FeaturesInfo
            id={infoData[0].id}
            images={infoData[0].images}
            heading={infoData[0].heading}
            colouredText={infoData[0].colouredText}
            headingCtd={infoData[0].headingCtd}
            text={infoData[0].text}
            btnText={infoData[0].btnText}
            link={infoData[0].link}
          />
          <FeaturesInfo
            id={infoData[1].id}
            images={infoData[1].images}
            heading={infoData[1].heading}
            colouredText={infoData[1].colouredText}
            headingCtd={infoData[1].headingCtd}
            text={infoData[1].text}
            btnText={infoData[1].btnText}
            link={infoData[1].link}
          />
          <FeaturesInfo
            id={infoData[2].id}
            images={infoData[2].images}
            heading={infoData[2].heading}
            colouredText={infoData[2].colouredText}
            headingCtd={infoData[2].headingCtd}
            text={infoData[2].text}
            btnText={infoData[2].btnText}
            link={infoData[2].link}
          />
        </div>

        <div className="text-center">
          <div className="bg-[#6ABC3529] opacity-85 px-10 py-6 2xl:px-20 2xl:py-12 rounded-full mx-auto  mb-8 inline-block">
            <p className="text-[#6ABC35] font-semibold text-xl 2xl:text-3xl">
              More features
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src="minor-features.svg" alt="minor features" />
          </div>
        </div>
      </div>

      <FAQs />
      <CTAAbout />
    </div>
  );
};

export default Features;
