import { SubTitle } from "@/components/shared";
import React from "react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

import { FaUsers } from "react-icons/fa";
import CountUp from "react-countup";
import { IoHappySharp } from "react-icons/io5";

const StaticsComponets = () => {
  const data = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" h-8 w-8 text-white"
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
      ),
      name: "Total Products",
      data: "3",
    },
    {
      id: 2,
      icon: <FaUsers className="h-8 w-8 text-white" />,
      name: "Our Reach in States",
      data: "8",
    },
    {
      id: 3,
      icon: <IoHappySharp className="h-8 w-8 text-white" />,
      name: "Happy Clients",
      data: "7",
    },
    {
      id: 4,
      icon: <FaUsers className="h-8 w-8 text-white" />,
      name: "Total Tests Carried Out",
      data: "3457",
    },
  ];
  return (
    <div className=" bg-slate-100">
      <SubTitle className="lg:pt-6">Our Portfolio</SubTitle>
      <section className="text-gray-700  body-font">
        <div className=" px-4 xl:px-[123px] py-6 lg:py-12 ">
          <div className="flex flex-wrap justify-between text-center">
            {data.map((item, i) => {
              return (
                <>
                  <div
                    data-aos="fade-up"
                    className="p-4 md:w-1/4 sm:w-1/2  w-full "
                    key={item.id}
                  >
                    <div className=" shadow-md shadow-gray-400  border-[var(--light-blue)] bg-white px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                      <div className="flex justify-center items-center">
                        <span className="p-3 bg-black">{item?.icon}</span>
                      </div>
                      <h2 className="title-font flex justify-center items-center font-semibold py-1 text-black text-3xl ">
                        <CountUp
                          start={0}
                          delay={2}
                          duration={20}
                          end={item?.data}
                        />
                        <span className="font-bold pl-1 pb-1">{item?.id === 4 ? '+' : ''}</span>
                      </h2>
                      <p
                        className="leading-relaxed text-lg text-black font-semibold"
                        data-aos="fade-up"
                      >
                        {item?.name}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaticsComponets;
