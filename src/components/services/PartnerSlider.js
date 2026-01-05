"use client";
import React, { useRef, useState, useEffect } from "react";
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
  const [slidesToShow, setSlidesToShow] = useState(1); // Start with 1
  const [isClient, setIsClient] = useState(false);

  const benefits = [
    {
      id: 1,
      title:
        "We handle lead generation while you focus on running your business, no micromanagement needed.",
      img: PartnerCardImg1,
    },
    {
      id: 2,
      title:
        "Your brand stays visible around the clock with our automated online marketing systems working 24/7.",
      img: PartnerCardImg2,
    },
    {
      id: 3,
      title:
        "Every digital marketing strategy is customized to your business goals, no templates, no shortcuts.",
      img: PartnerCardImg3,
    },
    {
      id: 4,
      title:
        "Get enterprise-level digital marketing services without the enterprise price tag. Quality results, affordable pricing.",
      img: PartnerCardImg4,
    },
  ];

  // Determine slides to show based on window width
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

  // Handle client-side mounting and resize
  useEffect(() => {
    setIsClient(true);
    updateSlidesToShow();

    const handleResize = () => {
      updateSlidesToShow();
      // Force slider to refresh after resize
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(currentSlide);
      }
    };

    window.addEventListener("resize", handleResize);

    // Small delay to ensure proper initialization on mobile
    const timer = setTimeout(() => {
      updateSlidesToShow();
    }, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [currentSlide]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
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
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= benefits.length - slidesToShow;

  // Don't render slider until client-side
  if (!isClient) {
    return (
      <div className="bg-[#265A92] py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between mb-8 sm:mb-12 gap-4">
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
          </div>
        </div>
      </div>
    );
  }

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
              Why Acework?
            </BadgeOrange>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
              The Digital Marketing Agency
              <br />
              That Puts Your Growth First
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
                  : "bg-[#F15533] hover:bg-[#d94929]"
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
                  : "bg-[#F15533] hover:bg-[#d94929]"
              }`}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <Slider key={slidesToShow} ref={sliderRef} {...settings}>
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
