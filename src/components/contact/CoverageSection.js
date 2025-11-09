import React from "react";
import { Building2, Users, UserCheck, TrendingUp } from "lucide-react";
import BadgeBlue from "../common/BadgeBlue";
import CoverageSectionImg from "@/public/assets/contact-coverage-section-img.svg";
import CommonImage from "../common/CommonImage";
import CoverageSectionIcon1 from "@/public/assets/contact-coverage-section-icon-1.svg";
import CoverageSectionIcon2 from "@/public/assets/contact-coverage-section-icon-2.svg";

const CoverageSection = () => {
  const stats = [
    {
      icon: (
        <CommonImage
          src={CoverageSectionIcon1.src || CoverageSectionIcon1}
          alt={"coverage-icon-1"}
          className="w-12 h-12"
        />
      ),
      value: "56+",
      label: "Covered Brands",
    },
    {
      icon: (
        <CommonImage
          src={CoverageSectionIcon2.src || CoverageSectionIcon2}
          alt={"coverage-icon-2"}
          className="w-12 h-12"
        />
      ),
      value: "42K",
      label: "Satisfied Customer",
    },
    {
      icon: (
        <CommonImage
          src={CoverageSectionIcon1.src || CoverageSectionIcon1}
          alt={"coverage-icon-1"}
          className="w-12 h-12"
        />
      ),
      value: "25+",
      label: "Professional Team",
    },
    {
      icon: (
        <CommonImage
          src={CoverageSectionIcon2.src || CoverageSectionIcon2}
          alt={"coverage-icon-1"}
          className="w-12 h-12"
        />
      ),
      value: "99%",
      label: "Our Success Rate",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with Badge */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <BadgeBlue>Achievement</BadgeBlue>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary tracking-[-0.5px]">
            Get the Coverage you Need.
          </h2>
        </div>

        {/* Stats Grid with Center Image */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 max-w-7xl mx-auto">
          {/* Left Two Stats */}
          <div className="grid grid-cols-2 gap-8 w-full lg:w-auto">
            {stats.slice(0, 2).map((stat, index) => (
              <div
                key={index}
                className="text-center rounded-2xl drop-shadow-2xl py-4 px-2"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-normal text-[#265A92] mb-2">
                  {stat.value}
                </div>
                <div className="text-base md:text-lg text-[#6B6B6B] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex-shrink-0">
            <CommonImage
              src={CoverageSectionImg.src || CoverageSectionImg}
              alt="Team collaboration"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Right Two Stats */}
          <div className="grid grid-cols-2 gap-8 w-full lg:w-auto">
            {stats.slice(2, 4).map((stat, index) => (
              <div
                key={index + 2}
                className="text-center rounded-2xl drop-shadow-2xl py-4 px-2"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-normal text-[#265A92] mb-2">
                  {stat.value}
                </div>
                <div className="text-base md:text-lg text-[#6B6B6B] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageSection;
