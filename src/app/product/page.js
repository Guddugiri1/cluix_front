import ProductComponent from "@/components/HomeComponents/ProductComponent/ProductComponent";
import React from "react";

export const metadata = {
  title: "Our Products",
  description:
    "Discover Cluix's range of analytical tools, designed to deliver accurate and actionable data. Our solutions provide reliable and efficient insights for a variety of industries.",
};
const page = () => {
  return <ProductComponent />;
};

export default page;
