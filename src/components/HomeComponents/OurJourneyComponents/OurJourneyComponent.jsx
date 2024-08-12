import { SubTitle } from "@/components/shared";
import { JourneyTimeLine } from "@/constants/database";
import React from "react";
import { FaCircleDown } from "react-icons/fa6";

export default function OurJourneyComponent() {
  return (
    <div className=" px-2 lg:px-28  ">
      <SubTitle>Our Journey</SubTitle>
      <div className=" py-10">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          {/* left */}

          <div className="flex flex-row-reverse md:contents">
            <div
              data-aos="fade-up"
              className="bg-white col-start-1 py-8 px-6 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md shadow-gray-400"
            >
              <h3 className="font-semibold text-black text-lg mb-1 px-2 py-1 rounded-md bg-[#28c0d75c]">
                August 2021
              </h3>
              <p className=" text-black px-1 lg:max-w-[450px] text-[16px] py-2 text-justify">
              Won Jal Jeevan Mission Innovation Challenge (Ministry of Jal Shakti, Govt of India) to develop a portable device for water quality testing.
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="flex ">
                <div className="text-black align-middle text-center lg:ml-[1px]">
                  <FaCircleDown className="h-7 w-7 font-bold text-black" />
                </div>
              </div>
              <div className="h-full w-8 flex items-center justify-center ml-[-4px] lg:ml-[0px]">
                <div className="h-full w-1 bg-black p ointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 right-[5px] rounded-full bg-black shadow" />
            </div>
          </div>
          {/* right */}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-black pointer-events-none" />
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow-md shadow-gray-400" />
            </div>
            <div
              data-aos="fade-up"
              className="bg-white col-start-6 py-8 px-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md shadow-gray-400"
            >
              <h3 className="font-semibold text-lg mb-1 px-2 py-1 rounded-md bg-[#28c0d75c] text-black">
                September 2021
              </h3>
              <p className=" text-black px-1 lg:max-w-[450px] text-[16px] py-2 text-justify">
                Incorporated as LLP (Soon to be Pvt. Ltd)
              </p>
            </div>
          </div>
          {/* left */}
          <div className="flex flex-row-reverse md:contents">
            <div
              data-aos="fade-up"
              className="bg-white py-8 px-6 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md shadow-gray-400"
            >
              <h3 className="font-semibold text-lg mb-1 px-2 py-1 rounded-md bg-[#28c0d75c] text-black">
                May 2022
              </h3>
              <p className=" text-black px-1 lg:max-w-[450px] text-[16px] py-2 text-justify">
                Beta version tested & all mission milestone completed
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-black pointer-events-none" />
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow" />
            </div>
          </div>
          {/* left */}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-black pointer-events-none" />
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow-md shadow-gray-400" />
            </div>
            <div
              data-aos="fade-up"
              className="bg-white py-8 px-6 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md shadow-gray-400"
            >
              <h3 className="font-semibold text-lg mb-1 px-2 py-1 rounded-md bg-[#28c0d75c] text-black">
                June 2022
              </h3>
              <p className=" text-black px-1 lg:max-w-[450px] text-[16px] py-2 text-justify">
                Incubated at FITT IIT Delhi
              </p>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-row-reverse md:contents">
            <div
              data-aos="fade-up"
              className="bg-white py-8 px-6 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md shadow-gray-400"
            >
              <h3 className="font-semibold text-lg mb-1 px-2 py-1 rounded-md bg-[#28c0d75c] text-black">
                August 2022
              </h3>
              <p className=" text-black px-1 lg:max-w-[450px] text-[16px] py-2 text-justify">
                NABL Validated at KIIT Bhubaneshwar and State lab of Haryana
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-black pointer-events-none" />
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow-md shadow-gray-400" />
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-black pointer-events-none" />
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow-md shadow-gray-400" />
            </div>
            <div
              data-aos="fade-up"
              className="bg-white py-8 px-6 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md shadow-gray-400"
            >
              <h3 className="font-semibold text-lg mb-1 px-2 py-1 rounded-md bg-[#28c0d75c] text-black">
              
              September 2022

                {/* January 2023 */}
              </h3>
              <p className=" text-black px-1 lg:max-w-[450px] text-[16px] py-2 text-justify">
              
              Completed a successful field pilot in the 3 villages with PHED,
                Govt of Haryana


                {/* Listed On GEM portal for Govt.Procurement. */}
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse md:contents">
            <div
              data-aos="fade-up"
              className="bg-white py-8 px-6 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md shadow-gray-400"
            >
              <h3 className="font-semibold text-lg mb-1 px-2 py-1 rounded-md bg-[#28c0d75c] text-black">
                {/* March 2023 */}
                November 2022

              </h3>
              <p className=" text-black px-1 lg:max-w-[450px] text-[16px] py-2 text-justify ">
              Launched Model C011 at 7th India Water Week


                {/* Got first order from Department of Military Department
                Affairs,Ministry of Defence. */}
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-black pointer-events-none" />
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow-md shadow-gray-400" />
            </div>
          </div>
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-black pointer-events-none" />
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow-md shadow-gray-400" />
            </div>
            <div
              data-aos="fade-up"
              className="bg-white py-8 px-6 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md shadow-gray-400"
            >
              <h3 className="font-semibold text-lg mb-1 px-2 py-1 rounded-md bg-[#28c0d75c] text-black">

              November 2022
              </h3>
              <p className=" text-black px-1 lg:max-w-[450px] text-[16px] py-2 text-justify">
              Vendor Approval by Quality Council of India
              </p>
            </div>
          </div>

                   <div className="flex flex-row-reverse md:contents">
            <div
              data-aos="fade-up"
              className="bg-white py-8 px-6 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md shadow-gray-400"
            >
              <h3 className="font-semibold text-lg mb-1 px-2 py-1 rounded-md bg-[#28c0d75c] text-black">
                January 2023
              </h3>
              <p className=" text-black px-1 lg:max-w-[450px] text-[16px] py-2 text-justify">
                Listed On GEM portal for Govt. Procurement
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-black pointer-events-none" />
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow-md shadow-gray-400" />
            </div>
          </div>
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-black pointer-events-none" />
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow-md shadow-gray-400" />
            </div>
            <div
              data-aos="fade-up"
              className="bg-white py-8 px-6 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md shadow-gray-400"
            >
              <h3 className="font-semibold text-lg mb-1 px-2 py-1 rounded-md bg-[#28c0d75c] text-black">
                March 2023
              </h3>
              <p className=" text-black px-1 lg:max-w-[450px] text-[16px] py-2 text-justify">
                Got first order from Department of Military Affairs,
                Ministry of Defence
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div
              data-aos="fade-up"
              className="bg-white py-8 px-6 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md shadow-gray-400"
            >
              <h3 className="font-semibold text-lg mb-1 px-2 py-1 rounded-md bg-[#28c0d75c] text-black">
              July 2023
              </h3>
              <p className=" text-black px-1 lg:max-w-[450px] text-[16px] py-2 text-justify">
              Eecueved the first order from State PHED, Govt of Haryana
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-black pointer-events-none" />
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow-md shadow-gray-400" />
            </div>
          </div>
        
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-black pointer-events-none" />
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow-md shadow-gray-400" />
            </div>
            <div
              data-aos="fade-up"
              className="bg-white py-8 px-6 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md shadow-gray-400"
            >
              <h3 className="font-semibold text-lg mb-1 px-2 py-1 rounded-md bg-[#28c0d75c] text-black">
              Sept 2023
              

              </h3>
              <p className=" text-black px-1 lg:max-w-[450px] text-[16px] py-2 text-justify">
              Won CII-Triveni Water Institute Award
              
              </p>
            </div>
          </div>
         
          <div className="flex flex-row-reverse md:contents">
            <div
              data-aos="fade-up"
              className="bg-white py-8 px-6 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md shadow-gray-400"
            >
              <h3 className="font-semibold text-lg mb-1 px-2 py-1 rounded-md bg-[#28c0d75c] text-black">
              Oct 2023
              </h3>
              <p className=" text-black px-1 lg:max-w-[450px] text-[16px] py-2 text-justify">
              Selected Super-25 Startup by Udhmodya Foundation
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-black pointer-events-none" />
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow-md shadow-gray-400" />
            </div>
          </div>
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-black pointer-events-none" />
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow-md shadow-gray-400" />
            </div>
            <div
              data-aos="fade-up"
              className="bg-white py-8 px-6 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md shadow-gray-400"
            >
              <h3 className="font-semibold text-lg mb-1 px-2 py-1 rounded-md bg-[#28c0d75c] text-black">
              March 2024

              </h3>
              <p className=" text-black px-1 lg:max-w-[450px] text-[16px] py-2 text-justify">
              Won CITI Social Innovation Challenge
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
