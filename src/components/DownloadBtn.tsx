import Link from "next/link";

type DownloadBtnProps = {
  showSmallScreens?: boolean;
  text: string;
  borderRadius: string;
  link: string;
};

const DownloadBtn: React.FC<DownloadBtnProps> = ({
  showSmallScreens = false,
  text,
  borderRadius,
  link,
}) => {
  return (
    <button
      className={`${
        !showSmallScreens ? "hidden md:block" : ""
      } bg-primaryOrange ${borderRadius} py-4 px-8 text-white 2xl:py-8 2xl:px-16 transition-all ease-in-out hover:opacity-85`}
    >
      <Link href={link}>{text}</Link>
    </button>
  );
};

export default DownloadBtn;
