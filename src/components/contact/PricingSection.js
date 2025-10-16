"use client";
import { Check } from "lucide-react";
import { useState } from "react";
import BadgeBlue from "../common/BadgeBlue";
import DiscountImg from "@/public/assets/contact-pricing-discount-img.svg";
import CommonImage from "../common/CommonImage";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Free plan",
      price: 0,
      description: "Great for startups looking to get started",
      color: "bg-white",
      textColor: "text-[#265A92]",
      descriptionColor: "text-primary",
      buttonColor: "bg-secondary text-white",
      buttonText: "Get started",
      features: ["Basic project tracking", "Budget planning", "Email support"],
      highlighted: false,
      planPoints: "Free , plus :",
    },
    {
      name: "Pro plan",
      price: isAnnual ? 250 : 30,
      description: "For individuals who need essential insights",
      color: "bg-[#265A92]",
      textColor: "text-white",
      descriptionColor: "text-white",
      buttonColor: "bg-white text-[#265A92]",
      buttonText: "Choose Plan",
      features: [
        "AI-powered organization",
        "Budget & savings goals",
        "Custom categorized tabs",
        "Real-time spending insights",
      ],
      highlighted: true,
      planPoints: "Free plan features, plus :",
    },
    {
      name: "Business plan",
      price: isAnnual ? 500 : 60,
      description: "Designed for businesses or enterprise financial management",
      color: "bg-white",
      textColor: "text-[#265A92]",
      descriptionColor: "text-primary",
      buttonColor: "bg-secondary text-white",
      buttonText: "Choose Plan",
      features: [
        "AI-driven features, plus",
        "Invoice & billing automation",
        "Role-based multi-user access",
        "Dedicated account manager",
      ],
      highlighted: false,
      planPoints: "Organisation plan features, plus :",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center">
          <div>
            <BadgeBlue>Our Pricing</BadgeBlue>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Flexible pricing plans
              <br />
              tailored to your needs
            </h1>
            <p className="text-primary text-lg mb-8">
              Choose a plan that perfectly fits your unique goals and budget
            </p>
          </div>

          {/* Toggle Annual/Monthly */}
          <div className="relative flex items-center justify-center mt-20 md:mt-0 gap-4 p-2 drop-shadow-2xl bg-white border border-[#F1F2F9] rounded-full">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-full font-semibold cursor-pointer transition-all ${
                !isAnnual
                  ? "bg-[#265A92] text-white"
                  : "bg-white text-[#265A92]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-full font-semibold cursor-pointer transition-all ${
                isAnnual ? "bg-[#265A92] text-white" : "bg-white text-[#265A92]"
              }`}
            >
              Annual
            </button>
            {
              <div className="">
                <div className="absolute -top-20 right-10">
                  <CommonImage
                    src={DiscountImg.src || DiscountImg}
                    alt={"discount"}
                  />
                </div>
              </div>
            }
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-8  ${
                plan.highlighted ? "" : "shadow-lg"
              } ${plan.color}`}
            >
              <div className="flex flex-col h-full">
                {/* Plan Name */}
                <h2
                  className={`text-xl sm:text-2xl font-bold mb-2 ${plan.textColor}`}
                >
                  {plan.name}
                </h2>

                {/* Description */}
                <p
                  className={`text-sm mb-6 opacity-90 ${plan.descriptionColor}`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div
                    className={`text-4xl sm:text-5xl font-bold ${plan.textColor}`}
                  >
                    ${plan.price}
                    <span
                      className={`text-lg font-normal ${plan.descriptionColor}`}
                    >
                      /month
                    </span>
                  </div>
                  {isAnnual && (
                    <p
                      className={`text-xs mt-2 opacity-75 ${plan.descriptionColor}`}
                    >
                      Billed annually
                    </p>
                  )}
                </div>

                {/* Button */}
                <button
                  className={`w-full py-3 rounded-full font-semibold mb-6 transition-all ${plan.buttonColor} text-sm sm:text-base`}
                >
                  {plan.buttonText}
                </button>

                {/* Features Label */}
                {
                  <p
                    className={`${plan.descriptionColor} text-sm font-semibold mb-4 `}
                  >
                    {plan.planPoints}
                  </p>
                }

                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        size={20}
                        className={`flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-secondary" : "text-secondary"
                        }`}
                      />
                      <span
                        className={`text-sm sm:text-base ${
                          plan.highlighted ? "text-white" : "text-primary"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
