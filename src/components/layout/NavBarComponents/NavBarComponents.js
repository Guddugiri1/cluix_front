"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import logo from "../../../../public/logo2.png";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { DownOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import logo4 from "../../../../public/newBlackLogo.png";
import logowhite from "../../../../public/newLogo.png";
import { usePathname } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

import SearchComponents, { menuWithDropdown } from "./SearchComponents";

const { Search } = Input;

function NavBarComponents({ className }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  const menu = [
    { name: "Home", link: "/" },
    {
      name: "About  Us",
      link: "/company/about-us",
    },
    {
      name: "Careers",
      link: "/company/apply-for-job/",
    },
    { name: "Product", link: "/product" },
    {
      name: "Media",
      link: "/media",
    },

    { name: "Shop Now", link: "https://mydukaan.io/cluix1" },
  ];

  const menuDropdown = [
    { name: "About Us", link: "/company/about-us" },
    { name: "Careers", link: "/company/apply-for-job" },
  ];
  const menuResourceDropdown = [
    { name: "Social  Media", link: "/resource/social-media" },
    { name: "Repository", link: "/resource/repogetry" },
    { name: "Impact Stories", link: "/resource/stories" },
  ];

  const handleShowMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [resourceDropdownOpen, setResourceDropdownOpen] = useState(false);
  const [searchResultData, setSearchResultData] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const handleShowDropdownMenu = () => {
    setMenuOpen(false);
    setCompanyDropdownOpen((prev) => !prev);
  };
  const handleShowDropdownResource = () => {
    setMenuOpen(false);
    resourceDropdownOpen((prev) => !prev);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const filteredData = menu.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });

    const searchResults = menuWithDropdown.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResultData(searchResults);

    // Do something with the filtered data here
  }, [search]);

  const handleOpenSearch = () => {
    setSearchOpen((prev) => !prev);
    setSearch("");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
      }

      const currentScrollPos = window.scrollY;
      const maxScrollDistance = window.innerHeight;

      const percentage = Math.min(currentScrollPos / maxScrollDistance, 1);
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  const isVisible = !hasScrolled || (hasScrolled && window.scrollY === 0);
  return (
    <nav
      className={`${
        isVisible && pathname === "/" ? "" : "shadow-lg"
      }  px-2 sm:px-3 md:px-8 xl:px-12 2xl:px-10 z-[51] transition-all duration-500 ease-in-out fixed w-full ${
        isVisible && pathname === "/" ? "bg-transparent" : "bg-white"
      }  z-50 top-0 left-0 right-0 start-0 ${className}`}
    >
      {/* <div
        className={` ${
          isVisible ? "" : "hidden"
        } px-2 lg:px-20 transition-all duration-500 scroll-smooth border-b-2  bg-[var(--light-blue)] `}
      >
        <div className="hidden lg:flex justify-between items-center px-2 lg:px-4 py-1  mx-10 ">
          <div className="flex items-center justify-center">
            <div className=" flex items-center justify-center">
              <div>
                <FaPhoneAlt className={`h-5 w-5 fill-white `} />
              </div>

              <div className="text-white px-4 py-2 text-lg">
                <a href="info@jdshipping.in">+91 9560589782</a>
              </div>
            </div>
            <div className=" flex items-center justify-center">
              <MdEmail className={`h-5 w-5 fill-white `} />

              <div className="text-white px-4 py-2 text-lg">
                <a href="info@jdshipping.in">info@cluix.in</a>
              </div>
            </div>
          </div>
          <div>
            <div className="  flex justify-center gap-5 cursor-pointer">
              <div>
                <FaFacebook className=" h-6 w-6 fill-white" />
              </div>

              <div>
                <FaTwitter className=" h-6 w-6 fill-white" />
              </div>

              <div>
                <IoLogoYoutube className=" h-6 w-6 fill-white" />
              </div>

              <div>
                <FaLinkedin className=" h-6 w-6 fill-white" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className=" bg-transparent px-2 sm:px-6 md:px-2  xl:px-10">
        <div className=" flex flex-wrap items-center justify-between px-0 xl:px-4 py-0 webkit-width  ">
          <div className="flex items-center justify-between w-[100%]">
            <Link
              href="#"
              className="flex items-center lg:space-x-3 rtl:space-x-reverse"
            >
              <div className="flex  lg:hidden">
                {menuOpen ? (
                  <IoClose
                    onClick={handleShowMenu}
                    className={`w-10 h-10 ${
                      isVisible && pathname === "/"
                        ? "text-white"
                        : "text-black"
                    } `}
                  />
                ) : (
                  <button
                    data-collapse-toggle="navbar-sticky"
                    type="button"
                    className={`inline-flex items-center py-2  w-8 h-10 justify-center text-sm  rounded-lg lg:hidden ${
                      isVisible && pathname === "/"
                        ? "text-white"
                        : "text-black"
                    }  hover:text-[#58bed3]`}
                    aria-controls="navbar-sticky"
                    aria-expanded="false"
                    onClick={handleShowMenu}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  </button>
                )}
              </div>
              <Image
                src={isVisible && pathname === "/" ? logowhite : logo4}
                alt="icon"
                height={170}
                width={170}
                className="p-[10px] xl:p-0"
              />
            </Link>

            <div className=" flex gap-1 xl:gap-4 items-center justify-end">
              <div
                className="items-center  hidden   lg:flex lg:flex-col lg:w-auto "
                id="navbar-sticky"
              >
                {/* Dropdown menu */}

                <div className={`py-2 pt-2  `}>
                  <ul className="flex xl:gap-2  font-bold text-black  flex-col p-1 xl:p-3 md:p-0 mt-4  border border-gray-100 rounded-lg  md:space-x-0 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                    {menu.map((item, index) => {
                      return (
                        <li key={index} className="relative">
                          {item?.name == "Company" ? (
                            <span
                              className="block  py-2 px-3  text-[15px] xl:text-[17px]  font-bold rounded-lg md:bg-transparent hover:bg-[var(--light-blue)] hover:text-white cursor-pointer"
                              onMouseLeave={() => setCompanyDropdownOpen(false)}
                              onMouseEnter={() => setCompanyDropdownOpen(true)}
                            >
                              <Link href={item?.link}>
                                <div className="flex items-center gap-2 font-bold">
                                  <div>{item?.name}</div>
                                  <div>{item?.icon}</div>
                                </div>
                              </Link>
                            </span>
                          ) : item?.name == "Resources" ? (
                            <span
                              className="block py-2 px-3 text-[15px] xl:text-[17px]  font-bold rounded-lg md:bg-transparent hover:bg-[var(--light-blue)] hover:text-white cursor-pointer"
                              // onClick={() => setResourceDropdownOpen(!resourceDropdownOpen)}
                              onMouseEnter={() => setResourceDropdownOpen(true)}
                              onMouseLeave={() =>
                                setResourceDropdownOpen(false)
                              }
                            >
                              <Link href={item?.link}>
                                <div className="flex items-center text-nowrap gap-2">
                                  <div>{item?.name}</div>
                                  <div>{item?.icon}</div>
                                </div>
                              </Link>
                            </span>
                          ) : (
                            <span
                              className={`block ${
                                isVisible && pathname === "/"
                                  ? "text-white"
                                  : "text-black"
                              }  py-2 px-3 text-[15px] xl:text-[17px] font-bold rounded-lg md:bg-transparent   cursor-pointer`}
                            >
                              <Link href={item?.link}>
                                <div className="flex text-nowrap items-center gap-0">
                                  <div>{item?.name}</div>
                                  <div>{item?.icon}</div>
                                </div>
                              </Link>
                            </span>
                          )}
                          {item?.name == "Company" && companyDropdownOpen && (
                            <div
                              className="z-10  bg-white  hover:block  absolute rounded-lg shadow w-44 "
                              onMouseEnter={() => setCompanyDropdownOpen(true)}
                              onMouseLeave={() => setCompanyDropdownOpen(false)}
                            >
                              <ul className="py-2 text-[18px] text-black shadow-xl ">
                                {menuDropdown.map((item, i) => {
                                  return (
                                    <li key={i} className="">
                                      <Link
                                        href={item?.link}
                                        className="block px-4 py-2 text-[15px] xl:text-[18px] hover:bg-[var(--light-blue)] hover:text-white"
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}

                          {item?.name == "Resources" &&
                            resourceDropdownOpen && (
                              <div
                                className="z-10  bg-white  absolute rounded-lg shadow w-44 "
                                onMouseEnter={() =>
                                  setResourceDropdownOpen(true)
                                }
                                onMouseLeave={() =>
                                  setResourceDropdownOpen(false)
                                }
                              >
                                <ul className="py-2 text-[18px] text-black ">
                                  {menuResourceDropdown.map((item, i) => {
                                    return (
                                      <li key={i}>
                                        <Link
                                          href={item?.link}
                                          className="block px-4 text-[15px] xl:text-[18px] py-2 hover:bg-[var(--light-blue)] hover:text-white"
                                        >
                                          {item.name}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <Link href="/demo">
                <button
                  className={` hidden text-nowrap lg:block bg-[#28c0d740] font-bold  ${
                    isVisible && pathname == "/" ? "text-white" : "text-black"
                  } px-3 py-2 rounded-lg`}
                  // style={{ background: "#28c0d7", color: "white" }}
                >
                  Book Demo
                </button>
              </Link>
              <Link
                href={"https://dashboard.cluix.in/"}
                className="hidden lg:flex"
              >
                <span
                  className={`block  py-2 px-3 text-[15px] xl:text-[17px] font-bold rounded-lg md:bg-transparent ${
                    isVisible && pathname === "/" ? "text-white" : "text-black"
                  }   cursor-pointer`}
                >
                  {" "}
                  Dashboard
                </span>
              </Link>
              <>
                <div
                  id="myOverlay"
                  className="overlay block"
                  style={{ display: searchOpen ? "block" : "none" }}
                >
                  <span
                    className="closebtn"
                    onClick={handleOpenSearch}
                    title="Close Overlay"
                  >
                    ×
                  </span>
                  <div className="overlay-content flex flex-col justify-center items-center ">
                    <Input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="text-white bg-gray-50 w-full rounded-lg border-none"
                      addonBefore={
                        <IoSearchOutline className="text-xl rounded-xl  " />
                      }
                    />
                    {search.length > 0 && (
                      <ul className=" shadow-md mt-10 min-w-[300px] xl:min-w-[400px] shadow-gray-400 p-2 flex flex-col gap-4  bg-white text-black text-lg">
                        {searchResultData.length > 0 ? (
                          searchResultData?.map((result) => (
                            <li
                              key={result?.name}
                              onClick={() => setSearch("")}
                            >
                              <Link href={result?.link}>{result?.name}</Link>
                            </li>
                          ))
                        ) : (
                          <h2>Not Result Found</h2>
                        )}
                      </ul>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleOpenSearch}
                  className="openBtn"
                  style={{
                    color: isVisible && pathname === "/" ? "white" : "black",
                  }}
                >
                  <IoSearchSharp />
                </button>
              </>

              {/* <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  color: isVisible && pathname === "/" ? "white" : "black",
                }}
                addonBefore={
                  <IoSearchOutline
                    className={`${isVisible && pathname === "/"
                      ? "text-white"
                      : "text-black"
                      }`}
                  />
                }
              /> */}

              <Link href={"https://mydukaan.io/cluix1"}>
                <button
                  className={`flex w-fit items-center gap-1 ${
                    isVisible && pathname === "/" ? "text-white" : "text-black"
                  }`}
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {/* <MdOutlineProductionQuantityLimits className="w-8 h-8" /> */}
                </button>
              </Link>
            </div>
          </div>

          {menuOpen && (
            <div className="fixed inset-0 z-50 lg:hidden flex">
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-black opacity-40 backdrop-blur-sm"
                onClick={handleShowMenu}
              ></div>

              {/* Sidebar */}
              <div className="relative z-50 w-[80%] max-w-xs bg-white/95 h-full shadow-2xl flex flex-col p-6 rounded-r-xl">
                {/* Logo & Close */}
                {/* Logo & Close */}
                <div className="flex items-center justify-between mb-4">
                  <Image src={logo4} alt="logo" width={120} />
                  <IoClose
                    className="text-2xl cursor-pointer hover:text-red-500 transition"
                    onClick={handleShowMenu}
                  />
                </div>

                {/* Description Text Below Logo */}
                <p className="text-sm text-gray-600 mb-6 leading-snug">
                  As an innovative cleantech startup, we create breakthrough
                  solutions that go beyond convention—prioritizing both advanced
                  technology and real-world impact.
                </p>

                {/* Navigation Links */}
                <ul className="flex flex-col gap-5 flex-grow">
                  {menu.map((item, index) => (
                    <li key={index}>
                      {item.link.startsWith("http") ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-lg font-medium hover:text-[var(--light-blue)] transition"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          href={item.link}
                          onClick={handleShowMenu}
                          className="block text-lg font-medium hover:text-[var(--light-blue)] transition"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                  <li>
                    <Link href="/demo" onClick={handleShowMenu}>
                      <span className="block text-lg font-medium hover:text-[var(--light-blue)] transition">
                        Book Demo
                      </span>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://dashboard.cluix.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg font-medium hover:text-[var(--light-blue)] transition"
                    >
                      Dashboard
                    </a>
                  </li>
                </ul>

                {/* Divider */}
                <div className="border-t mt-6 pt-4" />

                {/* Social Icons */}
                <div className="flex items-center justify-between">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center border rounded-lg text-xl text-black hover:bg-[#1877f2] hover:text-white shadow-sm transition"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://twitter.com/cluix_in?s=21&t=wPkHGdY8LGNRyCPGn1-zLw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center border rounded-lg text-xl text-black hover:bg-[#1da1f2] hover:text-white shadow-sm transition"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.instagram.com/cluix.in/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center border rounded-lg text-xl text-black hover:bg-[#e1306c] hover:text-white shadow-sm transition"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/cluix/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center border rounded-lg text-xl text-black hover:bg-[#0077b5] hover:text-white shadow-sm transition"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBarComponents;
