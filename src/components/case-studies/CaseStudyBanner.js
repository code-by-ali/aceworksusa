import { ZapIcon } from "lucide-react";
import React from "react";

export default function CaseStudyBanner() {
  return (
    <div className="bg-[#265A92] px-6 py-20 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <ZapIcon className="fill-[#FF5E15] text-[#FF5E15] h-4 w-4" />
          <span className="text-white text-sm font-normal">Case Studies</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
          Our Case Studies
        </h1>

        {/* Description */}
        <p className="text-[#D0D5DD] text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
          Explore our successful projects showcasing innovative solutions that
          drove measurable results for diverse clients.
        </p>
      </div>
    </div>
  );
}
