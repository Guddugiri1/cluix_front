import React from "react";
import { IoAdd } from "react-icons/io5";
import {
  FaGlobe,
  FaAnchor,
  FaHourglassHalf,
  FaDatabase,
  FaUpload,
  FaCamera,
} from "react-icons/fa";
import { LuTarget } from "react-icons/lu";
import { FaHandPointer } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaCloudArrowDown } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { SubTitle } from "@/components/shared";

const WhyChooseUsComponent = () => {
  const whyChooseUsData = [
    {
      id: 1,
      icon: (
        <LuTarget className="icon feature_box_col_one m-2 text-3xl text-center" />
      ),
      title: "Choose Us",
      mainTitle: "Commitment to Innovation",
      description:
        "Continuous innovation, exploring new technologies and methodologies to solve complex environmental challenges.",
    },
    {
      id: 2,
      icon: (
        <FaHandPointer className="icon feature_box_col_one m-2 text-3xl text-center" />
      ),
      title: "Choose Us",
      mainTitle: "Customized Solutions",
      description:
        " Tailored to diverse organizational needs, we deliver precise and effective solutions.",
    },
    {
      id: 3,
      icon: (
        <FaHandHoldingHeart className="icon feature_box_col_one m-2 text-3xl text-center" />
      ),
      title: "Choose Us",
      mainTitle: "Unrivaled Expertise",
      description:
        " Experts ensure top quality with vast environmental, engineering, and software expertise for unmatched reliability",
    },
    {
      id: 4,
      icon: (
        <FaCloudArrowDown className="icon feature_box_col_one m-2 text-3xl text-center" />
      ),
      title: "Choose Us",
      mainTitle: "Sustainable Approach",

      description:
        "We strives to create a healthier, more sustainable planet by addressing global environmental issues.",
    },
    {
      id: 5,
      icon: (
        <FaDownload className="icon feature_box_col_one m-2 text-3xl text-center" />
      ),
      title: "Choose Us",
      mainTitle: "Cutting-edge Technology",
      description:
        "We pioneer deep tech innovations in water quality analysis. ",
    },
  ];
  return (
    <div>
      <div className=" border-[var(--light-blue)] ">
        <section
          id="features"
          className="relative block px-6  lg:px-6  "
        >
          <div className="relative mx-auto max-w-5xl text-center">
            <SubTitle className="pb-8 lg:pb-16" data-aos="fade-up">
              {" "}
              Why choose us
            </SubTitle>
          </div>
          <div className="relative mx-auto max-w-8xl pb-5   xl:px-[120px] z-10 grid grid-cols-1 gap-3  sm:grid-cols-2 lg:grid-cols-5">
            {whyChooseUsData.map((item, i) => (
              <div
                data-aos="fade-up"
                key={item?.id}
                className="item text-black  bg-white text-center px-4 shadow-md shadow-gray-400 rounded-md transition-all duration-500 ease-in-out hover:bg-[#28c0d740] hover:text-black  hover:border-transparent"
              >
                <div data-aos="fade-up" className="flex justify-center  p-3 ">
                  <div className="bg-black text-white  p-3 rounded-full hover:rounded-lg">
                    {item?.icon}
                  </div>
                </div>
                <h3 className="text-xl text-black py-2 font-[500] ">{item?.mainTitle}</h3>
                <p
                  className="px-5 py-5 text-lg font-normal  "
                  data-aos="fade-up"
                >
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyChooseUsComponent;
