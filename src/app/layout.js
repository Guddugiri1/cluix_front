// DEFINE ALL EXTERNAL IMPORT
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";

// DEFINE ALL INTERNAL IMPORT
import "./globals.css";
import TanstackProvider from "@/providers/Providers";
import NavBarComponents from "@/components/layout/NavBarComponents/NavBarComponents";
import FooterComponents from "@/components/layout/Footer/FooterComponents";
import { AOSInit } from "@/providers/AosProvider";
import LayoutWrapper from "@/components/layout/LayoutWrapper/LayoutWrapper";

// DEFINE INTER FONTS
const inter = Inter({ subsets: ["latin"] });

// DEFINE ROBOTO FONT
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

// DEFINE METADATA
export const metadata = {
  title: "Cluix",
  description:
    "Cluix is an advanced water purification system offering lightweight fluid resources, designed for complex applications and diverse topologies.",
};

export const productsMetadata = {
  title: "Our Products",
  description:
    "Discover Cluix’s range of water purification systems, providing fluid and lightweight solutions tailored to your specific needs.",
};

export const productDetailsMetadata = {
  title: "Product Details",
  description:
    "Get detailed insights into Cluix water purify systems, designed for efficiency and adaptable fluid solutions in multi-topology environments.",
};

export const aboutUsMetadata = {
  title: "About Us",
  description:
    "Learn more about Cluix, a pioneer in water purification technology providing innovative and lightweight fluid resources for various applications.",
};

export const careersMetadata = {
  title: "Careers",
  description:
    "Join the Cluix team and contribute to groundbreaking water purification systems with diverse opportunities for growth in fluid resource solutions.",
};

export const contactUsMetadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cluix for inquiries about our water purification systems and learn more about how our solutions can benefit your needs.",
};

// DEFINE MAIN FUNCTION WITH EXPORT
export default function RootLayout({ children }) {
  // DEFINE MAIN FUNCTION RETURN
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={roboto.className} suppressHydrationWarning={true}>
        <AntdRegistry>
          <AOSInit></AOSInit>
          <TanstackProvider>
            <NavBarComponents />
            <LayoutWrapper>{children}</LayoutWrapper>
            <FooterComponents />
          </TanstackProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
