// DEFINE ALL EXTERNAL IMPORT
import React from "react";
import { Col, Row } from "antd";

// DEFINE ALL INTERNAL IMPORT


import { BulletPoints, Description, Title } from "@/components/shared/typography/SubTitle";



// DEFINE MAIN FUNCTION 
const ReturnPolicy = () => {


  // DEFINE MAIN FUNCTION RETURN 
  return (
    <div className="termsMainContainer">
      <Row justify={"center"} align={"middle"}>
        <Col xs={22} md={18} lg={18} xxl={18}>
          <Title>Terms and Conditions</Title>
          <Title>Remove this page </Title>
          {/* <Description>Welcome to THE HOUSE OF ABHINANDAN LODHA !</Description> */}
        
        </Col>
      </Row>
    </div>
  );
};

// DEFINE MAIN FUNCTION EXPORT
export default ReturnPolicy;