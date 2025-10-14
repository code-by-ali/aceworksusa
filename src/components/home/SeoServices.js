"use client";

import React, { useState } from "react";
import Image from "next/image";
import BadgeOrange from "../common/BadgeOrange";

const services = [
  {
    title: "Local SEO Marketing",
    number: "001",
    tagline: "12 Projects",
    image: "/assets/local-service.png",
    description:
      "Maximize your presence on search engine results pages on a local scale",
  },
  {
    title: "Google My Business",
    number: "002",
    tagline: "2 Projects",
    image: "/assets/local-service.png",
    description:
      "Over 625 active projects demonstrate our capacity to scale globally and reliably",
  },
  {
    title: "Link Building & Content",
    number: "003",
    tagline: "3 Projects",
    image: "/assets/local-service.png",
    description:
      "Over 625 active projects demonstrate our capacity to scale globally and reliably",
  },
  {
    title: "Email Marketing",
    number: "004",
    tagline: "4 Projects",
    image: "/assets/local-service.png",
    description:
      "Over 625 active projects demonstrate our capacity to scale globally and reliably",
  },
  {
    title: "Design & Branding",
    number: "005",
    tagline: "5 Projects",
    image: "/assets/local-service.png",
    description:
      "Over 625 active projects demonstrate our capacity to scale globally and reliably",
  },
  {
    title: "ORM Management",
    number: "006",
    tagline: "6 Projects",
    image: "/assets/local-service.png",
    description:
      "Over 625 active projects demonstrate our capacity to scale globally and reliably",
  },
];

const SeoServices = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      className="py-16 px-4 bg-[#2b6396] bg-no-repeat bg-contain bg-right"
      style={{ backgroundImage: "url('/assets/seo-services.png')" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <BadgeOrange className="mb-6">SEO Services</BadgeOrange>

        {/* Heading + Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <h3 className="font-medium text-3xl md:text-4xl lg:text-5xl tracking-[-1.76px] text-white">
            How can we help <br />
            Your business grow
          </h3>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="#"
              className="inline-block text-center bg-secondary text-white font-bold px-6 py-3 rounded-full whitespace-nowrap w-full sm:w-auto "
            >
              Free SEO Consultation
            </a>
            <a
              href="#"
              className="inline-block text-center bg-white text-[#265a92] font-bold px-6 py-3 rounded-full whitespace-nowrap w-full sm:w-auto"
              style={{ boxShadow: "0px 4px 7px 0px #ffffff66 inset" }}
            >
              Get A Quote
            </a>
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-0">
          {services.map((service, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="border-b border-white">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex justify-between items-center py-6 md:py-8 text-left focus:outline-none group bg-transparent"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="font-bold text-[10px] text-[#d1d1d1] uppercase min-w-[40px]">
                      {service.number}
                    </div>
                    <div className="text-white font-medium text-lg sm:text-xl md:text-2xl tracking-[-0.24px]">
                      {service.title}
                    </div>
                  </div>
                  <span
                    className="ml-4 flex-shrink-0 transition-transform duration-300 text-secondary rounded-full bg-white p-1"
                    style={{
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    >
                      <path
                        d="M12 5V19M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="relative py-5 px-10 pb-[14px]">
                    <div className="flex flex-col md:flex-row gap-6 items-start mb-2">
                      <Image
                        unoptimized
                        alt={service.title}
                        src={service.image}
                        height={104}
                        width={162}
                        className="rounded-lg object-contain"
                      />
                      <p className="max-w-[250px] font-normal text-white text-base sm:text-lg md:text-xl tracking-[-0.16px]">
                        {service.description}
                      </p>
                    </div>
                    <div className="text-right text-[#D1D1D1] font-bold text-xs sm:text-sm md:text-base">
                      {service.tagline}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SeoServices;
