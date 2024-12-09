"use client";
import { SubTitle } from "@/components/shared";
import React, { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import img from "../../../../public/contact.jpg";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { message } from "antd";

const ContactUsHome = () => {
  const pathname = usePathname();

  const form = useRef();
  const [fullName, setFullName] = useState("");

  const [number, setNumber] = useState("");
  const [message1, setMessage1] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    try {
      if (fullName && message1 && email && city && number) {
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE || "service_myho88h",
            process.env.NEXT_PUBLIC_EMAIL_JS_HOME_PAGE || "template_arkpxsg",
            form.current,
            {
              publicKey:
                process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY ||
                "SG3Mg0HDPPcO_1g1z",
            }
          )
          .then(
            () => {
              console.log("SUCCESS!");
              message.success(
                "Your message has been sent successfully. Our team will contact you within 2 working days."
              );
              // Reset form fields after successful submission
              setCity("");
              setMessage1("");
              setFullName("");
              setEmail("");
              setNumber("");
            },
            (error) => {
              console.log("FAILED...", error.text);
              alert("Error");
              message.error("Failed to send the message.");
            }
          );
      } else {
        console.log("Fill all fields");
        message.warning("Please fill out all fields");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const contactdata = [
    {
      id: 1,
      name: "E-mail",
      nameDetails: "info@cluix.in",
      desc: " Our friendly team is here to help.",
      link: "mailto:info@cluix.in",
      number: "support@cluix.in",
      icons: (
        <MdEmail className="font-[20px] h-8 w-8 text-[var(--light-blue)]" />
      ),
    },

    {
      id: 3,
      name: "Address",
      nameDetails:
        "Lab - 4C-1D, 4th Floor, C Block, Research & Innovation Park, IIT Delhi Campus, Hauz Khas, South Delhi, Delhi - 110016",
      desc: "Come say hello at our office HQ.",
      link: "",
      icons: (
        <FaMapMarkerAlt className="font-[20px] text-[var(--light-blue)] h-8 w-8" />
      ),
    },
    {
      id: 4,
      name: "Phone",
      number: "+91 9560589782 ",
      nameDetails: " +91 9910199782",
      desc: "+91 9560589782,/n +91 9910199782",
      link: "",
      icons: (
        <FaPhoneVolume className="font-[20px] text-[var(--light-blue)] h-8 w-8" />
      ),
    },
  ];
  return (
    <div>
      <section className="bg-slate-100 pc-4 pt-8 lg:pt-16 pb-4">
        <div className="w-full px-0 xl:px-[100px] pb-10 ">
          <div className=" fit-content ">
            <SubTitle>Contact Us</SubTitle>
          </div>

          <div className="grid grid-cols-1   lg:grid-cols-1">
            {/* <div className="grid grid-cols-4 px-2 lg-px-4 items-center  gap-12 ">
              {contactdata.map((item) => {
                return (
                  <>
                    <div className="bg-white p-8 rounded-md">
                      <span className="inline-block  text-[--light-blue] bg-white rounded-full">
                        {item?.icons}
                      </span>
                      <h2 className="mt-4 text-lg  text-[var(--light-blue)]  font-bold">
                        {item?.name}
                      </h2>
                      <p className="mt-2 font-medium  text-[var(--light-blue)] ">
                        {item?.desc}
                      </p>
                      <p className="mt-2 font-medium text-[var(--light-blue)]">
                        {item.nameDetails}
                      </p>
                    </div>
                  </>
                );
              })}
            </div> */}
            <div className="grid grid-cols-1">
              <div className=" flex flex-col  w-full  bg-slate-100">
                <div className="w-full draggable">
                  {pathname !== "/" && (
                    <div className=" flex flex-col items-center gap-16 mx-auto my-10">
                      <div className="grid w-full text-[var(--light-blue)] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {contactdata &&
                          contactdata.map((item) => {
                            return (
                              <div
                                key={item?.id}
                                data-aos="fade-up"
                                className="flex flex-col shadow-md shadow-gray-400 items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main"
                              >
                                <span>{item?.icons}</span>
                                <SubTitle className={"my-0 py-0 "}>
                                  {item?.name}
                                </SubTitle>
                                <a
                                  className="text-xl  max-w-[320px]  hover:text-[var(--light-blue)]"
                                  href={item?.link}
                                >
                                  <div>{item?.number}</div>
                                  {item?.nameDetails}
                                </a>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-1 lg:gap-4  lg:grid-cols-2 ">
              {pathname === "/" && (
                <div
                  data-aos="fade-up"
                  data-aos-duration="4000"
                  className="flex items-center"
                >
                  <Image
                    src={img}
                    width={"100%"}
                    height={"100%"}
                    className="w-full sm:w-full  xl:w-[85%]"
                    alt="contact us page"
                  />
                </div>
              )}
              <div
                data-aos="zoom-in"
                data-aos-duration="4000"
                className="flex justify-center w-full"
              >
                <div
                  className={`w-full p-10  xl:w-[80%] px-6  contact_us_container pt-0 pb-0 lg:pt-10`}
                >
                  <div className="flex justify-center items-center">
                    <h2 className=" text-xl xl:text-xl text-center py-4 text-black font-bold">
                      {" "}
                      To learn more about us, please submit an application!
                    </h2>
                  </div>
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className=" p-8 mb-5 lg:mb-0 lg:p-10 bg-white shadow-lg shadow-gray-400  rounded-lg text-black "
                  >
                    <div className="-mx-2 md:items-center md:flex">
                      <div className="flex-1 px-2">
                        <label className="block mb-2 text-lg font-medium ">
                          {pathname === "/" ? " Full Name" : "First Name"}
                        </label>
                        <input
                          required
                          type="text"
                          value={fullName}
                          name="fullname"
                          onChange={(e) => {
                            setFullName(e.target.value);
                          }}
                          placeholder="Enter Your Full Name"
                          className="block rounded-lg  w-full border  bg-gray-50  px-5 py-2.5 mt-2 "
                        />
                      </div>
                      {pathname !== "/" ? (
                        <div className="flex-1 px-2">
                          <label className="block mb-2 text-lg font-medium">
                            {pathname === "/" ? " Full Name" : "First Name"}
                          </label>
                          <input
                            type="text"
                            value={fullName}
                            placeholder="Enter Your Full Name"
                            className="block rounded-lg  w-full border  bg-gray-50  px-5 py-2.5 mt-2 "
                          />
                        </div>
                      ) : (
                        ""
                      )}

                      {pathname !== "/" ? (
                        ""
                      ) : (
                        <div className="flex-1 px-2 mt-4 md:mt-0">
                          <label className="block mb-2 text-lg font-medium">
                            Mobile No.
                          </label>
                          <input
                            type="text"
                            value={number}
                            name="mobileNo"
                            required
                            onChange={(e) => {
                              setNumber(e.target.value);
                            }}
                            min={10}
                            placeholder="Enter Your Mobile Number"
                            className="rounded-lg block border  bg-gray-50  w-full px-5 py-2.5 mt-2 focus:"
                          />
                        </div>
                      )}
                    </div>
                    <div className="mt-4">
                      <label className="block mb-2 text-lg font-medium">
                        Email address
                      </label>
                      <input
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
                        value={email}
                        name="email"
                        required
                        placeholder="Enter Your Email Address"
                        className="rounded-lg border  bg-gray-50 block w-full  px-5 py-2.5 mt-2 focus:"
                      />
                    </div>{" "}
                    {pathname !== "/" ? (
                      ""
                    ) : (
                      <div className="mt-4">
                        <label className="block mb-2 text-lg font-medium">
                          City
                        </label>
                        <input
                          type="text"
                          value={city}
                          onChange={(e) => {
                            setCity(e.target.value);
                          }}
                          name="city"
                          required
                          placeholder="Enter Your City"
                          className="rounded-lg border  bg-gray-50 block w-full  px-5 py-2.5 mt-2 focus:"
                        />
                      </div>
                    )}
                    <div className="w-full mt-4">
                      <label className="block mb-2 text-lg font-medium  ">
                        Message
                      </label>
                      <textarea
                        value={message1}
                        onChange={(e) => {
                          setMessage1(e.target.value);
                        }}
                        name="message"
                        className=" rounded-lg border  bg-gray-50 block w-full  focus:border-2 h-20 px-5 py-2.5 mt-2 focus:"
                        placeholder="Message"
                      />
                    </div>
                    <div
                      className={`grid ${
                        pathname !== "/" ? "grid-cols-1" : "grid-cols-1"
                      }  gap-3 items-center`}
                    >
                      {pathname !== "/" ? (
                        ""
                      ) : (
                        <div className="flex justify-center w-full">
                          <button
                            type="submit"
                            className="w-full text-center rounded-lg px-1 lg:px-6 py-1 lg:py-3 mt-4 text-lg lg:text-xl  font-medium  tracking-wide text-black text-nowrap  transition-colors duration-300 transform bg-[#28c0d740]"
                          >
                            Submit
                          </button>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
              {pathname !== "/" && (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="4000"
                  className="min-h-[300px]"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.872263650765!2d77.18628135039907!3d28.543558913283686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df6fd12d1df%3A0xd53c4addf93cf45!2sSynergy%20Building%2C%20IIT%20Campus%2C%20Indian%20Institute%20of%20Technology%20Delhi%2C%20Hauz%20Khas%2C%20New%20Delhi%2C%20Delhi%20110016!5e0!3m2!1sen!2sin!4v1710592346277!5m2!1sen!2sin"
                    width={"100%"}
                    height={"100%"}
                    className="border-2 rounded-xl "
                    allowFullScreen=""
                    loading="lazy"
                    title="map of office"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsHome;
