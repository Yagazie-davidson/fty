"use client";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const MoreFeatures = () => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(Array(3).fill(false));

  const toggleIsFeaturesOpen = (index: number) => {
    const updatedIsFeaturesOpen = [...isFeaturesOpen];
    updatedIsFeaturesOpen[index] = !updatedIsFeaturesOpen[index];
    setIsFeaturesOpen(updatedIsFeaturesOpen);
  };

  const featuresData = [
    {
      imgSrc: "finance.svg",
      heading: "Health Financing",
      text: "Discover healthcare financing with our BNPL option for instant access. Earn eco-friendly Froota for health milestones and use the Frootify wallet to save for emergencies worry-free.",
    },
    {
      imgSrc: "baby.svg",
      heading: "Bire Care",
      text: "Fostering a wholesome and joyful approach to preventive healthcare  tailored specifically for the unique needs and boundless energy of  children.",
    },
    {
      imgSrc: "lynk.svg",
      heading: "Health Lynk",
      text: "Invite clan members and friends to join your health goal challenges with Health Lynk. Win awesome prizes every time you and your crew complete every task together!",
    },
  ];

  return (
    <div className="py-4 md:px-14 md:py-6 2xl:px-24 2xl:py-8">
      {/* Desktop */}
      <div className="bg-primaryGreen rounded-[60px] 2xl:rounded-[96px] hidden md:grid md:grid-cols-3 gap-4 py-20 2xl:py-32 px-12 2xl:px-20 relative">
        <div className="bg-[#BFF19F] px-10 py-6 2xl:px-20 2xl:py-12 rounded-full absolute -top-8 left-20 md:left-16 hidden md:inline-block">
          <p className="text-[#6ABC35] text-center font-semibold text-xl 2xl:text-3xl">
            More Health
          </p>
        </div>
        {featuresData.map((feature, index) => (
          <div
            className={`${
              isFeaturesOpen[index] === true ? "" : "h-[200px]"
            } bg-white rounded-3xl md:rounded-[60px] 2xl:rounded-[96px] md:h-[380px] 2xl:h-[650px] flex flex-col items-center p-8 text-center relative`}
            key={index}
          >
            <div className="bg-[#FF7B224D] opacity-70 h-[60px] w-[60px] md:w-[76px] md:h-[76px] 2xl:h-[100px] 2xl:w-[100px] rounded-full flex items-center justify-center md:mr-auto">
              <img
                src={feature.imgSrc}
                alt="Icon"
                className="h-6 w-6 md:h-9 md:w-9"
              />
            </div>
            <h2 className="text-[#4F4F4F] md:text-start w-full hero-font font-extrabold text-lg my-4 md:text-2xl 2xl:text-4xl">
              {feature.heading}
            </h2>
            <p className="hidden md:block 2xl:text-2xl md:text-start normal-case">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
      {/* Mobile */}
      <div className="bg-primaryGreen md:rounded-[60px] 2xl:rounded-[96px] flex md:hidden flex-col gap-4 py-20 2xl:py-32 px-12 2xl:px-20 relative">
        <div className="bg-[#BFF19F] px-10 py-6 2xl:px-20 2xl:py-12 rounded-full absolute -top-8 left-[50%] translate-x-[-50%]">
          <p className="text-[#6ABC35] text-center w-[145px] font-semibold text-xl 2xl:text-3xl">
            More Health
          </p>
        </div>
        {featuresData.map((feature, index) => (
          <div
            className={`${
              isFeaturesOpen[index] === true ? "" : "h-[230px]"
            } bg-white rounded-3xl md:rounded-[60px] 2xl:rounded-[96px] md:h-[380px] 2xl:h-[650px] flex flex-col items-center p-8 text-center relative`}
            key={index}
          >
            <div className="bg-[#BFF19F] px-5 py-3 2xl:px-6 2xl:py-4 rounded-full hidden md:inline-block absolute top-6 right-12">
              <p className="text-[#6ABC35] font-semibold text-xs 2xl:text-xl">
                Coming Soon
              </p>
            </div>
            <div className="bg-[#FF7B224D] opacity-70 h-[60px] w-[60px] md:w-[76px] md:h-[76px] 2xl:h-[100px] 2xl:w-[100px] rounded-full flex items-center justify-center md:mr-auto">
              <img
                src={feature.imgSrc}
                alt="Icon"
                className="h-6 w-6 md:h-9 md:w-9"
              />
            </div>
            <h2 className="text-[#4F4F4F] md:text-start w-full hero-font font-extrabold text-lg my-4 md:text-2xl 2xl:text-5xl">
              {feature.heading}
            </h2>
            <p className="hidden md:block 2xl:text-2xl md:text-start">
              {feature.text}
            </p>
            <div className="h-6 w-6 bg-[#FF7B224D] opacity-70 flex items-center justify-center rounded-full mb-4">
              <FaCaretDown
                className="text-[#FF7B22]"
                onClick={() => toggleIsFeaturesOpen(index)}
              />
            </div>
            <p
              className={`${
                isFeaturesOpen[index] === true ? "" : "hidden"
              }  md:hidden 2xl:text-2xl md:text-start`}
            >
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreFeatures;
