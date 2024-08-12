// DEFINE ALL EXTERNAL IMPORT 
import { Image } from "antd";
import React from "react";

// DEFINE ALL INTERNAL IMPORT
import { SubTitle } from "@/components/shared";

// DEFINE MAIN FUNCTIONS
const Certificate = ({ title, data }) => {
  // DEFINE CERTIFICATE DATA
  const certificateData = [
    {
      id: 1,
      url: "https://cluiximage.vercel.app/certificate.png",
      name: "Certification Of Incorporation",
    },
    {
      id: 2,
      url: "https://cluiximage.vercel.app/certificate2.png",
      name: "Letter From Govt. Of Haryana",
    },
    {
      id: 3,
      url: "https://cluiximage.vercel.app/certificate1.png",
      name: "Centre for Microfinance & Liverlihood(CML)",
    },
    {
      id: 4,
      url: "https://cluiximage.vercel.app/certificate3.png",
      name: "Startup India Registration",
    },
    {
      id: 4,
      url: "https://cluiximage.vercel.app/certificate5.jpg",
      name: "CITI Social Innovation Lab 2024 - CleanTech Category",
    },
    {
      id: 4,
      url: "https://cluiximage.vercel.app/certificate6.jpg",
      name: "Certificate Of International Economics and Finance (IEF)",
    },
  ];

  // DEFINE MAIN FUNCTION RETURN
  return (
    <div>
      <div>
        <SubTitle className=" pt-8 lg:pt-10 lg:pt-0">{title}</SubTitle>
        <div className="grid  justify-center grid-cols-1 pt-8 lg:pt-16 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {certificateData.map((item) => {
            return (
              <div
                key={item?.id}
                className=" shadow-lg shadow-gray-400   text-center rounded-lg overflow-hidden"
              >
                <Image
                  src={item?.url}
                  alt={item?.name}

                  width={"100%"}
                  className="object-fill p-10   lg:min-h-[400px]  xl:max-h-[400px] "
                />
                <div className="p-5 bg-[#28c0d740] ">
                  <a href="#" className="block">
                    <h5 className="text-black text-center text-[14px] font-normal ">
                      {item?.name}
                    </h5>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
// DEFINE MAIN FUNCTIONS EXPORT
export default Certificate;
