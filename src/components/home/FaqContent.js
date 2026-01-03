"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const faqsData = {
  general: [
    {
      title: "What is a digital marketing agency?",
      description:
        "A digital marketing agency helps businesses grow online through services like SEO, paid ads, social media and content marketing. We handle your entire online marketing strategy so you can focus on running your business.",
    },
    {
      title: "Why should I hire a digital marketing consultant?",
      description:
        "A digital marketing consultant brings expertise you don't have in-house. We analyze your current efforts, identify gaps and build a custom strategy that drives measurable results without the cost of hiring a full-time team.",
    },
    {
      title:
        "How is online digital marketing different from traditional marketing?",
      description:
        "Online digital marketing targets customers where they spend time: Google, social media and websites. It's measurable, cost-effective and allows real-time optimization, unlike traditional marketing, which is harder to track and more expensive.",
    },
    {
      title: "What services does Acework offer?",
      description:
        "We offer SEO, paid advertising (PPC), social media management, content creation, web design, email marketing, reputation management and digital PR. Everything you need to dominate online under one roof.",
    },
    {
      title: "How long does it take to see results?",
      description:
        "Paid ads can generate leads within days, while SEO typically shows momentum in 3-6 months. We focus on quick wins early while building long-term growth strategies that compound over time.",
    },
    {
      title: "Do you work with businesses outside the USA?",
      description:
        "While we specialize in helping US-based businesses, we also work with international clients. Our strategies are tailored to your target market, regardless of location.",
    },
  ],
  clients: [
    {
      title: "How much do your digital marketing services cost?",
      description:
        "Our pricing depends on your goals and scope. We offer flexible packages for small businesses and custom solutions for larger companies. Schedule a free consultation to get a tailored quote.",
    },
    {
      title: "Do you offer month-to-month contracts?",
      description:
        "Yes! We don't lock you into long-term contracts. We earn your business every month by delivering results. If we're not performing, you're free to walk away, no questions asked.",
    },
    {
      title: "Will I have a dedicated account manager?",
      description:
        "Absolutely. You'll have a dedicated digital marketing consultant who knows your business inside-out, plus access to our full team of specialists in SEO, ads, content and design.",
    },
    {
      title: "How do you measure success?",
      description:
        "We track metrics that matter: qualified leads, conversion rates, revenue and ROI. You'll get transparent monthly reports showing exactly how your campaigns are performing and where we're optimizing.",
    },
    {
      title: "Can you take over our existing campaigns?",
      description:
        "Yes! We can audit your current online marketing efforts, identify what's working (and what's not), and optimize or rebuild campaigns to deliver better results immediately.",
    },
    {
      title: "What industries do you work with?",
      description:
        "We've worked with eCommerce, B2B, healthcare, legal, home services, retail and more. Our strategies are industry-agnostic but tailored to your specific market and competition.",
    },
  ],
  businesses: [
    {
      title: "Are you a social media marketing agency for small business?",
      description:
        "Yes! We specialize in helping small businesses grow through targeted social media strategies. From organic content to paid ads, we create campaigns that turn followers into paying customers affordably.",
    },
    {
      title: "What makes Acework different from other agencies?",
      description:
        "We're obsessed with ROI, not vanity metrics. You get transparent pricing, dedicated support, custom strategies (no templates) and a team that actually cares about growing your business, not just collecting retainer fees.",
    },
    {
      title: "Do you offer white label services for agencies?",
      description:
        "Yes, we partner with other agencies as a white label provider. You keep the client relationship while we deliver expert execution behind the scenes on SEO, PPC and content.",
    },
    {
      title: "Can you help with local SEO and Google rankings?",
      description:
        "Absolutely. Our local SEO services help businesses dominate Google Maps and local search results. We optimize your Google Business Profile, build citations and generate reviews to increase visibility.",
    },
    {
      title: "What's included in your online marketing packages? ",
      description:
        "Packages typically include strategy development, campaign execution, performance tracking, monthly reporting and ongoing optimization. We customize based on your goals, whether that's leads, sales or brand awareness.",
    },
    {
      title: "How quickly can we get started?",
      description:
        "Fast! After our initial consultation, we can have your strategy mapped out within a week and campaigns live within 2-3 weeks, depending on complexity.",
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
                {idx + 1}.{faq.title}
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

export default FaqContent;
