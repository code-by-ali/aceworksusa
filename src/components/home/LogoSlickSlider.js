"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

import trustedCompanyLogo1 from "../../../public/assets/trustedCompanyLogo1.png";
import trustedCompanyLogo2 from "../../../public/assets/trustedCompanyLogo2.png";
import trustedCompanyLogo3 from "../../../public/assets/trustedCompanyLogo3.png";
import trustedCompanyLogo4 from "../../../public/assets/trustedCompanyLogo4.png";
import trustedCompanyLogo5 from "../../../public/assets/trustedCompanyLogo5.png";

// Duplicate logos for seamless scroll
const logos = [
  trustedCompanyLogo1,
  trustedCompanyLogo2,
  trustedCompanyLogo3,
  trustedCompanyLogo4,
  trustedCompanyLogo5,
  trustedCompanyLogo1,
  trustedCompanyLogo2,
  trustedCompanyLogo3,
  trustedCompanyLogo4,
  trustedCompanyLogo5,
];

export default function LogoMarquee() {
  return (
    <section className="py-8 sm:py-12 bg-white">
      {/* Marquee - Left to Right */}
      <Marquee gradient={false} speed={50} pauseOnHover={true} className="mb-6">
        {logos.map((logo, idx) => (
          <div
            key={`logo-${idx}`}
            className="flex items-center justify-center mx-6"
          >
            <Image
              src={logo}
              alt={`Logo ${idx + 1}`}
              unoptimized
              className="object-contain w-auto h-10 sm:h-12 lg:h-16"
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
            <Image
              src={logo}
              alt={`Logo ${idx + 1}`}
              unoptimized
              className="object-contain w-auto h-10 sm:h-12 lg:h-16"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
