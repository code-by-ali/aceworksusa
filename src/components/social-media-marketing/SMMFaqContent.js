"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const faqsData = [
  {
    title: "How much do your social media marketing packages cost?",
    description:
      "Our social media management packages start at $1,500/month for basic management (3-4 posts per week, community engagement) and scale up based on your needs. Social media advertising campaigns require a separate ad budget. We customize every package based on platforms, posting frequency and whether you need content creation.",
  },
  {
    title: "Which social media platforms should my business be on?",
    description:
      "It depends on your audience. B2B companies often see better results on LinkedIn. Visual brands (fashion, food, lifestyle) thrive on Instagram. Local businesses need Facebook. Our social media marketing near me consultation identifies where YOUR customers actually spend time, so we're not wasting effort on the wrong platforms.",
  },
  {
    title: "Do you create all the content or do I need to provide it?",
    description:
      "We handle everything! Our social media agency team creates all graphics, writes all copy, produces videos (if needed), and manages posting. You just approve the content calendar each month.",
  },
  {
    title: "How quickly will I see results from social media marketing?",
    description:
      "Organic growth takes 3-6 months to build real momentum. Paid social media advertising can generate leads within days. Our approach combines both: quick wins from ads while building your long-term organic presence and authority.",
  },
  {
    title: "What's the difference between organic social and paid ads?",
    description:
      "Organic social is the free content you post (no ad spend required). Paid ads are boosted posts or targeted campaigns that reach specific audiences. Most successful businesses need both. Organic builds community and trust; ads drive immediate traffic and conversions.",
  },
  {
    title: "Can you take over our existing social accounts?",
    description:
      "Absolutely! Whether your accounts are thriving or barely active, we can audit your current social media for business presence, identify gaps and optimize everything. Many clients come to us frustrated with poor results from previous social media marketing agencies, but we turn it around fast.",
  },
  {
    title: "Do you offer social media management for multiple locations?",
    description:
      "Yes! We work with multi-location businesses that need consistent branding across different markets. Our social media management agencies team can handle location-specific content while maintaining your overall brand identity.",
  },
];

const SMMFaqContent = () => {
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

export default SMMFaqContent;
