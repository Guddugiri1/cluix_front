"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import product from "../../../public/img/reajent3.png";
import prduct1 from "../../../public/product2.png";
import prduct2 from "../../../public/product4.jpg";
import prduct3 from "../../../public/img/reajent2.png";
import prduct4 from "../../../public/img/reajent3.png";
import reajent4 from "../../../public/img/reajent4.png";
import reajent5 from "../../../public/img/reajent5.png";
import reajent6 from "../../../public/img/reajent6.png";
import reajent7 from "../../../public/img/reajent7.png";
import prduct5 from "../../../public/img/device1.png";
import prduct6 from "../../../public/img/device2.png";
import prduct7 from "../../../public/img/device3.png";
import prduct8 from "../../../public/img/device4.png";
import device8 from "../../../public/img/device5.png";
import prduct9 from "../../../public/product/product8.png";
import prduct10 from "../../../public/product/product9.png";
import prduct11 from "../../../public/product/product10.png";
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
      price: "₹ 19,470.00",
      title: "Reagent Kit(100 Test)",
      productDetails: {
        quantity: "1",
        price: "19,470.00",
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
          image: reajent4,
        },
        {
          id: 4,
          image: reajent5,
        },
        {
          id: 5,
          image: reajent6,
        },
        {
          id: 6,
          image: reajent7,
        },
      ],
      data: [
        // {
        //   id: 1,
        //   name: "Type/Nomenclature/Protection  ",
        //   image: product,
        //   details: [
        //     {
        //       id: 1,
        //       label: "Type of Meter/Analyzer	",
        //       value: "Hand-Held  ",
        //     },
        //     {
        //       id: 2,
        //       label: "Frequency of Calibration		",
        //       value: "Pre-Calibrated      ",
        //     },
        //     {
        //       id: 3,
        //       label: "Ingress Protection		",
        //       value: "IP 67      ",
        //     },
        //   ],
        // },
        // {
        //   id: 2,
        //   name: "Measurement of Starch      ",
        //   image: product,
        //   details: [
        //     {
        //       id: 1,
        //       label: "Technology/Method/Principle of Measurement of Starch		",
        //       value: "NA ( Starch Measurement Not Offered)          ",
        //     },
        //     {
        //       id: 2,
        //       label: "Reagents used in Measurement of Starch	",
        //       value: "NA ",
        //     },
        //     {
        //       id: 3,
        //       label: "Starch Measurement Range ( In mg/L or ppm)		",
        //       value: "NA ( Starch Measurement Not Offered)          ",
        //     },
        //     {
        //       id: 4,
        //       label: "Starch Resolution (IN mg/L or ppm)		",
        //       value: "NA ( Starch Measurement Not Offered)          ",
        //     },
        //     {
        //       id: 5,
        //       label: "Starch Accuracy ( +/- ) ( In %)		",
        //       value: "NA ( Starch Measurement Not Offered)          ",
        //     },
        //     {
        //       id: 6,
        //       label:
        //         "Quantity of Tests ( in Measurement of Starch) for which reagents are provided	",
        //       value: "NA           ",
        //     },
        //   ],
        // },
        // {
        //   id: 3,
        //   name: "Application and Approval  ",
        //   image: product,
        //   details: [
        //     {
        //       id: 1,
        //       label: "Intended Application	",
        //       value:
        //         "To test and analyze various Water Quality Parameters to ensure Uniform Drinking Water Quality Protocol, 2019 and BIS IS 10500:2012 (Second Version) and subsequent amendments          ",
        //     },
        //     {
        //       id: 2,
        //       label:
        //         "Approvals ( Hint: Buyer shall ensure/verify valid approvals before accepting the stocks)	",
        //       value:
        //         "Having Approval From Jal Jeevan Mission Approved Laboratory to prove conformity to the specifications          ",
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   name: "MEASURED & DETECTED WATER QUALITY PARAMETERS      ",
        //   image: product,
        //   details: [
        //     {
        //       id: 1,
        //       label: "Measured Water Quality Parameters	",
        //       value:
        //         "Potential of hydrogen (pH),Total dissolved solids (TDS),Turbidity,Color,Free Residual Chlorine,Total Hardness,Electrical Conductivity,Lead          ",
        //     },
        //     {
        //       id: 2,
        //       label: "Detected Water Quality Parameters			",
        //       value: "NA",
        //     },
        //   ],
        // },
      ],
      image: product,
    },
    {
      id: 2,
      name: "C012",
      price: "₹ 76,227.00",
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
        {
          id: 5,
          image: device8,
        },
      ],
      data: [
        // {
        //   id: 1,
        //   name: "Type/Nomenclature/Protection  ",
        //   image: product1,
        //   details: [
        //     {
        //       id: 1,
        //       label: "Type of Meter/Analyzer	",
        //       value: "Hand-Held  ",
        //     },
        //     {
        //       id: 2,
        //       label: "Frequency of Calibration		",
        //       value: "Pre-Calibrated      ",
        //     },
        //     {
        //       id: 3,
        //       label: "Ingress Protection		",
        //       value: "IP 67      ",
        //     },
        //   ],
        // },
        // {
        //   id: 2,
        //   name: "Measurement of Starch      ",
        //   image: product1,
        //   details: [
        //     {
        //       id: 1,
        //       label: "Technology/Method/Principle of Measurement of Starch		",
        //       value: "NA ( Starch Measurement Not Offered)          ",
        //     },
        //     {
        //       id: 2,
        //       label: "Reagents used in Measurement of Starch	",
        //       value: "NA ",
        //     },
        //     {
        //       id: 3,
        //       label: "Starch Measurement Range ( In mg/L or ppm)		",
        //       value: "NA ( Starch Measurement Not Offered)          ",
        //     },
        //     {
        //       id: 4,
        //       label: "Starch Resolution (IN mg/L or ppm)		",
        //       value: "NA ( Starch Measurement Not Offered)          ",
        //     },
        //     {
        //       id: 5,
        //       label: "Starch Accuracy ( +/- ) ( In %)		",
        //       value: "NA ( Starch Measurement Not Offered)          ",
        //     },
        //     {
        //       id: 6,
        //       label:
        //         "Quantity of Tests ( in Measurement of Starch) for which reagents are provided	",
        //       value: "NA           ",
        //     },
        //   ],
        // },
        // {
        //   id: 3,
        //   name: "Application and Approval  ",
        //   image: product1,
        //   details: [
        //     {
        //       id: 1,
        //       label: "Intended Application :",
        //       value:
        //         "To ensure compliance with the stringent water quality standards outlined in the Uniform Drinking Water Quality Protocol 2019 and BIS 10500:2012, this device accurately tests and analyzes crucial water parameters.",
        //     },
        //     {
        //       id: 2,
        //       label:
        //         "Approvals ( Hint: Buyer shall ensure/verify valid approvals before accepting the stocks)	",
        //       value:
        //         "Having Approval From Jal Jeevan Mission Approved Laboratory to prove conformity to the specifications          ",
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   name: "MEASURED & DETECTED WATER QUALITY PARAMETERS      ",
        //   image: product1,
        //   details: [
        //     {
        //       id: 1,
        //       label: "Measured Water Quality Parameters	",
        //       value:
        //         "Potential of hydrogen (pH),Total dissolved solids (TDS),Turbidity,Color,Free Residual Chlorine,Total Hardness,Electrical Conductivity,Lead          ",
        //     },
        //     {
        //       id: 2,
        //       label: "Detected Water Quality Parameters			",
        //       value: "NA",
        //     },
        //   ],
        // },
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
        // {
        //   id: 1,
        //   name: "Type/Nomenclature/Protection  ",
        //   image: prduct9,
        //   details: [
        //     {
        //       id: 1,
        //       label: "Type of Meter/Analyzer	",
        //       value: "Hand-Held  ",
        //     },
        //     {
        //       id: 2,
        //       label: "Frequency of Calibration		",
        //       value: "Pre-Calibrated      ",
        //     },
        //     {
        //       id: 3,
        //       label: "Ingress Protection		",
        //       value: "IP 67      ",
        //     },
        //   ],
        // },
        // {
        //   id: 2,
        //   name: "Measurement of Starch      ",
        //   image: prduct10,
        //   details: [
        //     {
        //       id: 1,
        //       label: "Technology/Method/Principle of Measurement of Starch		",
        //       value: "NA ( Starch Measurement Not Offered)          ",
        //     },
        //     {
        //       id: 2,
        //       label: "Reagents used in Measurement of Starch	",
        //       value: "NA ",
        //     },
        //     {
        //       id: 3,
        //       label: "Starch Measurement Range ( In mg/L or ppm)		",
        //       value: "NA ( Starch Measurement Not Offered)          ",
        //     },
        //     {
        //       id: 4,
        //       label: "Starch Resolution (IN mg/L or ppm)		",
        //       value: "NA ( Starch Measurement Not Offered)          ",
        //     },
        //     {
        //       id: 5,
        //       label: "Starch Accuracy ( +/- ) ( In %)		",
        //       value: "NA ( Starch Measurement Not Offered)          ",
        //     },
        //     {
        //       id: 6,
        //       label:
        //         "Quantity of Tests ( in Measurement of Starch) for which reagents are provided	",
        //       value: "NA           ",
        //     },
        //   ],
        // },
        // {
        //   id: 3,
        //   name: "Application and Approval  ",
        //   image: prduct11,
        //   details: [
        //     {
        //       id: 1,
        //       label: "Intended Application	",
        //       value:
        //         "To test and analyze various Water Quality Parameters to ensure Uniform Drinking Water Quality Protocol, 2019 and BIS IS 10500:2012 (Second Version) and subsequent amendments          ",
        //     },
        //     {
        //       id: 2,
        //       label:
        //         "Approvals ( Hint: Buyer shall ensure/verify valid approvals before accepting the stocks)	",
        //       value:
        //         "Having Approval From Jal Jeevan Mission Approved Laboratory to prove conformity to the specifications          ",
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   name: "MEASURED & DETECTED WATER QUALITY PARAMETERS      ",
        //   image: prduct10,
        //   details: [
        //     {
        //       id: 1,
        //       label: "Measured Water Quality Parameters	",
        //       value:
        //         "Potential of hydrogen (pH),Total dissolved solids (TDS),Turbidity,Color,Free Residual Chlorine,Total Hardness,Electrical Conductivity,Lead          ",
        //     },
        //     {
        //       id: 2,
        //       label: "Detected Water Quality Parameters			",
        //       value: "NA",
        //     },
        //   ],
        // },
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
        // {
        //   id: 1,
        //   name: "Type/Nomenclature/Protection  ",
        //   image: product4,
        //   details: [
        //     {
        //       id: 1,
        //       label: "Type of Meter/Analyzer	",
        //       value: "Hand-Held  ",
        //     },
        //     {
        //       id: 2,
        //       label: "Frequency of Calibration		",
        //       value: "Pre-Calibrated      ",
        //     },
        //     {
        //       id: 3,
        //       label: "Ingress Protection		",
        //       value: "IP 67      ",
        //     },
        //   ],
        // },
        // {
        //   id: 2,
        //   name: "Measurement of Starch      ",
        //   image: product4,
        //   details: [
        //     {
        //       id: 1,
        //       label: "Technology/Method/Principle of Measurement of Starch		",
        //       value: "NA ( Starch Measurement Not Offered)          ",
        //     },
        //     {
        //       id: 2,
        //       label: "Reagents used in Measurement of Starch	",
        //       value: "NA ",
        //     },
        //     {
        //       id: 3,
        //       label: "Starch Measurement Range ( In mg/L or ppm)		",
        //       value: "NA ( Starch Measurement Not Offered)          ",
        //     },
        //     {
        //       id: 4,
        //       label: "Starch Resolution (IN mg/L or ppm)		",
        //       value: "NA ( Starch Measurement Not Offered)          ",
        //     },
        //     {
        //       id: 5,
        //       label: "Starch Accuracy ( +/- ) ( In %)		",
        //       value: "NA ( Starch Measurement Not Offered)          ",
        //     },
        //     {
        //       id: 6,
        //       label:
        //         "Quantity of Tests ( in Measurement of Starch) for which reagents are provided	",
        //       value: "NA           ",
        //     },
        //   ],
        // },
        // {
        //   id: 3,
        //   name: "Application and Approval  ",
        //   image: product4,
        //   details: [
        //     {
        //       id: 1,
        //       label: "Intended Application	",
        //       value:
        //         "To test and analyze various Water Quality Parameters to ensure Uniform Drinking Water Quality Protocol, 2019 and BIS IS 10500:2012 (Second Version) and subsequent amendments          ",
        //     },
        //     {
        //       id: 2,
        //       label:
        //         "Approvals ( Hint: Buyer shall ensure/verify valid approvals before accepting the stocks)	",
        //       value:
        //         "Having Approval From Jal Jeevan Mission Approved Laboratory to prove conformity to the specifications          ",
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   name: "MEASURED & DETECTED WATER QUALITY PARAMETERS      ",
        //   image: product4,
        //   details: [
        //     {
        //       id: 1,
        //       label: "Measured Water Quality Parameters	",
        //       value:
        //         "Potential of hydrogen (pH),Total dissolved solids (TDS),Turbidity,Color,Free Residual Chlorine,Total Hardness,Electrical Conductivity,Lead          ",
        //     },
        //     {
        //       id: 2,
        //       label: "Detected Water Quality Parameters			",
        //       value: "NA",
        //     },
        //   ],
        // },
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
                  <div className={`bg-white  p-10 pt-0 px-2 rounded-xl`}>
                    <Image
                      src={item?.images[imageId - 1]?.image}
                      alt={` Product ${item?.images[imageId]?.id}`}
                      className={`rounded-xl h-[300px] w-[300px] lg:h-[500px] 2xl:h-[500px] 2xl:h=w-[500px] lg:w-[500px] ${item?.id === 2 && imageId === 1 ? 'w-full h-full lg:h-[500px] 2xl:h-[500px] 2xl:h=w-[30%] lg:w-[30%]' : ''}`}
                      style={{ display: "inline-block" }}
                      objectFit="cover"
                    />
                  </div>
                  <div className="mt-0 flex flex-wrap justify-center gap-x-10 gap-y-6 mx-auto">
                    {item?.images?.map((img) => {
                      console.log("img", img);
                      return (
                        <div key={img?.id} className=" rounded-xl ">
                          <Image
                            src={img?.image}
                            onMouseEnter={() => setImageId(img.id)}
                            alt={`Product ${img?.id}`}
                            className={`rounded-xl w-24 h-[100px] cursor-pointer ${img?.id === 1 ? 'w-[50px] h-[100px]' : ''}`}
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
                  <p>Inclusive of all taxes</p>

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
                        {/* changes by Nitish  */}
                        {item.id == 2 && (
                          <>
                            <ProductDescrition
                              lable={"MRP: "}
                              text={`₹ 76,227.00`}
                            />
                            <ProductDescrition
                              lable={" Price For :"}
                              text={"1 set"}
                            />

                            <ProductDescrition
                              lable={"Product id :"}
                              text={"5116877-98681873194"}
                            />
                            <ProductDescrition
                              lable={"Product Description :"}
                              text={
                                "Ensure the purity of your water with our C012 Digital Water Quality Analyzer. This compact and user-friendly device measures essential water quality parameters, aligning with stringent national and international standards. Ideal for professional use, the C012 provides accurate and reliable results, empowering you to make informed decisions about water quality."
                              }
                            />
                            <ProductDescrition
                              lable={"Country Of Origin :"}
                              text={" India"}
                            />

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
                                    lable={"Total Parameters 12: "}
                                    text={
                                      " Free Residual Chlorine (FRC),  Potential of Hydrogen (pH), Total Hardness (TH), Total Dissolved Solids (TDS)(Reagent-free), Sulphate (SO4), Phosphate (PO4), Iron (Fe), Fluoride (F), Nitrate (NO3), Copper (Cu), Total Alkalinity, Electrical Conductivity (Reagent-free)."
                                    }
                                  />
                                  <ProductDescrition
                                    // lable={"Total Parameters 12: "}
                                    text={
                                      "Each parameter, except TDS and Electrical Conductivity, comes with 100 test strips."
                                    }
                                  />

                                  {/* <ProductDescrition
                                lable={"Measured Water Quality Parameters : "}
                                text={
                                  " Potential of hydrogen (pH) ,Total dissolved solids (TDS) ,Turbidity ,Color ,Free Residual Chlorine ,Total Hardness ,Electrical Conductivity ,Lead"
                                }
                              /> */}
                                  <ProductDescrition
                                    lable={"What is in the box : "}
                                    text={
                                      "Reagent kit box, Carrying case/bag included in the scope of the supply, User manual,  Type C USB Cable, TDS Probe Only"
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
                          </>
                        )}
                        {item.id == 1 && (
                          <>
                            <ProductDescrition
                              lable={"MRP: "}
                              text={`₹ 19,470.00`}
                            />
                            <ProductDescrition
                              lable={" Price For :"}
                              text={"1 kit"}
                            />

                            <ProductDescrition
                              lable={"Product id :"}
                              text={"5116877-98681873194"}
                            />
                            <ProductDescrition
                              lable={"Product Description :"}
                              text={
                                "The C012 Water Quality Test Kit provides accurate and reliable testing for key water parameters. Designed to meet stringent quality standards, this kit offers a simple and efficient solution for monitoring water quality."
                              }
                            />
                            <ProductDescrition
                              lable={"Country Of Origin :"}
                              text={" India"}
                            />

                            <div className="sub-section specifications">
                              <div
                                id="golden-parameters"
                                className="golden-parameters collapsible mt-4"
                                style={{ maxHeight: "none" }}
                              >
                                <div className="golden-params-container">
                                  <ProductDescrition
                                    lable={"Key Features : "}
                                    // text={" Hand-Held"}
                                  />
                                  <ProductDescrition
                                    lable={"Comprehensive Testing : "}
                                    text={
                                      "Covers a range of essential parameters, including pH, TDS, conductivity, turbidity, chlorine, and more."
                                    }
                                  />
                                  <ProductDescrition
                                    lable={"Easy-to-Use: "}
                                    text={
                                      "User-friendly design and clear instructions for hassle-free testing."
                                    }
                                  />
                                  <ProductDescrition
                                    lable={"Accurate Results: "}
                                    text={
                                      "Precise measurements and reliable results."
                                    }
                                  />

                                  <ProductDescrition
                                    lable={"Portable and Compact : "}
                                    text={
                                      "Ideal for on-site and field testing."
                                    }
                                  />
                                  <ProductDescrition
                                    lable={"Kit Includes : "}
                                    text={
                                      "Reagent for various parameters, Detailed instructions"
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        {item.id === 4 && (
                          <ProductDescrition
                            // lable={"MRP: "}
                            text={`Not Found`}
                          />
                        )}

                        {/* <ProductDescrition lable={"Discount :"} text={"10%"} /> */}
                        {/* <ProductDescrition
                          lable={"You Save :"}
                          text={"₹6,499"}
                        /> */}

                        {/* <ProductDescrition
                          lable={" Price For :"}
                          text={"1 set"}
                        /> */}
                        {/* <ProductDescrition
                          lable={" MRP/Unit :"}
                          text={`₹79,698.00`}
                        /> */}
                        {/* <ProductDescrition
                          lable={" Offer Price/Unit :"}
                          text={`₹64,999.00`}
                        /> */}
                        {/* <ProductDescrition
                          lable={" GST (18%) :"}
                          text={"₹11,699.82"}
                        /> */}

                        {/* {item.id != "3" && item.id != "4" ? (
                          <>
                            <ProductDescrition
                              lable={"Product id :"}
                              text={"5116877-98681873194"}
                            />
                            <ProductDescrition
                              lable={"Product Description :"}
                              text={
                                "Ensure the purity of your water with our C012 Digital Water Quality Analyzer. This compact and user-friendly device measures essential water quality parameters, aligning with stringent national and international standards. Ideal for professional use, the C012 provides accurate and reliable results, empowering you to make informed decisions about water quality."
                              }
                            />
                            <ProductDescrition
                              lable={"Country Of Origin :"}
                              text={" India"}
                            />
                          </>
                        ) : (
                          ""
                        )} */}
                      </div>

                      {item.id !== 3 && item.id !== 4 ? (
                        <div className="sub-section specifications">
                          {/* <TitleProductDetails>
                            Specifications
                          </TitleProductDetails> */}

                          {/* <div
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
                                lable={"Total Parameters 12: "}
                                text={
                                  " Free Residual Chlorine (FRC),  Potential of Hydrogen (pH), Total Hardness (TH), Total Dissolved Solids (TDS)(Reagent-free), Turbidity (TUR), Lead (Pb), Iron (Fe), Fluoride (F), Nitrate (NO3), Copper (Cu), Total Alkalinity, Electrical Conductivity (Reagent-free)."
                                }
                              />
                              <ProductDescrition
                                // lable={"Total Parameters 12: "}
                                text={
                                  "Each parameter, except TDS and Electrical Conductivity, comes with 100 test strips."
                                }
                              /> */}

                          {/* <ProductDescrition
                                lable={"Measured Water Quality Parameters : "}
                                text={
                                  " Potential of hydrogen (pH) ,Total dissolved solids (TDS) ,Turbidity ,Color ,Free Residual Chlorine ,Total Hardness ,Electrical Conductivity ,Lead"
                                }
                              /> */}
                          {/* <ProductDescrition
                                lable={"What is in the box : "}
                                text={
                                  "Reagent kit box, Carrying case/bag included in the scope of the supply, User manual,  Type C USB Cable, TDS Probe Only"
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
                            </div> */}
                          {/* </div> */}
                        </div>
                      ) : (
                        <div className="sub-section specifications">
                          {/* <TitleProductDetails>
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
                          </div> */}
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
