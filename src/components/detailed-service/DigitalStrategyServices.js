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
    title: "Comprehensive Market Insight",
    desc: "We provide you with actionable insights that inform strategic decisions and help you stay ahead of the competition.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon1.src || DigitalStrategyIcon1}
        alt="digital-icon-1"
      />
    ),
  },
  {
    title: "Goal-Driven Approach",
    desc: "By setting clear objectives and KPIs, we ensure every action taken is purposeful and geared towards achieving measurable success.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon2.src || DigitalStrategyIcon2}
        alt="digital-icon-2"
      />
    ),
  },
  {
    title: "Tailored Strategy Design",
    desc: "Our team creates a bespoke digital strategy that aligns with your unique needs, leveraging the most effective channels.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon3.src || DigitalStrategyIcon3}
        alt="digital-icon-3"
      />
    ),
  },
  {
    title: "Seamless Implementation",
    desc: "We coordinate every aspect, from content creation to campaign management, ensuring a smooth and efficient rollout.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon4.src || DigitalStrategyIcon4}
        alt="digital-icon-4"
      />
    ),
  },
  {
    title: "Adaptive and Flexible",
    desc: "Our continuous optimization process ensures your strategy evolves with changing trends, keeping your brand relevant and competitive.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon5.src || DigitalStrategyIcon5}
        alt="digital-icon-5"
      />
    ),
  },
  {
    title: "Enhanced ROI",
    desc: "By aligning strategy with your business goals and optimizing for performance, we maximize your return on investment.",
    icon: (
      <CommonImage
        src={DigitalStrategyIcon6.src || DigitalStrategyIcon6}
        alt="digital-icon-6"
      />
    ),
  },
];

export default function DigitalStrategyServices() {
  return (
    <section className="w-full bg-[#F5F7F9] py-16 px-6 lg:px-20 text-center">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto mb-12 flex flex-col items-center justify-center">
        <BadgeBlue>Services</BadgeBlue>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-primary tracking-tight mt-4">
          Services in Digital Strategy Development
        </h2>
        <p className="text-[#525866] mt-3 text-base md:text-lg font-medium leading-relaxed">
          Our Digital Strategy Development service is designed to transform your
          business goals into a robust and actionable plan.
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
