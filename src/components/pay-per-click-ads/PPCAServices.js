"use client";
import { ArrowRight } from "lucide-react";
import {
  Lightbulb,
  Target,
  Layout,
  Rocket,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import BadgeBlue from "../common/BadgeBlue";
import DigitalStrategyIcon1 from "@/public/assets/detailed-service-digital-strategy-icon-1.svg";
import DigitalStrategyIcon2 from "@/public/assets/detailed-service-digital-strategy-icon-2.svg";
import DigitalStrategyIcon3 from "@/public/assets/detailed-service-digital-strategy-icon-3.svg";
import DigitalStrategyIcon4 from "@/public/assets/detailed-service-digital-strategy-icon-4.svg";
import DigitalStrategyIcon5 from "@/public/assets/detailed-service-digital-strategy-icon-5.svg";
import DigitalStrategyIcon6 from "@/public/assets/detailed-service-digital-strategy-icon-6.svg";
import CommonImage from "../common/CommonImage";

const services = [
  {
    title: "Google Ads Management",
    desc: "Google Ads is where your customers are searching right now. Our Google PPC agency team builds high-converting Search, Display and Shopping campaigns optimized for maximum ROI. ",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon1.src || DigitalStrategyIcon1}
        alt="digital-icon-1"
      />
    ),
  },
  {
    title: "Paid Search Strategy & Optimization",
    desc: "As experienced paid search agencies, we audit your account structure, eliminate underperforming keywords, optimize bid strategies and continuously test ad variations.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon2.src || DigitalStrategyIcon2}
        alt="digital-icon-2"
      />
    ),
  },
  {
    title: "Landing Page Optimization",
    desc: "We design and optimize landing pages specifically for your PPC campaigns, mobile-responsive, with clear calls-to-action. Our PPC service includes ongoing A/B testing to continuously improve conversion rates.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon3.src || DigitalStrategyIcon3}
        alt="digital-icon-3"
      />
    ),
  },
  {
    title: "Remarketing & Retargeting Campaigns",
    desc: "Our Google ads management services include strategic retargeting campaigns that show your ads to people who've already visited your site, keeping your brand top-of-mind until they're ready to buy.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon4.src || DigitalStrategyIcon4}
        alt="digital-icon-4"
      />
    ),
  },
  {
    title: "Campaign Tracking & Analytics",
    desc: "Our Google ads management agency provides detailed analytics showing cost per click, conversion rates, cost per acquisition and overall ROI. You'll see exactly which campaigns are profitable and which need optimization.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon5.src || DigitalStrategyIcon5}
        alt="digital-icon-5"
      />
    ),
  },
  {
    title: "Industry-Specific Ppc Campaigns",
    desc: "As a versatile B2B PPC agency with experience across industries (including Google PPC for realtors), we build campaigns tailored to your specific audience, sales cycle and profit margins.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon6.src || DigitalStrategyIcon6}
        alt="digital-icon-6"
      />
    ),
  },
];

export default function PPCAServices() {
  return (
    <section className="w-full bg-[#F5F7F9] py-16 px-6 lg:px-20 text-center">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto mb-12 flex flex-col items-center justify-center">
        <BadgeBlue>PPC Services</BadgeBlue>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-primary tracking-tight mt-4">
          Complete PPC Solutions That Maximize Every Dollar You Spend
        </h2>
        <p className="text-[#525866] mt-3 text-base md:text-lg font-medium leading-relaxed">
          Our PPC management company handles everything from Google Ads to
          Facebook campaigns. We're the PPC ad agency that focuses on what
          matters: cost per acquisition, conversion rates and return on ad
          spend—not just clicks and impressions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-3xl bg-white text-left flex flex-col space-y-4"
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center">
              {service.icon}
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-primary tracking-[-0.24px]">
              {service.title}
            </h3>
            <p className="text-[#525866] text-sm md:text-base font-normal tracking-[-0.24px] leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="flex items-center mx-auto gap-2 bg-[#265A92] text-white px-6 py-3 rounded-full text-sm md:text-base cursor-pointer font-medium transition">
        Get Your Free Google Ads Audit
        <ArrowRight size={16} />
      </button>
    </section>
  );
}
