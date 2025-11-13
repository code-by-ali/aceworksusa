import { TrendingUp, ArrowRight } from "lucide-react";
import BadgeBlue from "../common/BadgeBlue";
import CaseStudyIcon1 from "@/public/assets/detailed-service-case-study-icon-1.svg";
import CaseStudyIcon2 from "@/public/assets/detailed-service-case-study-icon-2.svg";
import CaseStudyImg1 from "@/public/assets/detailed-service-case-study-img-1.svg";
import CommonImage from "../common/CommonImage";

export default function CaseStudySection() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Card - Case Study */}
        <div className="bg-white rounded-2xl p-8 md:p-10">
          <BadgeBlue>Case Study</BadgeBlue>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-primary tracking-tight mb-8 leading-tight">
            Developed a Tailored Digital Strategy for our client Lorem Inc.
          </h2>

          <div className="bg-[#F6F8FA] rounded-xl p-6 mb-8">
            <div className="flex flex-col items-start gap-3">
              <CommonImage
                src={CaseStudyIcon1.src || CaseStudyIcon1}
                alt={"case-study-bar-chart-icon"}
              />
              <div>
                <p className="text-primary text-lg md:text-xl lg:text-2xl font-medium tracking-[-0.24px] leading-relaxed">
                  Increased organic traffic by 150%, social media engagement by
                  200%, and online sales by 35% within six months.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="bg-[#265A92] text-white text-base font-medium px-6 py-3 rounded-full cursor-pointer flex items-center gap-2">
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-white text-[#265A92] text-base font-medium px-6 py-3 rounded-full cursor-pointer border-1 border-[#265A92]">
              See Case Studies
            </button>
          </div>
        </div>

        {/* Right Card - Content Marketing */}
        <div className="bg-white border border-[#E2E4E9] rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="flex flex-col gap-8 h-full">
            <CommonImage
              src={CaseStudyImg1.src || CaseStudyImg1}
              alt={"Case Study Image"}
              className="rounded-3xl"
            />
            <p className="text-primary text-lg md:text-xl lg:text-2xl font-medium tracking-[-0.24px]">
              Elevating Gozaru Enterprises' Brand to Success
            </p>
            <div className="flex flex-row items-center justify-between gap-2">
              <p className="text-primary text-sm md:text-base font-normal tracking-[-0.24px]">
                Gozaru, an old player in the media space, needed a powerful blog
                launch strategy for their first category of health and
                nutrition.
              </p>
              <CommonImage
                src={CaseStudyIcon2.src || CaseStudyIcon2}
                alt={"cse-study-icon-2"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
