"use client";
import React from "react";
import { usePathname } from "next/navigation";
const LayoutWrapper = ({ children }) => {
  const pathname = usePathname();
  return (
    <div
      className={`${
        pathname !== "/" ? "xl:mt-[92px] mt-[52px]" : "xl:mt-0 mt-0"
      }`}
    >
      {children}
    </div>
  );
};

export default LayoutWrapper;
