import React from "react";
import Image from "next/image";

const Founded = () => {
  return (
    <section className="founded py-12">
      <div className="container mx-auto px-4">
        {/* Top Box */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20 founded-box-one">
          <div className="w-full lg:w-2/3">
            <h3 className="!text-3xl sm:!text-4xl xl:!text-5xl font-medium leading-snug">
              Founded in 2016, we are a <br />
              California based independent <br />
              digital marketing agency.
            </h3>
          </div>
          <div className="w-[160px] sm:w-[200px] lg:w-[257px]">
            <Image
              src="/assets/watchreel.png"
              width={257}
              height={165}
              alt="Watch Reel"
              unoptimized
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Bottom Box */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 founded-box-two">
          {/* Left text box */}
          <div className="w-full">
            <div className="founded-text-left space-y-4">
              <p className="text-sm sm:text-base md:text-lg">
                We strive to create content that not only informs but also
                inspires action, helping businesses establish authority in their
                industry.
              </p>
              <div className="grid grid-cols-2 items-center gap-4">
                <div>
                  <p className="text-xs sm:text-sm md:text-base">
                    We have raised more than
                  </p>
                </div>
                <div className="milion text-5xl sm:text-5xl md:text-5xl lg:text-8xl font-semibold">
                  5
                  <span className="overline decoration-[3px] decoration-solid decoration-[#ff5e15]">
                    M
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle image */}
          <div className="w-full flex justify-center">
            <Image
              src="/assets/about.webp"
              width={480}
              height={436}
              alt="About Us"
              unoptimized
              className="w-full max-w-xs sm:max-w-md lg:max-w-full h-auto"
            />
          </div>

          {/* Right content box */}
          <div className="w-full flex flex-col justify-between">
            <div>
              <div className="team-box flex items-center gap-2 mb-3">
                <Image
                  src="/assets/team.png"
                  width={20}
                  height={20}
                  alt="Team"
                  unoptimized
                />
                <p className="text-xs sm:text-sm md:text-base">HUGE TEAM</p>
              </div>
              <h6 className="team-h6 text-sm sm:text-base md:text-lg font-semibold">
                Managing global business startups in 2024
              </h6>
            </div>
            <div className="flex justify-end mt-6 lg:mt-0">
              <a
                href="#"
                className="btn-orange text-xs sm:text-sm md:text-base"
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
