"use client";
import React from "react";
import { Carousel, Row, Col } from "antd";
import Image from "next/image";
import slider from "../../../public/slider.webp";

import partner1 from "../../../public/client/partner1.svg";
import partner2 from "../../../public/client/partner13.png";
import partner5 from "../../../public/client/partner18.png";
import partner7 from "../../../public/client/partner3.jpg";
import partner8 from "../../../public/client/partner5.svg";
// Use distinct variable names to avoid overwriting
import partner9a from "../../../public/client/partner16.png";
import partner9b from "../../../public/client/partner17.png";
import partner10 from "../../../public/client/partner12.png";
import partner14 from "../../../public/client/partner17.jpeg";

import "./HomeComponent.css";
import dynamic from "next/dynamic";

const AboutUsComponents = dynamic(() =>
  import("./AboutUsComponents/AboutUsComponents")
);
const WhyChooseUsComponent = dynamic(() =>
  import("./WhyChooseUs/WhyChooseUsComponent")
);
const StaticsComponets = dynamic(() =>
  import("./StaticsComponents/StaticsComponets")
);
const BlogComponets = dynamic(() => import("./BlogComponents/BlogComponets"));

import TestimonialSlider from "./TestimonialComponents/TestimonialComponets";
import ProductComponent from "./ProductComponent/ProductComponent";
import MeetOurComponets from "./MeetOurTeamComponets/MeetOurComponets";
import ContactUsPage from "./ContectUsPage/ContactUsPage";
import { SubTitle } from "../shared";
import Marquee from "react-fast-marquee";
import ApplicationComponent from "./Application/ApplicationComponent";
import ContactUsHome from "./ContactUsHome/ConactUsHome";
import TeamComponents from "../Team/TeamComponents";

const img = [
  { id: 1, image: partner1 },
  { id: 2, image: partner14 },
  { id: 3, image: partner8 },
  { id: 4, image: partner5 },
  { id: 5, image: partner7 },
  { id: 6, image: partner9a },
  { id: 7, image: partner9b },
  { id: 8, image: partner2 },
  { id: 9, image: partner10 },
];

const HomeComponents = () => (
  <div className="flex flex-col items-center justify-center w-full">
    <Row className="bg-[#EFF5F5] w-full">
      <Col xs={24}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Col>
    </Row>

    <Row
      data-aos="fade-up"
      justify={"center"}
      className="support_container bg-slate-100 w-full"
    >
      <Col xs={24} className="text-center">
        <SubTitle data-aos="fade-up" className="py-8 lg:py-16">
          Supported And Incubated By
        </SubTitle>
        <div className="px-6 flex items-center justify-center pb-5 lg:pb-6">
          <Marquee speed={100} autoFill={true}>
            <div className="flex items-end gap-4 lg:gap-12 px-3">
              {img.map((item) => (
                <Image
                  key={item.id}
                  src={item.image}
                  alt="partner-logo"
                  height={100}
                  width={150}
                  className="h-[100px] lg:h-[150px] object-contain"
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
    </Row>
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
  </div>
);

export default HomeComponents;
