"use client";
import {
  Frown,
  Heart,
  Rocket,
  Zap,
  Puzzle,
  MessageCircleMore,
  ChartColumnIncreasing,
  Handshake,
  Tag,
  BriefcaseBusiness,
  Crown,
} from "lucide-react";
import BadgeBlue from "../common/BadgeBlue";
import AceworkComparisonIcon from "@/public/assets/services-comparison-acework-icon.svg";
import CommonImage from "../common/CommonImage";

export default function ComparisonSection() {
  const others = [
    "Generic cookie-cutter solutions",
    "Confusing industry jargon",
    "Safe, boring creative",
    "Vanity metrics (likes, impressions)",
    "One-time project mindset",
    "Hidden fees and surprise costs",
    "Outdated marketing tactics",
    "Limited service offerings",
    "Reactive when problems arise",
    "You're just another account number",
  ];

  const aceworks = [
    { label: "Custom strategies for your business", icon: Puzzle },
    { label: "Clear, straightforward communication", icon: MessageCircleMore },
    { label: "Bold ideas that get noticed", icon: Rocket },
    { label: "Real ROI and revenue growth", icon: ChartColumnIncreasing },
    { label: "Long-term growth partnerships", icon: Handshake },
    { label: "Transparent, upfront pricing", icon: Tag },
    { label: "Cutting-edge digital marketing tools", icon: Zap },
    { label: "Full-service digital marketing agency", icon: BriefcaseBusiness },
    { label: "Proactive strategies and planning", icon: Crown },
    { label: "Passion, care and dedicated support", icon: Heart },
  ];

  return (
    <section className="bg-white text-black py-16 px-6 md:px-12 flex flex-col items-center text-center">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-12">
        <BadgeBlue>What Makes Us Unique</BadgeBlue>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold max-w-5xl tracking-tight text-primary leading-snug">
          Why Smart Businesses Choose Acework Over Other Marketing Firms Near
          Me?
        </h2>
      </div>

      {/* Column Headings */}
      <div className="flex justify-center w-full max-w-5xl mb-3">
        <div className="w-1/2 text-center text-xl md:text-2xl font-bold">
          Others Agencies
        </div>
        <div className="w-1/2 text-center text-xl md:text-2xl font-bold flex justify-center items-center gap-2">
          <span>
            <CommonImage
              src={AceworkComparisonIcon.src || AceworkComparisonIcon}
            />
          </span>{" "}
          Aceworks
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-3xl overflow-hidden">
        {/* Others Column */}
        <div className="flex-1 bg-[#F5F7F9] p-6 md:p-10 text-left rounded-t-3xl md:rounded-tr-none">
          <ul className="space-y-6">
            {others.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-primary text-sm md:text-base"
              >
                <Frown className="w-5 h-5 text-[#265A92]" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Aceworks Column */}
        <div className="flex-1 bg-[#265A92] text-white p-6 md:p-10 text-left rounded-b-3xl md:rounded-bl-none">
          <ul className="space-y-6">
            {aceworks.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={index}
                  className="flex items-center gap-3 text-white text-sm md:text-base"
                >
                  <Icon className="w-5 h-5 text-orange-400" strokeWidth={2.5} />
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
