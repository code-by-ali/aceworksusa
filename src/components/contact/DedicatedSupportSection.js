"use client";
import React from "react";
import Image from "next/image";
import BadgeOrange from "@/src/components/common/BadgeOrange";
import CommonImage from "../common/CommonImage";
import SupportImg from "@/public/assets/contact-support-img.svg";

export default function DedicatedSupportSection() {
  return (
    <section className="bg-[#265A92] py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <BadgeOrange className="mx-auto">Contact Us</BadgeOrange>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          For Other{" "}
          <span className="text-white font-bold">Dedicated Support</span>
        </h2>
      </div>

      {/* Card */}
      <div className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto bg-white text-left text-primary rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8">
        {/* Left Content */}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold text-[#101828] mb-2">
            Schedule a Meeting Today
          </h3>
          <p className="text-sm sm:text-base text-[#475467] mb-4">
            Schedule a meeting with financial experts today.
          </p>
          <button className="bg-secondary text-white font-semibold text-sm sm:text-base px-5 py-2.5 rounded-full hover:bg-[#ff5a13] transition">
            Schedule a meeting
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 w-full sm:w-[180px] md:w-[200px]">
          <CommonImage
            src={SupportImg.src || SupportImg}
            alt="Support Meeting"
            width={200}
            height={150}
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
