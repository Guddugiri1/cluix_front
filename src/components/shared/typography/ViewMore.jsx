import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

const ViewMore = ({children}) => {
  return (
    <div
      data-aos="fade-up"
      className="flex border-2 w-fit items-center justify-center rounded-md px-3 py-2  lg:px-5 lg:py-2.5 text-center text-sm font-medium text-black  focus:outline-none focus:ring-4 focus:ring-[var(--light-blue)]"
    >
      <button className="font-medium flex items-center gap-4 text-nowrap text-sm lg:text-lg h-fit ">
        {" "}
        {children} <IoMdArrowDropright className="w-6 h-6 font-bold" />
      </button>
    </div>
  );
};

export default ViewMore;
