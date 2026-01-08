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
    title: "Keyword Research & Strategy",
    desc: "Our SEO specialists identify low-competition opportunities that get you ranking fast while building long-term authority in your industry.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon1.src || DigitalStrategyIcon1}
        alt="digital-icon-1"
      />
    ),
  },
  {
    title: "Technical SEO Optimization",
    desc: "As an experienced technical SEO agency, we audit your entire website, fix critical issues and optimize your site architecture so Google can crawl, index and rank your pages properly.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon2.src || DigitalStrategyIcon2}
        alt="digital-icon-2"
      />
    ),
  },
  {
    title: "On-Page SEO & Content",
    desc: "We optimize every page with strategic keyword placement, compelling meta descriptions, proper header tags and internal linking that boosts your authority while keeping readers engaged.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon3.src || DigitalStrategyIcon3}
        alt="digital-icon-3"
      />
    ),
  },
  {
    title: "Off-Page SEO & Link Building",
    desc: "Our off-page SEO strategies earn you quality links from authoritative websites through digital PR, guest posting and strategic outreach, no sketchy link farms or black-hat tactics.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon4.src || DigitalStrategyIcon4}
        alt="digital-icon-4"
      />
    ),
  },
  {
    title: "Local SEO Optimization",
    desc: `We optimize your Google Business Profile, build local citations, manage reviews and implement white label local SEO strategies that get you ranking in the "near me" searches that drive foot traffic and phone calls.`,
    icon: (
      <CommonImage
        src={DigitalStrategyIcon5.src || DigitalStrategyIcon5}
        alt="digital-icon-5"
      />
    ),
  },
  {
    title: "SEO Monitoring & Reporting",
    desc: "We continuously monitor your rankings, traffic and conversions, adjusting our strategy based on real performance data. You'll get clear monthly reports showing exactly how our SEO optimization agency is growing your business.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon6.src || DigitalStrategyIcon6}
        alt="digital-icon-6"
      />
    ),
  },
];

export default function SEOServices() {
  return (
    <section className="w-full bg-[#F5F7F9] py-16 px-6 lg:px-20 text-center">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto mb-12 flex flex-col items-center justify-center">
        <BadgeBlue>Search Optimization Services</BadgeBlue>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-primary tracking-tight mt-4">
          Complete SEO Solutions That Cover Every Ranking Factor
        </h2>
        <p className="text-[#525866] mt-3 text-base md:text-lg font-medium leading-relaxed">
          Our SEO services go beyond basic keyword stuffing. We're a
          full-service SEO company that handles everything from technical SEO to
          content strategy, helping businesses like yours climb the rankings and
          stay there.
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
        Get a Quote <ArrowRight size={16} />
      </button>
    </section>
  );
}
