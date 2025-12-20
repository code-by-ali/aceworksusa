"use client";
import React from "react";
import BlogCardImg1 from "@/public/assets/blogs-card-img-1.svg";
import BlogCardImg2 from "@/public/assets/blogs-card-img-2.svg";
import BlogCardImg3 from "@/public/assets/blogs-card-img-3.svg";
import BlogCardImg4 from "@/public/assets/blogs-card-img-4.svg";
import CommonImage from "../common/CommonImage";
import BadgeBlue from "../common/BadgeBlue";
import { useRouter } from "next/navigation";

const OtherBlogs = () => {
  const router = useRouter();

  const blogPosts = [
    {
      id: 1,
      image: BlogCardImg1,
      title: "How to Make Better Business Decisions with Confidence",
      description:
        "Discover proven strategies for making smarter business choices that drive growth and minimize risk.",
      author: "Stephen D. Lizarraga",
      readTime: "5 mins",
    },
    {
      id: 2,
      image: BlogCardImg2,
      title: "How to Find Your Unique Selling Point in a Crowded Market",
      description:
        "Stand out from competitors by identifying and leveraging what makes your business truly unique.",
      author: "Laurentine D. Schuetze",
      readTime: "7 mins",
    },
    {
      id: 3,
      image: BlogCardImg3,
      title: "How to Build a 90-Day Growth Roadmap for Your Business",
      description:
        "Create a focused, actionable plan to accelerate your business growth over the next three months.",
      author: "Patrick G. Aguirre",
      readTime: "6 mins",
    },
    {
      id: 4,
      image: BlogCardImg4,
      title: "5 Common Mistakes Holding Your Business Back",
      description:
        "Identify and overcome the critical errors that prevent businesses from reaching their full potential.",
      author: "Rosalind S. Reardon",
      readTime: "7 mins",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <BadgeBlue>Will keep you updated</BadgeBlue>
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
            Smart Marketing
            <br />
            Solutions for Every Business
          </h2>
        </div>
        <button
          onClick={() => router.push("/blogs")}
          className="bg-[#FF5E15] cursor-pointer text-white px-6 py-3 rounded-full font-semibold whitespace-nowrap"
        >
          View All Blogs
        </button>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="group bg-[#F7F7F7] cursor-pointer py-4 px-8"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
              <CommonImage
                src={post.image.src || post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl md:text-2xl font-normal text-[#292929] mb-2">
                {post.title}
              </h3>
              <p className="text-[#6E6E6E] text-base md:text-lg font-normal mb-4 line-clamp-2">
                {post.description}
              </p>

              {/* Author and Read Time */}
              <div className="flex items-center text-sm font-medium text-[#122E47]">
                <span className="font-medium">{post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherBlogs;
