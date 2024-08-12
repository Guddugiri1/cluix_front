// DEFINE ALL EXTERNAL IMPORT
import React from "react";
import { Col, Row } from "antd";

// DEFINE ALL INTERNAL IMPORT

import { BulletPoints, Description, Title } from "@/components/shared/typography/SubTitle";



// DEFINE MAIN FUNCTION 
const ShippingPolicy = () => {


  // DEFINE MAIN FUNCTION RETURN 
  return (
    <div className="termsMainContainer">
      <Row justify={"center"} align={"middle"}>
        <Col xs={22} md={18} lg={18} xxl={18}>
        <Title>Shipping Policy</Title>
          {/* <Description>Welcome to THE HOUSE OF ABHINANDAN LODHA !</Description> */}
          <Description>Thank you for your order!</Description>
          <Description>
            We understand getting your water quality analyzer quickly is
            important. This policy outlines the shipping options we offer and
            estimated delivery timelines.
          </Description>

          <Title>Processing Time</Title>
          <Description>
            Orders are typically processed and shipped within 60 business days
            of receiving 100% payment.
          </Description>

          <Title>Shipping Methods & Costs</Title>
          <Description>
            We offer several shipping methods to meet your needs and budget.
            This will be depending on the available options based on your order
            details and delivery location which is serviceable through our
            delivery partners. Some common methods include:
          </Description>

          <ul>
            <BulletPoints>
              <b> Standard Shipping: </b>This is the most economical option with
              an estimated delivery time of 12 business days.
            </BulletPoints>
            <BulletPoints>
              <b>Premium Shipping: </b>For the fastest delivery possible,
              consider our premium shipping option, with an estimated delivery
              time of 5 business days, for an additional cost.
            </BulletPoints>
          </ul>
          <Title>Tracking Your Order</Title>

          <Description>
            Once your order ships, you will receive a notification email with a
            tracking number. You can use this number to track the progress of
            your delivery on the delivery partner’s website.
          </Description>

          <Title>International Shipping</Title>
          <Description>
            We currently ship to selected countries only. International shipping
            costs will be calculated at based on your order weight and
            destination. Please note that international shipments may be subject
            to additional customs fees or import duties, which are the
            responsibility of the recipient.
          </Description>

          <Title>Order Confirmation</Title>

          <Description>
            Upon placing your order, you will receive a confirmation email with
            your order details, estimated delivery timeframe, and any relevant
            tracking information once your order ships.
          </Description>

          <Title>Shipping Restrictions</Title>
          <Description>
            We reserve the right to restrict or refuse shipment to certain
            destinations or for certain products at our discretion.
          </Description>

          <Title>Changes to Your Order</Title>
          <Description>
            We strive to process orders as quickly as possible. Unfortunately,
            once your order has been placed, we may not be able to modify the
            shipping address or method.
          </Description>

        </Col>
      </Row>
    </div>
  );
};

// DEFINE MAIN FUNCTION EXPORT
export default ShippingPolicy;