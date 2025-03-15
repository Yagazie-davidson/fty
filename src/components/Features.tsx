import DownloadBtn from "./DownloadBtn";
import Info from "./Info";

const Features = () => {
  const infoData = [
    {
      imgSrc: "info-two.svg",
      highlight: "Health Buddy",
      heading: "Need to",
      colouredText: "talk?",
      text: "Connect, Pay and Schedule Health Buddy calls. Ditch long queues and waiting time. Enjoy safe and private conversations with trusted guides about your mental health, reproductive health, diet, fitness, and wellness without breaking the bank.",
      link: "/features",
    },
    {
      imgSrc: "info-one.svg",
      highlight: "Create My Blend",
      heading: "Customize your",
      colouredText: "health journey",
      text: "Mix up your wellness routine with our customizable blend feature! Create a health blend to fit your unique needs, whether it’s allergies, fitness goals, or your budget. The power is in your hands to craft the perfect blend that suits you best after all, what is good health without right diet?",
      link: "/features",
    },
    {
      imgSrc: "info-three.svg",
      highlight: "H-Commerce",
      heading: "“Easy Health”",
      colouredText: "anywhere, any time!",
      text: "Get connected with preventive healthcare and wellness facilities within your locality from the comfort of your device. Shop from a wide selection of certified fitness and wellness products from our specialty store. Enjoy convenient delivery straight to your door!",
      link: "/features",
    },
    {
      imgSrc: "info-five.svg",
      highlight: "Fruit Saved",
      heading: "That dying fruits need",
      colouredText: "a hero",
      text: "Be the Hero Frootifier: rescue wasted fruits with every purchase! Your actions matter – make meaningful impact each time you buy a product. Become an active participant in the mission to combat fruit waste and ensure sustainability with every transaction!",
      link: "/features",
    },
  ];

  return (
    <div className="px-10 py-14 md:px-28 md:pt-28 pb-10 2xl:px-48 2xl:py-48">
      <div className="flex flex-col items-center">
        <img
          src="star.svg"
          alt="Star"
          className="h-12 w-12 2xl:h-20 2xl:w-20"
        />
        <h1 className="hero-font hero-text text-primaryGreen text-center my-4">
          Built for the Future.
        </h1>
        <h1 className="hero-font hero-text text-primaryGreen text-center mb-4">
          Built for YOU
        </h1>
        <p className="max-w-xl text-center mb-4 2xl:mb-8">
          Transform your health and wellness experience into wealth. Turn your
          health goals into your lifestyle and smash them without stress
          <span className="block">Join the BOLD</span>
        </p>
        <DownloadBtn
          showSmallScreens={true}
          text="Download Frootify"
          borderRadius="rounded-full"
          link={
            "https://play.google.com/store/apps/details?id=com.frootify.frootifyapp&hl=en_US"
          }
        />
      </div>

      <div className="my-20 2px:my-40">
        {infoData.map((info, index) => (
          <Info
            imgSrc={info.imgSrc}
            highlight={info.highlight}
            heading={info.heading}
            colouredText={info.colouredText}
            text={info.text}
            link={info.link}
            key={index}
            id={index.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
