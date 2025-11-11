"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BadgeOrange from "../common/BadgeOrange";
import PartnerCardImg1 from "@/public/assets/services-partner-card-img-1.svg";
import PartnerCardImg2 from "@/public/assets/services-partner-card-img-2.svg";
import PartnerCardImg3 from "@/public/assets/services-partner-card-img-3.svg";
import PartnerCardImg4 from "@/public/assets/services-partner-card-img-4.svg";
import CommonImage from "../common/CommonImage";

export default function PartnerSlider() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const benefits = [
    {
      id: 1,
      title:
        "We take care of generating leads while you focus on doing what you love running your business!",
      img: PartnerCardImg1,
    },
    {
      id: 2,
      title:
        "Your brand stays visible 24/7 with our automated marketing strategies.",
      img: PartnerCardImg2,
    },
    {
      id: 3,
      title:
        "Every solution is tailored to fit your unique business needs no cookie-cutter strategies here!",
      img: PartnerCardImg3,
    },
    {
      id: 4,
      title: "Get big agency results without breaking the bank.",
      img: PartnerCardImg4,
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    onInit: () => {
      updateSlidesToShow();
    },
    onReInit: () => {
      updateSlidesToShow();
    },
  };

  const updateSlidesToShow = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    }
  };

  React.useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= benefits.length - slidesToShow;

  return (
    <div className="bg-[#265A92] py-12 sm:py-16 lg:py-20 overflow-hidden">
      <style>{`
        .slick-slider {
          overflow: hidden;
        }
        .slick-list {
          overflow: hidden;
          margin: 0 -12px;
        }
        .slick-slide > div {
          padding: 0 12px;
        }
        .slick-track {
          display: flex !important;
        }
        .slick-slide {
          height: inherit !important;
        }
        .slick-slide > div {
          height: 100%;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation */}
        <div className="flex items-start justify-between mb-8 sm:mb-12 gap-4">
          {/* Title */}
          <div className="flex-1">
            <BadgeOrange className="rotate-[0deg] mb-4">
              Why acework
            </BadgeOrange>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
              See why partnering with
              <br />
              us is the smartest move.
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={handlePrev}
              disabled={isAtStart}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all ${
                isAtStart
                  ? "bg-gray-400 cursor-not-allowed opacity-50"
                  : "bg-[#F15533]"
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              disabled={isAtEnd}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all ${
                isAtEnd
                  ? "bg-gray-400 cursor-not-allowed opacity-50"
                  : "bg-[#F15533]"
              }`}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {benefits.map((benefit) => (
              <div key={benefit.id} className="h-full">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg h-full flex flex-col">
                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-medium text-primary mb-2">
                      {benefit.title}
                    </h3>
                  </div>

                  {/* Illustration */}
                  <div className="flex justify-center items-center">
                    <CommonImage src={benefit.img.src || benefit.img} />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
