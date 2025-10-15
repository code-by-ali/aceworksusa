"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ClientLogo1 from "../../../public/assets/about-us-client-logo-1.svg";
import ClientLogo2 from "../../../public/assets/about-us-client-logo-2.svg";
import ClientLogo3 from "../../../public/assets/about-us-client-logo-3.svg";
import ClientLogo4 from "../../../public/assets/about-us-client-logo-4.svg";
import ClientLogo5 from "../../../public/assets/about-us-client-logo-5.svg";
import ClientIcon from "../../../public/assets/about-us-client-icon.svg";
import CommonImage from "../common/CommonImage";

const content = [
  { logo: ClientLogo1, name: "Invert" },
  { logo: ClientLogo2, name: "Snowflake" },
  { logo: ClientLogo3, name: "Proline" },
  { logo: ClientLogo4, name: "Hitech" },
  { logo: ClientLogo5, name: "Flash" },
  // duplicate to create seamless loop
  { logo: ClientLogo1, name: "Invert" },
  { logo: ClientLogo2, name: "Snowflake" },
  { logo: ClientLogo3, name: "Proline" },
  { logo: ClientLogo4, name: "Hitech" },
  { logo: ClientLogo5, name: "Flash" },
];

export default function ClientReview() {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 6000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          speed: 5000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          speed: 4000,
        },
      },
    ],
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#2B5A8C] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-relaxed">
            2,500+ professionals, teams, and{" "}
            <br className="hidden sm:block" />
            enterprises grow with Aceworks
          </h3>
        </div>

        {/* Logo Slider */}
        <div className="client-slider">
          <Slider {...settings}>
            {content.map((item, idx) => (
              <div key={idx} className="px-6 sm:px-8">
                <div className="flex items-center justify-center h-36 sm:h-28 md:h-24 lg:h-28">
                  <CommonImage
                    src={item.logo.src || item.logo}
                    alt={item.name}
                    className="object-contain max-w-[220px] sm:max-w-[160px] md:max-w-[140px] lg:max-w-[160px]"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Button */}
        <div className="text-center mt-12 lg:mt-16">
          <button className="outline-none inline-flex items-center gap-2 text-white text-sm md:text-base font-medium cursor-pointer">
            See Our Client Review
            <CommonImage
              src={ClientIcon.src || ClientIcon}
              alt={"arrow-icon"}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
