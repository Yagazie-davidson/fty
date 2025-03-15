import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaThreads,
} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#101010] text-white p-28 2xl:p-48 relative">
      <div className="flex flex-col md:flex-row justify-between text-center space-y-14 md:space-y-0 md:text-start md:w-[65%]">
        <div className="mx-auto md:mx-0">
          <img src="/logo-coloured-white.svg" alt="logo" />
        </div>

        <div className="text-lg 2xl:text-xl">
          <p className="text-white font-semibold mb-4 2xl:mb-6">Pages</p>
          <ul className="space-y-1">
            <li>
              <Link href="/about">
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link href="/features">
                <p>Features</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p>Contact</p>
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy">
                <p>Privacy Policy</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-lg 2xl:text-xl">
          <p className="text-white font-semibold mb-4 2xl:mb-6">Socials</p>
          <ul className="space-y-1">
            <li>
              <a
                className="flex items-center justify-center md:justify-start"
                href="https://www.instagram.com/frootifynigeria/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="mr-2" /> <p>Instagram</p>
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center md:justify-start"
                href="https://www.linkedin.com/company/frootify"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="mr-2" /> <p>LinkedIn</p>
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center md:justify-start"
                href="https://x.com/Frootifyng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="mr-2" /> <p>X</p>
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center md:justify-start"
                href="https://www.threads.net/@frootifynigeria"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaThreads className="mr-2" /> <p>Threads</p>
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center md:justify-start"
                href="https://facebook.com/frootify.ng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className="mr-2" /> <p>Facebook</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img
        src="/union.svg"
        alt="background"
        className="hidden md:block absolute bottom-0 right-0"
      />
    </footer>
  );
};

export default Footer;
