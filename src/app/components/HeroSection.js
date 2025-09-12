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
      <section
        className={`relative  flex items-center bg-black ${styles.herobg}`}
      >
        {/* Background image with dark overlay */}

        <div className="container mx-auto px-6 flex flex-col gap-8 ">
          {/* Customer Review Badge */}
          <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-1 w-fit backdrop-blur">
            {/* Avatars (placeholder) */}
            <div className="flex -space-x-3">
              <Image
                unoptimized
                src={cutomerimg}
                width={128}
                height={32}
                className=""
                alt="User 1"
              />
            </div>
            <div>
              <Image
                unoptimized
                src={check}
                width={32}
                height={32}
                className="check-orange"
                alt="User 1"
              />

              <div
                className="text-white text-sm font-semibold ml-3"
                style={{ fontSize: "24px" }}
              >
                130K+
              </div>
              <div
                className="text-white  ml-3"
                style={{ color: "#F1F2FA", fontSize: "14px" }}
              >
                Customer Review+
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

            {/* Subheadline/Description */}
            <p className="!break-words !text-base sm:!text-xl xl:!text-2xl">
              We craft data-driven strategies that drive growth, helping brands{" "}
              <br />
              navigate the digital landscape with precision.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex gap-4  callToAction">
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

        {/* Badges/Awards bar (bottom right, optional) */}
        <div
          className={`absolute bottom-0 right-0 bg-white/12 backdrop-blur-[24px] border border-white/40 border-b-0 rounded-tl-[24px] p-4 sm:p-6 md:p-8}`}
        >
          {/* Replace these spans/images with your actual award badge images */}
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
