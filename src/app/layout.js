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
    "Cluix is a water purify system that provides fluid and lightweight fluid resources for applications that require more than one topology",
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
