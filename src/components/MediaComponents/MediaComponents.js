import React from "react";
import img2 from "../../../public/news/img1.jpg";
import img3 from "../../../public/news/img2.jpeg";
import img6 from "../../../public/news/img2 (2).jpg";
import img4 from "../../../public/news/img4.jpeg";
import img5 from "../../../public/news/img5.webp";
import img7 from "../../../public/news.jpg";
import Image from "next/image";
import Link from "next/link";
import logo1 from "../../../public/news/logo1.png";
import logo2 from "../../../public/news/logo2.png";
import logo3 from "../../../public/news/logo3.png";
import { MdOutlineWatchLater } from "react-icons/md";

const MediaComponents = () => {
  const recentNews = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
    },
  ];

  const allnews = [
    {
      id: 1,
      name: "IIT कानपुर में ‘अभिव्यक्ति 2024’ का आगाज:देश भर के स्टार्टप्स ने दिखाई अपनी ताकत, छात्र भी देखकर हुए आश्चर्यचकित",
      image: img2,
      link: "https://www.bhaskar.com/local/uttar-pradesh/kanpur/news/water-testing-device-made-in-iit-kanpur-132759708.html?_branch_match_id=1302918748758516150&utm_campaign=132759708&utm_medium=sharing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0nMzMvM1k3Sy8zTjyqwDE0MKDCy9EgCAItchA4fAAAA",
      logo:logo3
    },
    {
      id: 2,
      name: "30 सेकेंड में मशीन बताएगी पानी की गुणवत्ता अब पानी की जांच के लिए महीनों तक रिपोर्ट का इंतजार करने की जरूरत नहीं हैं। एक बटन दबाते ही पानी की गुणवत्ता का पता चल सकेगा।",
      image: img6,
      link: "https://www.amarujala.com/uttar-pradesh/kanpur/technofest-abhivyakti-2024-vajra-will-identify-enemy-country-s-drone-and-jam-it-startups-exhibition-in-iit-2024-03-16?pageId=1",
      logo:logo1
    },
  ];

  const videoData = [
    {
      id: 1,
      src: "",
      title: "Video Title",
    },
    {
      id: 2,
      src: "",
      title: "Video Title",
    },
  ];
  return (
    <div>
      <>
        <div className="px-4 sm:px-6 xl:px-[140px]  py-10 pb-20">
          <section data-aos="fade-up" className="relative overflow-hidden">
            <div className="relative  ">
              <div className="">
                <div className="flex flex-wrap justify-center -mx-4 mt-10 ">

                  <div
                    data-aos="fade-up"
                    className="grid mb-10 grid-cols-1 px-4 sm:px-10  lg:px-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 "
                  >
                    {allnews &&
                      allnews?.map((data, index) => (
                        <div
                          data-aos="fade-up"
                          key={data?.id}
                          className="relative flex flex-col h-full justify-between overflow-hidden  rounded-xl border border-gray-100 bg-white shadow-md shadow-gray-400"
                        >
                          <Link
                            className="relative flex h-60 lg:h-[490px] overflow-hidden "
                            href={
                              data?.link
                            }
                          >
                            <Image
                              className="object-fill w-full bg-white  "
                              src={data?.image}
                              alt="product image"
                            />
                          </Link>
                          <div className="lg:mt-1 px-5 pb-5 h-48 pt-5  flex flex-col justify-between ">
                            <div>
                              <h5
                                data-aos="fade-up"
                                className=" text-lg xl:text-xl    font-semibold  text-black"
                              >
                                {data?.name}
                              </h5>
                            </div>
                            <div className="flex justify-between  sm:px-5">
                              <Image
                                src={data?.logo}
                                width={100}
                                height={100}
                              ></Image>
                              <div className="flex items-center gap-3">
                                <MdOutlineWatchLater />
                                <span>22 Mar 2024</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  {/* <div data-aos="fade-up" className="w-full px-4">
                    <div
                      data-aos="fade-up"
                      className="flex justify-between pb-6"
                    >
                      <h3 className="font-bold text-lg lg:text-[32px] lg:leading-[39px] text-blue">
                        Recent News
                      </h3>
                    </div>
                    <div className="flex flex-col gap-2">
                      {recentNews.map((item) => {
                        return (
                          <>
                            <a
                              data-aos="fade-up"
                              className="flex flex-col sm:flex-row items-start gap-2 group mb-0 lg:mb-8"
                              href="https://www.bhaskar.com/local/uttar-pradesh/kanpur/news/abhivyakti-2024-started-in-iit-kanpur-132725379.html"
                              target="_blank"
                            >
                              <Image
                                className="w-48 h-40"
                                src={img2}
                                alt="img"
                              />
                              <div
                                data-aos="fade-up"
                                className=" md:mt-0 md:ml-6 pt-2"
                              >
                                <h4 className="text-sm lg:text-lg font-bold text-blue pt-[11px] lg:leading-[29px]">
                                  IIT कानपुर ने बनाई वाटर टेस्टिंग डिवाइस:
                                  मिनटों में पानी की गुणवत्ता की जांच कर सकेंगे,
                                  सरकार तक पहुंचेगी रिपोर्ट
                                </h4>
                              </div>
                            </a>
                          </>
                        );
                      })}
                    </div>
                  </div> */}
                </div>{" "}
                <div
                  data-aos="fade-up"
                  className="w-full  sm:px-10     lg:px-16 mb-10   lg:mb-10"
                >
                  <div
                    className=" xl:h-[500px] flex lg:justify-center flex-col xl:flex-row border shadow-md shadow-gray-400  gap-6 rounded-3xl w-full"


                  >
                    {/* <Image
                        data-aos="fade-up"
                        className="block w-full xl:max-w-[75%] rounded-3xl rounded-e-none "
                        src={img6}
                        alt="img"
                      /> */}
                    <iframe
                      className="block w-full xl:max-w-[75%] h-[400px] lg:h-[500px] rounded-xl rounded-e-none lg:rounded-e-none "
                      // width={900}

                      src="https://www.youtube.com/embed/adi7V_nffXo?si=I5tKqGSC8wU9-iC2"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                    {/* <span class="block text-gray-500 mb-5">Jul 20, 2022</span> */}
                    <div className="flex flex-col justify-between ">
                      <h4
                        data-aos="fade-up"
                        className="text-lg xl:text-xl py-2  xl:py-10 px-4 xl:px-10 lg:px-10 lg:leading-[40px] font-bold text-black lg:mb-5"
                      >
                        IIT Kanpur में बनी पानी टेस्ट करने की अनोखी डिवाइस,
                        सरकार के पास ऐसे पहुंचेगी रिपोर्ट। TV9UPUK
                      </h4>
                      <div className="flex justify-between pb-10 px-4 sm:px-5">
                        <Image src={logo2} width={100} height={100}></Image>
                        <div className="flex items-center gap-3">
                          <MdOutlineWatchLater />
                          <span>22 Mar 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <div className=" px-2 sm:px-6 xl:px-[140px] py-10  bg-blue">
          <div className="h-full">
            <h2
              data-aos="fade-up"
              className="font-bold text-xl lg:text-[28px] lg:leading-[58px] max-w-[848px] text-black pt-2"
            >
              IIT Kanpur में बनी पानी टेस्ट करने की अनोखी डिवाइस, सरकार के पास
              ऐसे पहुंचेगी रिपोर्ट। TV9UPUK
            </h2>
            <div data-aos="fade-up" className="w-full relative">
              <div className="flex flex-col lg:flex-row gap-6">
                <iframe
                  width=""
                  className="w-full lg:w-3/5 mt-[20px] relative h-[200px] sm:h-[400px] lg:h-[559px]"
                  src="https://www.youtube.com/embed/adi7V_nffXo?si=LVoDAVwkDpPNflXv"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen=""
                />

                <div className="w-full flex items-start flex-col gap-5 lg:w-[35%] mt-5">
                  {videoData.map((item) => {
                    return (
                      <>
                        <a
                          key={item.id}
                          className="flex flex-col sm:flex-row items-start group lg:mb-8 gap-4 lg:gap-2"
                          href="newsDetails.html"
                        >
                          <iframe
                            width=""
                            className="w-full sm:w-48 lg:w-48 h-40"
                            src="https://www.youtube.com/embed/adi7V_nffXo?si=LVoDAVwkDpPNflXv"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen=""
                          />
                          <div
                            data-aos="fade-up"
                            className="mt-4 md:mt-0 md:ml-6 pt-2"
                          >
                            <span class="block text-black mb-2">
                              March 22 , 2024
                            </span>
                            <h4 className="text-[16px] font-semibold text-black  leading-[22px]">
                              IIT Kanpur में बनी पानी टेस्ट करने की अनोखी
                              डिवाइस, सरकार के पास ऐसे पहुंचेगी रिपोर्ट। TV9UPUK
                            </h4>
                          </div>
                        </a>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </>
    </div>
  );
};

export default MediaComponents;
