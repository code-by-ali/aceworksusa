"use client";
import { useState, useEffect } from "react";
import CommonImage from "../common/CommonImage";

import ClientLogo1 from "../../../public/assets/about-us-client-logo-1.svg";
import ClientLogo2 from "../../../public/assets/about-us-client-logo-2.svg";
import ClientLogo3 from "../../../public/assets/about-us-client-logo-3.svg";
import ClientLogo4 from "../../../public/assets/about-us-client-logo-4.svg";
import ClientLogo5 from "../../../public/assets/about-us-client-logo-5.svg";
import ClientIcon from "../../../public/assets/about-us-client-icon.svg";

import dynamic from "next/dynamic";

// Dynamically import Marquee with no SSR
const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

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
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // avoid SSR rendering

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
            <div key={idx} className="flex items-center justify-center mx-6">
              <CommonImage
                src={logo.src || logo}
                alt={`Client Logo ${idx + 1}`}
                className="object-contain w-auto h-12 sm:h-16 md:h-20 lg:h-24"
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
