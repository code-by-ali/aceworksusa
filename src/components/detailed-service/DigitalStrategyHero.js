"use client";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  CheckCircle,
  BarChart3,
  Puzzle,
  TrendingUp,
} from "lucide-react";
import BadgeOrange from "../common/BadgeOrange";
import MainHeroImg from "@/public/assets/detailed-service-hero-img-1.svg";
import CommonImage from "../common/CommonImage";

export default function DigitalStrategyHero() {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-white gap-10">
      {/* Left Section */}
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <BadgeOrange className="rotate-[0deg]">
          Digital Strategy Development
        </BadgeOrange>

        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight text-primary tracking-tight">
          Transformative Digital Strategy Development
        </h1>

        <p className="text-[#525866] text-base md:text-lg font-medium leading-relaxed mx-auto lg:mx-0">
          Acework's Digital Strategy Development service is designed to create a
          comprehensive roadmap that aligns with your business goals.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <button className="flex items-center gap-2 bg-[#265A92] text-white cursor-pointer px-6 py-3 rounded-full text-sm md:text-base font-medium transition">
            Get a Quote <ArrowRight size={16} />
          </button>
          <button className="flex items-center gap-2 bg-[#265A92] text-white cursor-pointer px-6 py-3 rounded-full text-sm md:text-base font-medium transition">
            See all Services
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 relative flex justify-center">
        <div className="relative w-72 sm:w-80 lg:w-[360px] aspect-[3/4] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 rounded-3xl" />
          <CommonImage
            src={MainHeroImg.src || MainHeroImg}
            alt="Digital Strategy Person"
          />
        </div>

        {/* Floating Info Card */}
        <div className="absolute bottom-4 left-4 sm:left-6 bg-white rounded-2xl p-4 sm:p-5 w-56 sm:w-64 flex flex-col space-y-3 z-20">
          <div className="flex items-center gap-3">
            <div className="text-[#F2AE40] p-2 rounded-lg">
              <Award size={20} />
            </div>
            <span className="text-base font-medium text-primary">
              Award-Winning Team
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-[#38C793] p-2 rounded-lg">
              <Puzzle size={20} />
            </div>
            <span className="text-base font-medium text-primary">
              Tailored Solutions
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-[#375DFB] p-2 rounded-lg">
              <TrendingUp size={20} />
            </div>
            <span className="text-base font-medium text-primary">
              Proven Results
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
