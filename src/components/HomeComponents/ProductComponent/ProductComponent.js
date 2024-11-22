"use client";
import Image from "next/image";
import product from "../../../../public/img/reajent3.png";
import { SubTitle } from "@/components/shared";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import ViewMore from "@/components/shared/typography/ViewMore";
import product1 from "../../../../public/img/C0121.png";
import product2 from "../../../../public/product/product8.png";
import product4 from "../../../../public/product4.jpg";

const ProductComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  const showModal = (id) => {
    setIsModalOpen(true);
  };
  const handleOk = (data) => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  let productdata = [
    {
      id: 2,
      name: "CLUIX C012",
      price: "76,227.00 + GST",
      image: product1,
      morebtn: (
        <>
          <div>
            <Link className="text-black hover:text-black" href={`/product/2`}>
              View More
            </Link>
          </div>
        </>
      ),
    },
    {
      id: 1,
      name: "Reagent Kit(100 Test)",
      price: "15,000.00 + GST",
      image: product,
      morebtn: (
        <>
          <div>
            <Link className="text-black hover:text-black" href={`/product/1`}>
              View More
            </Link>
          </div>
        </>
      ),
      btn: (
        <>
          <div onClick={showModal}>Add to cart</div>
        </>
      ),
    },
    {
      id: 3,
      name: "Inline TDS Meter",
      price: "1200.00 + GST",
      image: product2,
      morebtn: (
        <>
          <div>
            <Link className="text-black hover:text-black" href={`/product/3`}>
              View More
            </Link>
          </div>
        </>
      ),
      btn: (
        <>
          <div onClick={showModal}>Add to cart</div>
        </>
      ),
    },
    {
      id: 4,
      name: "“Varunaa” water level monitoring system",
      price: "Coming Soon...",
      image: product4,
      btn: (
        <>
          <div onClick={showModal}>Add to cart</div>
        </>
      ),
      morebtn: (
        <>
          <div>
            <Link className="text-black hover:text-black" href={`/product/4`}>
              View More
            </Link>
          </div>
        </>
      ),
    },
  ];
  let productdataHome = [
    {
      id: 2,
      name: "CLUIX C012",
      price: "76,227.00 + GST",
      image: product1,
      morebtn: (
        <>
          <div>
            <Link className="text-black hover:text-black" href={`/product/2`}>
              View More
            </Link>
          </div>
        </>
      ),
    },
    {
      id: 1,
      name: "Reagent Kit(100 Test)",
      price: "15,000.00 + GST",
      image: product,

      morebtn: (
        <>
          <div>
            <Link className="text-black hover:text-black" href={`/product/1`}>
              View More
            </Link>
          </div>
        </>
      ),
      btn: (
        <>
          <div onClick={showModal}>Add to cart</div>
        </>
      ),
    },
    {
      id: 3,
      name: "Inline TDS Meter",
      price: "1200.00 + GST",
      image: product2,
      morebtn: (
        <>
          <div>
            <Link className="text-black hover:text-black" href={`/product/3`}>
              View More
            </Link>
          </div>
        </>
      ),
      btn: (
        <>
          <div onClick={showModal}>Add to cart</div>
        </>
      ),
    },
  ];
  console.log("pathname", pathname);

  return (
    <div className="lg:py-5 pt-0 pb-8 lg:pb-10 px-5 xl:px-[130px] sm:px-10  bg-slate-100 ">
      <SubTitle
        className={`${
          pathname == "/" ? "pb-8 lg:pb-16 pt-3 lg:pt-6" : "py-5 lg:py-10"
        } my-0`}
      >
        Our Products{" "}
      </SubTitle>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 "
      >
        {pathname !== "/" &&
          productdata &&
          productdata.map((data, index) => (
            <div
              data-aos="fade-up"
              key={data?.id}
              className="relative flex flex-col overflow-hidden  rounded-lg border border-gray-100 bg-white shadow-md shadow-gray-400"
            >
              <div
                className="relative flex h-60 lg:h-80 overflow-hidden "
                // href={`/product/${data?.id}`}
              >
                <Image
                  className="object-fill bg-white  "
                  src={data?.image}
                  alt="product image"
                />
              </div>
              <div className="mt-4 px-5 pb-5">
                <div>
                  <h5
                    data-aos="fade-up"
                    className="text-2xl  tracking-tight font-semibold  text-black"
                  >
                    {data && data?.name}
                  </h5>
                </div>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p data-aos="fade-up">
                    <span className="text-2xl font-bold text-black">
                      &#x20B9; {data && data?.price}
                    </span>
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Link href={"https://mydukaan.io/cluix1"}>
                    <div
                      data-aos="fade-up"
                      className="flex items-center justify-center rounded-md bg-[#28c0d740] px-3 py-2 lg:px-5 lg:py-2.5 text-center text-sm font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-[var(--light-blue)]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      {/* <Link className="text-black " href={"https://mydukaan.io/cluix1"}> */}
                      <button className="font-medium   text-nowrap text-sm lg:text-lg">
                        {" "}
                        Add to Cart
                      </button>
                      {/* </Link> */}
                    </div>{" "}
                  </Link>
                  <div
                    data-aos="fade-up"
                    className="flex border-2 items-center justify-center rounded-md  lg:px-5 lg:py-2.5 text-center text-sm font-medium text-black  focus:outline-none focus:ring-4 focus:ring-[var(--light-blue)]"
                  >
                    <button className="font-medium text-nowrap text-sm lg:text-lg h-fit ">
                      {" "}
                      {data?.morebtn}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        {pathname !== "/product" &&
          productdataHome &&
          productdataHome.map((data, index) => (
            <div
              data-aos="fade-up"
              key={data?.id}
              className="relative flex flex-col overflow-hidden  rounded-lg border border-gray-100 bg-white shadow-md shadow-gray-400"
            >
              <div
                className="relative flex h-60 lg:h-80 overflow-hidden "
                // href={`/product/${data?.id}`}
              >
                <Image
                  className="object-fill bg-white  "
                  src={data?.image}
                  alt="product image"
                />
              </div>
              <div className="mt-4 px-5 pb-5">
                <div>
                  <h5
                    data-aos="fade-up"
                    className="text-2xl  tracking-tight font-semibold  text-black"
                  >
                    {data && data?.name}
                  </h5>
                </div>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p data-aos="fade-up">
                    <span className="text-2xl font-bold text-black">
                      &#x20B9; {data && data?.price}
                    </span>
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    data-aos="fade-up"
                    onClick={() => router.push("https://mydukaan.io/cluix1")}
                    className="flex items-center justify-center rounded-md bg-[#28c0d740] px-3 py-2 lg:px-5 lg:py-2.5 text-center text-sm font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-[var(--light-blue)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {/* <Link className="text-black " href={"https://mydukaan.io/cluix1"}> */}
                    <button className="font-medium   text-nowrap text-sm lg:text-lg">
                      {" "}
                      Add to Cart
                    </button>
                    {/* </Link> */}
                  </div>{" "}
                  <div
                    data-aos="fade-up"
                    className="flex border-2 items-center justify-center rounded-md  lg:px-5 lg:py-2.5 text-center text-sm font-medium text-black  focus:outline-none focus:ring-4 focus:ring-[var(--light-blue)]"
                  >
                    <button className="font-medium text-nowrap text-sm lg:text-lg h-fit ">
                      {" "}
                      {data?.morebtn}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <h2
        className={`text-center text-2xl pt-10 ${
          pathname == "/product" && "pb-10"
        } flex justify-center items-center `}
      >
        <ViewMore>
          <Link
            href="https://mydukaan.io/cluix1"
            className="text-black hover:text-black"
          >
            View more products
          </Link>
        </ViewMore>
      </h2>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        centered
        onCancel={handleCancel}
        style={{
          width: "300px",
        }}
      >
        <h2 className="text-2xl"> Coming soon...!</h2>
      </Modal>
    </div>
  );
};

export default ProductComponent;
