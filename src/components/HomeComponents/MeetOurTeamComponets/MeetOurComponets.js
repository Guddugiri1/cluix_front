import React from "react";
import team from "../../../../public/team.jpg";
import Image from "next/image";
import { SubTitle } from "@/components/shared";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Rate } from "antd";
import ViewMore from "@/components/shared/typography/ViewMore";
import team1 from '../../../../public/team/team1.jpg'
import team2 from '../../../../public/team/team2.jpg'

import Link from "next/link";
const MeetOurComponets = () => {
  const teamMemberData = [
    {
      id: 1,
      team_name: "Mr. Chitranjan Singh",
      position: "Chairman",
      disc: "Chitranjan Singh boasts an impressive career spanning over 30 years. He graduated with a degree in Civil and Structural Engineering from the College of Military Engineering in Pune in 1995. Since then, he has served as a distinguished bureaucrat within the Indian defense sector. His extensive experience covers numerous projects of national significance across India. Notably, he is known for his creative problem-solving skills and his proven track record in executing large-scale projects",
      image: team1,
      github: "",
      linkedin: "https://www.linkedin.com/in/chitranjan-singh-290445261/",
      facebook: "",
    },
    {
      id: 2,
      team_name: "Mr. Robin Singh",
      position: "Founder & CEO",

      image: team2,
      disc: "Robin Singh, an Electrical and Electronics Engineer, brings over a decade of entrepreneurial expertise in developing commercially viable solutions in automation, machine design, embedded systems, IoT communication, high-temperature fire detectors, and electrochemistry applications.  Amidst the COVID pandemic, he collaborated with INMAS to innovate green sanitization solutions, deployed at Ramoji Film City and public hospitals.",
      github: "",
      linkedin: "https://www.linkedin.com/in/robin-singh-b9952028/",
      facebook: "",
    },
  ];
  return (
    <>
      <div className="flex  justify-center  bg-white   mt-0 ">
        <div className="flex flex-col">
          {/* Notes */}

          <div className="flex flex-col  ">
            {/* Meet the Team */}
            <div className="container  px-4">
              {/* Section Header */}
              <div className="flex flex-wrap justify-center text-center ">
                <div className="w-full lg:w-6/12 px-4">
                  {/* Header */}
                  <SubTitle className={"py-8 lg:py-16 "}>
                    {" "}
                    Our Founding Team
                  </SubTitle>
                  {/* Description */}
                </div>
              </div>
              {/* Team Members */}
              <div className="grid lg:grid-cols-2 gap-10 px-2 sm:px-10  xl:px-40">
                {/* Member #1 */}
                {teamMemberData.map((item) => {
                  return (
                    <>
                      <div
                        className="bg-white rounded-lg shadow-md shadow-gray-400  p-6    sm:p-6  "
                        key={item.id}
                      >
                        <div className="flex items-center gap-4">
                          <Image
                            alt=""
                            src={item?.image}
                            unoptimized
                            className=" size-24  lg:size-40 rounded-full object-fill"
                          />
                          <div>
                            <p className="mt-0.5 lg:text-nowrap text-lg lg:text-xl font-medium text-black">
                              {item?.team_name}
                            </p>
                            <div className="flex justify-start gap-6 text-lg text-black">
                              {item?.position}
                            </div>
                            <div>
                              <a href={item?.linkedin} className="flex   rounded-full  ">
                                <IoLogoLinkedin className="h-6 w-6 " />
                              </a>
                            </div>
                          </div>
                        </div>
                        <p className="mt-4 text-black text-lg font-normal">
                         {item?.disc}
                        </p>
                      </div>{" "}
                      {/* <div
                        key={item?.id}
                        className="w-full mb-6 px-6 sm:px-6 lg:px-4"
                      >
                        <div className="flex flex-col">
                     
                          <a href="#" className="mx-auto">
                            <Image
                              width={370}
                              height={370}
                              alt="Avatar"
                              className="rounded-2xl shadow-md shadow-gray-400 hover:drop-shadow-xl transition-all duration-200 delay-100"
                              src={team}
                            />
                          </a>
                          
                          <div className="text-center mt-6">
                            
                            <h1 className="text-black text-2xl font-bold mb-1">
                              {item?.team_name}
                            </h1>
                            
                            <div className="text-black text-xl font-[500] mb-2">
                              {item?.position}
                            </div>
                            
                            <div
                              className="flex items-center gap-4 my-3 justify-center 
                           duration-300"
                            >
                              
                              <a href="#" className="flex rounded-full  ">
                                
                                <IoLogoLinkedin className="h-6 w-6 fill-black" />
                              </a>
                              
                              <a
                                href="#"
                                className="flex rounded-full hover:bg-blue-50 "
                              >
                                <FaTwitter className="h-6 w-6 fill-black" />
                              </a>
                              
                              <a
                                href="#"
                                className="flex rounded-full hover:bg-orange-50 "
                              >
                                <FaFacebook className="h-6 w-6 fill-black" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </>
                  );
                })}
              </div>
              <div className="flex justify-center items-center pt-10">
                <Link href={"/company/about-us#team"}>
                  {" "}
                  <ViewMore>Know our team</ViewMore>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetOurComponets;
