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
  // duplicate for seamless loop
  trustedCompanyLogo1,
  trustedCompanyLogo2,
  trustedCompanyLogo3,
  trustedCompanyLogo4,
  trustedCompanyLogo5,
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
      { breakpoint: 640, settings: { slidesToShow: 1 } }, // integer
    ],
  };

  const settings1 = { ...baseSettings };
  const settings2 = { ...baseSettings, rtl: true };

  return (
    <div className="flex flex-col gap-6 py-6">
      {/* Top slider */}
      <Slider {...settings1}>
        {logos.map((logo, idx) => (
          <div key={`top-${idx}`} className="px-2 sm:px-3 md:px-4 flex justify-center">
            <div className="flex items-center justify-center flex-shrink-0 w-full max-w-[200px]">
              <Image
                src={logo}
                alt={`Logo ${idx}`}
                unoptimized
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Bottom slider */}
      <Slider {...settings2}>
        {logos.map((logo, idx) => (
          <div key={`bottom-${idx}`} className="px-2 sm:px-3 md:px-4 flex justify-center">
            <div className="flex items-center justify-center flex-shrink-0 w-full max-w-[200px]">
              <Image
                src={logo}
                alt={`Logo ${idx}`}
                unoptimized
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
