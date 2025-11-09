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
        "We dive deep into understanding your brand, goals, and audience. Through collaborative discussions and research, we craft a clear roadmap tailored to your needs.",
    },
    {
      id: 2,
      title: "Design & Prototype",
      description:
        "We turn strategy into visually stunning and interactive designs that align perfectly with your brand identity.",
    },
    {
      id: 3,
      title: "Develop & Test",
      description:
        "Our development team transforms designs into fast, scalable, and high-performing products tested for excellence.",
    },
    {
      id: 4,
      title: "Launch & Grow",
      description:
        "We ensure a seamless launch and continue optimizing your product to help you grow with confidence.",
    },
  ];

  return (
    <section className="bg-[#265A92] text-white py-16 px-6 md:px-10 flex flex-col items-center overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <BadgeOrange>Our Process</BadgeOrange>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-snug max-w-5xl">
          From idea to impact our process makes it easy, exciting, and
          effective!
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
