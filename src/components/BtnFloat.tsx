"use client";
import { FaArrowUp } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BtnFloat: React.FC = () => {
  const pathname = usePathname();
  let heroId: string;

  switch (pathname) {
    case "/":
      heroId = "#hero";
      break;
    case "/about":
      heroId = "/about/#hero-about";
      break;
    case "/features":
      heroId = "/features/#hero-features";
      break;
    case "/contact":
      heroId = "/contact/#hero-contact";
      break;
    default:
      heroId = "#";
  }

  return (
    <Link
      className="hidden bg-white rounded-full md:flex items-center py-4 px-8 2xl:py-8 2xl:px-16 transition-all ease-in-out hover:opacity-85 shadow-lg fixed top-[80vh] right-8 z-20"
      href={heroId}
    >
      <FaArrowUp />
      <p className="ml-2">Back to top</p>
    </Link>
  );
};

export default BtnFloat;
