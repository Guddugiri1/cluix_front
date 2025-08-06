import Image from "next/image";
import React from "react";
import img from "../../../../public/profile.webp";
import img1 from "../../../../public/applocation.webp";
import "./Application.css";
import { SubTitle } from "@/components/shared";
import app1 from '../../../../public/app1.jpg'
import app2 from '../../../../public/app2.jpg'
import app3 from '../../../../public/app3.jpg'
import app4 from '../../../../public/app4.jpg'
import app7 from '../../../../public/app7.jpg'
import app6 from '../../../../public/app6.jpg'

const applicationData = [
  {
    id: "1",
    img: app1,
    name: "PHED and Other Departments of the Government",
  },
  {
    id: "2",
    img: app2,
    name: "Research Institutions  ",
  },
  {
    id: "3",
    img: app3,
    name: " Factories and Industrial Units",
  },
  {
    id: "4",
    img: app4,
    name: "Commercial Facilities ",
  },
  {
    id: "5",
    img: app7,
    name: " NGOs and Development Agencies",
  },{
    id: "6",
    img: app6,
    name: "Agriculture",
  },
];

const ApplicationComponent = () => {
  return (
    <div className="">
      <div className="px-5  xl:px-[130px]  ">
        <SubTitle className={" pb-8 lg:pb-16"}>Applications</SubTitle>
        <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {applicationData?.map((item) => {
            return (
              <div
                key={item?.id}
                data-aos="fade-up"
                className="flex flex-col lg:flex-row justify-center items-start gap-4  "
              >
                <div className="w-full shadow-lg shadow-gray-400 h-40 lg:h-[550px] lg:w-[300px]  bg-primary rounded-lg   relative overflow-hidden group">
                  <div className="absolute p-5 w-full h-full space-y-4 z-10 flex flex-col justify-center items-start lg:items-start ">
                    <h1 className=" text-xl lg:text-2xl text-white font-black">
                      {item?.name}
                    </h1>
                  </div>
                  <Image
                    src={item.img}
                    alt="img"
                    className="object-cover group-hover:scale-110 duration-500 shadow-lg shadow-gray-400"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition-all duration-300 z-[5]" />
                  <div className="h-full w-full  group-hover:backdrop-blur-lg transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ApplicationComponent;
