// DEFINE ALL EXTERNAL IMPORT
import React from "react";
import Image from "next/image";

// DEFINE ALL INTERNAL IMPORT
import about from "../../../public/img/about.jpg";
import { SubTitle } from "../shared";
import team from "../../../public/team.jpg";
import Certificate from "./Certificate/Certificate";
import LifeStyle from "./LifeStyle/LifeStyle";
import { OurJourneyComponent } from "../HomeComponents";
import image1 from "../../../public/img/awards1.jpg";
import image2 from "../../../public/img/awards2.jpg";
import image3 from "../../../public/img/awards3.jpg";
import image4 from "../../../public/img/awards4.jpg";
import image5 from "../../../public/lifeImage/img13.jpg";
import image6 from "../../../public/lifeImage/img14.jpg";
import image7 from "../../../public/lifeImage/img15.jpg";
import image8 from "../../../public/lifeImage/img16.jpg";
import image9 from "../../../public/lifeImage/img17.jpg";
import image10 from "../../../public/lifeImage/award6.jpg";
import image11 from "../../../public/lifeImage/award7.jpg";
import image12 from "../../../public/lifeImage/award8.jpg";
import image13 from "../../../public/lifeImage/award9.jpg";
import image14 from "../../../public/lifeImage/award10.jpg";
import image15 from "../../../public/lifeImage/award11.jpg";
import image16 from "../../../public/lifeImage/award12.jpg";
import image17 from "../../../public/lifeImage/award13.jpg";
import image18 from "../../../public/lifeImage/award14.jpg";
import image19 from "../../../public/lifeImage/award15.jpg";
import image20 from "../../../public/lifeImage/award16.jpg";
import image21 from "../../../public/lifeImage/award17.jpg";
import image22 from "../../../public/lifeImage/award18.jpg";
import image23 from "../../../public/lifeImage/award19.jpg";
import image24 from "../../../public/lifeImage/award20.jpg";
import image25 from "../../../public/lifeImage/award21.jpg";
import image26 from "../../../public/lifeImage/award22.jpg";
import image27 from "../../../public/lifeImage/award23.png";
import image28 from "../../../public/lifeImage/award24.jpg";
import image29 from "../../../public/lifeImage/award25.jpg";
import image30 from "../../../public/lifeImage/award26.jpg";
import image31 from "../../../public/lifeImage/award27.jpg";


import team2 from "../../../public/team.jpg";
import team3 from "../../../public/team/team3.png";
import team4 from "../../../public/team/team4.png";
import team5 from "../../../public/team/team5.jpg";
import team6 from "../../../public/team/team6.png";
import team9 from "../../../public/team/team7.jpg";
import team10 from "../../../public/team/team8.jpg";
import team11 from "../../../public/team/team9.jpg";
import team12 from "../../../public/team/team10.jpg";
import team7 from "../../../public/team/team1.jpg";
import team8 from "../../../public/team/team2.jpg";

