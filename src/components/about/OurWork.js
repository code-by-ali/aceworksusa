"use client";
import BadgeBlue from "../common/BadgeBlue";
import OurWorkImg1 from "@/public/assets/about-us-our-work-img-1.svg";
import OurWorkImg2 from "@/public/assets/about-us-our-work-img-2.svg";
import OurWorkImg3 from "@/public/assets/about-us-our-work-img-3.svg";
import OurWorkImg4 from "@/public/assets/about-us-our-work-img-4.svg";
import OurWorkImg5 from "@/public/assets/about-us-our-work-img-5.svg";
import OurWorkImg6 from "@/public/assets/about-us-our-work-img-6.svg";
import CommonImage from "../common/CommonImage";

const work = [
  {
    image: OurWorkImg1,
    title: "Cloncy",
    subtitle: "Web Design",
    year: "2025",
  },
  {
    image: OurWorkImg2,
    title: "Taniza",
    subtitle: "Branding",
    year: "2025",
  },
  {
    image: OurWorkImg3,
    title: "Flopdy",
    subtitle: "Branding",
    year: "2025",
  },
  {
    image: OurWorkImg4,
    title: "Animac",
    subtitle: "Web Design",
    year: "2025",
  },
  {
    image: OurWorkImg5,
    title: "Idenvy",
    subtitle: "Branding",
    year: "2025",
  },
  {
    image: OurWorkImg6,
    title: "Devus",
    subtitle: "Branding",
    year: "2025",
  },
];

export default function OurWork() {
  return (
    <div className="bg-white">
      {/* Our Work Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <BadgeBlue className="mx-auto">Works</BadgeBlue>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary tracking-[-1px] leading-tight">
              The Amazing Work <br />
              From Aceworks
            </h2>
          </div>

          {/* Work Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {work.map((item, idx) => (
              <div
                key={idx}
                className="group cursor-pointer transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl mb-4 ">
                  <CommonImage
                    src={item.image.src || item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Text Content */}
                <div className="flex justify-between items-center px-2">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{item.subtitle}</span>
                    <span>|</span>
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
