"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import BadgeBlue from "../common/BadgeBlue";
import DigitalMarketingIcon1 from "@/public/assets/home-digital-marketing-img-1.svg";
import DigitalMarketingIcon2 from "@/public/assets/home-digital-marketing-img-2.svg";
import DigitalMarketingIcon3 from "@/public/assets/home-digital-marketing-img-3.svg";
import DigitalMarketingIcon4 from "@/public/assets/home-digital-marketing-img-4.svg";
import CommonImage from "../common/CommonImage";

const content = [
  {
    title: "Digital Marketing",
    number: "120",
    icon: DigitalMarketingIcon1,
    text: "Over 625 active projects demonstrate our capacity to scale globally and reliably",
  },
  {
    title: "Search Engine Optimized",
    number: "120",
    icon: DigitalMarketingIcon2,
    text: "Over 625 active projects demonstrate our capacity to scale globally and reliably",
  },
  {
    title: "Social Media Marketing",
    number: "$720M",
    icon: DigitalMarketingIcon3,
    text: "Clients manage $720M+ in media using our design-driven systems effectively.",
  },
  {
    title: "Projects complete",
    number: "500",
    icon: DigitalMarketingIcon4,
    text: "Over 625 active projects demonstrate our capacity to scale globally and reliably",
  },
];

export default function DigitalMarketing() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <BadgeBlue className="mx-auto">Our Services</BadgeBlue>

        <h3 className="text-center text-3xl sm:text-4xl xl:text-5xl font-semibold tracking-[-2px] text-primary mb-4">
          Full Service Digital <br />
          Marketing Agency
        </h3>

        <p className="text-center text-description text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-12">
          We offer comprehensive Service Digital Marketing solutions to boost
          your online presence. Our services include SEO, social media
          marketing, paid ads, content creation, and email marketing, all
          tailored to your business needs.
        </p>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={handleSlideChange}
          spaceBetween={30}
          slidesPerView={3}
          modules={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mb-12 py-4"
        >
          {content.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-[0px_2px_6px_0px_#19213D1A] border border-[#F1F2F9] rounded-2xl p-6 lg:p-8 h-full">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-medium text-base md:text-lg text-primary flex-1 pr-4">
                    {item.title}
                  </h4>
                  <div className="p-2 border border-[#F1F2F9] drop-shadow-md rounded-lg">
                    <CommonImage
                      alt={item.title}
                      src={item.icon.src || item.icon}
                      width={48}
                      height={48}
                      className="flex-shrink-0"
                    />
                  </div>
                </div>

                <h5 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
                  {item.number}
                  <span className="text-secondary">+</span>
                </h5>

                <p className="text-sm md:text-base text-description font-normal leading-relaxed">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-between items-center">
          <a
            href="#"
            className="inline-block bg-secondary text-white font-bold px-8 py-3 rounded-full text-base"
          >
            Get A Quote
          </a>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                isBeginning
                  ? "border-gray-300 text-gray-300 cursor-not-allowed"
                  : "border-secondary text-secondary hover:bg-secondary hover:text-white"
              }`}
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                isEnd
                  ? "border-gray-300 text-gray-300 cursor-not-allowed"
                  : "border-secondary text-secondary hover:bg-secondary hover:text-white"
              }`}
              aria-label="Next slide"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
