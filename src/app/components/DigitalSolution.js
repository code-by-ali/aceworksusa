import React from "react";
import Image from "next/image";

const cards1 = [
  {
    title: "Full - Funnel Execution",
    description:
      "We don't just run ads, we design, strategize and optimize customer journey",
    image: "/assets/fullfunnel.PNG",
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
    <div>
      <section className="digital-solution py-5">
        <div className="container">
          <div className="badge-blue m-auto">Why Choose Acework</div>
          <h3 className="text-center lg:text-left">
            Digital solution for <br className="hidden lg:block" /> your growth
          </h3>
          <p className="subtitle text-center lg:text-left">
            Our expertise lies in strategic design, personalized marketing, and
            technological integration, ensuring your success in the
            ever-evolving digital landscape.
          </p>

          {/* First row of cards */}
          <div className="flex flex-col lg:flex-row m-0 px-0 py-6 lg:py-10 gap-4 digital-card-1">
            {cards1.map((card, idx) => (
              <div
                key={idx}
                className={`
                  w-full 
                  ${idx === 0 ? 'lg:w-[52%]' : 'lg:w-[48%]'} 
                  flex
                `}
              >
                <div className="card digital-card flex flex-col w-full">
                  <div className="card-body flex-1 p-4 lg:p-6">
                    <h5 className="card-title text-lg lg:text-xl mb-3">{card.title}</h5>
                    <p className="card-text text-sm lg:text-base mb-4">{card.description}</p>
                  </div>
                  {card.image && (
                    <div className="w-full h-48 sm:h-56 md:h-64 lg:h-64 xl:h-72 relative">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-contain p-2"
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
          <div className="flex flex-col lg:flex-row m-0 px-0 pb-6 lg:pb-10 gap-4 digital-card-2">
            {cards2.map((card, idx) => (
              <div
                key={idx}
                className={`
                  w-full 
                  ${idx === 0 ? 'lg:w-[48%]' : 'lg:w-[52%]'} 
                  flex
                `}
              >
                <div className="card digital-card flex flex-col w-full">
                  <div className="card-body flex-1 p-4 lg:p-6">
                    <h5 className="card-title text-lg lg:text-xl mb-3">{card.title}</h5>
                    <p className="card-text text-sm lg:text-base mb-4">{card.description}</p>
                  </div>
                  {card.image && (
                    <div className="w-full h-48 sm:h-56 md:h-64 lg:h-64 xl:h-72 relative">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-contain p-2"
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
    </div>
  );
};

export default DigitalSolution;