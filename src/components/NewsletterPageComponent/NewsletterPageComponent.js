"use client";

import Image from "next/image";
import React from "react";
import { SubTitle } from "@/components/shared";
import Link from "next/link";
import ViewMore from "@/components/shared/typography/ViewMore";
import { FaFilePdf } from "react-icons/fa";
import { MdDownload, MdOpenInNew } from "react-icons/md";

const NewsletterPageComponents = () => {
  const newsletterData = [
    {
      id: 1,
      title: "Newsletter July-September 2024",
      date: "Edition - 1",
      description: "",
      pdfUrl: "/newsletters/JAS Newsletter.pdf",
      thumbnail: "/newsletters/jas_newsletter.png",
    },
    {
      id: 2,
      title: "Newsletter October-December 2024",
      date: "Edition - 2",
      description: "",
      pdfUrl: "/newsletters/OND Newsletter.pdf",
      thumbnail: "/newsletters/ond_newsletter.png",
    },
    {
      id: 3,
      title: "Newsletter January-March 2025",
      date: "Edition - 3",
      description: "",
      pdfUrl: "/newsletters/JFM year end Newsletter 24-25.pdf", 
      thumbnail: "/newsletters/jfm_newsletter.png",
    },
    {
      id: 4,
      title: "Newsletter April - June 2025",
      date: "Edition - 4",
      description: "",
      pdfUrl: "/newsletters/AMJ Newsletter 2025-26.pdf",
      thumbnail: "/newsletters/amj_newsletter.png", 
    },
  ];

  const openPDF = (pdfUrl, title) => {
    // Open PDF in new tab like Google Drive
    const newWindow = window.open(pdfUrl, '_blank');
    if (newWindow) {
      newWindow.document.title = title;
    }
  };

  const downloadPDF = (pdfUrl, title) => {
    // Create download link
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-slate-100" id="newsletter">
      <SubTitle className={"py-8 lg:py-16"}>Our Newsletters</SubTitle>
      <div className="xl:px-[135px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsletterData.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              className="bg-white overflow-hidden flex flex-col rounded-lg shadow-md shadow-gray-400 hover:shadow-lg transition-shadow duration-300"
            >
              {/* PDF Preview/Thumbnail */}
              <div className="relative group cursor-pointer" onClick={() => openPDF(item.pdfUrl, item.title)}>
                <div className="h-48 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center relative overflow-hidden">
                  {item.thumbnail ? (
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <FaFilePdf className="text-6xl text-red-500" />
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <MdOpenInNew className="text-white text-3xl" />
                    </div>
                  </div>
                </div>

                {/* Date Badge */}
                <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.date}
                </div>

                {/* PDF Icon Badge */}
                <div className="absolute top-3 left-3 bg-white bg-opacity-90 p-2 rounded-full">
                  <FaFilePdf className="text-[var(--light-blue)] text-xl" />
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-4 flex-grow flex flex-col">
                <h3 
                  className="text-lg font-semibold text-gray-800 mb-2 cursor-pointer hover:text-[var(--dark-blue)] transition-colors duration-200 line-clamp-2"
                  onClick={() => openPDF(item.pdfUrl, item.title)}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Actions */}
              <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center">
                <button
                  onClick={() => openPDF(item.pdfUrl, item.title)}
                  className="flex items-center gap-2 text-[var(--light-blue)] hover:text-[var(--dark-blue)] font-medium text-sm transition-colors duration-200"
                >
                  <MdOpenInNew className="text-lg" />
                  Read Online
                </button>
                <button
                  onClick={() => downloadPDF(item.pdfUrl, item.title)}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors duration-200"
                >
                  <MdDownload className="text-lg" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center pt-10">
          {/* <Link href="/resource/newsletters">
            <ViewMore>View All Newsletters</ViewMore>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default NewsletterPageComponents;