"use client";
import BadgeBlue from "../common/BadgeBlue";
import CommonImage from "../common/CommonImage";
import FutureBusinessIcon1 from "@/public/assets/about-us-future-buisness-icon-1.svg";
import FutureBusinessIcon2 from "@/public/assets/about-us-future-buisness-icon-2.svg";

const content = [
  {
    title: "Aceworks Strategy",
    image: FutureBusinessIcon1,
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
    image: FutureBusinessIcon2,
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
      <section className="py-16 sm:py-20 lg:py-28 px-5 sm:px-10 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <BadgeBlue className="mx-auto px-8">Future</BadgeBlue>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-1px] text-primary leading-tight">
              The future of business <br />
              markets, today
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {content.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F5F7F9] rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                {/* Card Header */}
                <div className="p-6 sm:p-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary ring-10 ring-secondary/30 rounded-full flex items-center justify-center mb-4">
                    <CommonImage
                      src={item.image.src || item.image}
                      width={20}
                      height={20}
                      alt={item.title}
                      className="w-4 h-4 sm:w-6 sm:h-6"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base font-normal text-description leading-relaxed mb-6">
                    {item.text}
                  </p>
                </div>

                {/* Blue Section with List - Fills remaining height */}
                <div className="p-6">
                  <div className="bg-[#2B5A8C] p-6 sm:p-8 rounded-b-2xl flex-1">
                    <ul className="space-y-3">
                      {item.list.map((listItem, listIdx) => (
                        <li
                          key={listIdx}
                          className="flex items-start gap-3 text-white text-sm md:text-base leading-relaxed"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></span>
                          <span>{listItem.dec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="inline-flex items-center gap-2 bg-secondary text-base text-white font-semibold px-8 py-4 rounded-full cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