// DEFINE MAIN FUNCTIONS OF ABOUT US PAGE
const AboutUsPageComponent = () => {
  // DEFINE ALL IMAGES DATA
  const images = [
    {
      id: 10,
      image: image10,
    },
    {
      id: 11,
      image: image11,
    },
    {
      id: 12,
      image: image12,
    },
    {
      id: 13,
      image: image13,
    },
    {
      id: 14,
      image: image14,
    },
    {
      id: 15,
      image: image15,
    },
    {
      id: 16,
      image: image16,
    },
    {
      id: 17,
      image: image17,
    },
    {
      id: 18,
      image: image18,
    },
    {
      id: 19,
      image: image19,
    },
    {
      id: 20,
      image: image20,
    },
    {
      id: 21,
      image: image21,
    },
    {
      id: 22,
      image: image22,
    },
    {
      id: 23,
      image: image23,
    },
    {
      id: 24,
      image: image24,
    },
    {
      id: 25,
      image: image25,
    },
    {
      id: 26,
      image: image26,
    },
    {
      id: 27,
      image: image27,
    },
    {
      id: 28,
      image: image28,
    },
    {
      id: 29,
      image: image29,
    },
    {
      id: 30,
      image: image30,
    },
    {
      id: 31,
      image: image31,
    },
    {
      id: 1,
      image: image4,
    },
    {
      id: 2,
      image: image1,
    },
    {
      id: 3,
      image: image2,
    },
    {
      id: 4,
      image: image3,
    },
    {
      id: 5,
      image: image5,
    },
    {
      id: 6,
      image: image6,
    },
    {
      id: 7,
      image: image7,
    },
    {
      id: 8,
      image: image8,
    },
    {
      id: 9,
      image: image9,
    },
    
  ];

  // DEFINE ALL TEAM MEMBERS DATA 
  const teamMemberData = [
    {
      id: 1,
      team_name: "V R Rajesh",
      position: "Chief Revenue Officer",
      image: team9,
      github: "",
      linkedin: "",
      facebook: "",
    },
    {
      id: 2,
      team_name: "Siddhant Goswami",
      position: "Lead Embedded Engineer",
      image: team11,
      github: "fdgsdf",
      linkedin: "",
      facebook: "",
    },
    // {
    //   id: 2.22,
    //   team_name: "Mr Yash Chauhan",
    //   position: "Embedded Developer  ",
    //   image: team12,
    //   github: "",
    //   linkedin: "",
    //   facebook: "",
    // },
    {
      id: 3,
      team_name: "Nimisha Mishra",
      position: "Research Assistant",
      image: team4,
      github: "",
      linkedin: "",
      facebook: "",
    },
    // {
    //   id: 4,
    //   team_name: "Dr Anju Mehra",
    //   position: "Lead - Research & Development",
    //   image: team3,
    //   github: "",
    //   linkedin: "",
    //   facebook: "",
    // },
    {
      id: 5,
      team_name: "Alina Rais",
      position: "Asst Manager - Growth Marketing  ",
      image: team10,
      github: "",
      linkedin: "",
      facebook: "",
    },

  ];
  // DEFINE ADVISORY TEAM DATA
  const advisaryTeam = [
    {
      id: 1,
      team_name: "Dr Tapan K Gandhi",
      position: "Mentor",
      image: team5,
      github: "",
      linkedin: "",
      facebook: "",
    },
    {
      id: 2,
      team_name: "Dr. Aseem Bhatnagar",
      position: "Advisor",
      image: team6,
      github: "",
      linkedin: "",
      facebook: "",
    },
  ];

  // DEFINE MAIN FUNCTION RETURN 
  return (
    <div className="2xl:max-w-[1440px] 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between ">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          {/* <h1 className="text-[20px] text-center lg:text-[40px] font-bold leading-9 text-[var(--light-blue)] pb-4"> */}
          <SubTitle className={"text-start"}>
            About Us
          </SubTitle>

          {/* </h1> */}
          <p className=" text-[18px] leading-9 text-center text-black  ">
            As a pioneering cleantech startup driven by innovation, we are
            committed to developing ground-breaking solutions that surpass
            conventional limitations. Our solutions not only incorporate
            cutting-edge advancements but also prioritize.
          </p>
          <h2 className=" text-xl lg:text-2xl lg:text-nowrap text-red-800 text-center font-extrabold py-10">Ease of Use | Affordability | Reliability | Sustainability</h2>
        </div>
        <div className="w-full lg:w-[45%] ">
          <div className="relative">
            <Image
              src={about}
              alt="Images"
              className="relative z-40 font-[Roboto] object-fill  w-fit h-[450px] xl:h-[500px] shadow-lg shadow-gray-400 rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-7  my-0 py-8 lg:py-16">
        <div
          data-aos="fade-up"
          className="w-full lg:w-[100%] order-2 lg:order-1 shadow-md shadow-gray-400 px-10  rounded-lg "
        >

          <div className="w-full  flex flex-col justify-center  rounded-lg ">

            <SubTitle className="py-2">Our Vision</SubTitle>
            <p className=" text-[18px] text-center leading-9 text-black  ">
              We aim for a sustainable future with innovations.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="w-full lg:w-full flex flex-col justify-center order-1 lg:order-2 shadow-md shadow-gray-400 px-10  rounded-lg"
        >
          <SubTitle  className="py-2">Our Mission</SubTitle>

          <p className=" text-[18px] text-center  text-black pb-3  ">
            Innovating and deploying disruptive, yet affordable, clean tech
            solutions accessible to all.
          </p>
        </div>
      </div>

      <div id="team" className="flex flex-col items-center  justify-between  ">
        <div className="w-full order-1  flex flex-col justify-center lg:order-1 pb-8 lg:pb-16">
          <SubTitle className="pb-7">About Team</SubTitle>
          <p className=" text-[18px] text-center leading-9 text-black  ">
            Our winning team combines diverse skills and a passion for
            innovation, including expertise in water quality management, IoT,
            engineering, environmental science, and data analytics. We foster a
            collaborative culture that values every perspective, prioritizing
            accessibility, dependability, and sustainability. Committed to
            customer needs and ethical practices, we aim to make a positive
            impact on the environment and society through innovative solutions
            and collective strength.
          </p>
        </div>

        <div className="w-full  order-2 lg:order-1 ">
          <div className=" pb-8 lg:pb-16">
            <SubTitle>Our Founding Team</SubTitle>
          </div>
          <div className="relative">
            <div className="flex items-center justify-center flex-col lg:flex-row gap-2 rounded-md  lg:gap-7">
              <div className="w-full flex flex-col justify-center items-center bg-white text-[-webkit-center] p-5 shadow-md shadow-gray-400 rounded-lg">
                <Image
                  src={team7}
                  alt="Images"
                  unoptimized
                  className="relative w-40 h-[180px] object-fill shadow-lg      rounded-2xl"
                />
                <h3 className="text-xl text-center font-semibold text-black py-3">
                  Mr. Chitranjan Singh
                </h3>
                <p className="text-[18px] text-center font-medium text-black">
                  Chairman
                </p>
              </div>{" "}
              <div className="w-full flex flex-col justify-center items-center bg-white text-[-webkit-center] p-5 shadow-md shadow-gray-400 rounded-lg">
                <Image
                  src={team8}
                  alt="Images"
                  className="relative shadow-lg w-40 h-[180px]  z-40 object-fill  rounded-2xl"
                />
                <h3 className="text-xl text-center font-semibold text-black py-3">
                  Mr. Robin Singh
                </h3>
                <p className="text-[18px] text-center font-medium text-black">
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <section className="lg:py-16 ">
          <div className=" px-0 sm:px-6 lg:px-0">
            <div className="py-8 lg:py-16 lg:pt-0">
              <SubTitle>Core Team</SubTitle>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {teamMemberData.map((item) => {
                return (
                  <div
                    key={item?.id}
                    className="group block shadow-md shadow-gray-400 p-3 text-center rounded-lg"
                  >
                    <div className="relative mb-5">
                      <Image
                        src={item?.image}
                        alt="Marvin image"
                        className="w-40 h-[180px] shadow-lg rounded-2xl object-cover mx-auto transition-all duration-500 border-2 border-solid border-transparent group-hover:border-[var(--light-blue)]"
                      />
                    </div>
                    <h4 className="text-xl text-gray-900 font-semibold mb-2 transition-all duration-500 ">
                      {item?.team_name}
                    </h4>
                    <span className="text-gray-500 block transition-all duration-500 group-hover:text-gray-900">
                      {item?.position}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" px-0 sm:px-6 lg:px-0">
            <div className=" py-8 lg:py-16">
              <SubTitle>Advisory Team</SubTitle>
            </div>
            <div className="grid grid-cols-1 place-content-center sm:grid-cols-2 gap-7 ">
              {advisaryTeam.map((item) => {
                return (
                  <div
                    key={item?.id}
                    className="group block shadow-md shadow-gray-400 p-3 text-center rounded-lg"
                  >
                    <div className="relative mb-5 mt-2">
                      <Image
                        src={item?.image}
                        alt="Marvin image"
                        className="w-40 h-[180px] shadow-lg rounded-2xl object-cover mx-auto transition-all duration-500 border-2 border-solid border-transparent group-hover:border-[var(--light-blue)]"
                      />
                    </div>
                    <h4 className="text-xl text-gray-900 font-semibold mb-2 transition-all duration-500 ">
                      {item?.team_name}
                    </h4>
                    <span className="text-gray-500 block transition-all mb-2 duration-500 group-hover:text-gray-900">
                      {item?.position}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Certificate title={"Certificates and Patents"} />

      <LifeStyle className={"w-fit xl:w-fit gap-0"} title={"Events"} data={images} />
      <OurJourneyComponent />
    </div>
  );
};


// DEFINE MAIN FUNCTION EXPORT
export default AboutUsPageComponent;
