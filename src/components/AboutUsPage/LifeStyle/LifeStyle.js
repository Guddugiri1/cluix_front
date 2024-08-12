
// DEFINE ALL EXTERNAL IMPORT 
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

// DEFINE ALL INTERNAL IMPORT
import { SubTitle } from "@/components/shared";

// DEFINE MAIN FUNCTION 
const LifeStyle = ({ title, data, className }) => {

  // DEFINE MAIN FUNCTION RETURN 
  return (
    <>
      <div className=" py-8 lg:py-16">
        <SubTitle className={"pb-8 lg:pb-16"}>{title}</SubTitle>
        <div className=" overflow-scroll mx-auto max-w-screen-2xl">
          <Marquee autoFill className="pr-5">
            <div className="flex flex-row px-3  gap-10">
              {data?.map((item) => (
                <Image
                  key={item?.id}
                  src={item?.image}
                  alt="Awards"
                  className={`rounded-md  shadow w-[200px] md:w-[300px] lg:w-[500px] h-[200px] lg:h-[400px] ${className}`}
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

// DEFINE MAIN FUNCTION EXPORT
export default LifeStyle;
