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
    speed: 6000, // very slow transition
    autoplaySpeed: 0, // no delay between slides
    cssEase: "linear", // continuous scroll
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false, // keep moving
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-[#2B5A8C] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-relaxed">
            2,500+ professionals, teams, and{" "}
            <br className="hidden sm:block" />
            enterprises grow with Aceworks
          </h3>
        </div>

        {/* Smooth Continuous Logo Slider */}
        <div className="client-slider">
          <Slider {...settings}>
            {content.map((item, idx) => (
              <div key={idx} className="px-4 sm:px-6">
                <div className="flex items-center justify-center h-20 sm:h-24 lg:h-28">
                  <CommonImage
                    src={item.logo.src || item.logo}
                    alt={item.name}
                    className="object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 max-w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

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
