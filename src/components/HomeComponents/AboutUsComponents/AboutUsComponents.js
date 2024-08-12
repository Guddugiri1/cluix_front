// DEFINE ALL EXTERNAL IMPORT 
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Carousel } from "antd";

// DEFINE ALL INTERNAL IMPORT 
import SubTitle from './../../shared/typography/SubTitle';
import about from "../../../../public/img/about.jpg";
import about2 from "../../../../public/about2.jpg";

// DEFINE MAIN FUNCTION
const AboutUsComponents = () => {
  // DEFINE MAIN FUNCTION RETURN 
  return (
    <div className="aboutUSBContainer bg-slate-100   relative ">
      <div className="about" id="about">
        <section className=" flex items-center pt-4 lg:pt-10 pb-0 lg:pb-16  z-20 relative">
          <div className="justify-center flex-1   md:px-4">
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:flex-row items-center gap-y-6  px-2 xl:px-[115px]   ">
              <div data-aos="fade-up" className="  px-4 mb-0  lg:mb-0">
                <div className=" w-full">
                  <Carousel
                    autoplay
                    dots={false}
                    className="border-white   rounded-xl lg:pr-32   border-none border-r-0"
                  >
                    <div>
                      <Image
                        src={about}
                        className=" rounded-xl shadow-lg h-[340px] sm:h-[550px]  xl:h-[570px] object-fill w-full "
                        alt="img"
                      />
                    </div>
                    <div className="">
                      <Image
                        src={about2}

                        className=" rounded-xl shadow-lg  h-[340px] sm:h-[550px]  xl:h-[570px] object-fill w-full"
                        alt="img"
                      />
                    </div>
                  </Carousel>
                </div>
              </div>
              <div className=" px-4 mb-0 pb-8  lg:mb-0 ">
                <div className="relative">
                  <div className="flex justify-start items-start w-full">  <SubTitle className="">
                    About Us
                  </SubTitle></div>
                </div>
                <p
                  data-aos="fade-up"
                  className="mt-6 mb-10 text-[18px]  leading-7  font-normal text-black"
                >
                  As a pioneering cleantech startup driven by innovation, we are
                  committed to developing ground-breaking solutions that surpass
                  conventional limitations. Our solutions not only incorporate
                  cutting-edge advancements but also prioritize.{" "}
                </p>
                <button
                  data-aos="fade-up"
                  className=" shadow-sm  bg-[#ffffff] border-[#e5e7eb] border-2 text-lg lg:text-xl  text-black font-semibold hover:text-black py-2 lg:py-3 px-4 lg:px-6  rounded"
                >
                  <Link
                    href={"company/about-us#team"}
                    className="text-black hover:text-black"
                  >
                    Read More
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};


// DEFINE MAIN FUNCTION EXPORT

export default AboutUsComponents;
