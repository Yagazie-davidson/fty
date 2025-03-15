"use client";
import { FaCaretDown } from "react-icons/fa6";
import {
  IoMenu,
  IoClose,
  IoLogoGooglePlaystore,
  IoLogoApple,
} from "react-icons/io5";
import DownloadBtn from "./DownloadBtn";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Features",
      path: "/features",
      icon: <FaCaretDown />,
      children: [
        {
          name: "Check my BMI",
          path: "/features#bmi",
        },
        {
          name: "Speak with a health buddy",
          path: "/features#buddy",
        },
        {
          name: "Blend-on-the-go",
          path: "/features#blongo",
        },
      ],
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="fixed top-0 md:h-[96px] 2xl:h-[120px] z-30 w-full shadow-lg bg-white md:opacity-90">
      <div className="relative z-10">
        <nav className="flex justify-between items-center text-[#1E1E1E] 2xl:text-lg mx-12 py-6 md:mx-28 2xl:mx-48">
          <img src="logo-coloured.svg" alt="logo" />

          <ul className="hidden md:flex space-x-8 2xl:space-x-12">
            {routes.map((route, index) => (
              <li key={index} className={route.children ? "relative" : ""}>
                <Link
                  href={route.path}
                  className="flex items-center "
                  onMouseEnter={route.children && handleDropdownToggle}
                  onMouseLeave={route.children && handleDropdownToggle}
                >
                  <p
                    className={`${
                      route.path === pathname
                        ? "text-primaryOrange"
                        : "text-[#1E1E1E]"
                    } transition-all ease-in-out hover:text-primaryOrange`}
                  >
                    {route.name}
                  </p>
                  {route.children && <FaCaretDown className="ml-1" />}
                  {isDropdownOpen && route.children && (
                    <div className="absolute top-full z-10 w-[300px] left-0 mt-2 bg-white shadow-lg rounded-md">
                      <ul className="py-2">
                        {route.children.map((child, index) => (
                          <li key={index}>
                            <Link
                              href={child.path}
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <DownloadBtn
            showSmallScreens={false}
            text="Download Frootify"
            borderRadius={"rounded-full"}
            link={""}
          />

          <IoMenu
            className="h-10 w-10 text-primaryOrange md:hidden"
            onClick={() => setNavOpen(true)}
          />
        </nav>
        {/* Mobile */}
        <nav
          className={`md:hidden ${
            !navOpen ? "hidden" : ""
          } fixed left-0 top-0 bg-primaryOrange w-full h-screen z-30`}
        >
          <div className="flex justify-between items-center p-8">
            <img src="logo-coloured-shadow.svg" alt="Logo" className="h-12" />
            <div className="inline-block p-4 rounded-full bg-[#B35618] text-white">
              <IoClose className="h-6 w-6" onClick={() => setNavOpen(false)} />
            </div>
          </div>
          <div className="text-white">
            {routes.map((route, index) => (
              <div key={index}>
                <div className="flex items-center border border-[#FE8838] border-t-2 py-6 px-8">
                  <Link
                    href={route.path}
                    className="font-semibold text-xl"
                    onClick={() => setNavOpen(false)}
                  >
                    <div className="">{route.name}</div>
                  </Link>
                  {route.children && (
                    <FaCaretDown
                      className="ml-auto"
                      onClick={handleDropdownToggle}
                    />
                  )}
                </div>
                <div className=" px-8">
                  {isDropdownOpen &&
                    route.children &&
                    route.children.map((child, index) => (
                      <Link
                        key={index}
                        href={child.path}
                        className="font-semibold text-xl"
                        onClick={() => setNavOpen(false)}
                      >
                        <div className="mb-4">{child.name}</div>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col space-y-2 text-white mx-8 my-4">
            <button
              className="flex items-center justify-center rounded-2xl bg-[#B35618] py-4 px-5"
              onClick={() => setNavOpen(false)}
            >
              <IoLogoGooglePlaystore className="h-6 w-6" />
              <p className="ml-1">Get on Google Play</p>
            </button>
            <button
              className="flex items-center justify-center rounded-2xl bg-[#B35618] py-4 px-5"
              onClick={() => setNavOpen(false)}
            >
              <IoLogoApple className="h-6 w-6" />
              <p className="ml-1">Get on Apple Store</p>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
