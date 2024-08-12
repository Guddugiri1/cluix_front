import Image from "next/image";
import React from "react";
import product from "../../../../public/img/product.jpg";
import { SubTitle } from "@/components/shared";
import blog1Image from "../../../../public/img/blog-1.jpg";
import blog2Image from "../../../../public/img/blog-2.jpg";
import blog3Image from "../../../../public/img/blog-3.jpg";
import Link from "next/link";
import { MdWatchLater } from "react-icons/md";
import ViewMore from "@/components/shared/typography/ViewMore";
// async function getData() {
//   const res = await fetch("http://localhost:3000/api/users")
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }

const BlogComponets = () => {

  const blogData = [
    {
      id: 1,
      title: "Water Quality Analysis: Vital for a Sustainable Future",
      date: "June 2023",
      time: "",
      description:
        "Water quality analysis plays a crucial role in safeguarding our water resources and ensuring a sustainable",
      image: blog1Image,
      link: "https://www.linkedin.com/pulse/water-quality-analysis-vital-sustainable-future-cluix/?utm_source=share&utm_medium=member_ios&utm_campaign=share_via",
    },
    {
      id: 2,
      title: "The Crystal Clear Importance Unveiling the Parameters of Water Testing ",
      date: "June 2023",
      time: "",
      description:
        "Water, the elixir of life, is a fundamental necessity for our survival. Ensuring its purity is paramount",
      image: blog2Image,
      link: "https://www.linkedin.com/pulse/crystal-clear-importance-unveiling-parameters-water-testing-cluix/?utm_source=share&utm_medium=member_ios&utm_campaign=share_via",
    },
    {
      id: 3,
      title: "Significance of water quality in agriculture - Key to growth",
      date: "July 2023",
      time: "",
      description:
        "Water shortage is viewed as a major hindrance to sustainable agricultural intensification in order to meet ",
      image: blog3Image,
      link: "https://www.linkedin.com/pulse/significance-water-quality-agriculture-key-growth-vr-rajesh-9emvc/?utm_source=share&utm_med=member_ios&utm_campaign=share_via",
    },
  ];
  return (
    <div className="bg-slate-100  ">
      <SubTitle className={"py-8 lg:py-16"}>Latest Blog</SubTitle>
      <div className=" xl:px-[135px] px-6  ">
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
                    {/* <a href={item?.link} /> */}
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
                          data-aos="fade-up"
                          className="text-sm absolute top-0 right-0 bg-black px-4 text-white rounded-full h-16 w-16 flex flex-col font-semibold items-center justify-center mt-3 mr-3 transition duration-500 ease-in-out"
                        >
                          <span className="font-bold">{item.date}</span>
                          <small></small>
                        </div>
                      </a>
                    </div>
                    <div className="px-6 py-4 flex flex-col justify-between h-full">
                      <a
                        href={item?.link}
                        data-aos="fade-up"
                        className=" text-xl inline-block hover:text-black font-bold text-black transition duration-500 ease-in-out"
                      >
                        {item && item?.title ? item?.title : "Loading..."}
                      </a>
                      <p
                        data-aos="fade-up"
                        className=" pt-2  text-lg text-black"
                      >
                        {item && item?.description}
                      </p>
                    </div>
                    <div className="px-6 justify-end py-4 flex flex-row items-end">
                     
                      <div className="text-black text-[16px]">
                        <a href={item.link} className={"text-black"} target="_blank">
                        learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div className="flex justify-center items-center pt-10">
        <Link href={"/resource/social-media"}>  <ViewMore>Checkout our other blogs</ViewMore></Link>
        </div>
      </div>
    </div>
  );
};

export default BlogComponets;
