"use client";
import React, { useRef, useState } from "react";
import { SubTitle } from "../shared";
import { usePathname } from "next/navigation";
import { MdDashboardCustomize } from "react-icons/md";
import { MdOutlineInfo } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { Modal, message } from "antd";
import emailjs from "@emailjs/browser";

const DemoComponents = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const [openDemoModel, setOpenDemoModel] = useState(false);
  const [confirmLoadingDemo, setConfirmLoadingDemo] = useState(false);
  const [modalTextDemo, setModalTextDemo] = useState("Content of the modal");
  const showModalDemo = () => {
    setOpenDemoModel(true);
  };
  const handleOkDemo = () => {
    setModalTextDemo("The modal will be closed after two seconds");
    setConfirmLoadingDemo(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoadingDemo(false);
    }, 2000);
  };
  const handleCancelDemo = () => {
    console.log("Clicked cancel button");
    setOpenDemoModel(false);
  };
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
              setOpenDemoModel(false);

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
      name: "Web Dashboard",
      nameDetails: "info@cluix.in",
      desc: "Experience the platform online!",
      link: "http://dashboard.cluix.in",
      number: "support@cluix.in",
      icons: <MdDashboardCustomize className="font-[20px] h-10 w-10 " />,
    },

    // {
    //   id: 3,
    //   name: "Information page",
    //   nameDetails:
    //     "Lab-2, 4th-floor, Synergy Building, IIT Delhi Campus, Hauz Khas, 110016",
    //   desc: "Get all information at one single page",
    //   link: "/company/about-us",
    //   icons: <MdOutlineInfo className="font-[10px] h-10 w-10" />,
    // },
    {
      id: 4,
      name: (
        <>
          <div  onClick={showModalDemo} className="">
            Request a call
          </div>
        </>
      ),
      number: "+91 9560589782 ",
      nameDetails: " +91 9910199782",
      desc: "We will call you to brief you about Cluix and answer any queries",

      icons: <IoIosContacts className="font-[10px]  h-10 w-10" />,
    },
    {
      id: 5,
      name: (
        <>
          <div >Request A Demo</div>
        </>
      ),
      number: "+91 9560589782 ",
      link:"https://calendly.com/vrrajesh-cluix/cluix-product-demo?month=2024-04",
      nameDetails: " +91 9910199782",
      desc: "We will call you to brief you about cluix and answer any queries",
      icons: <IoIosContacts className="font-[20px]  h-10 w-10" />,
    },
  ];
  return (
    <div className="px-5 sm:px-10 xl:px-40 py-20">
      <div className="w-full draggable">
        {pathname !== "/" && (
          <div className=" flex flex-col items-center gap-16 mx-auto my-10">
            <div className="grid w-full  grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {contactdata &&
                contactdata.map((item) => {
                  return (
                    <div
                      key={item?.id}
                      da
                      ta-aos="fade-up"
                      className="flex hover:bg-[#28c0d740] hover:text-black flex-col shadow-md shadow-gray-400 items-center gap-3 px-5 py-10 bg-white rounded-3xl shadow-main"
                    >
                      <div className=" border hover:rounded-2xl rounded-full shadow-lg bg-black p-3">
                        <a href={item?.link} className="text-white ">
                          {item?.icons}
                        </a>
                      </div>
                      <SubTitle className={"my-0 py-0 text-center text-black "}>
                        <a href={item?.link}>{item?.name}</a>
                      </SubTitle>
                      <a
                        className="text-xl text-center  max-w-[320px]  "
                        href={item?.link}
                      >
                        {item?.desc}
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
      <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={""}
      >
        <div className="flex items-center justify-center px-2 py-2">
          {/* Author: FormBold Team */}
          {/* Learn More: https://formbold.com */}
          <div className="mx-auto w-full max-w-[550px] bg-white">
            <form>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  defaultValue=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-lg font-normal  text-black"
                >
                  I accept terms & conditions.
                </label>
              </div>

              <div>
                <button className="hover:shadow-form w-fit text-lg rounded-md bg-[var(--light-blue)] py-2 px-8 text-center  font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>{" "}
      <Modal
        open={openDemoModel}
        onOk={handleOkDemo}
        confirmLoading={confirmLoadingDemo}
        onCancel={handleCancelDemo}
        footer={""}
      >
        <div className="flex items-center justify-center px-2 py-1">
          <form className="w-full" ref={form} onSubmit={sendEmail}>
            <div className="">
              <label
                htmlFor="name"
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                name="fullname"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                required
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mt-1">
              <label
                htmlFor="phone"
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Phone Number
              </label>
              <input
                value={number}
                name="mobileNo"
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                type="text"
                id="phone"
                required
                placeholder="Enter your phone number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>{" "}
            <div className="mt-1">
              <label
                htmlFor="phone"
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                placeholder="Enter your Email  address"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>{" "}
            <div className="mt-1">
              <label
                htmlFor="phone"
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                placeholder="Enter your phone number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>{" "}
            <div className="mt-1">
              <label
                htmlFor="phone"
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Message
              </label>
              <textarea
                type=""
                name="message"
                value={message1}
                onChange={(e) => {
                  setMessage1(e.target.value);
                }}
                required
                placeholder="Enter your phone number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="flex items-center mb-2">
              <input
                id="default-checkbox"
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-lg font-normal  text-black"
              >
                I accept terms & conditions.
              </label>
            </div>
            <div >
              <button
                type="submit"
                className="hover:shadow-form w-fit text-lg rounded-md bg-[var(--light-blue)] py-2 px-8 text-center  font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
      {/* </div> */}
    </div>
  );
};

export default DemoComponents;
