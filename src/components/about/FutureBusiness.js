"use client";
import Image from "next/image";
import BadgeBlue from "../common/BadgeBlue";

const content = [
  {
    title: "Aceworks Strategy",
    image: "/assets/strategy.svg",
    text: "Bridging markets and innovation—Aceworks Strategy delivers tailored solutions for global growth, sustainability, and cross-border success.",
    list: [
      {
        dec: "Global Expertise: Navigating cross-border challenges with deep market insights.",
      },
      {
        dec: "Tailored Solutions: Custom strategies for growth, sustainability, and scalability.",
      },
      {
        dec: "Innovation-Driven: Bridging industries and economies through forward-thinking approaches.",
      },
      {
        dec: "Risk Mitigation: Proactive planning to secure long-term success in volatile markets.",
      },
    ],
  },
  {
    title: "Aceworks Execution",
    image: "/assets/execution.svg",
    text: "Turning strategy into results—Aceworks Execution delivers precision, speed, and reliability for seamless cross-border operations and growth.",
    list: [
      {
        dec: "Precision Implementation – Flawless execution of complex cross-border strategies",
      },
      {
        dec: "Speed to Market – Agile processes that accelerate your global operations",
      },
      {
        dec: "End-to-End Ownership – From planning to delivery, we bridge the gap",
      },
      {
        dec: "Risk-Managed Growth – Proactive solutions that protect while scaling",
      },
    ],
  },
];

export default function FutureBusiness() {
  return (
    <div>
      {/* Future Business Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <BadgeBlue className="mx-auto mb-6">Future</BadgeBlue>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              The future of business <br />
              markets, today
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {content.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Card Header */}
                <div className="p-6 sm:p-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-2xl flex items-center justify-center mb-4">
                    <Image
                      src={item.image}
                      width={40}
                      height={40}
                      alt={item.title}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                      unoptimized
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                    {item.text}
                  </p>
                </div>

                {/* Blue Section with List */}
                <div className="bg-[#2B5A8C] p-6 sm:p-8">
                  <ul className="space-y-3">
                    {item.list.map((listItem, listIdx) => (
                      <li
                        key={listIdx}
                        className="flex items-start gap-3 text-white text-sm leading-relaxed"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></span>
                        <span>{listItem.dec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
