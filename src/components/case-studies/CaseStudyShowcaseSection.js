"use client";
import { SearchIcon } from "lucide-react";
import React, { useState } from "react";

const caseStudies = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    category: "Brand Identity, Website",
    title: "SEO Optimization",
    tags: ["Branding"],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    category: "Website Development",
    title: "E-Commerce Solutions",
    tags: ["Development"],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
    category: "Brand Identity",
    title: "Brand Identity",
    tags: ["Branding"],
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
    category: "Design Direction",
    title: "Online Management",
    tags: ["Design"],
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=600&h=400&fit=crop",
    category: "Motion, Brand Identity",
    title: "Brand Boost Digital Suite",
    tags: ["Branding"],
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    category: "Brand Identity, Website",
    title: "Power Plus Marketing Solutions",
    tags: ["Branding"],
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
    category: "Art & Design Direction",
    title: "Digital Dynamo Branding",
    tags: ["Art"],
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    category: "Art & Design Direction",
    title: "NextGen Brand Elevation",
    tags: ["Art", "Design"],
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=400&fit=crop",
    category: "Art & Design Direction",
    title: "SocialRise Marketing",
    tags: ["Art", "Design"],
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
    category: "Brand Identity, Website",
    title: "Content Growth",
    tags: ["Branding"],
  },
];

const filters = ["All", "Branding", "Design", "Development", "Art"];

export default function ShowcaseSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudies = caseStudies.filter((study) => {
    const matchesFilter =
      activeFilter === "All" || study.tags.includes(activeFilter);
    const matchesSearch =
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const displayedStudies = filteredStudies.slice(0, visibleCount);
  const hasMore = visibleCount < filteredStudies.length;

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-primary">
            Showcase
          </h2>

          {/* Search Bar */}
          <div className="relative max-w-xs w-full">
            <input
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 pr-12 rounded-full border border-primary focus:outline-none focus:border-[#FF5E15] transition-colors"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#FF5E15] text-white p-2 rounded-full transition-colors">
              <SearchIcon />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-normal transition-all ${
                activeFilter === filter
                  ? "bg-[#FF5E15] text-white"
                  : "bg-[#F2F4F7] text-[#344054]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {displayedStudies.map((study) => (
            <div
              key={study.id}
              className="group bg-white rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="p-6">
                <p className="text-[#FF5E15] text-base md:text-lg font-medium mb-2">
                  {study.category}
                </p>
                <h3 className="text-2xl font-medium text-primary">
                  {study.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="bg-[#FF5E15] text-white font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg shadow-[#FF5E15]/30"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
