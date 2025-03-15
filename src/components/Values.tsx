const Values = () => {
  const valueData = [
    {
      imgSrc: "healthy.svg",
      title: "We are Healthy",
      text: "At the heart of everything we do is health. We are 100% committed to providing innovative solutions that promote holistic well-being, from physical fitness to mental health and beyond. Our goal is to help you live your healthiest, happiest life without stress and breaking the bank. How happy? That’s up to you!",
    },
    {
      imgSrc: "fun.svg",
      title: "We are Fun",
      text: `Wellness should not only be accessible, it should be enjoyable too. That’s why we drip with awemazing sense of fun and excitement at what we do. From engaging content to interactive experiences, we aim to make healthcare an enjoyable and rewarding part of your lifestyle.`,
    },
    {
      imgSrc: "community.svg",
      title: "We are Community",
      text: "We foster deep sense of community where individuals come together under a common theme to support and inspire each other on their wellness journey. Whether through our digital platforms, physical events, or health initiatives, we create a supportive environment where everyone feels welcomed and active.",
    },
    {
      imgSrc: "urban.svg",
      title: "We are Refined",
      text: "At Frootify, our refined approach ensures that every wellness solution we offer is crafted with meticulous attention to detail, blending innovative technology with holistic health insights. This commitment to refinement drives us to innovate continually, delivering superior preventive healthcare that empowers you to live your best life.",
    },
    {
      imgSrc: "trendy.svg",
      title: "We are Trendy",
      text: "Stay ahead of the curve with Frootify’s cutting-edge technology and trendsetting approach to wellness. We’re constantly on the lookout for the latest innovations and breakthroughs in preventive healthcare, ensuring that you have access to the most advanced solutions to support your wellness goals.",
    },
  ];

  return (
    <div className="px-10 py-4 md:px-28 md:py-8 2xl:px-48 2xl:py-8 text-center">
      <div className="bg-[#6ABC3529] opacity-85 px-10 py-6 2xl:px-20 2xl:py-12 rounded-full mx-auto  my-8 inline-block">
        <p className="text-[#6ABC35] font-semibold text-xl 2xl:text-3xl">
          Our Values
        </p>
      </div>
      <div>
        <div className="hidden md:grid grid-cols-3 gap-8">
          {valueData.map((value, index) => (
            <div key={index}>
              <div className="border flex justify-center items-center h-[200px] md:h-[300px] 2xl:h-[500px] rounded-3xl md:rounded-[60px] p-8">
                <img src={value.imgSrc} alt="healthy" />
              </div>
              <div className="py-4 text-start">
                <h1 className="font-semibold text-3xl my-4 2xl:text-5xl">
                  {value.title}
                </h1>
                <p className="2xl:text-xl">{value.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden flex horizontal-slide">
          {valueData.map((value, index) => (
            <div key={index} className="w-[300px] flex-shrink-0">
              <div className="border flex justify-center items-center h-[200px] md:h-[300px] 2xl:h-[500px] rounded-3xl md:rounded-[60px] p-8">
                <img src={value.imgSrc} alt="healthy" />
              </div>
              <div className="py-4 text-start">
                <h1 className="font-semibold text-3xl my-4 2xl:text-5xl">
                  {value.title}
                </h1>
                <p className="2xl:text-xl">{value.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
