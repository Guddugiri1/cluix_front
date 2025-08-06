import { SubTitle } from "@/components/shared";
import React from "react";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

import { FaUsers } from "react-icons/fa";
import CountUp from "react-countup";
import { IoHappySharp } from "react-icons/io5";
import img1 from "../../../public/customrs/img1.jpg";
import img2 from "../../../public/customrs/img2.jpg";
import img3 from "../../../public/customrs/img3.jpg";
import img4 from "../../../public/customrs/img4.jpg";
import img5 from "../../../public/customrs/img5.jpg";
import img6 from "../../../public/customrs/img6.png";
import img7 from "../../../public/customrs/img7.png";
import img8 from "../../../public/customrs/img8.png";
import img9 from "../../../public/customrs/img9.png";
import img10 from "../../../public/customrs/img10.png";
import img11 from "../../../public/customrs/img11.png";
import img12 from "../../../public/customrs/img12.webp";
import img13 from "../../../public/customrs/img13.jpeg";
import img14 from "../../../public/customrs/img14.jpg";
import Image from "next/image";

const TeamComponents = () => {
  const data = [
    {
      id: 1,
      image: img1,
      icon: (
        <MdOutlineProductionQuantityLimits className="h-8 w-8 text-white" />
      ),
      name: "Total Products",
      data: "3",
    },
    {
      id: 2,
      image: img2,
      icon: <FaUsers className="h-8 w-8 text-white" />,
      name: "Our Reach in States",
      data: "6",
    },
    {
      id: 3,
      image: img3,
      icon: <IoHappySharp className="h-8 w-8 text-white" />,
      name: "Happy Clients",
      data: "205",
    },
    {
      id: 4,
      image: img4,
      icon: <FaUsers className="h-8 w-8 text-white" />,
      name: "Total Tests Carried Out",
      data: "2528",
    },
    {
      id: 5,
      image: img5,
      icon: <FaUsers className="h-8 w-8 text-white" />,
      name: "Total Tests Carried Out",
      data: "2528",
    }, 
    {
      id: 6,
      image: img6,
      icon: <FaUsers className="h-8 w-8 text-white" />,
      name: "Total Tests Carried Out",
      data: "2528",
    },
    {
      id: 7,
      image: img14,
      icon: <FaUsers className="h-8 w-8 text-white" />,
      name: "Total Tests Carried Out",
      data: "2528",
    },
    {
      id: 14,
      image: img7,
      icon: <FaUsers className="h-8 w-8 text-white" />,
      name: "Total Tests Carried Out",
      data: "2528",
    },
    {
      id: 8,
      image: img8,
      icon: <FaUsers className="h-8 w-8 text-white" />,
      name: "Total Tests Carried Out",
      data: "2528",
    },
    {
      id: 9,
      image: img9,
      icon: <FaUsers className="h-8 w-8 text-white" />,
      name: "Total Tests Carried Out",
      data: "2528",
    },
    {
      id: 10,
      image: img10,
      icon: <FaUsers className="h-8 w-8 text-white" />,
      name: "Total Tests Carried Out",
      data: "2528",
    },
    {
      id: 11,
      image: img11,
      icon: <FaUsers className="h-8 w-8 text-white" />,
      name: "Total Tests Carried Out",
      data: "2528",
    },
    {
      id: 12,
      image: img12,
      icon: <FaUsers className="h-8 w-8 text-white" />,
      name: "Total Tests Carried Out",
      data: "2528",
    },
    {
      id: 13,
      image: img13,
      icon: <FaUsers className="h-8 w-8 text-white" />,
      name: "Total Tests Carried Out",
      data: "2528",
    },
  ];
  return (
    <div className=" bg-slate-100">
      <SubTitle>Our Marquee Clients </SubTitle>
      <section className="text-gray-700 body-font">
        <div className=" px-4 xl:px-[123px] py-8 lg:py-14 ">
          <div className="flex flex-wrap justify-center items-center gap-3">
            {data.map((item, i) => {
              return (
                <div 
                key={item?.id} 
                className="flex justify-center items-center w-[calc(50%-8px)] md:w-[calc(33.333%-8px)] xl:w-[calc(20%-9.6px)]"
              >
                <>
                  {item?.id === 13 ? (
                     <div key={item?.id} className="flex justify-center items-center">
                    <Image
                      src={item?.image}
                      alt={`${item?.name}-image`}
                      height={100}
                      width={100}
                      objectFit="cover"
                    />
                  </div>
                  ) : (
                    <div key={item?.id} className="flex justify-center items-center">
                    <Image
                      src={item?.image}
                      alt={`${item?.name}-image`}
                      height={150}
                      width={150}
                      objectFit="cover"
                      className="object-contain"
                    />
                  </div>
                  )
                  }
                </>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamComponents;
