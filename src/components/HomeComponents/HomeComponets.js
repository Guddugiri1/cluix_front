"use client";
import React from "react";
import { Carousel, Row, Col } from "antd";
import Image from "next/image";
import slider from "../../../public/slider.webp";

import partner1 from "../../../public/client/partner1.svg";
// import partner3 from "../../../public/client/partner7.png";
import partner2 from "../../../public/client/partner13.png";
// import partner4 from "../../../public/client/partner4.png";
import partner5 from "../../../public/client/partner18.png";

import partner7 from "../../../public/client/partner3.jpg";
import partner8 from "../../../public/client/partner5.svg";
import partner9 from "../../../public/client/partner16.png";
import partner10 from "../../../public/client/partner12.png";
import partner14 from "../../../public/client/partner17.jpeg";

import "./HomeComponent.css";
import dynamic from 'next/dynamic'
const AboutUsComponents = dynamic(() => import('./AboutUsComponents/AboutUsComponents'))

// import AboutUsComponents from "./AboutUsComponents/AboutUsComponents";
// import WhyChooseUsComponent from "./WhyChooseUs/WhyChooseUsComponent";
const WhyChooseUsComponent = dynamic(() => import('./WhyChooseUs/WhyChooseUsComponent'))
import {
  FaBullseye,
  FaCloudDownloadAlt,
  FaHandHoldingHeart,
  FaHandPointer,
  FaUpload,
} from "react-icons/fa";
import { IoTrendingUpSharp } from "react-icons/io5";
import { OurJourneyComponent } from ".";
const StaticsComponets = dynamic(() => import('./StaticsComponents/StaticsComponets'))
const BlogComponets = dynamic(() => import('./BlogComponents/BlogComponets'))
// import StaticsComponets from "./StaticsComponents/StaticsComponets";
// import BlogComponets from "./BlogComponents/BlogComponets";
import TestimonialSlider from "./TestimonialComponents/TestimonialComponets";
import ProductComponent from "./ProductComponent/ProductComponent";
import MeetOurComponets from "./MeetOurTeamComponets/MeetOurComponets";
import ContactUsPage from "./ContectUsPage/ContactUsPage";
import { SubTitle } from "../shared";
import Marquee from "react-fast-marquee";
import ApplicationComponent from "./Application/ApplicationComponent";
import ContactUsHome from "./ContactUsHome/ConactUsHome";
import TeamComponents from "../Team/TeamComponents";

// import { FaBullseye, FaHandPointer, FaHandHoldingHeart, FaCloudArrowDown, FaUpload, FaIndianRupeeSign } from 'react-icons/fa';

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const img = [
  {
    id: 1,
    image: partner1,
  },
  {
    id: 2,
    image: partner14,
  },
  {
    id: 1.2,
    image: partner8,
  },

  // {
  //   id: 3,
  //   image: partner3,
  // },
  // {
  //   id: 4,
  //   image: partner4,
  // },
  {
    id: 5,
    image: partner5,
  },

  {
    id: 7,
    image: partner7,
  },

  {
    id: 9,
    image: partner9,
  },
  {
    id: 10,
    image: partner2,
  },
  // {
  //   id: 10,
  //   image: partner10,
  // },
];

const HomeComponets = () => (
  <div className="flex flex-col items-center justify-center w-full ">
    <Row className="bg-[#EFF5F5] w-full">
      {/* <Col xs={24} sm={12}>
        <Carousel
          autoplay
          dots={false}
          arrows
          style={{ width: "100%", height: "100%" }}
        >
          <div>
            <Image
              src={slider}
              alt="slider"
              width={"100%"}
              height={"100%"}
              unoptimized
            />
          </div>
        </Carousel>
      </Col> */}
      <Col xs={24} sm={24}>
        {/* <Image src={slider} width={"100%"} className="object-cover w-full"></Image> */}
        <video autoPlay muted loop width={"100%"} height={"100%"}>
          <source src="/video.mp4" width={"100%"} height={"100%"} />
        </video>
      </Col>
    </Row>
    <Row
      data-aos="fade-up"
      justify={"center"}
      className="support_contaienr bg-slate-100 "
    >
      <Col xs={24} md={24} lg={24} xl={24} xxl={24} className="text-center">
        <SubTitle data-aos="fade-up" className=" py-8 lg:py-16 ">
          Supported And Incubated By
        </SubTitle>

        <div className=" px-6 flex items-center justify-center pb-5 lg:pb-6  ">
          <Marquee speed={100} autoFill={true}>
            <div className="flex  min-w-screen-2xl justify-between items-end gap-4 lg:gap-12 px-3  ">
              {img?.map((img, i) => (
                <Image
                  key={img?.id}
                  src={img?.image}
                  alt="image"
                  height={150}
                  width={150}
                  className="h-[100px] lg:h-[150px]   object-fill"
                />
              ))}
            </div>
          </Marquee>
        </div>
      </Col>
    </Row>
    <Row className="w-full">
      <Col span={24}>
        <AboutUsComponents />
      </Col>
    </Row>
    <Row data-aos="fade-up" className="w-full">
      <Col span={24}>
        <WhyChooseUsComponent />
      </Col>
    </Row>
    <Row data-aos="fade-up" className="w-full">
      <Col span={24}>
        <ProductComponent />
      </Col>
    </Row>
    <Row data-aos="fade-up" className="w-full">
      <Col span={24}>
        <StaticsComponets />
      </Col>
    </Row>{" "}
    <Row data-aos="fade-up" className="w-full">
      <Col span={24}>
        <TeamComponents />
      </Col>
    </Row>
    <Row data-aos="fade-up" className="w-full">
      <Col span={24}>
        <ApplicationComponent />
      </Col>
    </Row>
    <Row data-aos="fade-up" className="w-full">
      <Col span={24}>
        <MeetOurComponets />
      </Col>
    </Row>
    <Row data-aos="fade-up" className="w-full">
      <Col span={24}>
        <BlogComponets />
      </Col>
    </Row>
    <Row data-aos="fade-up" className="w-full">
      <Col span={24}>
        <ContactUsHome />
      </Col>
    </Row>
    {/* <Row className="w-full">
      <Col span={24}>
        <OurJourneyComponent />
      </Col>
    </Row> */}
  </div>
);

export default HomeComponets;
