"use client";

import Slider from "react-slick";
import Image from "next/image";

import trustedCompanyLogo1 from "../../../public/assets/trustedCompanyLogo1.png";
import trustedCompanyLogo2 from "../../../public/assets/trustedCompanyLogo2.png";
import trustedCompanyLogo3 from "../../../public/assets/trustedCompanyLogo3.png";
import trustedCompanyLogo4 from "../../../public/assets/trustedCompanyLogo4.png";
import trustedCompanyLogo5 from "../../../public/assets/trustedCompanyLogo5.png";

const logos = [
  trustedCompanyLogo1,
  trustedCompanyLogo2,
  trustedCompanyLogo3,
  trustedCompanyLogo4,
  trustedCompanyLogo5,
];

export default function LogoSlickSlider() {
  const responsiveConfig = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const baseSettings = {
    infinite: true,
    speed: 4000, // slower continuous scroll
    autoplay: true,
    autoplaySpeed: 0, // immediate
    cssEase: "linear", // smooth
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    dots: false,
    responsive: responsiveConfig,
  };

  const settings1 = { ...baseSettings, rtl: true }; // Top slider → right
  const settings2 = { ...baseSettings, rtl: false }; // Bottom slider → left

  // 🔑 Duplicate logos enough times to fill viewport continuously
  const loopedLogos = Array(4).fill(logos).flat();

  return (
    <div className="flex flex-col gap-6 py-6">
      {/* Top slider */}
      <Slider {...settings1}>
        {loopedLogos.map((src, idx) => (
          <div key={`top-${idx}`} className="flex justify-center px-6">
            <Image
              unoptimized
              src={src}
              alt={`Logo ${idx + 1}`}
              className="w-[100px] sm:w-[140px] md:w-[160px] h-auto object-contain"
            />
          </div>
        ))}
      </Slider>

      {/* Bottom slider */}
      <Slider {...settings2}>
        {loopedLogos.map((src, idx) => (
          <div key={`bottom-${idx}`} className="flex justify-center px-6">
            <Image
              unoptimized
              src={src}
              alt={`Logo ${idx + 1}`}
              className="w-[100px] sm:w-[140px] md:w-[160px] h-auto object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
