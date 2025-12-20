import React from "react";
import { SunMedium, User } from "lucide-react";
import BlogDetailCoverImg from "@/public/assets/blog-detail-section-img.svg";
import BlogDetailAvatarImg from "@/public/assets/blog-detail-avatar-img.svg";
import BlogDetailMediumIcon from "@/public/assets/blog-detail-medium-icon.svg";
import BlogDetailTwitterIcon from "@/public/assets/blog-detail-twitter-icon.svg";
import BlogDetailFacebookIcon from "@/public/assets/blog-detail-facebook-icon.svg";
import CommonImage from "../common/CommonImage";

const BlogDetailSection = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#265A92] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-20 -mr-48 -mt-48"></div>
        <div
          className="absolute bottom-0 right-0 w-[600px] h-64 bg-blue-800 opacity-30"
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        ></div>

        <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
          <div className="inline-block bg-white text-[#E66D32] px-8 py-1 rounded-full text-sm font-bold mb-2">
            BUSINESS
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold mb-6 max-w-4xl leading-tight">
            HOW TO MAKE BETTER DECISIONS WITH CONFIDENCE
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-1">
              <CommonImage
                src={BlogDetailAvatarImg.src || BlogDetailAvatarImg}
                alt={"avatar-icon"}
                className="w-8 h-8"
              />
              <span className="text-lg md:text-xl font-semibold uppercase">
                JOHN SMITH
              </span>
            </div>
            <span className="text-base text-white/60 font-medium">
              CEO of XYZ Company
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-base font-normal">January 12, 2022</span>
            <span className="bg-white text-[#E66D32] px-4 py-1 rounded-full ml-2 text-sm font-semibold">
              5 Mins
            </span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-xl overflow-hidden">
          <CommonImage
            src={BlogDetailCoverImg.src || BlogDetailCoverImg}
            alt="Professional woman with laptop"
            className="w-full"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <article className="bg-white rounded-lg p-8 md:p-12">
          {/* Clear Goals Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Clear Goals and Objectives
            </h2>
            <p className="text-[#676767] leading-relaxed mb-4">
              Before diving into any marketing initiatives, it's essential to
              define clear, measurable goals and objectives. Whether it's
              increasing brand awareness, driving website traffic, generating
              leads, or boosting sales, having specific goals will help guide
              your strategy and measure success.
            </p>
            <p className="text-[#676767] leading-relaxed mb-4">
              Understanding your target audience is key to creating relevant and
              engaging marketing campaigns. Take the time to research and
              identify your ideal customers' demographics, interests, pain
              points, and online behavior. This will enable you to tailor your
              messaging and content to resonate with your audience and drive
              better results. In today's multi-channel digital landscape, it's
              important to have a presence across various platforms where your
              target audience spends time. From social media and email marketing
              to search engine optimization (SEO) and content marketing,
              adopting a multi-channel approach will help you reach your
              audience at different touchpoints and maximize your reach and
              engagement.
            </p>
          </section>

          {/* Multi-Channel Approach Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Multi-Channel Approach
            </h2>
            <p className="text-[#676767] text-lg md:text-xl leading-relaxed mb-4">
              In today's multi-channel digital landscape, it's important to have
              various platforms where your target audience spends time. From
              social media and email marketing to search engine optimization and
              content marketing, adopting a multi-channel approach will help you
              reach your audience at different touchpoints and maximize your
              reach and engagement.
            </p>
            <p className="text-[#676767] text-lg md:text-xl leading-relaxed mb-4">
              Before diving into any marketing initiatives, it's essential to
              define clear, measurable goals and objectives. Whether it's
              increasing brand awareness, driving website traffic, generating
              leads, or boosting sales, having specific goals will help guide
              your strategy and measure success.
            </p>
            <p className="text-[#676767] text-lg md:text-xl leading-relaxed mb-4">
              Understanding your target audience is key to creating relevant and
              engaging marketing campaigns. Take the time to research and
              identify your ideal customers' demographics, interests, pain
              points, and online behavior. This will enable you to tailor your
              messaging and content to resonate with your audience and drive
              better results. In today's multi-channel digital landscape, it's
              important to have a presence across various platforms where your
              target audience spends time. From social media and email marketing
              to search engine optimization (SEO) and content marketing,
              adopting a multi-channel approach will help you reach your
              audience at different touchpoints and maximize your reach and
              engagement.
            </p>
          </section>

          {/* Compelling Content Creation Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Compelling Content Creation
            </h2>
            <p className="text-[#676767] text-lg md:text-xl leading-relaxed mb-4">
              Content is king in the digital marketing world. Create
              high-quality, valuable content that educates, entertains, and
              inspires your audience. Whether it's blog posts, videos,
              infographics, or social media posts, focus on providing content
              that addresses your audience's needs and interests while aligning
              with your brand messaging and goals. Before diving into any
              marketing initiatives, it's essential to define clear, measurable
              goals and objectives. Whether it's increasing brand awareness,
              driving website traffic, generating leads, or boosting sales,
              having specific goals will help guide your strategy and measure
              success.
            </p>

            <ul className="list-disc list-inside space-y-2 text-[#676767] font-semibold mb-6">
              <li>Increased Organic Traffic</li>
              <li>Improved Paid Advertising Performance</li>
              <li>Enhanced Social Media Engagement</li>
              <li>Significant Increase in Sales</li>
            </ul>
          </section>

          {/* Quote Box */}
          <div className="bg-[#E66D32] text-white p-8 rounded-lg mb-12">
            <p className="text-base md:text-lg leading-relaxed">
              “Utilize data and analytics to measure the performance of your
              marketing campaigns and make informed decisions. Track key metrics
              such as website traffic, email open rates, and social media
              engagement to gauge the effectiveness of your efforts. Use this
              data to identify areas for improvement and optimize your strategy
              for better results.”
            </p>
            <div className="flex gap-4 items-center mt-4">
              <p>Social: </p>
              <div className="flex gap-2 items-center">
                <CommonImage
                  src={BlogDetailMediumIcon.src || BlogDetailMediumIcon}
                  alt={"medium-icon"}
                  className="w-6 h-6"
                />
                <span>Medium</span>
              </div>
              <div className="flex gap-1 items-center">
                <CommonImage
                  src={BlogDetailTwitterIcon.src || BlogDetailTwitterIcon}
                  alt={"twitter-icon"}
                  className="w-6 h-6"
                />
                <span>Twitter</span>
              </div>
              <div className="flex gap-1 items-center">
                <CommonImage
                  src={BlogDetailFacebookIcon.src || BlogDetailFacebookIcon}
                  alt={"medium-icon"}
                  className="w-6 h-6"
                />{" "}
                <span>Facebook</span>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-8 items-center pt-8 border-t border-gray-200">
            <button className="px-8 py-3 border-2 border-[#1E372833]/60 text-[#676767] font-semibold rounded-lg cursor-pointer">
              Previous Blog
            </button>
            <button className="px-8 py-3 bg-[#265A92] text-white font-semibold rounded-lg cursor-pointer">
              Next Blog
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetailSection;
