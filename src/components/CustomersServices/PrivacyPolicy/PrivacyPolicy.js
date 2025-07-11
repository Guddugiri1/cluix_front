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
const PrivacyPolicy = () => {
  const Heading = ({ heading }) => (
    <h2 className="font-semibold text-lg opacity-90 mt-6">{heading}</h2>
  );

  const SubHeading = ({ subHeading }) => (
    <p className="text-base font-semibold mb-3 opacity-90">{subHeading}</p>
  );

  const Text = ({ text }) => (
    <p className="text-base mb-3 opacity-90">{text}</p>
  );

  const ContactInfo = ({ contactinfo }) => (
    <p className="text-sm opacity-90">{contactinfo}</p>
  );

  return (
    <div className="termsMainContainer">
      <Row justify={"center"} align={"middle"}>
        <Col xs={22} md={18} lg={18} xxl={18}>
          <h2 className="text-2xl font-semibold underline mb-7 text-center">
            Privacy Policy
          </h2>
          <div className="text-left">
            <Text text={"Effective Date: 22nd June, 2024"} />

            <Heading heading={"1. Introduction"} />
            <Text
              text={`Welcome to Cluix Pvt. Ltd. (“Cluix”, “we”, “us”, or “our”). We are committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your information. This Privacy Policy describes our practices when you interact with our website, mobile applications, or other digital services (“Services”).`}
            />

            <Heading heading={"2. Information We Collect"} />
            <SubHeading
              subHeading={`We collect both personally identifiable information and non-personal usage data through direct input and automatic technologies. The categories of data we collect include:`}
            />
            <ul className="list-disc ml-12 text-base mb-3 opacity-90">
              <li>
                <b>Personal Information:</b> Name, email address, phone number,
                billing and shipping addresses, payment information (collected
                via third-party secure gateways)
              </li>
              <li>
                <b>Automatically Collected Information:</b>
                <ul className="list-disc ml-6">
                  <li>
                    <b>Usage Data:</b> Traffic logs, session duration, feature
                    interactions, accessed resources, search queries, clicks,
                    and page order.
                  </li>
                  <li>
                    <b>Device & Connection Information:</b> IP address, browser
                    type, OS, connection type/speed, device ID, screen
                    resolution, and carrier info.
                  </li>
                  <li>
                    <b>Stored Files & Metadata:</b> Access to media/document
                    metadata with explicit permission to enhance functionality.
                  </li>
                  <li>
                    <b>Mobile Application Data:</b>
                    <ul className="list-disc ml-6">
                      <li>Installed apps data for personalized experience.</li>
                      <li>
                        Device identifiers (e.g., Android ID, IDFA) for session
                        tracking.
                      </li>
                      <li>Online/offline app status.</li>
                    </ul>
                  </li>
                  <li>
                    <b>Location Data:</b> Real-time data (lat/lng/alt/timestamp)
                    for personalized services. You may disable GPS anytime.
                  </li>
                  <li>
                    <b>Last URL Visited:</b> To understand behavior and enhance
                    marketing effectiveness.
                  </li>
                  <li>
                    <b>Preferences & Settings:</b> Language, time zone, display
                    options.
                  </li>
                </ul>
              </li>
            </ul>

            <Heading heading={"3. How We Use Your Information"} />
            <ul className="list-disc ml-12 text-base mb-3 opacity-90">
              <li>To process and fulfill orders or service requests</li>
              <li>To improve and personalize your experience</li>
              <li>To offer relevant content and product recommendations</li>
              <li>
                To monitor app performance, fix issues, and improve security
              </li>
              <li>To provide customer support and address your inquiries</li>
              <li>For analytics and marketing (where permitted by law)</li>
              <li>To comply with legal obligations and prevent fraud</li>
            </ul>

            <Heading heading={"4. Sharing of Information"} />
            <Text
              text={`We do not sell or rent your personal data. We may share your information with:`}
            />
            <ul className="list-disc ml-12 text-base mb-3 opacity-90">
              <li>
                Service providers and partners involved in payment processing,
                analytics, hosting, logistics, or support functions.
              </li>
              <li>
                Third-party analytics and advertising tools, such as Google
                Analytics, for understanding and improving your experience (with
                appropriate data safeguards)
              </li>
              <li>
                Legal or regulatory authorities, if required by law or to
                protect our rights
              </li>
            </ul>
            <Text
              text={`All third parties are obligated to maintain confidentiality and data security.`}
            />

            <Heading heading={"5. Location Data & Consent"} />
            <Text
              text={`If you use location-based features (e.g., demo booking, service availability, or nearest service location), we will: `}
            />
            <ul className="list-disc ml-12 text-base mb-3 opacity-90">
              <li>Request your permission to access device location</li>
              <li>
                Store data only for the duration required for the service.
              </li>
              <li>
                Allow you to opt-out at any time by disabling location
                permissions on your device.
              </li>
            </ul>
            <Text
              text={`We associate location data with your unique device ID and usage behavior only to provide and improve services..`}
            />

            <Heading heading={"6. Data Retention"} />
            <Text text={`We retain data as long as necessary to:`} />
            <ul className="list-disc ml-12 text-base mb-3 opacity-90">
              <li>Fulfill requested services</li>
              <li>Meet legal obligations</li>
              <li>Improve platform functionality</li>
            </ul>
            <Text text={`You may request deletion at: support@cluix.in`} />

            <Heading heading={"7. Cookies & Tracking Technologies"} />
            <Text text={`We use cookies to:`} />
            <ul className="list-disc ml-12 text-base mb-3 opacity-90">
              <li>Recognize returning users</li>
              <li>Store preferences</li>
              <li>Measure usage and traffic</li>
            </ul>
            <Text
              text={`You may disable cookies through browser settings, but this may affect your experience on the site.`}
            />

            <Heading heading={"8. Your Rights"} />
            <ul className="list-disc ml-12 text-base mb-3 opacity-90">
              <li>Access and correct personal data</li>
              <li>Delete your data from our systems</li>
              <li>Withdraw consent for certain processing activities</li>
              <li>Opt-out of promotional communications</li>
            </ul>
            <Text
              text={`To exercise any of these rights, please email: support@cluix.in`}
            />

            <Heading heading={"9. Children’s Privacy"} />
            <Text
              text={`Our Services are not intended for children under the age of 13 (or applicable age under local law). We do not knowingly collect data from minors.`}
            />

            <Heading heading={"10. Data Security"} />
            <Text
              text={`We use industry-standard security practices including encryption, firewalls, and secure server access to protect your personal information. However, no system is entirely immune to security risks..`}
            />

            <Heading heading={"11. Policy Updates"} />
            <Text
              text={`We may update this Privacy Policy periodically. If we make material changes, we will notify you via website banner or email. Your continued use of the Services after changes constitutes your consent to the revised policy.`}
            />

            <Heading heading={"12. Contact Us"} />
            <Text
              text={`For questions or requests regarding this Privacy Policy:`}
            />
            <b className="opacity-90">
              <Heading heading={"Cluix Pvt. Ltd"} />
            </b>
            <ContactInfo
              contactinfo={
                "Lab-4C-1D, 4th Floor, C Block, Research & Innovation Park,"
              }
            />
            <ContactInfo
              contactinfo={
                "IIT Delhi Campus, Hauz Khas, South Delhi, Delhi – 110016"
              }
            />
            <ContactInfo contactinfo={" +91 9211590235 | +91 9485883388"} />
            <ContactInfo contactinfo={" support@cluix.in | info@cluix.in"} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

// DEFINE MAIN FUNCTION EXPORT
export default PrivacyPolicy;
