"use client";
// DEFINE ALL EXTERNAL IMPORT
import React, { useRef, useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { Modal } from "antd";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
  onSnapshot,
  query,
  where,
} from '@firebase/firestore';
import { getDownloadURL, ref, uploadString } from '@firebase/storage';

// DEFINE ALL INTERNAL IMPORT
import LifeStyle from "../AboutUsPage/LifeStyle/LifeStyle";
import img1 from "../../../public/lifeImage/img7.jpg";
import img2 from "../../../public/lifeImage/img8.jpg";
import img3 from "../../../public/lifeImage/img9.jpg";
import img4 from "../../../public/lifeImage/img10.jpg";
import img5 from "../../../public/lifeImage/img11.jpg";
import img6 from "../../../public/lifeImage/img12.jpg";
import db, { storage } from "../../../firebase";
import { SubTitle } from "../shared";



// DEFINE MAIN FUNCTION 
const ApplyForJob = () => {
  const user =
  {
    id: 1,
    name: "Pavandeep"
  }

  // DEFINE ALL STATES
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [businessName, setBusinessName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [businessCity, setBusinessCity] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [logo, setLogo] = useState(
    'https://www.pesmcopt.com/admin-media/images/default-logo.png'
  );
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  // DEFINE SHOW MODEL FUNCTION
  const showModal = () => {
    setOpen(true);
  };
  // DEFINE HANDLE OK FUNCTION
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  // DEFINE HANDLE CANCEL MODEL
  const handleCancel = () => {
    setOpen(false);
  };
  

  useEffect(() => {
    
    try {
      const q = query(
        collection(db, 'businesses'),
        where('user_id', '==', user.id)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const business = [];
        querySnapshot.forEach((doc) => {
          business.push(doc.data().name);
        });
        setLoading(false);
      });
      return () => unsubscribe();
    } catch (error) {
      console.log(error);
    }
  }, [user.id]);

  const handleFileReader = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setLogo(readerEvent.target.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'businesses'), {
      user_id: user.id,
      businessName,
      businessAddress,
      businessCity,
      accountName,
      accountNumber,
      bankName,
    });
    const imageRef = ref(storage, `businesses/${docRef.id}/image`);
    if (
      logo !== 'https://www.pesmcopt.com/admin-media/images/default-logo.png'
    ) {
      await uploadString(imageRef, logo, 'data_url').then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, 'businesses', docRef.id), {
          logo: downloadURL,
        });
      });
      setOpen(false)
    }
  };


  const jobPostData = [
    {
      id: 1,
      title: "Social Media Intern",
      desc: " If you are interested in being part of an innovative startup that works towards serving the common good. This opportunity is for students who are looking for some extra pocket money or a side hustle. Freshers can also apply      ",
      location: "Work from home",
      postion: "Full Time",
    },
    {
      id: 2,
      title: "Sales Intern",
      desc: "The sales intern will be responsible for actively seeking new sales opportunities through cold calling in Delhi NCR. They should be able to illustrate our product's features and benefits over face-to-face meetings with potential customers. ",
      location: "Hybrid ",
      postion: "Full Time",
    },
    // {
    //   id: 3,
    //   title: "Startup Growth Intern",
    //   desc: "CLUIX: Deep-tech social startup. Aims: minimize undetectable contaminants in drinking water. Developed IoT multi-parameter device, tests 8 critical parameters, shares data with central server.",
    //   location: "Delhi",
    //   postion: "Full Time",
    // },
  ];

  const lifeImg = [
    { id: 1, image: img1 },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
    {
      id: 5,
      image: img5,
    },
    {
      id: 6,
      image: img6,
    },
    // {
    //   id: 7,
    //   image: img7,
    // },
    // {
    //   id: 8,
    //   image: img8,
    // },
    // {
    //   id: 9,
    //   image: img9,
    // },
    // {
    //   id: 10,
    //   image: img10,
    // },
  ];

  // DEFINE MAIN FUNCTIONS RETURN 
  return (
    <div>
      <video autoPlay muted loop width={"100%"} height={"100%"}>
        <source src="/video1.mp4" width={"100%"} height={"100%"} />
      </video>
      <button
        onClick={showModal}
        className="py-1 lg:py-4 md:left-[87px]  rounded-xl flex items-center gap-6 px-3 lg:px-7 absolute top-[32vh] sm:top-[30vh] lg:top-[90vh] xl:top-[98vh]  left-[38px] bg-[#000000af] h-fit sm:left-[100px] lg:left-[100px] xl:left-[150px]  font-bold text-white  text-2xl z-50 "
      >
        Apply now
        <span>
          <IoArrowForwardCircleSharp className="h-5 xl:h-8 w-5 xl:w-8 size-7" />
        </span>
      </button>

      <section className="relative pt-10 p bg-blueGray-50 overflow-hidden">
        <img
          className="absolute left-1/2 bottom-0 transform -translate-x-1/2"
          src="flaro-assets/images/career/gradient2.svg"
          alt=""
        />
        <div className="relative z-10  px-4 ">
          <SubTitle> Open Positions</SubTitle>

          <div className="grid grid-cols-1 px-2 sm:px-10  xl:px-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 lg:gap-8 justify-center -m-2 mb-1.5 pt-10">
            {jobPostData.map((item) => {
              return (
                <div className="w-full p-2 " key={item?.id}>
                  <Link
                    className="group"
                    href={`/company/apply-for-job/${item?.id}`}
                  >
                    <div className="p-8 h-full w-full shadow-md shadow-gray-400 bg-white bg-opacity-80 border group-hover:border-[var(--light-blue)] rounded-xl">
                      <div className="flex flex-col  justify-between h-full">
                        <div className="mb-10">
                          <h3 className="mb-2 text-[28px] font-bold font-heading leading-snug text-black">
                            {item?.title}
                          </h3>
                          <p className="text-lg text-black">{item?.desc}</p>
                        </div>
                        <div className="flex flex-wrap justify-between items-center -m-2">
                          <div className="w-auto p-2">
                            <div className="flex flex-wrap -m-3">
                              <div className="w-auto p-3">
                                <div className="flex flex-wrap items-center -m-1">
                                  <div className="w-auto p-1">
                                    <FaLocationDot />
                                  </div>
                                  <div className="w-auto p-1">
                                    <p className="font-sans leading-relaxed">
                                      {item?.location}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="w-auto p-3">
                                <div className="flex flex-wrap items-center -m-1">
                                  <div className="w-auto p-1">
                                    <FaLocationDot />
                                  </div>
                                  <div className="w-auto p-1">
                                    <p className="font-sans leading-relaxed">
                                      Full-time
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-auto p-2">
                            <div className="" href="#">
                              <svg
                                width={17}
                                height={16}
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.83333 3.33337L14.5 8.00004M14.5 8.00004L9.83333 12.6667M14.5 8.00004L2.5 8.00004"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className=" px-4 sm:px-8 xl:px-60    ">
        <SubTitle className="text-center py-8 lg:py-16"> Empowering Excellence - Join Our Team at CLUIX</SubTitle>
        {/* <h3 className=""></h3> */}
        <p className="px-30 text-xl text-center pt-3">
          At CLUIX, we believe our greatest asset walks through the door each
          day. That&apos;s why we prioritise fostering a talented and passionate
          team through a strong focus on Human Resources. We offer competitive
          benefits, professional development opportunities, and a culture that
          values growth. We strongly believe that invested-in employees lead to
          a thriving company, and we&apos;re committed to making you feel valued
          and supported throughout your career journey with us.
        </p>
      </div>

      <div className="px-4">
        <LifeStyle
          title={"Life @ CLUIX "}
          data={lifeImg}

          className={" h-[200px] md:h-[400px] lg:h-[500px] w-fit gap-4 lg:w-fit lg:grid-cols-6"}

        />
      </div>
      <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={""}
      >
        <>

          <div>

            <div className="w-full md:p-8  mx-auto  rounded p-3 ">
              <h3 className="text-center font-bold text-xl mb-6">
                Apply Job Form
              </h3>

              <form
                className="w-full  flex flex-col"
                onSubmit={handleSubmit}
              >
                <label htmlFor="businessName" className="text-sm">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="py-2 px-4 bg-gray-100 w-full mb-6 capitalize rounded"
                  name="businessName"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />

                {/* <div className="flex items-end space-x-4">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="businessAddress" className="text-sm">
                    Address
                  </label>
                  <input
                    type="text"
                    required
                    className="py-2 px-4 bg-gray-100 w-full mb-6 capitalize rounded"
                    name="businessAddress"
                    value={businessAddress}
                    onChange={(e) => setBusinessAddress(e.target.value)}
                  />
                </div>

                <div className="flex flex-col w-1/2">
                  <label htmlFor="businessCity" className="text-sm">
                    City/Country
                  </label>
                  <input
                    type="text"
                    required
                    className="py-2 px-4 bg-gray-100 w-full mb-6 capitalize rounded"
                    name="businessCity"
                    value={businessCity}
                    onChange={(e) => setBusinessCity(e.target.value)}
                  />
                </div>
              </div> */}

                <label htmlFor="accountName" className="text-sm">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="py-2 px-4 bg-gray-100 w-full mb-6 capitalize rounded"
                  name="accountName"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                />


                <label htmlFor="accountName" className="text-sm">
                  Why you want to join CLUIX

                </label>

                <textarea

                  required
                  className="py-2 px-4 bg-gray-100 w-full mb-6 capitalize rounded"
                  name="bankName"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                />
                <label htmlFor="accountName" className="text-sm">
                  Field of Interest

                </label>

                <select

                  required
                  className="py-2 px-4 bg-gray-100 w-full mb-6 capitalize rounded"
                  name="businessCity"
                  value={businessCity}
                  onChange={(e) => setBusinessCity(e.target.value)}
                >
                  <option value={"Marketing"} >Marketing</option>
                  <option value={"Sales"} >Sales</option>
                </select>
                <div className="flex items-center space-x-4 w-full">


                  <div className="flex flex-col w-full">
                    <label htmlFor="logo" className="text-sm mb-1">
                      Upload Your Cv
                    </label>
                    <input
                      type="file"
                      accept=""
                      required
                      className="w-full mb-6  rounded"
                      name="logo"
                      onChange={handleFileReader}
                    />
                  </div>
                </div>

                <button className=" bg-black text-gray-100 w-full px-4 rounded py-3">
                  Submit
                </button>
              </form>
            </div>
          </div>

        </>
      </Modal>
    </div>
  );
};

// DEFINE MAIN FUNCTIONS EXPORT
export default ApplyForJob;
