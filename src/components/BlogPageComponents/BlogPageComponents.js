import Image from "next/image";
import React from "react";
import product from "../../../public/img/product.jpg";
import { SubTitle } from "@/components/shared";
import blog1Image from "../../../public/img/blog-1.jpg";
import blog2Image from "../../../public/img/blog-2.jpg";
import blog3Image from "../../../public/img/blog-3.jpg";
import blog4Image from "../../../public/img/blog-4.webp";
import blog5Image from "../../../public/img/blog-5.webp";
import blog6Image from "../../../public/img/blog-6.webp";
import Link from "next/link";
import { MdWatchLater } from "react-icons/md";
import ViewMore from "@/components/shared/typography/ViewMore";

const BlogPageComponets = () => {
  const blogData = [
    {
      id: 1,
      title: "Water Quality Analysis: Vital for a Sustainable Future",
      date: "June 2023",
      time: "",
      description:
        "Water quality analysis plays a crucial role in safeguarding our water resources and ensuring a sustainable",
      image: blog1Image,
      link: "https://www.linkedin.com/pulse/crystal-clear-importance-unveiling-parameters-water-testing-cluix/?trackingId=b%2F%2F9yYf43lzjD01f9fqCrQ%3D%3D",
    },
    {
      id: 2,
      title: "The Crystal Clear Importance: Unveiling the Parameters of Water Testing",
      date: "June 2023",
      time: "",
      description:
        "Water, the elixir of life, is a fundamental necessity for our survival. Ensuring its purity is paramount, and that&apos;s where",
      image: blog2Image,
      link: "https://www.linkedin.com/pulse/crystal-clear-importance-unveiling-parameters-water-testing-cluix/?utm_source=share&utm_medium=member_ios&utm_campaign=share_via",
    },
    {
      id: 3,
      title: "Significance of water quality in agriculture - Key to growth",
      date: "July 2023",
      time: "",
      description:
        "Water shortage is viewed as a major hindrance to sustainable agricultural intensification in order to meet the food needs of a fast rising human population. ",
      image: blog3Image,
      link: "https://www.linkedin.com/pulse/significance-water-quality-agriculture-key-growth-vr-rajesh-9emvc/?utm_source=share&utm_med=member_ios&utm_campaign=share_via",
    },
    {
      id: 4,
      title: "Total Dissolved Solids",
      date: "July 2023",
      time: "",
      description:
        "Certainly! Total Dissolved Solids (TDS) is a key indicator for monitoring water quality. It provides valuable insights into the composition of water, which is crucial for maintaining the health and well-being of all living organisms.",
      image: blog4Image,
      link: "https://www.linkedin.com/pulse/total-dissolved-solids-cluix/?trackingId=08d5C4Y6Ko2HNt9WmUFLTw%3D%3D",
    },
    {
      id: 5,
      title: "Stormwater",
      date: "July 2023",
      time: "",
      description:
        "Stormwater is a significant environmental concern that arises from rainfall, snowmelt, and other precipitation runoff. As this water flows over impervious surfaces like roads, parking lots, and rooftops, it picks up various pollutants, ",
      image: blog5Image,
      link: "https://www.linkedin.com/pulse/stormwater-cluix/?trackingId=PcfGRSq0e1nRYoRNvZV57w%3D%3D",
    },
    {
      id: 6,
      title: "Potable Water",
      date: "July 2023",
      time: "",
      description:
        "Boiling : The most effective way to kill bacteria and viruses.Chlorination : Adding 1/8 teaspoon of chlorine bleach per gallon of water. Let it settle for 30 mins before drinking. Filtration : Filters remove bacteria and viruses while ",
      image: blog6Image,
      link: "https://www.linkedin.com/pulse/potable-water-cluix/?trackingId=iMBPg9rl%2BM8ztX0E8Qcbnw%3D%3D",
    },
  ];
  return (
    <div className="bg-slate-100  pt-10">
      <SubTitle className={"py-16"}>Latest Blog</SubTitle>
      <div className=" xl:px-[135px] px-10  ">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {blogData &&
            blogData?.map((item, i) => {
              return (
                <>
                  <div
                    data-aos="fade-up"
                    key={item?.id}
                    className=" overflow-hidden flex flex-col justify-between rounded-lg shadow-md shadow-gray-400"
                  >
                    
                    <div className="relative">
                      <a href={item?.link}>
                        <Image
                          className="w-full min-h-80 max-h-80"
                          src={item?.image}
                          alt="Sunset in the mountains"
                        />
                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                      </a>

                      <a href={item?.link}>
                        <div
                          
                          className="text-sm absolute top-0 right-0 bg-black   px-4 text-white rounded-full h-16 w-16 flex flex-col font-semibold items-center justify-center mt-3 mr-3  transition duration-500 ease-in-out"
                        >
                          <span className="font-bold">{item.date}</span>
                          <small></small>
                        </div>
                      </a>
                    </div>
                    <div className="px-6 py-4">
                      <a
                        href={item?.link}
                        data-aos="fade-up"
                        className=" text-xl inline-block hover:text-black font-bold text-black transition duration-500 ease-in-out"
                      >
                        {item && item?.title ? item.title : "Loading..."}
                      </a>
                      <p
                        data-aos="fade-up"
                        className=" pt-2  text-lg text-black"
                      >
                        {item && item?.description}
                      </p>
                    </div>
                    <div className="px-6 justify-end py-4 flex flex-row items-center">
                     
                      <div className="text-black text-[16px]">
                        <a href={item.link} target="_blank">
                          View More
                        </a>
                      </div>
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

export default BlogPageComponets;
