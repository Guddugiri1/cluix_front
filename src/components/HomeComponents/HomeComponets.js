"use client";
import React from "react";
import { Carousel, Row, Col } from "antd";
import Image from "next/image";
import slider from "../../../public/slider.webp";

import partner1 from "../../../public/client/partner1.svg";
import partner2 from "../../../public/client/partner13.png";
import partner5 from "../../../public/client/partner18.png";
import partner6 from "../../../public/client/partner6.jpeg";
import partner7 from "../../../public/client/partner3.jpg";
import partner8 from "../../../public/client/partner5.svg";
import partner14 from "../../../public/client/partner19.png"; // Add this import for partner19.png

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

const NewsletterComponents = dynamic (() => import("./NewsletterComponents/NewsletterComponents"));

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
  { id: 4, image: partner5 },
  { id: 8, image: partner2 },
  { id: 2, image: partner14 }, // Update partner14 to use partner19.png
  { id: 3, image: partner8 },
  { id: 5, image: partner7 },
  { id: 9, image: partner6 },
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
            <div className="flex items-center gap-4 sm:gap-6 md:gap-10 lg:gap-12 px-2 sm:px-4 md:px-6">
              {img.map((item) => (
                <Image
                  key={item.id}
                  src={item.image}
                  alt="partner-logo"
                  height={item.id === 2 ? 150 : 100} // Control image render height
                  width={item.id === 2 ? 380 : 150} // Control image render width
                  className={`object-contain ${
                    item.id === 2
                      ? "w-[200px] sm:w-[280px] md:w-[340px] lg:w-[380px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[150px]"
                      : "h-[60px] sm:h-[80px] md:h-[100px] lg:h-[150px] w-[100px] sm:w-[120px] md:w-[140px] lg:w-[150px]"
                  }`}
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
        <NewsletterComponents />
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
