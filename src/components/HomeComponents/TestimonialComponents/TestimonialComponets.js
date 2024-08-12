"use client";
import React, { useState, useEffect } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { SubTitle } from "@/components/shared";
import { FaDiagramNext } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import { Rate } from "antd";

const TestimonialSlider = () => {
  const [slider, setSlider] = useState(null);
  const testimonial = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

  useEffect(() => {
    if (slider) {
      const keenSlider = new KeenSlider(slider, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 2.5,
              spacing: 32,
            },
          },
        },
      });

      const keenSliderPrevious = document.getElementById(
        "keen-slider-previous"
      );
      const keenSliderNext = document.getElementById("keen-slider-next");

      keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
      keenSliderNext.addEventListener("click", () => keenSlider.next());
    }
  }, [slider]);

  return (
    <section className="bg-slate-100  mt-20">
      <div className="px-5 xl:px-[140px] py-8 sm:px-6 lg:me-0  xl:py-15 ">
        <SubTitle data-aos="fade-up" >
          Testimonial
        </SubTitle>
        <Marquee>
          <div className="flex  min-w-screen-2xl justify-between items-end gap-6 lg:gap-6 px-3 py-10 ">
            {testimonial.map((item) => {
              return (
                <>
                  <div
                    className="bg-white rounded-lg shadow-md shadow-gray-400  p-6    sm:p-8 w-[300px] lg:w-[400px]"
                    key={item.id}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        alt=""
                        src="https://as2.ftcdn.net/v2/jpg/02/05/76/31/1000_F_205763158_1TwmH4y0PysjXatwKcB8H285ARYrQ3LH.jpg"
                        className="size-14 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex justify-center gap-0.5 text-green-500">
                         
                        </div>
                        <p className="mt-0.5 text-xl font-medium text-gray-900">
                          Paul Starr
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-black text-lg font-normal">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Culpa sit rerum incidunt, a consequuntur recusandae ab
                      saepe illo est quia obcaecati neque quibusdam eius
                      accusamus error officiis atque voluptates magnam!
                    </p>
                  </div>{" "}
                </>
              );
            })}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default TestimonialSlider;
