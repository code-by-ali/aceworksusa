"use client";

import React from "react";
import Image from "next/image";
import BadgeBlue from "../common/BadgeBlue";
import BlogImage1 from "@/public/assets/home-blog-image-1.svg";
import BlogImage2 from "@/public/assets/home-blog-image-2.svg";
import BlogImage3 from "@/public/assets/home-blog-image-3.svg";
import CommonImage from "../common/CommonImage";

const blog = [
  {
    image: BlogImage1,
    date: "March 10, 2025",
    title: "When to Call an Expert for Designing Services.",
  },
  {
    image: BlogImage2,
    date: "February 2 8, 2025",
    title: "How to Maintain Your ROI System Year-Round",
  },
  {
    image: BlogImage3,
    date: "December 20, 2025",
    title: "Understanding the Importance of Regular Organic Leads",
  },
];

const Blog = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <BadgeBlue className="">Latest Resources</BadgeBlue>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h3 className="font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-1.5px] text-primary">
            Digital Marketing Insights
            <br />
            That Actually Help Your Business
          </h3>

          <a
            href="#"
            className="bg-secondary text-white font-bold px-6 py-3 rounded-full text-base self-start md:self-end"
          >
            View All Blogs
          </a>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blog.map((item, idx) => (
            <div key={idx} className="bg-[#F5F7F9] rounded-2xl overflow-hidden">
              <CommonImage
                src={item.image.src || item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <div className="font-medium text-description text-sm md:text-base mb-2">
                  {item.date}
                </div>
                <div className="font-bold text-xl md:text-2xl text-primary">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
