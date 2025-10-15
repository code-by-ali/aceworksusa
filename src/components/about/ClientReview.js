"use client";
import CommonImage from "../common/CommonImage";
import dynamic from "next/dynamic";

import ClientLogo1 from "../../../public/assets/about-us-client-logo-1.svg";
import ClientLogo2 from "../../../public/assets/about-us-client-logo-2.svg";
import ClientLogo3 from "../../../public/assets/about-us-client-logo-3.svg";
import ClientLogo4 from "../../../public/assets/about-us-client-logo-4.svg";
import ClientLogo5 from "../../../public/assets/about-us-client-logo-5.svg";
import ClientIcon from "../../../public/assets/about-us-client-icon.svg";

// Dynamic import to avoid SSR issues
const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

// Duplicate logos for smooth scrolling
const logos = [
  ClientLogo1,
  ClientLogo2,
  ClientLogo3,
  ClientLogo4,
  ClientLogo5,
  ClientLogo1,
  ClientLogo2,
  ClientLogo3,
  ClientLogo4,
  ClientLogo5,
];

export default function ClientReview() {
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

        {/* Marquee */}
        <Marquee gradient={false} speed={50} pauseOnHover className="mb-8">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center mx-4 sm:mx-6"
              style={{ flex: "0 0 auto" }} // prevent shrinking
            >
              <CommonImage
                src={logo.src || logo}
                alt={`Client Logo ${idx + 1}`}
                style={{
                  width: "120px", // fixed width on mobile
                  height: "60px",
                  maxWidth: "150px", // larger on bigger screens
                  maxHeight: "80px",
                }}
                className="object-contain"
              />
            </div>
          ))}
        </Marquee>

        {/* Button */}
        <div className="text-center mt-12 lg:mt-16">
          <button className="outline-none inline-flex items-center gap-2 text-white text-sm md:text-base font-medium cursor-pointer">
            See Our Client Review
            <CommonImage
              src={ClientIcon.src || ClientIcon}
              alt="arrow-icon"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
