"use client";
import Image from "next/image";

import logoImg from "../../../public/logowhitouttext.png";
import React, { useState } from "react";
import { Modal } from "antd";
import { useParams } from "next/navigation";

const JobDetailsPage = () => {
  const { id } = useParams()
  
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };



  const jobdeta = [
    {
      id: 1,
      position: "Social Media Intern",
      type: "internship",
      pay: 'This will be discussed during the interview',
      description: "    If you are interested in being part of an innovative startup that works towards serving the common good. This opportunity is for students who are looking for some extra pocket money or a side hustle. Freshers can also apply",
      about: [
        {
          id: 1,
          name: " Develop and implement comprehensive social media strategies to increase brand awareness, engagement, and traffic."
        },
        {
          id: 2,
          name: " Manage and oversee all social media platforms including, but not limited to, Facebook, Twitter, LinkedIn, Instagram, and YouTube."
        },
        {
          id: 3,
          name: " Create, curate, manage and schedule all published content (images, video, written) and ensure it aligns with brand voice and guidelines."
        },
        {
          id: 4,
          name: "Monitor and analyze social media metrics to evaluate the effectiveness of campaigns and strategies.."
        },
        {
          id: 5,
          name: " Engage with the community by responding to comments, messages, and inquiries in a timely and professional manner."
        },
        {
          id: 6,
          name: " Collaborate with the content team to create compelling and shareable content."
        },
        {
          id: 7,
          name: "Stay up-to-date with the latest social media trends, tools, and best practices."
        },
        {
          id: 8,
          name: " Coordinate with other departments to support promotional activities, events, and partnerships."
        },
        {
          id: 9,
          name: " Manage social media advertising campaigns and budgets."
        },
        {
          id: 10,
          name: " Provide regular reports and insights on social media performance to senior management."
        },
      ]
    },
    {
      id: 2,
      type: "internship",
      position: "Sales Intern",
      pay: 'This will be discussed during the interview',
      description: " CLUIX Private Limited is a deep-tech startup committed to monitoring and minimizing the consumption of undetectable contaminants in drinking water. Our Hand-held multi-parameter Water Quality Analyzer can test 8 critical parameters of drinking water and share data with the WQMS - Water Quality Monitoring & Surveillance of Jal Jeevan Mission for quality control. Our device possesses a rechargeable battery, Bluetooth and Wi-Fi connectivity, and a capacitive touch screen for a user-friendly experience along with user-guided steps for ease of testing.      ",
      about: [
        {
          id: 1,
          name: " The sales intern will be responsible for actively seeking new sales opportunities through cold calling in Delhi NCR. They should be able to illustrate our product's features and benefits over face-to-face meetings with potential customers.          "
        },
      ],
      qualification: [
        {
          id: 1,
          name: "Strong communication and customer service skills   "
        },
        {
          id: 2,
          name: "Ability to make cold calls and perform on-field sales          "
        },
        {
          id: 3,
          name: "Ability to support sales management through analysis, reporting and recommendations   "
        },
        {
          id: 4,
          name: "Interest in developing creative solutions to enhance sales strategies.  "
        },
        {
          id: 5,
          name: "Experience in sales should be 2 years plus.          "
        },
        {
          id: 6,
          name: "Knowledge of the water conservation/quality industry is a plus point. "
        },
      ],
      eligibility: [
        {
          id: 1,
          name: 'Should be graduated from any field.'
        }
      ]
    },
    {
      id: 3,
      type: "Full Time",
      position: "Field Project Manager",
      description: "    We’re looking for passionate individuals who want to contribute to something meaningful. If you’re someone who values impact and purpose in your work, please take a moment to read the details below carefully, it will help save both your time and ours.",
      about: [
        {
          id: 1,
          name: " Define project scope, deliverables & goals with stakeholders"
        },
        {
          id: 2,
          name: " Create & track implementation timelines"
        },
        {
          id: 3,
          name: " Coordinate with on-ground team members"
        },
        {
          id: 4,
          name: "Manage budgets and ensure proper documentation"
        },
        {
          id: 5,
          name: " Share regular updates with HO & clients"
        },
        {
          id: 6,
          name: " Represent CLUIX in local meetings and project reviews"
        },
        {
          id: 7,
          name: "Monitor risks and ensure smooth execution"
        }
      ],
      pay: 'Up to ₹22,000/month',
      qualification: [
        {
          id: 1,
          name: "Strong communication & interpersonal skills"
        },
        {
          id: 2,
          name: "Excellent coordination & time management"
        },
        {
          id: 3,
          name: "Problem-solving mindset "
        },
        {
          id: 4,
          name: "Customer-oriented approach"
        },
        {
          id: 5,
          name: "Ability to adapt in rural & dynamic environments"
        }
      ],
      eligibility: [
        {
          id: 1,
          name: 'Education: Science graduate'
        },
        {
          id: 2,
          name: 'Experience: 0–5 years (rural exposure preferred)'
        },
        {
          id: 3,
          name: 'Language: Comfortable with the regional/local language'
        },
        {
          id: 4,
          name: 'Joining: Within 1 week or as soon as possible'
        },
      ],
      employment_details: [
        {
          id: 1,
          name: 'Duration: Initially 1 year (extendable based on performance & project growth)'
        },
        {
          id: 2,
          name: 'Travel: '
        },
        {
          id: 3,
          name: '     Within the state for field implementation'
        },
        {
          id: 4,
          name: '     Quarterly visits to Delhi HO for reviews'
        },
        {
          id: 5,
          name: 'Work Days: 6 days/week (Monday–Saturday)'
        }
      ],
      additional_support: [
        {
          id: 1,
          name: 'Reimbursement for work-related travel'
        },
        {
          id: 2,
          name: 'Mobile/internet allowance'
        },
        {
          id: 3,
          name: 'Project-specific incentives (where applicable)'
        },
      ]
    },
    
  ]

  const item = jobdeta.find(item => item?.id == id);

  console.log("item", item)

  return (
    <div>
      <>
        <main className="main bg-white px-6 md:px-16 py-20 text-[var(--light-blue)]">
          <div className="flex flex-wrap justify-between max-w-6xl mx-auto">
            {/*     Job Post   */}
            <div className="job-post w-full md:w-8/12">
              <div className="job-meta mb-4">
                <h1 className="job-title text-3xl py-2">
                  {item?.position}
                </h1>
              </div>
              <div className="job-description mb-4">
                <h3 className="text-2xl py-2 font-semibold text-black">
                  About Job Profile
                </h3>
                {/* <p className="text-black font-semibold text-lg py-1">
                  Location: <span className="font-normal ">Delhi, India</span>
                </p>{" "} */}
                <p className="text-black font-semibold text-lg py-1">
                  {item?.type === 'internship' ? 'Stipend' : 'Salary'}:{" "}
                  <span className="font-normal ">
                    {item?.pay}
                  </span>
                </p>
                <p className="text-black font-semibold text-lg py-1">
                  Description:{" "}
                  <span className="font-normal ">
                    {item?.description}

                  </span>
                </p>
              </div>{" "}
              <div className="job-description mb-4">
                <h3 className="text-2xl py-2 font-semibold text-black">
                  About the {item?.type === 'internship' ? 'Internship' : 'Role'}
                </h3>

                <div>
                  <ul className="list-disc pl-5">
                    {item?.about?.map((data) => {
                      return (
                        <li className="text-black py-1" key={data?.id}>
                          {data?.name}
                        </li>
                      )
                    })}

                  </ul>
                </div>
              </div>{" "}

              {item?.qualification ? <>
                <div className="job-description mb-4 text-black">
                  <h3 className="text-2xl py-2 font-semibold text-black">
                    Skill(s) required
                  </h3>

                  <div>
                    <ul className="list-disc pl-5">
                      {item?.qualification.map((item) => {
                        return (

                          <li key={item?.id} className="text-black py-1">{item?.name} </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </> : ""}
              {item?.eligibility ? <>
                <div className="job-description mb-4 text-black">
                  <h3 className="text-2xl py-2 font-semibold text-black">
                    Eligibility


                  </h3>

                  <div>
                    <ul className="list-disc pl-5">
                      {item?.eligibility.map((item) => {
                        return (

                          <li key={item?.id} className="text-black py-1">{item?.name} </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </> : ""}
              {item?.employment_details ? <>
                <div className="job-description mb-4 text-black">
                  <h3 className="text-2xl py-2 font-semibold text-black">
                    Employment Details
                  </h3>

                  <div>
                    <ul className="list-disc pl-5">
                      {item?.employment_details.map((item) => {
                        return (

                          <li key={item?.id} className="text-black py-1">{item?.name} </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </> : ""}
              {item?.additional_support ? <>
                <div className="job-description mb-4 text-black">
                  <h3 className="text-2xl py-2 font-semibold text-black">
                    Additional Support
                  </h3>

                  <div>
                    <ul className="list-disc pl-5">
                      {item?.additional_support.map((item) => {
                        return (

                          <li key={item?.id} className="text-black py-1">{item?.name} </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </> : ""}

              {/* <div className="job-description mb-4 text-black">
                <h3 className="text-2xl py-2 font-semibold text-black">
                  Skill(s) required
                </h3>

                <div>
                  <ul className="list-disc pl-5">
                    <li className="text-black py-1">Business Analysis </li>
                    <li className="text-black py-1">Business Research</li>
                    <li className="text-black py-1">Effective Communication</li>
                    <li className="text-black py-1">Sales pitch</li>
                  </ul>
                </div>
              </div>{" "} */}
              {/* <div className="job-description mb-4">
                <h3 className="text-2xl py-2 font-semibold text-black">
                  Who can apply
                </h3>

                <div>
                  <ul className="list-disc pl-5">
                    <li className="text-black py-1">
                      Are available for full time (in-office) internship
                    </li>
                    <li className="text-black py-1">
                      Can start the internship between 1st Dec&apos;23 and 5th
                      Jan&apos;24
                    </li>
                    <li className="text-black py-1">
                      Are available for duration of 3 months
                    </li>
                    <li className="text-black py-1">
                      Have relevant skills and interests
                    </li>{" "}
                    <li className="text-black py-1">
                      Women wanting to start/restart their career can also
                      apply.
                    </li>
                  </ul>
                </div>
              </div>{" "} */}
              {/* <div className="job-description mb-4">
                <h3 className="text-2xl py-2 font-semibold text-black">
                  Perks
                </h3>

                <div>
                  <ul className="list-disc pl-5">
                    <li className="text-black py-1">Certificate</li>
                    <li className="text-black py-1">
                      Letter of recommendation
                    </li>
                    <li className="text-black py-1">Flexible work hours</li>
                    <li className="text-black py-1">Job offer</li>{" "}
                  </ul>
                </div>
              </div>{" "} */}
              {/* <div className="job-description mb-4">
                <h3 className="text-2xl py-2 font-semibold text-black">
                  Additional Information
                </h3>

                <div>
                  <p className="text-black font-semibold text-lg py-1">
                    Job offer :
                    <span className="font-normal ">
                      On successful conversion to a permanent employee, the
                      candidate can expect a salary of Rs. 800000 to 1100000
                      /year
                    </span>
                  </p>
                </div>
              </div>{" "} */}
              {/* <div className="job-description mb-4">
                <h3 className="text-2xl py-2 font-semibold text-black">
                  Number of openings
                </h3>

                <div>
                  <p className="text-black font-semibold text-lg py-1">1</p>
                </div>
              </div> */}
              <span
                onClick={showModal}
                className="bg-[#28c0d740] hover:bg-[#28c0d780] cursor-pointer duration-300 font-bold py-2  text-black text-center block rounded-full "
              >
                Apply for this job
              </span>
            </div>{" "}
            {/* end job-post */}
            <div className="w-full hidden md:block md:w-3/12">
              <div className="employer-info mb-2 text-center ">
                <Image
                  className="h-32 w-32 inline-block"
                  src={logoImg}
                  alt=""
                />
                <a href="#" className="text-sm ">
                  <h3 className="employer-name text-center py-5 text-xl text-black">
                    Cluix Pvt. Ltd.
                  </h3>
                </a>
              </div>
              <a onClick={showModal} className="bg-[#28c0d740] hover:bg-[#28c0d780] cursor-pointer duration-300 font-semibold  text-black text-center block rounded-full py-2 mb-4">
                Apply for this job
              </a>
            </div>{" "}
          </div>
        </main>
        <Modal
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          footer={""}
        >
          <div className="flex items-center justify-center px-2 py-2">
            {/* Author: FormBold Team */}
            {/* Learn More: https://formbold.com */}
            <div className="mx-auto w-full max-w-[550px] bg-white">
              <form>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium "
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-base font-medium "
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium "
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="file"
                    className="mb-3 block text-base font-medium "
                  >
                    Upload Your CV
                  </label>
                  <input
                    type="file"
                    name="file"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-lg font-normal  text-black"
                  >
                    I accept terms & conditions.
                  </label>
                </div>

                <div>
                  <button className="hover:shadow-form w-full text-lg rounded-md bg-[#28c0d740] hover:bg-[#28c0d780] cursor-pointer duration-300 py-2 px-6 text-center  font-semibold text-black outline-none">
                    Submit Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default JobDetailsPage;
