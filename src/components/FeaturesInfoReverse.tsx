import DownloadBtn from "./DownloadBtn";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

type FeaturesInfoReverseProps = {
  id: string;
  imgSrc: string;
  heading: string;
  headingCtd?: string;
  colouredText: string;
  text: string;
  btnText: string;
  link: string;
};

const FeaturesInfoReverse: React.FC<FeaturesInfoReverseProps> = ({
  id,
  imgSrc,
  heading,
  headingCtd = "",
  colouredText,
  text,
  btnText,
  link,
}) => {
  return (
    <section
      id={id}
      className="grid md:grid-cols-2 gap-16 md:justify-between items-center mb-20 2xl:mb-40"
    >
      <div className="vertical-gradient h-[400px] md:rounded-[60px] 2xl:rounded-[96px] relative p-12">
        <img
          src={imgSrc}
          alt="Phone"
          className="absolute bottom-0 right-10 w-[50%]"
        />
        <div className="text-white font-semibold text-2xl w-[140px] absolute bottom-20 left-10">
          <p className="mb-8 ">Fill in your Bio Data</p>
          <div className="flex justify-between items-center mt-auto">
            <button className="bg-[#6CA52B] rounded-full flex items-center justify-center h-12 w-12 hover:cursor-pointer">
              <FaArrowLeft className="text-white" />
            </button>
            <button className="bg-[#6CA52B] rounded-full flex items-center justify-center h-12 w-12 hover:cursor-pointer">
              <FaArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-center space-y-2 md:block md:text-start md:space-y-0">
        <div>
          <h1 className="hero-font font-extrabold text-4xl 2xl:text-6xl my-4 2xl:my-8">
            {heading} <span className="text-[#6ABC35]">{colouredText}</span>{" "}
            {headingCtd}
          </h1>
          <p className="mb-4">{text}</p>
          <DownloadBtn
            showSmallScreens={true}
            text={btnText}
            borderRadius="rounded-full md:rounded-lg"
            link={link}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesInfoReverse;
