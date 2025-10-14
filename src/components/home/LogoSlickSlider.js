"use client";

import Slider from "react-slick";
import Image from "next/image";

import trustedCompanyLogo1 from "../../../public/assets/trustedCompanyLogo1.png";
import trustedCompanyLogo2 from "../../../public/assets/trustedCompanyLogo2.png";
import trustedCompanyLogo3 from "../../../public/assets/trustedCompanyLogo3.png";
import trustedCompanyLogo4 from "../../../public/assets/trustedCompanyLogo4.png";
import trustedCompanyLogo5 from "../../../public/assets/trustedCompanyLogo5.png";

const logos = [
  { src: trustedCompanyLogo1, name: "Logo 1" },
  { src: trustedCompanyLogo2, name: "Logo 2" },
  { src: trustedCompanyLogo3, name: "Logo 3" },
  { src: trustedCompanyLogo4, name: "Logo 4" },
  { src: trustedCompanyLogo5, name: "Logo 5" },
  // Duplicate for seamless loop
  { src: trustedCompanyLogo1, name: "Logo 1" },
  { src: trustedCompanyLogo2, name: "Logo 2" },
  { src: trustedCompanyLogo3, name: "Logo 3" },
  { src: trustedCompanyLogo4, name: "Logo 4" },
  { src: trustedCompanyLogo5, name: "Logo 5" },
];

export default function LogoSlickSlider() {
  const baseSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1.5 } },
    ],
  };

  // First slider goes left to right (default)
  const settings1 = { ...baseSettings };
  
  // Second slider goes right to left
  const settings2 = { ...baseSettings, rtl: true };

  return (
    <div className="flex flex-col gap-6 py-6">
      {/* Top slider - Left to Right */}
      <Slider {...settings1}>
        {logos.map((item, idx) => (
          <div key={`top-${idx}`} className="px-3 sm:px-4 md:px-6">
            <div className="flex items-center justify-center h-24 sm:h-24 lg:h-28">
              <Image
                unoptimized
                src={item.src}
                alt={item.name}
                width={200}
                height={90}
                className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] h-auto"
                style={{ minWidth: '120px' }}
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Bottom slider - Right to Left */}
      <Slider {...settings2}>
        {logos.map((item, idx) => (
          <div key={`bottom-${idx}`} className="px-3 sm:px-4 md:px-6">
            <div className="flex items-center justify-center h-24 sm:h-24 lg:h-28">
              <Image
                unoptimized
                src={item.src}
                alt={item.name}
                width={200}
                height={90}
                className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] h-auto"
                style={{ minWidth: '120px' }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}