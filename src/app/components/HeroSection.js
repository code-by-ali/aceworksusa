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
            <h1 className="text-white ">
              <span className="block">Strategy That Scales.</span>
              <span className="block">Growth That Lasts</span>
            </h1>

            {/* Subheadline/Description */}
            <p className="">
              We craft data-driven strategies that drive growth, helping brands
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
        <div className={`absolute bottom-0 right-0    ${styles.logoBox}`}>
          {/* Replace these spans/images with your actual award badge images */}
          <p className={`${styles.logotext}`}>
            Recognized for Excellence in Marketing Services!
          </p>
          <div className="flex flex-wrap items-center align-center justify-between gap-4">
            <Image
              unoptimized
              src={bestChoiceLogo}
              width={71}
              height={72}
              alt="Best Choice"
            />
            <Image
              unoptimized
              src={usersLoveUsLogo}
              width={64}
              height={72}
              alt="Top Rated"
            />
            <Image
              unoptimized
              src={blueStarLogo}
              width={55}
              height={72}
              alt="Best Service"
            />
            <Image
              unoptimized
              src={premiumQualityLogo}
              width={86}
              height={72}
              alt="Premium Quality"
            />
            <Image
              unoptimized
              src={goldDiscLogo}
              width={72}
              height={72}
              alt="Sales & Marketing"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
