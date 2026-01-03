import React from "react";
import BadgeOrange from "../common/BadgeOrange";
import CommonImage from "@/src/components/common/CommonImage";
import RealResultImg from "@/public/assets/home-real-result-img-1.svg";

const card = [
  {
    title: "We Analyze Your Business and Market",
    text: "We're not generalists pretending to know your business. Our team includes specialists across SEO, paid ads, content and conversion optimization, each bringing years of hands-on experience. Whether you're in eCommerce, B2B or local services, we speak your language and understand what drives results in your market.",
  },
  {
    title: "We Build Your Custom Strategy",
    text: "Your business isn't like everyone else's, so why should your digital marketing strategy be? We start by understanding your goals, your customers and your competition. Then we build a tailored roadmap that aligns with your budget and timeline, no generic templates, no one-size-fits-all approaches.",
  },
  {
    title: "We Execute and Optimize For ROI",
    text: "We're obsessed with what actually moves your business forward: qualified leads, sales and measurable ROI. Every campaign we launch is tracked, tested and optimized to ensure your marketing dollars work harder. Plus, as a white label digital marketing agency, we also partner with other agencies to deliver exceptional results under their brand.",
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
              alt="Real Results Illustration"
              src={RealResultImg.src || RealResultImg}
              className="w-full h-auto max-w-md lg:max-w-full"
              width={400}
              height={400}
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 order-2">
            <BadgeOrange className="mb-2">How We Work</BadgeOrange>

            <h3 className="text-3xl sm:text-4xl xl:text-5xl font-semibold mt-0 mb-4 text-white tracking-[-2px]">
              From Strategy To Scale In 3 Steps
            </h3>

            <p className="text-base md:text-lg lg:text-xl mb-8 text-[#FFFFFF80] leading-relaxed">
              We don't believe in guesswork campaigns. We're a results-driven
              digital marketing agency that builds every online digital
              marketing strategy around one thing: your business goals. From the
              first conversation to scaling your revenue, we're with you every
              step of the way.
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
