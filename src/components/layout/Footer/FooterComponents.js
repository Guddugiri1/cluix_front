import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import logoImg from "../../../../public/logowhitouttext.png";
import Link from "next/link";
import { FaSquareInstagram } from "react-icons/fa6";

const FooterComponents = () => {
  const quickLinks = [
    {
      id: 1,
      link: "/",
      name: "Home",
    },
    {
      id: 2,
      link: "/company/apply-for-job",
      name: "Careers",
    },

    {
      id: 3,
      link: "/resource/repogetry",
      name: "Repository",
    },
    {
      id: "3",
      link: "/industries",
      name: "Applications",
    },

    {
      id: 5,
      link: "/resource/social-media",
      name: "Our blogs",
    },
  ];
  const customerServices = [
    {
      id: "1",
      link: "/terms-condition",
      name: "Terms & Conditions",
    },
    {
      id: "2",
      link: "/privacy-policy",
      name: "Privacy & Policy",
    },
    {
      id: "3",
      link: "/refunds ",
      name: "Return & Refund Policy",
    },

    {
      id: "4",
      link: "/shipping-policy",
      name: "⁠Shipping policies",
    },
  ];
  const resource = [
    {
      id: "1",
      link: "/product",
      name: "Product",
    },
    {
      id: "2",
      link: "https://mydukaan.io/cluix1",
      name: "Shop Now",
    },
    {
      id: "3",
      link: "/demo",
      name: "Book Demo",
    },
    {
      id: "4",
      link: "https://dashboard.cluix.in/",
      name: "Dashboard",
    },
    {
      id: "5",
      link: "/contact-us",
      name: "Contact Us",
    },
  ];
  return (
    <footer
      className={`flex flex-col gap-3  items-center bg-[var(--black-bg)]  text-center text-white`}
    >
      <div className="container px-6 pt-6">
        {/* Newsletter sign-up form */}
        <div className=" my-4">
          <fieldset>
            <form action="">
              <div className="grid-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
                <div className="md:mb-6 md:ml-auto">
                  <p className={`font-semibold text-lg`}>
                    Sign up for our newsletter
                  </p>
                </div>

                {/* Newsletter sign-up input field */}
                <div
                  className="relative md:mb-6 border border-white"
                  data-te-input-wrapper-init
                >
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] text-neutral-200 outline-none transition-all  "
                    id="exampleFormControlInput1"
                    placeholder=" Enter Your Email address"
                  />
                </div>

                {/* Newsletter sign-up submit button */}
                <div className="mb-6 md:mr-auto">
                  <button
                    type="submit"
                    className={`inline-block text-black rounded px-6 pb-[6px] font-bold pt-2 text-[17px] hover:bg-white leading-normal  transition duration-150 ease-in-out hover:border-neutral-100   hover:text-black focus:border-neutral-100 focus:text-neutral-100  bg-white`}
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </fieldset>
        </div>

        {/* Copyright information */}

        {/* Links section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-2 lg:px-20 place-content-center justify-between">
          {/* Repeat the following div for each set of links */}

          <div className="mb-6 flex justify-center flex-col align-middle">
            <div className=" ">
              <h5 className="mb-6 font-semibold text-lg text-start">Address</h5>

              <ul className="mb-0 list-none flex gap-4  flex-col ">
                <li>
                  <a
                    href="https://maps.app.goo.gl/r9urEhiWUjTvVTeWA"
                    className="text-white"
                  >
                    <div className=" flex items-start ">
                      <span className="pt-1">
                        <IoLocationSharp className={`h-6 w-6 fill-white `} />
                      </span>
                      <span className="px-5 text-left ">
                        Lab-4C-1D, 4th Floor, C Block, Research & Innovation
                        Park, IIT Delhi Campus, Hauz Khas, South Delhi, Delhi -
                        (110016)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="text-white">
                    <div className=" flex items-center ">
                      <span className="">
                        <FaPhoneAlt className={`h-6 w-6 fill-white `} />
                      </span>
                      <div className="flex flex-col  ">
                        <p className="px-5 text-nowrap ">
                          <a href="tel:+918800824467">+91 8800824467</a>
                        </p>

                        <p className="px-2  ">
                          <a href="tel:+919485883388">+91 9485883388</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="text-white">
                    <div className=" flex items-start ">
                      <span className="">
                        <MdEmail className={`h-6 w-6 fill-white `} />
                      </span>
                      <p className="px-5 ">
                        <a href="mailto:info@cluix.in">info@cluix.in</a>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-6">
            <h5 className="mb-6 font-semibold text-lg text-nowrap  text-start  lg:px-10">
              About Us
            </h5>

            <ul className="mb-0 list-none flex gap-4  flex-col items-start lg:px-10">
              {quickLinks.map((item) => {
                return (
                  <li key={item?.id}>
                    <Link href={item.link} className="text-white">
                      <div className=" flex items-center ">
                        <p className="px-2 text-nowrap">{item?.name}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="mb-6 font-semibold text-lg text-start  lg:px-10">
              Resources
            </h5>

            <ul className="mb-0 list-none flex gap-4  flex-col items-start lg:px-10">
              {resource.map((item) => {
                return (
                  <li key={item?.id}>
                    <Link href={item.link} className="text-white">
                      <div className=" flex items-start ">
                        <p className="px-2 text-nowrap">{item?.name}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="mb-6 font-semibold text-lg text-start  lg:px-10">
              Customer Services
            </h5>

            <ul className="mb-0 list-none flex gap-4  flex-col items-start lg:px-10">
              {customerServices.map((item) => {
                return (
                  <li key={item?.id}>
                    <Link href={item.link} className="text-white">
                      <div className=" flex items-start ">
                        <p className="px-2 text-nowrap">{item?.name}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright section */}
      <div
        className="flex px-4 xl:px-28 flex-col xl:flex-row justify-between items-center w-full "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <div className=" pt-3 items-center flex justify-center gap-5">
          {/* Add your social media icon SVG here */}
          <div>
            <a href="https://www.linkedin.com/company/cluix/">
              <FaFacebook className=" h-6 w-6 fill-white" />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/cluix_in?s=21&t=wPkHGdY8LGNRyCPGn1-zLw">
              <FaTwitter className=" h-6 w-6 fill-white" />
            </a>
          </div>
          <div>
            <a className="" href="https://www.youtube.com/@cluix-India">
              {" "}
              <IoLogoYoutube className=" h-6 w-6 fill-white" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/company/cluix/">
              <FaLinkedin className=" h-6 w-6 fill-white" />
            </a>
          </div>{" "}
          <div>
            <a href="https://www.instagram.com/cluix.in/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
              <FaSquareInstagram className=" h-6 w-6 fill-white" />
            </a>
          </div>
          <p className="">
            <a
              className=" lg:pl-10 pt-3 xl:pt-1 sm:text-nowrap text-white px-3"
              target="_blank"
              href="https://www.google.com/search?q=cluix&rlz=1C5CHFA_enIN966IN966&oq=cluix+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg7MgYIAhBFGDwyBggDEEUYPDIGCAQQRRg90gEJNzMwMGowajE1qAIIsAIB&sourceid=chrome&ie=UTF-8#lrd=0x390d1df6fda50d99:0x3f25886e2530b5eb,1"
            >
              Rate Us on Google
            </a>
          </p>
          {/* Repeat the above anchor element for each social media icon */}
        </div>
        <div className=" p-4 text-center">
          © 2024 Copyright :
          <a className="text-white px-3" href="https://www.cluix.in/">
            By Cluix Pvt. Ltd.
          </a>
          <a
            className="text-[var(--light-blue)] px-3"
            href="https://urlwebwala.com/"
            target="_blank"
          >
            Design By @Urlwebwala Pvt. Ltd.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponents;
