"use client";

import React, { useState } from "react";
import accordionOpenIcon from "../../../public/assets/accordionOpenIcon.png";
import Image from "next/image";

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
      <div className="flex flex-wrap justify-center gap-2 mt-12 w-[90%] md:w-[70%] mx-auto">
        {tabKeys.map((key, idx) => (
          <button
            key={key}
            onClick={() => {
              setActiveTab(key);
              setOpenIndex(null);
            }}
            className={`!rounded-full px-6 py-2 text-sm sm:text-base font-bold border-2 w-[140px] !border-[#FF5E15] sm:w-[150px] transition-none
              ${
                activeTab === key
                  ? "bg-[var(--primary-btn)] text-white border-[var(--primary-btn)]"
                  : "bg-white text-[var(--primary-btn)] border-[var(--primary-btn)]"
              }`}
          >
            {tabLabels[idx]}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="mt-8 md:mt-12 w-[90%] md:w-[70%] mx-auto">
        {faqsData[activeTab].map((faq, idx) => (
          <div key={idx} className="border-b border-gray-200 py-6">
            <button
              onClick={() => toggleAccordion(idx)}
              className="flex justify-between w-full text-left"
            >
              <span className="font-bold text-lg sm:text-xl text-black">
                {faq.title}
              </span>
              <span
                className={`transform transition-transform duration-300 ml-2 ${
                  openIndex === idx ? "rotate-0" : "rotate-180"
                }`}
              >
                <Image
                  unoptimized
                  src={accordionOpenIcon}
                  alt="toggle"
                  width={20} // ⬅️ increased size
                  height={20}
                  className="object-contain"
                />
              </span>
            </button>
            {openIndex === idx && (
              <div className="mt-3 pr-6">
                <p className="text-[#25252580] !font-medium text-sm sm:text-base leading-relaxed">
                  {faq.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqContent;
