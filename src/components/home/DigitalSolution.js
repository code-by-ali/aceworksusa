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
    title: "Full-Funnel Marketing That Converts",
    description:
      "We're not just a digital marketing company running random campaigns. We map your entire customer journey, from first click to final sale, and optimize every step to maximize conversions.",
    image: DigitalSolutionImg1,
  },
  {
    title: "Obsessed With Results, Not Metrics",
    description:
      "Likes and impressions don't pay the bills. Our online marketing strategies focus on what actually matters: qualified leads, paying customers and measurable ROI that impacts your bottom line.",
    image: DigitalSolutionImg2,
  },
];

const cards2 = [
  {
    title: "Custom Strategies Built For Your Business",
    description:
      "Cookie-cutter doesn't work. As a digital marketing company that actually listens, we create custom strategies based on your industry, audience and specific growth goals, not some generic template.",
    image: DigitalSolutionImg3,
  },
  {
    title: "Real Growth In Weeks, Not Months",
    description:
      "Forget agencies that take forever to show results. Our proven online marketing systems are designed to generate momentum fast, so you start seeing traction within weeks, not waiting around for half a year.",
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
          <BadgeBlue className="mx-auto">Why Choose Acework?</BadgeBlue>
          <h3 className="text-center text-3xl sm:text-4xl xl:text-5xl font-semibold tracking-[-2px] mb-4 text-primary">
            We Build Brands People
            <br className="hidden lg:block" /> Actually Find
          </h3>
          <p className="text-center text-description font-medium text-base md:text-lg max-w-4xl">
            Looking for a “digital marketing agency near me” that actually
            delivers? We specialize in internet marketing strategies that turn
            clicks into customers and traffic into revenue. No cookie-cutter
            plans, no empty promises, just personalized campaigns built to grow
            your business.
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
