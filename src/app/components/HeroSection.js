import React from "react";
import Image from "next/image";
import styles from "../home.module.css";

import cutomerimg from "../../../public/assets/customerImg.png";
import check from "../../../public/assets/checkorange.svg";

import blueStarLogo from "../../../public/assets/blueStarLogo.png";
import bestChoiceLogo from "../../../public/assets/bestChoiceLogo.png";
import usersLoveUsLogo from "../../../public/assets/usersLoveUsLogo.png";
import premiumQualityLogo from "../../../public/assets/premiumQualityLogo.png";
import goldDiscLogo from "../../../public/assets/goldDiscLogo.png";

const HeroSection = () => {
  return (
    <div>
      <section className={`relative bg-black ${styles.herobg}`}>
        {/* Hero Content */}
        <div className="container mx-auto px-6 flex flex-col gap-8 pb-32 sm:pb-40">
          {/* Customer Review Badge */}
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-1 w-fit backdrop-blur">
            <div className="flex -space-x-3">
              <Image
                unoptimized
                src={cutomerimg}
                width={128}
                height={32}
                alt="Customer"
              />
            </div>
            <div>
              <Image
                unoptimized
                src={check}
                width={32}
                height={32}
                className="check-orange"
                alt="Verified"
              />
              <div className="text-white font-semibold ml-3 text-2xl">
                130K+
              </div>
              <div className="ml-3 text-sm" style={{ color: "#F1F2FA" }}>
                Customer Reviews
              </div>
            </div>
          </div>

          {/* Hero Headline */}
          <div className="Hero-headline">
            <div className="tagline">Your Trusted Growth Experts</div>
            <h1 className="text-white !text-4xl sm:!text-5xl lg:!text-6xl">
              <span className="block">Strategy That Scales.</span>
              <span className="block">Growth That Lasts</span>
            </h1>

            {/* Subheadline */}
            <p className="!break-words !text-base sm:!text-xl xl:!text-2xl">
              We craft data-driven strategies that drive growth, helping brands
              <br />
              navigate the digital landscape with precision.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap text-sm sm:text-base mt-10 gap-4">
              <a
                href="#"
                className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition"
              >
                Get a Free Quote
              </a>
              <a
                href="#"
                className="bg-transparent border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>

        {/* Logos / Badges Section */}
        <div className="bg-white/12 backdrop-blur-[24px] border border-white/40 border-b-0 rounded-tl-[24px] p-4 sm:p-6 md:p-8 absolute bottom-0 right-0">
          <p className="!text-lg sm:!text-xl xl:!text-2xl text-white">
            Recognized for Excellence in Marketing Services
          </p>
          <div className="flex flex-wrap items-center justify-between gap-8">
            <Image
              unoptimized
              src={bestChoiceLogo}
              alt="Best Choice"
              className="w-14 sm:w-16 md:w-20 lg:w-22 h-auto"
            />
            <Image
              unoptimized
              src={usersLoveUsLogo}
              alt="Top Rated"
              className="w-12 sm:w-14 md:w-16 lg:w-18 h-auto"
            />
            <Image
              unoptimized
              src={blueStarLogo}
              alt="Best Service"
              className="w-10 sm:w-12 md:w-14 lg:w-16 h-auto"
            />
            <Image
              unoptimized
              src={premiumQualityLogo}
              alt="Premium Quality"
              className="w-16 sm:w-20 md:w-22 lg:w-24 h-auto"
            />
            <Image
              unoptimized
              src={goldDiscLogo}
              alt="Sales & Marketing"
              className="w-16 sm:w-20 md:w-22 lg:w-24 h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
