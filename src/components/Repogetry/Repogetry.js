import Image from "next/image";
import React from "react";
import product from "../../../public/img/product.jpg";
import { SubTitle } from "@/components/shared";
import blog1Image from "../../../public/repogetry/img1.png";
import blog2Image from "../../../public/repogetry/img2.webp";
// import pdf1 from '../../../public/pdf/repjetoi-pdf1.pdf'
// import pdf2 from '../../../public/pdf/repjetoi-pdf2.pdf'

import Link from "next/link";
import { MdWatchLater } from "react-icons/md";
import ViewMore from "@/components/shared/typography/ViewMore";

const Repogetry = () => {
  const blogData = [
    {
      id: 1,
      title: "User Manual",
      date: "June 2023",
      time: "",
    //   pdf:pdf1,
      description:
        "Water quality analysis plays a crucial role in safeguarding our water resources and ensuring a sustainable",
      image: blog1Image,
      link: "https://drive.google.com/file/d/1JL36YznPAkdnURQ6tryspgMmk2lbjYBb/view",
    },
    {
      id: 2,
      title: "Drinking Water Quality Monitoring & Surveillance",
      date: "June 2023",
      time: "",
    //   pdf:pdf2,
      description:
        "Water, the elixir of life, is a fundamental necessity for our survival. Ensuring its purity is paramount, and that&apos;s where",
      image: blog2Image,
      link: "https://drive.google.com/file/d/1WNqKaxHWiGUv10O_1dVOkcdcaDC_0Ojk/view?usp=sharing",
    },
    // {
    //   id: 3,
    //   title: "User Manual",
    //   date: "July 2023",
    //   time: "",
    // //   pdf:pdf1,
    //   description:
    //     "Water shortage is viewed as a major hindrance to sustainable agricultural intensification in order to meet the food needs of a fast rising human population. ",
    //   image: blog1Image,
    //   link: "https://www.linkedin.com/pulse/significance-water-quality-agriculture-key-growth-vr-rajesh-9emvc/?utm_source=share&utm_med=member_ios&utm_campaign=share_via",
    // },
  ];
  return (
    <div className="bg-slate-100  pt-10">
      <div className=" xl:px-[135px]  px-4 sm:px-10  ">
        <div className="grid grid-cols-1 xl:grid-cols-2 px-5 xl:px-40 sm:grid-cols-2 gap-10 place-content-center">
          {blogData &&
            blogData?.map((item, i) => {
              return (
                <>
                  <div
                    data-aos="fade-up"
                    key={item?.id}
                    className=" overflow-hidden rounded-lg shadow-md shadow-gray-400"
                  >
                    <div className="relative">
                      <a href={item?.link}>
                        <Image
                          className="w-full min-h-[350px] sm:min-h-[350px]  xl:h-[500px] "
                          src={item?.image}
                          alt="Sunset in the mountains"
                        />
                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                      </a>
                    </div>
                    <div className="px-6 py-4">
                      <a
                        href={item?.link}
                        
                        className=" text-xl inline-block hover:text-black font-bold text-black transition duration-500 ease-in-out"
                      >
                        {item && item?.title ? item.title : "Loading..."}
                      </a>
                    </div>
                    <div className="flex justify-center items-center">
                      <a href={item?.link} target="_blank" className="pb-10 w-fit">
                        <button className="w-full rounded-lg px-2 lg:px-6 py-1 lg:py-3 mt-4 text-lg lg:text-xl  font-medium tracking-wide text-white text-nowrap  transition-colors duration-300 transform bg-[var(--light-blue)]">
                          Download Now
                        </button>
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div className="flex justify-center items-center py-8">
          {/* <Link href={"/resource/social-media"}>
            {" "}
            <ViewMore>Checkout Our Other Blogs</ViewMore>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Repogetry;
