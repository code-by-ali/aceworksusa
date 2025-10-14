import React from "react";
import BadgeBlue from "../common/BadgeBlue";
import DigitalSolutionImg1 from "@/public/assets/home-digital-solution-img-1.svg";
import DigitalSolutionImg2 from "@/public/assets/home-digital-solution-img-2.svg";
import DigitalSolutionImg3 from "@/public/assets/home-digital-solution-img-3.svg";
import DigitalSolutionImg4 from "@/public/assets/home-digital-solution-img-4.svg";
import DigitalSolutionImg5 from "@/public/assets/home-digital-solution-img-5.svg";
import CommonImage from "../common/CommonImage";

const cards1 = [
  {
    title: "Full - Funnel Execution",
    description:
      "We don't just run ads, we design, strategize and optimize customer journey",
    image: DigitalSolutionImg1,
  },
  {
    title: "Performance Obsessed",
    description:
      "We don't chase vanity metrics. Every strategy is built to deliver leads, revenue and ROI.",
    image: DigitalSolutionImg2,
  },
];

const cards2 = [
  {
    title: "Custom Strategies, Not Templates.",
    description:
      "Every business is different, so are our solutions. We build strategies tailored to your industry, goals and behaviour.",
    image: DigitalSolutionImg3,
  },
  {
    title: "Results in weeks, Not Months",
    description: "Expert guidance for smart works.",
    image1: DigitalSolutionImg4,
    image2: DigitalSolutionImg5,
  },
];

const DigitalSolution = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 lg:mb-16">
          <BadgeBlue className="mx-auto">Why Choose Acework</BadgeBlue>
          <h3 className="text-center text-3xl sm:text-4xl xl:text-5xl font-semibold tracking-[-2px] mb-4">
            Digital solution for <br className="hidden lg:block" /> your growth
          </h3>
          <p className="text-center text-description font-medium text-base md:text-lg max-w-4xl">
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
                  <div className="w-full flex items-center justify-center bg-gradient-to-b from-transparent to-gray-50 p-4">
                    <CommonImage
                      src={card.image.src || card.image}
                      alt={card.title}
                      className="object-contain w-full h-auto max-w-full"
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
                  <h5 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-3 text-primary">
                    {card.title}
                  </h5>
                  <p className="text-base md:text-lg lg:text-xl text-description leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>

                {/* 4th card with two images */}
                {idx === 1 ? (
                  <div className="w-full flex items-center justify-center gap-4 bg-gradient-to-b from-transparent to-gray-50 p-4 flex-wrap">
                    <CommonImage
                      src={card.image1.src || card.image1}
                      alt={`${card.title} image 1`}
                      className="object-contain w-full max-w-[45%] h-auto"
                    />
                    <CommonImage
                      src={card.image2.src || card.image2}
                      alt={`${card.title} image 2`}
                      className="object-contain w-full max-w-[45%] h-auto"
                    />
                  </div>
                ) : card.image ? (
                  <div className="w-full flex items-center justify-center bg-gradient-to-b from-transparent to-gray-50 p-4">
                    <CommonImage
                      src={card.image.src || card.image}
                      alt={card.title}
                      className="object-contain w-full h-auto max-w-full"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalSolution;
