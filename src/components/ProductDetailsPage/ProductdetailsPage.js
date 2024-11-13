"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import product from "../../../public/img/reajent1.png";
import prduct1 from "../../../public/product2.png";
import prduct2 from "../../../public/product4.jpg";
import prduct3 from "../../../public/img/reajent2.png";
import prduct4 from "../../../public/img/reajent3.png";
import prduct5 from "../../../public/img/C012-1.png";
import prduct6 from "../../../public/img/C012-1.png";
import prduct7 from "../../../public/img/C012.png";
import prduct8 from "../../../public/img/C012-2.png";
import prduct9 from "../../../public/product/product8.jpg";
import prduct10 from "../../../public/product/product9.jpg";
import prduct11 from "../../../public/product/product10.jpg";
import Image from "next/image";
import { useParams } from "next/navigation";
import AnimatedCard from "./AnimatedCard";
import product1 from "../../../public/img/C012.png";
import product4 from "../../../public/product4.jpg";
// import './product.css'

const ProductdetailsPage = ({ data }) => {
  const { id } = useParams();
  const [imageId, setImageId] = useState(1);
  const [productfilteredData, setProductFilteredData] = useState([]);
  const [productfilteredDetailsData, setProductFilteredDetailsData] = useState(
    []
  );
  console.log("hiiid", id);
  const [productId, setProductId] = useState(parseInt(data?.id));
  console.log("productId", productId);
  const dataArray = [
    { id: 1, name: "Reagent Kit(100 Test)", price: "₹ 15,000.00" },
    { id: 2, name: "Reagent Kit(100 Test)", price: "₹ 15,000.00" },
    { id: 3, name: "Reagent Kit(100 Test)", price: "₹ 15,000.00" },
  ];

  // Function to filter based on id
  const filterById = (dataArray, id) => {
    return dataArray.filter((item) => item.id === id);
  };

  // Example usage
  // const filteredArray = filterById(dataArray, data?.id);
  // console.log("filteredArrayfilteredArrayfilteredArray", filteredArray);
  let productData = [
    {
      id: 1,
      name: "Reagent Kit(100 Test)",
      price: "₹ 15,000.00",
      title: "Reagent Kit(100 Test)",
      productDetails: {
        quantity: "1",
        price: "15,000.00",
        availability: " 10 In Stock",
        minOrder: 1,
      },

      images: [
        {
          id: 1,
          image: product,
        },
        {
          id: 2,
          image: prduct3,
        },
        {
          id: 3,
          image: prduct4,
        },
        {
          id: 4,
          image: product,
        },
      ],
      data: [
        {
          id: 1,
          name: "Type/Nomenclature/Protection  ",
          image: product,
          details: [
            {
              id: 1,
              label: "Type of Meter/Analyzer	",
              value: "Hand-Held  ",
            },
            {
              id: 2,
              label: "Frequency of Calibration		",
              value: "Pre-Calibrated      ",
            },
            {
              id: 3,
              label: "Ingress Protection		",
              value: "IP 67      ",
            },
          ],
        },
        {
          id: 2,
          name: "Measurement of Starch      ",
          image: product,
          details: [
            {
              id: 1,
              label: "Technology/Method/Principle of Measurement of Starch		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 2,
              label: "Reagents used in Measurement of Starch	",
              value: "NA ",
            },
            {
              id: 3,
              label: "Starch Measurement Range ( In mg/L or ppm)		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 4,
              label: "Starch Resolution (IN mg/L or ppm)		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 5,
              label: "Starch Accuracy ( +/- ) ( In %)		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 6,
              label:
                "Quantity of Tests ( in Measurement of Starch) for which reagents are provided	",
              value: "NA           ",
            },
          ],
        },
        {
          id: 3,
          name: "Application and Approval  ",
          image: product,
          details: [
            {
              id: 1,
              label: "Intended Application	",
              value:
                "To test and analyze various Water Quality Parameters to ensure Uniform Drinking Water Quality Protocol, 2019 and BIS IS 10500:2012 (Second Version) and subsequent amendments          ",
            },
            {
              id: 2,
              label:
                "Approvals ( Hint: Buyer shall ensure/verify valid approvals before accepting the stocks)	",
              value:
                "Having Approval From Jal Jeevan Mission Approved Laboratory to prove conformity to the specifications          ",
            },
          ],
        },
        {
          id: 4,
          name: "MEASURED & DETECTED WATER QUALITY PARAMETERS      ",
          image: product,
          details: [
            {
              id: 1,
              label: "Measured Water Quality Parameters	",
              value:
                "Potential of hydrogen (pH),Total dissolved solids (TDS),Turbidity,Color,Free Residual Chlorine,Total Hardness,Electrical Conductivity,Lead          ",
            },
            {
              id: 2,
              label: "Detected Water Quality Parameters			",
              value: "NA",
            },
          ],
        },
      ],
      image: product,
    },
    {
      id: 2,
      name: "C012",
      price: "₹ 68,500.00",
      title:
        "CLUIX-C012 Hand-Held Digital Water Quality Testers/Analyzers With Warranty Of 2024",
      productDetails: {
        quantity: "0",
        price: "0",
        availability: " 10 In Stock",
        minOrder: 0,
      },

      images: [
        {
          id: 1,
          image: prduct5,
        },
        {
          id: 2,
          image: prduct6,
        },
        {
          id: 3,
          image: prduct7,
        },
        {
          id: 4,
          image: prduct8,
        },
      ],
      data: [
        {
          id: 1,
          name: "Type/Nomenclature/Protection  ",
          image: product1,
          details: [
            {
              id: 1,
              label: "Type of Meter/Analyzer	",
              value: "Hand-Held  ",
            },
            {
              id: 2,
              label: "Frequency of Calibration		",
              value: "Pre-Calibrated      ",
            },
            {
              id: 3,
              label: "Ingress Protection		",
              value: "IP 67      ",
            },
          ],
        },
        {
          id: 2,
          name: "Measurement of Starch      ",
          image: product1,
          details: [
            {
              id: 1,
              label: "Technology/Method/Principle of Measurement of Starch		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 2,
              label: "Reagents used in Measurement of Starch	",
              value: "NA ",
            },
            {
              id: 3,
              label: "Starch Measurement Range ( In mg/L or ppm)		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 4,
              label: "Starch Resolution (IN mg/L or ppm)		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 5,
              label: "Starch Accuracy ( +/- ) ( In %)		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 6,
              label:
                "Quantity of Tests ( in Measurement of Starch) for which reagents are provided	",
              value: "NA           ",
            },
          ],
        },
        {
          id: 3,
          name: "Application and Approval  ",
          image: product1,
          details: [
            {
              id: 1,
              label: "Intended Application	",
              value:
                "To test and analyze various Water Quality Parameters to ensure Uniform Drinking Water Quality Protocol, 2019 and BIS IS 10500:2012 (Second Version) and subsequent amendments          ",
            },
            {
              id: 2,
              label:
                "Approvals ( Hint: Buyer shall ensure/verify valid approvals before accepting the stocks)	",
              value:
                "Having Approval From Jal Jeevan Mission Approved Laboratory to prove conformity to the specifications          ",
            },
          ],
        },
        {
          id: 4,
          name: "MEASURED & DETECTED WATER QUALITY PARAMETERS      ",
          image: product1,
          details: [
            {
              id: 1,
              label: "Measured Water Quality Parameters	",
              value:
                "Potential of hydrogen (pH),Total dissolved solids (TDS),Turbidity,Color,Free Residual Chlorine,Total Hardness,Electrical Conductivity,Lead          ",
            },
            {
              id: 2,
              label: "Detected Water Quality Parameters			",
              value: "NA",
            },
          ],
        },
      ],
      image: product1,
    },
    {
      id: 3,
      name: "Inline TDS Meter",
      price: "1200.00",
      title:
        "The Inline TDS Meter provides a convenient and real-time solution for monitoring Total Dissolved Solids (TDS) in water.",
      productDetails: {
        quantity: "0",
        price: "0",
        availability: " 10 In Stock",
        minOrder: 0,
      },
      benifit: {
        id: 1,
        title: " Benefits of using an Inline TDS Meter:    ",
        description: [
          {
            id: 1,
            title: "Continuous Monitoring",
            description:
              "Gain instant insight into your water quality, 24/7. Early Detection: Identify changes in TDS levels quickly, allowing you to take immediate action if necessary.",
          },
          {
            id: 2,
            title: "Improved Efficiency",
            description:
              "Monitor water quality for various applications, such as optimizing reverse osmosis systems or ensuring proper water quality for specific processes.",
          },
        ],
      },

      images: [
        {
          id: 1,
          image: prduct9,
        },
        {
          id: 2,
          image: prduct10,
        },
        {
          id: 3,
          image: prduct11,
        },
        {
          id: 4,
          image: prduct11,
        },
      ],
      data: [
        {
          id: 1,
          name: "Type/Nomenclature/Protection  ",
          image: prduct9,
          details: [
            {
              id: 1,
              label: "Type of Meter/Analyzer	",
              value: "Hand-Held  ",
            },
            {
              id: 2,
              label: "Frequency of Calibration		",
              value: "Pre-Calibrated      ",
            },
            {
              id: 3,
              label: "Ingress Protection		",
              value: "IP 67      ",
            },
          ],
        },
        {
          id: 2,
          name: "Measurement of Starch      ",
          image: prduct10,
          details: [
            {
              id: 1,
              label: "Technology/Method/Principle of Measurement of Starch		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 2,
              label: "Reagents used in Measurement of Starch	",
              value: "NA ",
            },
            {
              id: 3,
              label: "Starch Measurement Range ( In mg/L or ppm)		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 4,
              label: "Starch Resolution (IN mg/L or ppm)		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 5,
              label: "Starch Accuracy ( +/- ) ( In %)		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 6,
              label:
                "Quantity of Tests ( in Measurement of Starch) for which reagents are provided	",
              value: "NA           ",
            },
          ],
        },
        {
          id: 3,
          name: "Application and Approval  ",
          image: prduct11,
          details: [
            {
              id: 1,
              label: "Intended Application	",
              value:
                "To test and analyze various Water Quality Parameters to ensure Uniform Drinking Water Quality Protocol, 2019 and BIS IS 10500:2012 (Second Version) and subsequent amendments          ",
            },
            {
              id: 2,
              label:
                "Approvals ( Hint: Buyer shall ensure/verify valid approvals before accepting the stocks)	",
              value:
                "Having Approval From Jal Jeevan Mission Approved Laboratory to prove conformity to the specifications          ",
            },
          ],
        },
        {
          id: 4,
          name: "MEASURED & DETECTED WATER QUALITY PARAMETERS      ",
          image: prduct10,
          details: [
            {
              id: 1,
              label: "Measured Water Quality Parameters	",
              value:
                "Potential of hydrogen (pH),Total dissolved solids (TDS),Turbidity,Color,Free Residual Chlorine,Total Hardness,Electrical Conductivity,Lead          ",
            },
            {
              id: 2,
              label: "Detected Water Quality Parameters			",
              value: "NA",
            },
          ],
        },
      ],
      image: product1,
    },
    {
      id: 4,
      name: "Comming soon",
      price: "Comming soon ",
      title:
        "Borewell Water Level Meter, a reliable tool for monitoring groundwater depth. This handy device helps in the following",
      productDetails: {
        quantity: "0",
        price: "0",
        availability: " 10 In Stock",
        minOrder: 0,
      },
      benifit: {
        id: 1,
        title: " Benefits of using an ....   ",
        description: [
          {
            id: 1,
            title: "Track water availability",
            description:
              "Get accurate readings of the water level in your borewell, ensuring informed decisions about water usage. Optimize well maintenance: Regularly monitor water levels to identify potential problems like depletion or well malfunction.",
          },
          {
            id: 2,
            title: "Plan water usage",
            description:
              "Make informed decisions about irrigation, household needs, and water conservation strategies based on real-time data.Easy to use and portable, the Borewell Water Level Meter offers a simple solution for homeowners, farmers, and anyone relying on borewell water.",
          },
        ],
      },

      images: [
        {
          id: 1,
          image: product4,
        },
        {
          id: 2,
          image: product4,
        },
        {
          id: 3,
          image: product4,
        },
        {
          id: 4,
          image: product4,
        },
      ],
      data: [
        {
          id: 1,
          name: "Type/Nomenclature/Protection  ",
          image: product4,
          details: [
            {
              id: 1,
              label: "Type of Meter/Analyzer	",
              value: "Hand-Held  ",
            },
            {
              id: 2,
              label: "Frequency of Calibration		",
              value: "Pre-Calibrated      ",
            },
            {
              id: 3,
              label: "Ingress Protection		",
              value: "IP 67      ",
            },
          ],
        },
        {
          id: 2,
          name: "Measurement of Starch      ",
          image: product4,
          details: [
            {
              id: 1,
              label: "Technology/Method/Principle of Measurement of Starch		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 2,
              label: "Reagents used in Measurement of Starch	",
              value: "NA ",
            },
            {
              id: 3,
              label: "Starch Measurement Range ( In mg/L or ppm)		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 4,
              label: "Starch Resolution (IN mg/L or ppm)		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 5,
              label: "Starch Accuracy ( +/- ) ( In %)		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 6,
              label:
                "Quantity of Tests ( in Measurement of Starch) for which reagents are provided	",
              value: "NA           ",
            },
          ],
        },
        {
          id: 3,
          name: "Application and Approval  ",
          image: product4,
          details: [
            {
              id: 1,
              label: "Intended Application	",
              value:
                "To test and analyze various Water Quality Parameters to ensure Uniform Drinking Water Quality Protocol, 2019 and BIS IS 10500:2012 (Second Version) and subsequent amendments          ",
            },
            {
              id: 2,
              label:
                "Approvals ( Hint: Buyer shall ensure/verify valid approvals before accepting the stocks)	",
              value:
                "Having Approval From Jal Jeevan Mission Approved Laboratory to prove conformity to the specifications          ",
            },
          ],
        },
        {
          id: 4,
          name: "MEASURED & DETECTED WATER QUALITY PARAMETERS      ",
          image: product4,
          details: [
            {
              id: 1,
              label: "Measured Water Quality Parameters	",
              value:
                "Potential of hydrogen (pH),Total dissolved solids (TDS),Turbidity,Color,Free Residual Chlorine,Total Hardness,Electrical Conductivity,Lead          ",
            },
            {
              id: 2,
              label: "Detected Water Quality Parameters			",
              value: "NA",
            },
          ],
        },
      ],
      image: product4,
    },
  ];

  useEffect(() => {
    const filteredArray = filterById(productData, parseInt(id));
    const filteredDetailsArray = filterById(productDescriptions, parseInt(id));
    setProductFilteredDetailsData(filteredDetailsArray);
    console.log("filteredArrayfilteredArrayfilteredArray", filteredArray);
    setProductFilteredData(filteredArray);
  }, [id]);
  console.log("setProductFilteredData", productfilteredData);

  const productArray = filterById(productData, id);
  const productDetailsData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

  const productDescriptions = [
    {
      id: 1,
      data: [
        {
          id: 1,
          name: "Type/Nomenclature/Protection  ",
          details: [
            {
              id: 1,
              label: "Type of Meter/Analyzer	",
              value: "Hand-Held  ",
            },
            {
              id: 2,
              label: "Frequency of Calibration		",
              value: "Pre-Calibrated      ",
            },
            {
              id: 3,
              label: "Ingress Protection		",
              value: "IP 67      ",
            },
          ],
        },
        {
          id: 2,
          name: "Measurement of Starch      ",
          details: [
            {
              id: 1,
              label: "Technology/Method/Principle of Measurement of Starch		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 2,
              label: "Reagents used in Measurement of Starch	",
              value: "NA ",
            },
            {
              id: 3,
              label: "Starch Measurement Range ( In mg/L or ppm)		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 4,
              label: "Starch Resolution (IN mg/L or ppm)		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 5,
              label: "Starch Accuracy ( +/- ) ( In %)		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 6,
              label:
                "Quantity of Tests ( in Measurement of Starch) for which reagents are provided	",
              value: "NA           ",
            },
          ],
        },
        {
          id: 3,
          name: "Application and Approval  ",
          details: [
            {
              id: 1,
              label: "Intended Application	",
              value:
                "To test and analyze various Water Quality Parameters to ensure Uniform Drinking Water Quality Protocol, 2019 and BIS IS 10500:2012 (Second Version) and subsequent amendments          ",
            },
            {
              id: 2,
              label:
                "Approvals ( Hint: Buyer shall ensure/verify valid approvals before accepting the stocks)	",
              value:
                "Having Approval From Jal Jeevan Mission Approved Laboratory to prove conformity to the specifications          ",
            },
          ],
        },
        {
          id: 4,
          name: "MEASURED & DETECTED WATER QUALITY PARAMETERS      ",
          details: [
            {
              id: 1,
              label: "Measured Water Quality Parameters	",
              value:
                "Potential of hydrogen (pH),Total dissolved solids (TDS),Turbidity,Color,Free Residual Chlorine,Total Hardness,Electrical Conductivity,Lead          ",
            },
            {
              id: 2,
              label: "Detected Water Quality Parameters			",
              value: "NA",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      data: [
        {
          id: 1,
          name: "Type/Nomenclature/Protection  ",
          details: [
            {
              id: 1,
              label: "Type of Meter/Analyzer	",
              value: "Hand-Held  ",
            },
            {
              id: 2,
              label: "Frequency of Calibration		",
              value: "Pre-Calibrated      ",
            },
            {
              id: 3,
              label: "Ingress Protection		",
              value: "IP 67      ",
            },
          ],
        },
        {
          id: 2,
          name: "Measurement of Starch      ",
          details: [
            {
              id: 1,
              label: "Technology/Method/Principle of Measurement of Starch		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 2,
              label: "Reagents used in Measurement of Starch	",
              value: "NA ",
            },
            {
              id: 3,
              label: "Starch Measurement Range ( In mg/L or ppm)		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 4,
              label: "Starch Resolution (IN mg/L or ppm)		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 5,
              label: "Starch Accuracy ( +/- ) ( In %)		",
              value: "NA ( Starch Measurement Not Offered)          ",
            },
            {
              id: 6,
              label:
                "Quantity of Tests ( in Measurement of Starch) for which reagents are provided	",
              value: "NA           ",
            },
          ],
        },
        {
          id: 3,
          name: "Application and Approval  ",
          details: [
            {
              id: 1,
              label: "Intended Application	",
              value:
                "To test and analyze various Water Quality Parameters to ensure Uniform Drinking Water Quality Protocol, 2019 and BIS IS 10500:2012 (Second Version) and subsequent amendments          ",
            },
            {
              id: 2,
              label:
                "Approvals ( Hint: Buyer shall ensure/verify valid approvals before accepting the stocks)	",
              value:
                "Having Approval From Jal Jeevan Mission Approved Laboratory to prove conformity to the specifications          ",
            },
          ],
        },
        {
          id: 4,
          name: "MEASURED & DETECTED WATER QUALITY PARAMETERS      ",
          details: [
            {
              id: 1,
              label: "Measured Water Quality Parameters	",
              value:
                "Potential of hydrogen (pH),Total dissolved solids (TDS),Turbidity,Color,Free Residual Chlorine,Total Hardness,Electrical Conductivity,Lead          ",
            },
            {
              id: 2,
              label: "Detected Water Quality Parameters			",
              value: "NA",
            },
          ],
        },
      ],
    },
  ];

  const TitleProductDetails = ({ children }) => {
    return <h3 className="text-2xl pt-4 font-bold text-black">{children}</h3>;
  };
  const ProductDescrition = ({ lable, text }) => {
    return (
      <div className="our_price pb-2  ">
        <label className="text-lg font-[600]">{lable}</label>
        <span className=" font-normal"> {text}</span>
      </div>
    );
  };
  console.log("filtered product", productfilteredData);

  return (
    <div className=" bg-white px-4 2xl:px-[123px]">
      <div className="pt-6 ">
        {productfilteredData &&
          productfilteredData.map((item) => (
            <>
              <div
                key={item?.id}
                className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 px-4 md:px-5 lg:px-16 2xl:px-30"
              >
                <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                  <div className="bg-white  p-10 pt-0 px-2 rounded-xl">
                    <Image
                      src={item?.images[imageId - 1]?.image}
                      alt={` Product ${item?.images[imageId]?.id}`}
                      className=" rounded  h-[300px] lg:h-[500px] 2xl:h-[700px] w-full"
                    />
                  </div>
                  <div className="mt-0 flex flex-wrap justify-center gap-x-10 gap-y-6 mx-auto">
                    {item?.images?.map((img) => {
                      return (
                        <div key={img?.id} className=" rounded-xl ">
                          <Image
                            src={img?.image}
                            onMouseEnter={() => setImageId(img.id)}
                            alt={`Product ${img?.id}`}
                            className="w-24 h-[100px] cursor-pointer"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-extrabold text-black">
                    {item?.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <p className="text-black text-4xl font-bold">
                      {item?.price}
                    </p>
                    <p className="text-black text-xl">
                      <strike>{item?.price}</strike>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <Link href={"https://mydukaan.io/cluix1"}>
                      <button
                        type="button"
                        className="min-w-[200px] px-4 py-3 bg-black hover:bg-black text-white text-sm font-bold rounded"
                      >
                        Buy now
                      </button>
                    </Link>
                  </div>

                  <div className="sub-section product-details">
                    <TitleProductDetails>Product Details</TitleProductDetails>
                    <div
                      id="pricing_summary"
                      className="pd-enabled clearfix "
                      data-ext-id="6761331-29700682662-cat"
                      data-ext-type="Digital Water Quality Testers/Analyzers (Jal Jeevan Mission)"
                    >
                      <div className="add-to-cart-price mt-4">
                        <ProductDescrition
                          lable={"Our Price: "}
                          text={`₹ ${item?.price}`}
                        />

                        <ProductDescrition lable={"Discount :"} text={"10%"} />
                        <ProductDescrition lable={"You Save :"} text={"₹0"} />

                        <ProductDescrition
                          lable={" Price For :"}
                          text={"1 pieces"}
                        />
                        <ProductDescrition
                          lable={" MRP/Unit :"}
                          text={`₹ ${item?.price}`}
                        />
                        <ProductDescrition
                          lable={" Offer Price/Unit :"}
                          text={`₹ ${item?.price}`}
                        />
                        {item.id != "3" && item.id != "4" ? (
                          <>
                            <ProductDescrition
                              lable={"Product id :"}
                              text={"5116877-98681873194"}
                            />
                            <ProductDescrition
                              lable={"Product Description :"}
                              text={
                                "The Uniform Drinking Water Quality Protocol, 2019 has specified some important parameters to be monitored for assuring potability of drinking water as per BIS IS 10500:2012 (Second Version) and subsequent amendments Digital Water Quality Testers/Anal"
                              }
                            />
                            <ProductDescrition
                              lable={"Country Of Origin :"}
                              text={" India"}
                            />
                          </>
                        ) : (
                          ""
                        )}
                      </div>

                      {item.id !== 3 && item.id !== 4 ? (
                        <div className="sub-section specifications">
                          <TitleProductDetails>
                            Specifications
                          </TitleProductDetails>

                          <div
                            id="golden-parameters"
                            className="golden-parameters collapsible mt-4"
                            style={{ maxHeight: "none" }}
                          >
                            <div className="golden-params-container">
                              <ProductDescrition
                                lable={"Type of Meter/Analyzer : "}
                                text={" Hand-Held"}
                              />
                              <ProductDescrition
                                lable={"Intended Application : "}
                                text={
                                  "To test and analyze various Water Quality Parameters to ensure Uniform Drinking Water Quality Protocol, 2019 and BIS IS 10500:2012 (Second Version) and subsequent amendments"
                                }
                              />
                              <ProductDescrition
                                lable={"Total Parameters: 12 "}
                                text={
                                  " Free Residual Chlorine (FRC) - 100 test, ⁠Potential of Hydrogen (pH) - 10 test ⁠Total Hardness (TH) - 100 test, ⁠Total Dissolved Solid (TDS), - Unlimited (Reagent not required), Turbidity (TUR) - 100 test, ⁠Lead (Pb) - 100 test,  ⁠Iron (Fe) - 100 test, ⁠Fluoride (F) - 100 test,  ⁠Nitrate (NO3) - 100 test,  ⁠Copper (Cu) - 100 test,  Total ⁠Alkalinity - 100 test, ⁠Electrical Conductivity - Unlimited (Reagent not required)"
                                }
                              />
                              <ProductDescrition
                                lable={"Measured Water Quality Parameters : "}
                                text={
                                  " Potential of hydrogen (pH) ,Total dissolved solids (TDS) ,Turbidity ,Color ,Free Residual Chlorine ,Total Hardness ,Electrical Conductivity ,Lead"
                                }
                              />
                              <ProductDescrition
                                lable={"Accessories : "}
                                text={
                                  "  Carrying case/bag included in the scope of the supply ,Guided  graphical user instruction for each test ,AC/DC Charger ,Type C USB Cable ,TDS Probe Only"
                                }
                              />
                              <ProductDescrition
                                lable={"Warranty on Equipment (Year) : "}
                                text={"1"}
                              />
                              <ProductDescrition
                                lable={
                                  "Warranty on Cables for Connecting Probe (Year) : "
                                }
                                text={"1"}
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="sub-section specifications">
                          <TitleProductDetails>
                            {item?.benifit?.title}
                          </TitleProductDetails>

                          <div
                            id="golden-parameters"
                            className="golden-parameters collapsible mt-4"
                            style={{ maxHeight: "none" }}
                          >
                            <div className="golden-params-container">
                              {item?.benifit?.description?.map((item) => (
                                <ProductDescrition
                                  key={item?.id}
                                  lable={item?.title}
                                  text={item?.description}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10  ">
                {item.data.map((item) => (
                  <AnimatedCard key={item.id} data={item} />
                ))}
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default ProductdetailsPage;
