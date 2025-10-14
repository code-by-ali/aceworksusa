import React from "react";
import Image from "next/image";
import BadgeBlue from "../common/BadgeBlue";

const cards1 = [
  {
    title: "Full - Funnel Execution",
    description:
      "We don't just run ads, we design, strategize and optimize customer journey",
    image: "/assets/fullfunnel.png",
    height: "501",
    width: "330",
  },
  {
    title: "Performance Obsessed",
    description:
      "We don't chase vanity metrics. Every strategy is built to deliver leads, revenue and ROI.",
    image: "/assets/performance.png",
    height: "470",
    width: "240",
  },
];

const cards2 = [
  {
    title: "Custom Strategies, Not Templates.",
    description:
      "Every business is different, so are our solutions. We build strategies tailored to your industry, goals and behaviour.",
    image: "/assets/strategies.png",
    height: "540",
    width: "240",
  },
  {
    title: "Results in weeks, Not Months",
    description: "Expert guidance for smart works.",
    image: "/assets/chatBlock.png",
    height: "360",
    width: "220",
  },
];

const DigitalSolution = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center flex-col">
          <BadgeBlue className="mx-auto">Why Choose Acework</BadgeBlue>

          <h3 className="text-center text-3xl sm:text-4xl xl:text-5xl font-semibold tracking-[-2px] mb-4">
            Digital solution for <br className="hidden lg:block" /> your growth
          </h3>
          <p className="text-center text-description font-medium text-base md:text-lg mb-8 lg:mb-12 max-w-4xl">
            Our expertise lies in strategic design, personalized marketing, and
            technological integration, ensuring your success in the
            ever-evolving digital landscape.
          </p>
        </div>

        {/* First row of cards */}
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          {cards1.map((card, idx) => (
            <div
              key={idx}
              className={`w-full ${idx === 0 ? "lg:w-[52%]" : "lg:w-[48%]"}`}
            >
              <div className="bg-[#F5F7F9] rounded-2xl flex flex-col h-full overflow-hidden">
                <div className="p-6 lg:p-8 flex-1">
                  <h5 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-3 text-gray-900">
                    {card.title}
                  </h5>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                {card.image && (
                  <div className="w-full h-48 sm:h-56 md:h-64 lg:h-64 xl:h-72 relative bg-gradient-to-b from-transparent to-gray-50">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain p-4"
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Second row of cards */}
        <div className="flex flex-col lg:flex-row gap-4">
          {cards2.map((card, idx) => (
            <div
              key={idx}
              className={`w-full ${idx === 0 ? "lg:w-[48%]" : "lg:w-[52%]"}`}
            >
              <div className="bg-[#F5F7F9] rounded-2xl flex flex-col h-full overflow-hidden">
                <div className="p-6 lg:p-8 flex-1">
                  <h5 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-3 text-gray-900">
                    {card.title}
                  </h5>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                {card.image && (
                  <div className="w-full h-48 sm:h-56 md:h-64 lg:h-64 xl:h-72 relative bg-gradient-to-b from-transparent to-gray-50">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain p-4"
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalSolution;
