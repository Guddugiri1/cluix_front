"use client";

// DEFINE ALL EXTERNAL IMPORT 
import Image from "next/image";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";

// DEFINE ALL INTERNAL IMPORT
import { SubTitle } from "@/components/shared";

// DEFINE MAIN FUNCTION 
const LifeStyle = ({ title, data, className }) => {
  const [showAllImages, setShowAllImages] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // DEFINE MAIN FUNCTION RETURN 
  return (
    <>
      <div className=" py-8 lg:py-16">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 lg:mb-16">
          <div/>
          <SubTitle className={"mb-4 sm:mb-0"}>{title}</SubTitle>
          <button
            onClick={() => setShowAllImages(!showAllImages)}
            className="text-[var(--light-blue)] hover:text-[var(--dark-blue)] rounded-lg transition-colors duration-300 font-medium"
          >
            {showAllImages ? "Back" : "View All"}
          </button>
        </div>

        {showAllImages ? (
          // Grid view for all images
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {data?.map((item, index) => (
              <div 
                key={item?.id} 
                className="group cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={item?.image}
                    alt={`Event ${index + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                      Click to view
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Marquee view
          <div className="overflow-scroll mx-auto max-w-screen-2xl">
            <Marquee autoFill className="pr-5">
              <div className="flex flex-row px-3 gap-10">
                {data?.map((item, index) => (
                  <Image
                    key={item?.id}
                    src={item?.image}
                    alt={`Event ${index + 1}`}
                    width={500}
                    height={400}
                    className={`rounded-md shadow w-[200px] md:w-[300px] lg:w-[500px] h-[200px] lg:h-[400px] object-cover ${className}`}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                ))}
              </div>
            </Marquee>
          </div>
        )}
      </div>

      {/* Modal for full-size image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all"
            >
              ×
            </button>
            <Image
              src={selectedImage.image}
              alt="Full size event image"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
              loading="eager"
            />
          </div>
        </div>
      )}
    </>
  );
};

// DEFINE MAIN FUNCTION EXPORT
export default LifeStyle;