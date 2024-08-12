// DEFINE ALL EXTERNAL IMPORT
import React from "react";
import { Col, Row } from "antd";

// DEFINE ALL INTERNAL IMPORT

import {
  BulletPoints,
  Description,
  Title,
} from "@/components/shared/typography/SubTitle";

// DEFINE MAIN FUNCTION
const RefundPolicy = () => {
  // DEFINE MAIN FUNCTION RETURN
  return (
    <div className="termsMainContainer">
      <Row justify={"center"} align={"middle"}>
        <Col xs={22} md={22} lg={22} xxl={22}>
          <Title>Refund & Return Policy</Title>
          <Description>Thank you for your purchase!</Description>
          <Description>
            We understand that sometimes things don&apos;t go as planned. In the
            event you receive a non-functioning device, we are happy to offer an
            exchange for a working device.
          </Description>
          <Description>
            Please note: We do not offer refunds on any of  our devices.
          </Description>

          <Title>Exchanges</Title>
          <ul>
            <BulletPoints>Exchanges are only offered for non-functioning devices.</BulletPoints>
            <BulletPoints>
              To initiate an exchange, please contact us within 15 days of
              receiving your device. You can reach us by email –
              support@cluix.in or by phone at 9485883388
            </BulletPoints>
            <BulletPoints>
              You will be required to provide proof of purchase and a brief
              description of the issue you are experiencing with the device.
            </BulletPoints>
            <BulletPoints>
              Once we have received your request and verified the information,
              we will provide you with instructions on how to return the
              non-functioning device.
            </BulletPoints>
            <BulletPoints>
              Upon receipt of the non-functioning device, we will ship you a
              replacement device as soon as possible.
            </BulletPoints>
          </ul>

          <Title>Return Shipping</Title>
          <ul>
            <BulletPoints>
              You will be responsible for covering the shipping costs associated
              with returning the non-functioning device to us.
            </BulletPoints>
          </ul>

          <Title>Additional Information</Title>
          <ul>
            <BulletPoints>This policy applies to all purchases made from any of our store.</BulletPoints>
            <BulletPoints>We reserve the right to modify this policy at any time without prior notice.</BulletPoints>
          </ul>

          <Description>
          NOTE: NO PRODUCTS SHALL BE ACCEPTED IF THE WARRANTY CARD IS MISSING WHILE EXCHANGE OF THE PRODUCTS.
          </Description>
          {/* <Title>Cookies</Title> */}
          
        </Col>
      </Row>
    </div>
  );
};

// DEFINE MAIN FUNCTION EXPORT
export default RefundPolicy;
