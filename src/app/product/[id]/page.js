import ProductdetailsPage from "@/components/ProductDetailsPage/ProductdetailsPage";
import React from "react";

export const metadata = {
  title: "Product Details",
  description:
    "Explore the features and capabilities of our analytical tools. Learn how they can transform your data collection and analysis processes, providing valuable insights into your operations.",
};
const page = ({ params }) => {
  return <ProductdetailsPage data={params} />;
};
export default page;
