"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { SubTitle } from "@/components/shared";
import Link from "next/link";
import ViewMore from "@/components/shared/typography/ViewMore";
import { FaFilePdf } from "react-icons/fa";
import { MdDownload, MdOpenInNew, MdClose } from "react-icons/md";

const NewsletterComponents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captcha, setCaptcha] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    designation: ''
  });

  // Ensure component is mounted before using createPortal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
  if (isModalOpen) {
    // Store the original body style
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.width = '100%';
    
    // Re-enable scrolling when component unmounts
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = originalStyle;
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }
}, [isModalOpen]);

  // ...existing code for newsletterData, generateCaptcha, etc...

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

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const answer = num1 + num2;
    setCaptcha(`${num1} + ${num2} = ?`);
    setCaptchaAnswer(answer.toString());
    return answer;
  };

  const openModal = (item, action) => {
    setSelectedItem(item);
    setModalAction(action);
    setIsModalOpen(true);
    generateCaptcha();
    setFormData({
      name: '',
      email: '',
      phone: ''
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    setModalAction(null);
    setCaptcha('');
    setCaptchaAnswer('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const userCaptchaAnswer = document.getElementById('captchaInput').value;
    if (userCaptchaAnswer !== captchaAnswer) {
      alert('Incorrect captcha. Please try again.');
      generateCaptcha();
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/newsletter-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          action: modalAction,
          newsletterId: selectedItem.id,
          newsletterTitle: selectedItem.title
        }),
      });

      if (response.ok) {
        closeModal();
        
        if (modalAction === 'download') {
          downloadPDF(selectedItem.pdfUrl, selectedItem.title);
        } else if (modalAction === 'read') {
          openPDF(selectedItem.pdfUrl, selectedItem.title);
        }
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }

    setIsSubmitting(false);
  };

  const openPDF = (pdfUrl, title) => {
    const newWindow = window.open(pdfUrl, '_blank');
    if (newWindow) {
      newWindow.document.title = title;
    }
  };

  const downloadPDF = (pdfUrl, title) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Modal Component
  const Modal = () => {
    const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Prevent modal content scroll from bubbling to body
  const handleModalScroll = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999
      }}
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={closeModal}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
      onScroll={handleModalScroll}>
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">
            {modalAction === 'download' ? 'Download' : 'Read'} Newsletter
          </h2>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <MdClose className="text-2xl" />
          </button>
        </div>

        {/* Modal Content */}
        <form onSubmit={handleSubmit} className="p-6">
          <p className="text-gray-600 mb-4">
            Please fill in your details to {modalAction === 'download' ? 'download' : 'access'} our newsletter.
          </p>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--light-blue)] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--light-blue)] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--light-blue)] focus:border-transparent"
              />
            </div>

            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Organization
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--light-blue)] focus:border-transparent"
              />
            </div> */}

            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Designation
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--light-blue)] focus:border-transparent"
              />
            </div> */}

            {/* Captcha */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Verification: {captcha}
              </label>
              <input
                type="text"
                id="captchaInput"
                required
                placeholder="Enter the answer"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--light-blue)] focus:border-transparent"
              />
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-[var(--light-blue)] text-white rounded-md hover:bg-[#0a3b42] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : (modalAction === 'download' ? 'Download' : 'Read Online')}
            </button>
          </div>
        </form>
      </div>
    </div>
    )
  };

  return (
    <>
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
                <div className="relative group cursor-pointer" onClick={() => openModal(item, 'read')}>
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
                    onClick={() => openModal(item, 'read')}
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
                    onClick={() => openModal(item, 'read')}
                    className="flex items-center gap-2 text-[var(--light-blue)] hover:text-[var(--dark-blue)] font-medium text-sm transition-colors duration-200"
                  >
                    <MdOpenInNew className="text-lg" />
                    Read Online
                  </button>
                  <button
                    onClick={() => openModal(item, 'download')}
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

      {/* Render Modal using Portal */}
      {isModalOpen && mounted && createPortal(
        <Modal />,
        document.body
      )}
    </>
  );
};

export default NewsletterComponents;