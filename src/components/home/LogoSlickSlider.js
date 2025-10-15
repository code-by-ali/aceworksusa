"use client";
import Marquee from "react-fast-marquee";
import TrustedCompanyLogo1 from "@/public/assets/home-trusted-company-logo-1.svg";
import TrustedCompanyLogo2 from "@/public/assets/home-trusted-company-logo-2.svg";
import TrustedCompanyLogo3 from "@/public/assets/home-trusted-company-logo-3.svg";
import TrustedCompanyLogo4 from "@/public/assets/home-trusted-company-logo-4.svg";
import TrustedCompanyLogo5 from "@/public/assets/home-trusted-company-logo-5.svg";
import CommonImage from "../common/CommonImage";

// Duplicate logos for seamless scroll
const logos = [
  TrustedCompanyLogo1,
  TrustedCompanyLogo2,
  TrustedCompanyLogo3,
  TrustedCompanyLogo4,
  TrustedCompanyLogo5,
  TrustedCompanyLogo1,
  TrustedCompanyLogo2,
  TrustedCompanyLogo3,
  TrustedCompanyLogo4,
  TrustedCompanyLogo5,
];

export default function LogoMarquee() {
  return (
    <section className="py-8 sm:py-12 bg-white">
      {/* Marquee - Left to Right */}
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="mb-12"
      >
        {logos.map((logo, idx) => (
          <div
            key={`logo-${idx}`}
            className="flex items-center justify-center mx-6"
          >
            <CommonImage
              src={logo.src || logo}
              alt={`Logo ${idx + 1}`}
              className="object-contain w-auto h-10 sm:h-12 lg:h-12"
            />
          </div>
        ))}
      </Marquee>

      {/* Marquee - Right to Left */}
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        direction="right"
      >
        {logos.map((logo, idx) => (
          <div
            key={`logo-rtl-${idx}`}
            className="flex items-center justify-center mx-6"
          >
            <CommonImage
              src={logo.src || logo}
              alt={`Logo ${idx + 1}`}
              className="object-contain w-auto h-10 sm:h-12 lg:h-12"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
