"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const faqsData = [
  {
    title: "How much do your PPC management services cost?",
    description:
      "Our PPC agency pricing typically ranges from $1,500-$5,000/month depending on your ad spend and campaign complexity. Most clients pay 15-20% of monthly ad spend. For example, if you spend $10,000/month on ads, management fees would be $1,500-$2,000. Ad spend goes directly to Google/Facebook, we never mark it up.",
  },
  {
    title: "What's the minimum ad budget you recommend?",
    description:
      "For Google Ads, we recommend at least $2,000/month in ad spend to generate meaningful data and results. Smaller budgets can work for hyper-local businesses or very specific niches, but generally you need enough budget to compete in your market. Our PPC consultant will help determine the right budget during your free audit.",
  },
  {
    title: "How quickly will I see results from PPC?",
    description:
      "Unlike SEO, PPC delivers immediate traffic. You can start getting clicks within hours of launching. However, profitable campaigns take 30-60 days to optimize. We need time to test ad variations, adjust targeting and refine landing pages. Most clients see positive ROI by month 2-3 as we eliminate waste and scale winners.",
  },
  {
    title: "Do you guarantee results or ROAS?",
    description:
      "Any PPC ad agency that guarantees specific returns is lying, too many variables exist outside our control (your website, your sales process, your pricing, market conditions). What we DO guarantee: transparent reporting, proactive optimization, and we'll work until we find profitable campaigns.",
  },
  {
    title: "What platforms do you advertise on?",
    description:
      "We specialize in Google Ads (Search, Display, Shopping, YouTube) but also manage Facebook/Instagram Ads, LinkedIn Ads, Microsoft Ads and Amazon Advertising. During your strategy call, our Google ads management company will recommend the best platforms for your business based on where your customers actually are.",
  },
  {
    title: "Can you take over our existing Google Ads account?",
    description:
      "Absolutely! Many clients come to us frustrated with previous PPC marketing agency results. We'll audit your existing account, identify what's working (and what's wasting money), then restructure everything for better performance.",
  },
  {
    title: "What's included in your PPC management?",
    description:
      "Our PPC service includes: account audit and setup, keyword research, ad copywriting, landing page recommendations, bid management, A/B testing, conversion tracking, negative keyword optimization, monthly reporting and ongoing strategy calls.",
  },
  {
    title: "Do you offer white label PPC for agencies?",
    description:
      "Yes! Our white label PPC management is perfect for marketing agencies that need expert execution without hiring in-house. We provide white label PPC services and white label PPC outsourcing, you maintain the client relationship, we deliver the results under your brand. Contact us to discuss our white label google ads partnership program.",
  },
];

const PPCAFaqContent = () => {
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

export default PPCAFaqContent;
