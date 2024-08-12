import React from "react";

export default function SubTitle({ children,className }) {
  return (
    <h2 className={` text-[var(--light-blue)]  flex items-center justify-center text-xl lg:text-3xl font-bold  tracking-wider ${className}`}>
      {children}
    </h2>
  );
}





// DEFINE TITLE FUNCTION  AND EXPORT  
export const Title = ({ children}) => {
    // DEFINE RETURN OF TITLE FUNCTION
    return (
        <>
            <div className="heading_title">
                <h3>{children}</h3>
            </div>
        </>
    );
};

// DEFINE AND EXPORT DESCRIPTION FUNCTION
export const Description = ({ children }) => {
    return (
        <div className="description">
            <p>{children}</p>
        </div>
    );
};

// DEFINE AND EXPORT BULLET POINT FUNCTION
export const BulletPoints = ({ children }) => {
    return <li className="bulletPoint">{children}</li>;
};

// DEFINE AND EXPORT SUB TITLE FUNCTION
export const SubTitle2 = ({ children }) => {
    return (
        <div className="subTitle">
            <h5>{children}</h5>
        </div>
    );
};
