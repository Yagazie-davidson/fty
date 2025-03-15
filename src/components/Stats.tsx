const Stats = () => {
  const statData = [
    {
      heading: "700+",
      subheading: "Hours of Telehealth consultations facilitated",
      imageSrc: "call-icon.svg",
    },
    {
      heading: "150,000",
      subheading: "Healthcare products and services  delivered",
      imageSrc: "meditate-icon.svg",
    },
    {
      heading: "10k",
      subheading: "Community of Health Enthusiasts",
      imageSrc: "community-icon.svg",
    },
    {
      heading: "10,000",
      subheading: "Tones of fruits saved by our community members",
      imageSrc: "froots-icon.svg",
    },
  ];

  return (
    <div className="md:h-screen flex flex-col md:flex-row justify-center md:justify-between items-center md:space-y-0 md:space-x-5 bg-white text-white px-10 py-10 md:px-28 md:py-6 2xl:px-48 2xl:py-8">
      {statData.map((stat, index) => (
        <div
          key={index}
          className="bg-[#8FC834] mb-8 md:mb-0 rounded-3xl px-4 md:rounded-[60px] w-[320px] h-[150px] md:h-[320px] md:w-[260px] 2xl:h-[500px] 2xl:w-[510px] flex md:flex-col items-center justify-center bottom-shadow"
        >
          <div className="bg-[#6ABC35] h-[50px] w-[50px] md:w-[100px] md:h-[100px] 2xl:h-[200px] 2xl:w-[200px] rounded-full flex items-center justify-center">
            <img
              src={stat.imageSrc}
              alt="Icon"
              className="h-6 w-6 md:h-[60px] md:w-[60px]"
            />
          </div>
          <div className="ml-4 md:ml-0 md:text-center md:mt-6">
            <h1 className="hero-font font-extrabold text-2xl md:text-5xl 2xl:text-7xl">
              {stat.heading}
            </h1>
            <p className="mx-auto max-w-[250px]">{stat.subheading}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
