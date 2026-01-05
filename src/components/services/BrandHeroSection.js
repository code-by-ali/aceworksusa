import React from "react";
import { Star, Zap } from "lucide-react";
import BadgeBlue from "../common/BadgeBlue";
import CommonImage from "../common/CommonImage";
import HeroSectionImg from "@/public/assets/services-hero-section-img.svg";

export default function BrandHeroSection() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
        {/* Badge */}
        <div className="flex justify-center">
          <BadgeBlue>Our Services</BadgeBlue>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-primary mb-6 leading-tight tracking-tight">
          Big ideas, smart strategies to
          <br />
          Supercharge ⚡ Your Brand!
        </h1>

        {/* Subheading */}
        <p className="text-center font-medium text-primary/80 text-sm sm:text-base lg:text-lg mb-6 max-w-2xl mx-auto">
          Your trusted digital marketing agency for strategies that actually
          work. As one of the top digital marketing agencies in USA, we combine
          creative thinking with data-driven execution to grow your business
          online.
        </p>

        {/* Rating */}
        <div className="flex justify-center items-center gap-2 mb-12">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 sm:w-5 sm:h-5 fill-[#F15533] text-[#F15533]"
              />
            ))}
          </div>
          <span className="text-sm sm:text-base text-[#0F0F0F]/60 font-medium">
            200+ Five-Star Reviews
          </span>
        </div>

        {/* Image Grid */}
        <div className="mb-16">
          <CommonImage src={HeroSectionImg.src || HeroSectionImg} />
        </div>

        {/* Bottom Section - Tagline */}
        <div className="flex items-center justify-center mb-12">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-2 leading-tight tracking-tight max-w-4xl">
            Helping
            <span className="text-[#FF5E15]"> Businesses </span> Dominate ,{" "}
            <span className="text-[#FF5E15]">Online </span> With{" "}
            <span>
              Proven <span className="text-[#FF5E15]">Digital </span> Marketing
              Strategies
            </span>
          </h2>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 py-12">
          {/* Stat 1 */}
          <div className="text-left">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-normal text-primary mb-2 border border-primary/60 border-dashed rounded-4xl p-5">
              350<span className="text-[#F15533]">+</span>
              <h3 className="text-lg md:text-xl font-medium text-[#0F0F0F] mb-2 tracking-tight">
                Projects Delivered
              </h3>
            </div>

            <p className="text-sm md:text-base font-medium text-[#0F0F0F]/80 px-3 py-2 tracking-tight">
              We've successfully delivered 350+ digital marketing campaigns that
              generate real revenue, not just vanity metrics.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-left">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-normal text-primary mb-2 border border-primary/60 border-dashed rounded-4xl p-5">
              85<span className="text-[#F15533]">%</span>
              <h3 className="text-lg md:text-xl font-medium text-[#0F0F0F] mb-2 tracking-tight">
                Client Revenue Growth
              </h3>
            </div>

            <p className="text-sm md:text-base font-medium text-[#0F0F0F]/80 px-3 py-2 tracking-tight">
              Our internet marketing strategies have helped clients achieve up
              to 85% revenue growth in under 12 months.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-left">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-normal text-primary mb-2 border border-primary/60 border-dashed rounded-4xl p-5">
              500<span className="text-[#F15533]">+</span>
              <h3 className="text-lg md:text-xl font-medium text-[#0F0F0F] mb-2 tracking-tight">
                Happy Clients
              </h3>
            </div>
            <p className="text-sm md:text-base font-medium text-[#0F0F0F]/80 px-3 py-2 tracking-tight">
              More than 500 businesses trust our digital marketing company to
              drive their online growth and generate consistent leads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
