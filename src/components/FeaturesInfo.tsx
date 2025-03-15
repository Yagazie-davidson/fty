"use client";
import { useState } from "react";
import DownloadBtn from "./DownloadBtn";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import BreakableProgressBar from "./BreakableProgressBar";

type ImageItem = {
  img: string;
  imgMobile: string;
  text: string;
};

type FeaturesInfoProps = {
  id: string;
  heading: string;
  headingCtd?: string;
  colouredText: string;
  text: string;
  btnText: string;
  link: string;
  images: ImageItem[];
};

const FeaturesInfo: React.FC<FeaturesInfoProps> = ({
  id,
  heading,
  headingCtd = "",
  colouredText,
  text,
  btnText,
  link,
  images,
}) => {
  const totalSegments = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedSegments, setCompletedSegments] = useState(1);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setCompletedSegments((prev) => Math.min(prev + 1, totalSegments));
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setCompletedSegments((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <section
      id={id}
      className="grid md:grid-cols-2 gap-16 md:justify-between items-center mb-48 md:mb-20 2xl:mb-40"
    >
      <div className="flex flex-col items-center text-center space-y-2 md:block md:text-start md:space-y-0">
        <div>
          <h1 className="hero-font font-extrabold text-4xl 2xl:text-6xl my-4 2xl:my-8">
            {heading} <span className="text-[#6ABC35]">{colouredText}</span>{" "}
            {headingCtd}
          </h1>
          <p className="mb-4">{text}</p>
          <DownloadBtn
            showSmallScreens
            text={btnText}
            borderRadius="rounded-full w-full md:w-auto md:rounded-lg"
            link={link}
          />
        </div>
      </div>
      <div className="hidden md:block vertical-gradient h-[300px] rounded-[60px] 2xl:rounded-[96px] relative p-12">
        <img
          src={images[currentIndex].img}
          alt="Phone"
          className="absolute bottom-0 right-6 w-[50%]"
        />
        <BreakableProgressBar
          totalSegments={totalSegments}
          completedSegments={completedSegments}
          position="top-10"
        />
        <div className="text-white font-semibold text-xl w-[30%] absolute bottom-5 left-10">
          <p className="mb-8">{images[currentIndex].text}</p>
          <div className="flex justify-between items-center mt-auto">
            <button
              className={`bg-[#6CA52B] rounded-full flex items-center justify-center h-12 w-12 hover:cursor-pointer ${
                currentIndex === 0 ? "opacity-20" : ""
              }`}
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              <FaArrowLeft className="text-white" />
            </button>
            <button
              className={`bg-[#6CA52B] rounded-full flex items-center justify-center h-12 w-12 hover:cursor-pointer ${
                currentIndex === images.length - 1 ? "opacity-20" : ""
              }`}
              onClick={handleNext}
              disabled={currentIndex === images.length - 1}
            >
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesInfo;
