import React from "react";
import FoundedImage1 from "@/public/assets/home-founded-image-1.svg";
import FoundedImage2 from "@/public/assets/home-founded-image-2.svg";
import FoundedImage3 from "@/public/assets/home-founded-image-3.svg";
import CommonImage from "../common/CommonImage";

const Founded = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Box */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20 mb-12 lg:mb-20">
          <div className="w-full lg:w-2/3">
            <h3 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-medium tracking-[-2.48px] text-primary">
              We've Helped 500+
              <br />
              US Businesses Double
              <br />
              Their Revenue Online
            </h3>
          </div>
          <div className="w-[160px] sm:w-[200px] lg:w-[257px] flex-shrink-0">
            <CommonImage
              src={FoundedImage1.src || FoundedImage1}
              width={257}
              height={165}
              alt="Watch Reel"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Bottom Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
          {/* Left text box */}
          <div className="w-full">
            <div className="space-y-6">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-grey leading-relaxed tracking-[0.4px]">
                Since 2016, Acework has been the digital marketing agency USA
                businesses trust when generic tactics fail. We're not
                order-takers, we're your digital marketing consultant and growth
                partner, building strategies that turn your website into a
                customer-generating machine.
              </p>
              <div className="grid grid-cols-2 items-center gap-4">
                <div>
                  <p className="text-sm sm:text-sm md:text-base lg:text-lg text-grey tracking-[0.4px]">
                    Revenue Generated For Our Clients
                  </p>
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-extralight text-secondary">
                  $50
                  <span className="relative">
                    M+
                    <span className="absolute top-0 left-0 w-full h-1 bg-secondary"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle image */}
          <div className="w-full flex justify-center items-start">
            <CommonImage
              src={FoundedImage2.src || FoundedImage2}
              width={480}
              height={436}
              alt="About Us"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full h-auto rounded-2xl"
            />
          </div>

          {/* Right content box */}
          <div className="max-w-3xs flex flex-col justify-between">
            <div>
              <div className="flex flex-col justify-center gap-2 mb-4">
                <CommonImage
                  src={FoundedImage3.src || FoundedImage3}
                  width={20}
                  height={20}
                  alt="Team"
                />
                <p className="text-xs sm:text-sm md:text-base font-medium text-[#265A92] uppercase">
                  HUGE TEAM
                </p>
              </div>
              <h6 className="text-lg sm:text-xl md:text-2xl font-extralight text-primary tracking-[-0.48px]">
                Managing global business startups in 2024
              </h6>
            </div>
            <div className="flex justify-start lg:justify-end mt-6 lg:mt-0">
              <a
                href="#"
                className="inline-block bg-secondary text-white font-bold px-8 py-3 rounded-full text-sm sm:text-base"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founded;
