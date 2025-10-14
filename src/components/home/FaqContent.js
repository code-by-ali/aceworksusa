"use client";

import React, { useState } from "react";

const faqsData = {
  general: [
    {
      title: "1. How does aceworks help manage my business?",
      description:
        "Aceworks is a powerful marketing management platform designed to help you track leads, SEO, run your business smarter, and grow effortlessly.",
    },
    {
      title: "2. Do I need any SEO knowledge to use this?",
      description:
        "Aceworks is a powerful marketing management platform designed to help you track leads, SEO, run your business smarter, and grow effortlessly.",
    },
  ],
  clients: [
    {
      title: "1. What support do clients get?",
      description:
        "We provide 24/7 support and dedicated account managers to help clients succeed.",
    },
  ],
  businesses: [
    {
      title: "1. How can businesses integrate aceworks?",
      description:
        "Businesses can easily integrate aceworks via our API and plugins.",
    },
  ],
};

const tabKeys = ["general", "clients", "businesses"];
const tabLabels = ["General", "For Clients", "Businesses"];

const FaqContent = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mt-10 w-full md:w-[70%] mx-auto">
        {tabKeys.map((key, idx) => (
          <button
            key={key}
            onClick={() => {
              setActiveTab(key);
              setOpenIndex(null);
            }}
            className={`rounded-full px-3.5 py-3.5 font-bold text-base border w-40 mr-2 transition-colors duration-300 shadow-none
              ${
                activeTab === key
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
              }`}
          >
            {tabLabels[idx]}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="mt-[30px] w-full md:w-[70%] mx-auto">
        {faqsData[activeTab].map((faq, idx) => (
          <div key={idx} className="py-6 border-b border-[#e5e7e6]">
            <button
              onClick={() => toggleAccordion(idx)}
              className="flex justify-between items-start w-full text-left focus:outline-none group cursor-pointer"
            >
              <span className="font-bold text-xl md:text-2xl tracking-[-0.5px] text-primary flex-1 pr-4">
                {faq.title}
              </span>
              <span
                className={`flex-shrink-0 transform transition-transform duration-300 ${
                  openIndex === idx ? "rotate-180" : "rotate-0"
                }`}
              >
                {/* Chevron Down Icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <path
                    d="M6 9L12 15L18 9"
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
                openIndex === idx
                  ? "max-h-96 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pr-[30px]">
                <p className="text-[#25252580] font-medium text-sm md:text-base lg:text-lg leading-[29.52px] mb-0">
                  {faq.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqContent;
