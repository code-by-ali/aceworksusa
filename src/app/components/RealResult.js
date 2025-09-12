import React from "react";
import Image from "next/image";

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
    <section className="bg-blue real-result py-12">
      <div className="container mx-auto px-4">
        {/* Removed items-center → image/content align from top */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Image always comes first */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-1">
            <Image
              unoptimized
              alt=""
              src="/assets/resultimg.png"
              className="left-img w-full h-auto max-w-md lg:max-w-full"
              width={400}
              height={400}
            />
          </div>

          {/* Content second */}
          <div className="w-full lg:w-1/2 order-2">
            <badge className="badge-orange">How it Works</badge>
            <h3 className="!text-3xl sm:!text-4xl xl:!text-5xl font-bold mt-0 mb-4">
              Bold Ideas. Smart
              <br /> Execution. Real Results
            </h3>
            <p className="subtitle mb-5 text-white">
              At AceWorks USA, we’re not just another digital agency - we’re
              your growth partner. From strategy to scaling, we bring ideas to
              life and drive measurable business impact
            </p>

            {card.map((cardItem, idx) => (
              <div className="card resul-card mb-4" key={idx}>
                <h4>{cardItem.title}</h4>
                <p>{cardItem.text}</p>
              </div>
            ))}

            <a href="#" className="btn btn-orange mt-4 inline-block">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealResult;
