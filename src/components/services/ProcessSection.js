"use client";
import { useState } from "react";
import BadgeOrange from "../common/BadgeOrange";

export default function ProcessSection() {
  const [active, setActive] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Discover & Strategize",
      description:
        "We start by understanding your business, goals and target audience. Through in-depth discovery sessions, we create a customized digital marketing strategy tailored to deliver the results you need.",
    },
    {
      id: 2,
      title: "Design & Prototype",
      description:
        "Our creative team transforms strategy into visually compelling designs and campaigns that align with your brand identity and speak directly to your ideal customers.",
    },
    {
      id: 3,
      title: "Develop & Test",
      description:
        "We bring your campaigns to life with precision execution, from building high-performance websites to launching targeted ad campaigns tested for maximum conversion.",
    },
    {
      id: 4,
      title: "Launch & Grow",
      description:
        "After launch, we continuously monitor, test, and optimize your campaigns to ensure consistent growth and improve ROI month over month.",
    },
  ];

  return (
    <section className="bg-[#265A92] text-white py-16 px-6 md:px-10 flex flex-col items-center overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <BadgeOrange>Our Process</BadgeOrange>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-snug max-w-5xl">
          From First Call To First Results: Here's How We Work
        </h2>
      </div>

      {/* Process Cards */}
      <div className="flex flex-col md:flex-row gap-2 justify-center items-stretch w-full max-w-6xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            onClick={() => setActive(step.id)}
            className={`transition-all duration-500 cursor-pointer rounded-4xl shadow-lg overflow-hidden bg-white text-black
            flex flex-col justify-start items-center 
            ${active === step.id ? "p-6 md:p-8" : "px-0 py-6 min-w-20"}
            `}
          >
            <div
              className={`flex items-center ${
                active === step.id ? "justify-start" : "justify-center"
              }  gap-8 w-full`}
            >
              <span className="text-6xl md:text-7xl font-semibold text-[#FF5E15]">
                {step.id}
              </span>
              {active === step.id && (
                <h3 className="text-2xl md:text-3xl font-semibold text-[#FF5E15]">
                  {step.title}
                </h3>
              )}
            </div>
            {active === step.id && (
              <p className="mt-20 text-xl md:text-2xl font-medium text-primary leading-relaxed">
                {step.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
