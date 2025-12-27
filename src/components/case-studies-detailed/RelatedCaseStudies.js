"use client";
import React from "react";
import BadgeBlue from "../common/BadgeBlue";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const relatedStudies = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    title: "Eva Labs",
    description:
      "We developed a captivating digital experience for this pioneering AI solutions company.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&h=400&fit=crop",
    title: "Duista studio",
    description:
      "We created a visually captivating & developed brand identity for this creative studio.",
  },
];

export default function RelatedCaseStudies() {
  const router = useRouter();
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <BadgeBlue>Case Studies</BadgeBlue>
            <h2 className="text-4xl md:text-5xl font-semibold text-primary tracking-tight  mb-2">
              Case studies which shows <br />
              market presence
            </h2>
          </div>
          <button
            className="bg-[#FF5E15] text-white font-bold px-6 py-3 rounded-full"
            onClick={() => router.push("/blogs")}
          >
            View All Case Studies
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-medium text-primary tracking-tight mb-3">
                  {study.title}
                </h3>
                <p className="text-[#666666] text-base md:text-lg font-medium max-w-md tracking-tight leading-relaxed mb-6">
                  {study.description}
                </p>
                <button className="flex items-center gap-1 cursor-pointer bg-[#FF5E15] text-white font-medium px-5 py-2.5 rounded-full text-sm">
                  View Project
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
