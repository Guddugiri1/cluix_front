// DEFINE ALL EXTERNAL IMPORT
import React from "react";
import { Col, Row } from "antd";

// DEFINE ALL INTERNAL IMPORT

import { BulletPoints, Description, Title } from "@/components/shared/typography/SubTitle";
import { description } from "@/constants/database";

// DEFINE MAIN FUNCTION 
const TermsWarranty = () => {

  // DEFINE MAIN FUNCTION RETURN 
  return (
    <>
    <div className="termsMainContainers my-20 mt-24 md:mt-36">
      <h2 className='font-semibold text-lg opacity-90 ml-5 sm:ml-8 md:ml-28 lg:ml-36 xl:ml-48 '>Welcome to the CLUIX Website.</h2>
      <Row justify={"center"} align={"middle"}>
        {description?.map((item) => {
          return (
            <Col key={item?.id} xs={22} md={18} lg={18} xxl={18}>
              <Title>{item?.title}</Title>
              {
                item.description.map((item) => <Description key={item?.id}>
                  {item?.name}
                </Description>
                )
              }

              {
                <ul>
                  {
                    item.list.map((item) => {
                      return (
                        <BulletPoints key={item?.id}>
                          {item?.name}
                        </BulletPoints>
                      )
                    })
                  }
                </ul>
              }
            </Col>
          )
        })}

      </Row>
    </div>
    </>
  );
};

// DEFINE MAIN FUNCTION EXPORT
export default TermsWarranty;