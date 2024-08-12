// DEFINE ALL EXTERNAL IMPORT
import React from "react";
import { Col, Row } from "antd";

// DEFINE ALL INTERNAL IMPORT

import { BulletPoints, Description, Title } from "@/components/shared/typography/SubTitle";



// DEFINE MAIN FUNCTION 
const PrivacyPolicy = () => {
  const Heading = ({ heading }) => {
    return (
        <h2 className='font-semibold text-lg opacity-90 '>{heading}</h2>
    )
}
const SubHeading = ({ subHeading }) => {
    return (
        <p className='text-base font-semibold mb-3 opacity-90'>{subHeading}</p>
    )
}
const Text = ({ text }) => {
    return (
        <p className='text-base mb-3 opacity-90 '>{text}</p>
    )
}
const ContactInfo = ({ contactinfo , className }) => {
    return (
        <p className='text-sm opacity-90'>{contactinfo}</p>
    )
}

  // DEFINE MAIN FUNCTION RETURN 
  return (
    <div className="termsMainContainer">
      <Row justify={"center"} align={"middle"}>
        <Col xs={22} md={18} lg={18} xxl={18}>
        {/* <div className="container relative px-6 mx-auto md:max-w-[1240px] py-10"> */}
            <h2 className='text-2xl font-semibold underline mb-7 text-center '>Privacy & Policy </h2>
            <div className='text-left'>
                <Text text={'Effective Date: 22th June, 2024 '} />

                <Heading heading={'1. Introduction'}/>
                <Text text={'Welcome to The CLUIX Website. We value your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website and purchase our products.'}/>

                <Heading heading={'2. Information We Collect'}/>
                <SubHeading subHeading={'We may collect the following types of information:'}/>
                <ul className='list-disc ml-12 text-base mb-3 opacity-90 '>
                    <li><b className="opacity-90">Personal Information:</b> Name, email address, phone number, billing and shipping addresses, payment information.</li>
                    <li><b className="opacity-90">Non-Personal Information: </b>Browser type, operating system, pages visited, time and date of visit, IP address.</li>
                </ul>

                <Heading heading={'3. How We Use Your Information'}/>
                <Text text={'We use your information to:'}/>
                <ul className='list-disc ml-12 font-Inter text-base mb-3 '>
                    <li>Process and fulfill your orders.</li>
                    <li>Communicate with you regarding your orders, promotions, and updates.</li>
                    <li>Improve our website and services.</li>
                    <li>Ensure security and prevent fraud.</li>
                </ul>

                <Heading heading={'4. Sharing Your Information'}/>
                <Text text={'We do not sell, trade, or rent your personal information to others. We may share information with third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.'}/>

                <Heading heading={'5. Security'}/>
                <Text text={'We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.'}/>

                <Heading heading={'6. Cookies'}/>
                <Text text={'Our website uses cookies to enhance your experience. You can choose to disable cookies through your browser settings, but this may affect your ability to use certain features of our website.'}/>

                <Heading heading={'7. Your Rights'}/>
                <Text text={'You have the right to access, correct, or delete your personal information. You can also object to or restrict the processing of your data. To exercise these rights, please contact us at [insert contact email].'}/>

                <Heading heading={'8. Changes to This Policy'}/>
                <Text text={'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.'}/>

                {/* <Heading heading={'9. Contact Us'}/>
                <Text text={' If you have any questions about this privacy policy, please contact us at support@cluix.in.'}/> */}

                
                <Heading heading={'9. Contact Us'}/>
                <Text text={'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:'}/>
                <b className="opacity-90"><ContactInfo contactinfo={'Cluix'} /></b>
                <ContactInfo contactinfo={'Lab - 2, 4th Floor, Synergy Building,'}/>
                <ContactInfo contactinfo={'IIT Delhi Campus, Hauz Khas, New Delhi (110016)'}/>
                <ContactInfo contactinfo={'Phone: +91 8800824467'}/>
                <ContactInfo contactinfo={'Email: support@cluix.in '}/>

            </div>  
    {/* </div> */}
        </Col>
      </Row>
    </div>
  );
};

// DEFINE MAIN FUNCTION EXPORT
export default PrivacyPolicy;