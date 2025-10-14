"use client";
import Image from "next/image";
import BadgeBlue from "../common/BadgeBlue";
const work = [
  {
    image: "/assets/work1.png",
    title: "Cloncy",
    subtitle: "Web Design",
    year: "2025",
  },
  {
    image: "/assets/work2.png",
    title: "Taniza",
    subtitle: "Branding",
    year: "2025",
  },
  {
    image: "/assets/work3.png",
    title: "Flopdy",
    subtitle: "Branding",
    year: "2025",
  },
  {
    image: "/assets/work4.png",
    title: "Animac",
    subtitle: "Web Design",
    year: "2025",
  },
  {
    image: "/assets/work5.png",
    title: "Idenvy",
    subtitle: "Branding",
    year: "2025",
  },
  {
    image: "/assets/work6.png",
    title: "Devus",
    subtitle: "Branding",
    year: "2025",
  },
];

export default function OurWork() {
  return (
    <div>
      {/* Our Work Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <BadgeBlue className="mx-auto mb-6">Works</BadgeBlue>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
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
                <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-100">
                  <Image
                    src={item.image}
                    width={400}
                    height={450}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
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
