"use client";
import {
  Frown,
  Lightbulb,
  Heart,
  Rocket,
  Smile,
  TrendingUp,
  Zap,
  Wrench,
  Users,
  Target,
  Star,
  ShieldCheck,
} from "lucide-react";

export default function ComparisonSection() {
  const others = [
    "Generic Solutions",
    "Jargon Overload",
    "Boring Creativity",
    "Fluff Metrics",
    "One-Time Campaigners",
    "Hidden Costs",
    "Outdated Methods",
    "Limited Scope",
    "Reactive Tactics",
    "Just Another Client",
  ];

  const aceworks = [
    { label: "Personalized Plans", icon: Heart },
    { label: "Plain Talk", icon: Smile },
    { label: "Bold Ideas", icon: Lightbulb },
    { label: "Real ROI", icon: TrendingUp },
    { label: "Long-Term Partners", icon: Users },
    { label: "Transparent Pricing", icon: ShieldCheck },
    { label: "Innovative Tools", icon: Wrench },
    { label: "Full-Service Experts", icon: Star },
    { label: "Proactive Strategies", icon: Target },
    { label: "Passion & Care", icon: Rocket },
  ];

  return (
    <section className="bg-white text-black py-16 px-6 md:px-12 flex flex-col items-center text-center">
      {/* Header */}
      <div className="relative mb-12">
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1E5DB3] text-white text-xs px-3 py-1 rounded-full">
          What makes us unique
        </span>
        <h2 className="text-2xl md:text-4xl font-semibold max-w-3xl leading-snug">
          While others copy and paste, <br className="hidden md:block" />
          we innovate and elevate. Your brand gets <br className="hidden md:block" />
          the <span className="font-bold">VIP treatment it truly deserves.</span>
        </h2>
      </div>

      {/* Column Headings */}
      <div className="flex justify-center w-full max-w-5xl mb-3">
        <div className="w-1/2 text-center text-lg font-semibold">Others</div>
        <div className="w-1/2 text-center text-lg font-semibold flex justify-center items-center gap-2">
          <span>⚡</span> Aceworks
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-3xl overflow-hidden shadow-xl border border-gray-200">
        {/* Others Column */}
        <div className="flex-1 bg-gray-50 p-6 md:p-10 text-left rounded-t-3xl md:rounded-tr-none">
          <ul className="space-y-4">
            {others.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-gray-700"
              >
                <Frown className="w-5 h-5 text-[#1E5DB3]" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Aceworks Column */}
        <div className="flex-1 bg-[#1E5DB3] text-white p-6 md:p-10 text-left rounded-b-3xl md:rounded-bl-none">
          <ul className="space-y-4">
            {aceworks.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index} className="flex items-center gap-3">
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
