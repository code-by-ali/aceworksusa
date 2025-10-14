"use client";
import Image from "next/image";
import BadgeOrange from "../common/BadgeOrange";
import CommonImage from "../common/CommonImage";
import OurPriorityImg1 from "../../../public/assets/about-us-our-priority-image-1.svg";

const features = [
  {
    title: "Premium Management",
    description:
      "Get paid for your hard work: simple, organized results. Trust premium management excellence.",
  },
  {
    title: "Partner with Experts",
    description: "",
  },
  {
    title: "Scale with Ease",
    description: "",
  },
];

export default function OurPriority() {
  return (
    <div>
      {/* Our Priority Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#2B5A8C]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <CommonImage
                  src={OurPriorityImg1.src || OurPriorityImg1}
                  width={600}
                  height={700}
                  alt="Person working on laptop"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="text-white">
              <BadgeOrange className="">How we manage the things</BadgeOrange>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                Your peace of mind is <br />
                our top priority
              </h2>

              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Your safety and comfort come first. Trust us to handle
                everything <br className="hidden lg:block" />
                with care and dedication. Relax—we've got you covered.
              </p>

              {/* Features List */}
              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 px-4 py-2 ${
                      idx == 0 ? "bg-white/10 backdrop-blur-sm" : ""
                    }  border-l-4 border-secondary`}
                  >
                    <div>
                      <h4
                        className={`font-medium text-lg md:text-xl mb-1 ${
                          idx == 0 ? "text-white" : "text-white/70"
                        }`}
                      >
                        {feature.title}
                      </h4>
                      <p className="text-sm md:text-base text-white/70">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
