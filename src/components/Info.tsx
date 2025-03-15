import DownloadBtn from "./DownloadBtn";

type InfoProps = {
  id: string;
  imgSrc: string;
  highlight: string;
  heading: string;
  colouredText: string;
  text: string;
  link: string;
};

const Info: React.FC<InfoProps> = ({
  id,
  imgSrc,
  highlight,
  heading,
  colouredText,
  text,
  link,
}) => {
  return (
    <section
      id={id}
      className="grid md:grid-cols-5 gap-4 md:justify-between items-center mb-20 2xl:mb-40"
    >
      <img
        src={imgSrc}
        alt="Frootify app"
        className="2xl:h-[700px] col-span-3"
      />
      <div className="flex flex-col items-center text-center space-y-2 md:block md:text-start md:space-y-0 col-span-2">
        <div className="bg-[#6ABC3529] opacity-85 px-10 py-3 2xl:px-20 2xl:py-6 rounded-full inline-block">
          <p className="text-[#6ABC35] font-semibold text-xl 2xl:text-3xl">
            {highlight}
          </p>
        </div>
        <div>
          <h1 className="hero-font font-extrabold text-4xl 2xl:text-6xl my-4 2xl:my-8">
            {heading} <span className="text-[#6ABC35]">{colouredText}</span>
          </h1>
          <p className="mb-4">{text}</p>
          <DownloadBtn
            showSmallScreens={true}
            text="Learn More"
            link={link}
            borderRadius={"rounded-full md:rounded-3xl"}
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
