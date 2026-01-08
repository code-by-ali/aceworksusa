"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const faqsData = [
  {
    title: "How long does SEO take to show results?",
    description:
      "Most clients start seeing traffic improvements within 3-4 months. Rankings for competitive keywords typically take 6-12 months. However, our SEO business model focuses on quick wins early (technical fixes, low-competition keywords) while building your long-term authority.",
  },
  {
    title: "What's included in your SEO packages?",
    description:
      "Our comprehensive website and SEO services include keyword research, technical optimization, on-page SEO, content strategy, link building, local SEO (if applicable), and monthly performance reporting. We customize packages based on your needs and budget.",
  },
  {
    title: "Do you guarantee first-page rankings?",
    description:
      "Any SEO agency that guarantees #1 rankings is lying. Google's algorithm has over 200 ranking factors, and we can't control competitors. What we DO guarantee: transparent communication, proven strategies, and continuous optimization until we achieve your goals.",
  },
  {
    title: "How is your SEO agency different from others?",
    description:
      "Three things: (1) We're the best SEO company for small businesses focused on ROI, not vanity metrics. (2) We explain everything in plain English. (3) We're month-to-month partners, not long-term contract traps. If we're not performing, you can leave anytime.",
  },
  {
    title: "Do you use AI for SEO optimization?",
    description:
      "Yes! We leverage AI SEO optimization tools for data analysis, content research and technical audits. But strategy, implementation and quality control are all human-led. AI is our assistant, not our replacement.",
  },
  {
    title: "Can you help with both local and national SEO?",
    description:
      "Absolutely. Whether you need local SEO to dominate 'near me' searches or national campaigns to compete in broader markets, we've got the experience. Many of our clients operate in both local and national markets, utilizing local foot traffic and national online sales.",
  },
];

const SEOFaqContent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div>
      {/* Accordion */}
      <div className="mt-[30px] w-full md:w-[70%] mx-auto">
        {faqsData.map((faq, idx) => (
          <div key={idx} className="py-6 border-b border-[#e5e7e6]">
            <button
              onClick={() => toggleAccordion(idx)}
              className="flex justify-between items-start w-full text-left focus:outline-none group cursor-pointer"
            >
              <span className="font-bold text-xl md:text-2xl tracking-[-0.5px] text-primary flex-1 pr-4">
                {idx + 1}. {faq.title}
              </span>
              <span
                className={`flex-shrink-0 transform transition-transform duration-300 ${
                  openIndex === idx ? "rotate-180" : "rotate-0"
                }`}
              >
                <ChevronDown className="text-primary" />
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

export default SEOFaqContent;
