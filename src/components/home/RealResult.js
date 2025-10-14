import React from "react";
import Image from "next/image";
import BadgeOrange from "../common/BadgeOrange";
import CommonImage from "@/src/components/common/CommonImage";
import RealResultImg from "@/public/assets/home-real-result-img-1.svg";

const card = [
  {
    title: "Expert In-house Team Across Every Vertical",
    text: "Create your account in just seconds with only your email and a secure password. Enjoy instant access to powerful financial tools and valuable resources.",
  },
  {
    title: "Strategy That Starts and Ends With you",
    text: "Link your bank, credit cards, and other financial accounts to get a complete overview of your money in one convenient place, making budgeting and tracking expenses easier.",
  },
  {
    title: "Performance Marketing Built to Drive ROI",
    text: "Customize your budget, set savings goals, and track your expenses effortlessly with AI-driven insights tailored specifically to your unique needs.",
  },
];

const RealResult = () => {
  return (
    <section className="bg-[#2b6396] py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="bg-[#F8F9FA] rounded-2xl w-full lg:w-1/2 flex justify-center lg:justify-start order-1">
            <CommonImage
              unoptimized
              alt="Real Results Illustration"
              src={RealResultImg.src || RealResultImg}
              className="w-full h-auto max-w-md lg:max-w-full"
              width={400}
              height={400}
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 order-2">
            <BadgeOrange className="mb-2">How it Works</BadgeOrange>

            <h3 className="text-3xl sm:text-4xl xl:text-5xl font-semibold mt-0 mb-4 text-white tracking-[-2px]">
              Bold Ideas. Smart
              <br /> Execution. Real Results
            </h3>

            <p className="text-base md:text-lg lg:text-xl mb-8 text-[#FFFFFF80] leading-relaxed">
              At AceWorks USA, we're not just another digital agency - we're
              your growth partner. <br />
              From strategy to scaling, we bring ideas to life and drive
              measurable business impact
            </p>

            {/* Cards */}
            <div className="space-y-4 mb-6">
              {card.map((cardItem, idx) => (
                <div
                  key={idx}
                  className="bg-white drop-shadow-sm rounded-2xl p-6"
                >
                  <h4 className="font-bold text-lg md:text-xl mb-2 text-primary">
                    {cardItem.title}
                  </h4>
                  <p className="text-base md:text-lg text-description leading-loose font-medium">
                    {cardItem.text}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-block bg-secondary text-white font-bold px-8 py-3 rounded-full text-sm md:text-base"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealResult;
