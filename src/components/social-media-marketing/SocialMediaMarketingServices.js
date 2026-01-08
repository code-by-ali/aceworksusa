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
    title: "Social Media Strategy",
    desc: "Our social media marketing agency for small business owners creates roadmaps that identify the right platforms, content types and posting schedules to reach your ideal customers.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon1.src || DigitalStrategyIcon1}
        alt="digital-icon-1"
      />
    ),
  },
  {
    title: "Content Creation & Management",
    desc: "Boring content gets ignored. Our creative team produces high-quality graphics, videos and copy designed to stop the scroll and spark conversations. ",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon2.src || DigitalStrategyIcon2}
        alt="digital-icon-2"
      />
    ),
  },
  {
    title: "Social Media Advertising",
    desc: "As an experienced social media ad agency, we run targeted campaigns on Facebook, Instagram, LinkedIn and TikTok that generate qualified leads at scale.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon3.src || DigitalStrategyIcon3}
        alt="digital-icon-3"
      />
    ),
  },
  {
    title: "Community Management",
    desc: "We monitor comments, respond to messages, engage with your audience and turn casual followers into loyal brand advocates. Our community management keeps your brand top-of-mind.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon4.src || DigitalStrategyIcon4}
        alt="digital-icon-4"
      />
    ),
  },
  {
    title: "Social Media Analytics & Reporting",
    desc: "Our social media management companies provide detailed monthly reports showing real business impact: website traffic from social, lead conversions, cost per acquisition and ROI. ",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon5.src || DigitalStrategyIcon5}
        alt="digital-icon-5"
      />
    ),
  },
  {
    title: "Partnership Campaigns",
    desc: "We identify, vet and manage influencer partnerships that align with your brand values and deliver authentic engagement, not just fake follower counts.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon6.src || DigitalStrategyIcon6}
        alt="digital-icon-6"
      />
    ),
  },
];

export default function SocialMediaMarketingServices() {
  return (
    <section className="w-full bg-[#F5F7F9] py-16 px-6 lg:px-20 text-center">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto mb-12 flex flex-col items-center justify-center">
        <BadgeBlue>Social Media Services</BadgeBlue>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-primary tracking-tight mt-4">
          Complete Social Media Solutions That Actually Grow Your Business
        </h2>
        <p className="text-[#525866] mt-3 text-base md:text-lg font-medium leading-relaxed">
          Our social media marketing company handles everything from strategy to
          execution. Whether you need organic growth, paid advertising or full
          management, we're the social media agency that delivers measurable
          ROI, not just likes and follows.
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
