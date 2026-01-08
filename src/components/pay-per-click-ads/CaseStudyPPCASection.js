import { TrendingUp, ArrowRight } from "lucide-react";
import BadgeBlue from "../common/BadgeBlue";
import CaseStudyIcon1 from "@/public/assets/detailed-service-case-study-icon-1.svg";
import CaseStudyIcon2 from "@/public/assets/detailed-service-case-study-icon-2.svg";
import CaseStudyImg1 from "@/public/assets/detailed-service-case-study-img-1.svg";
import CommonImage from "../common/CommonImage";

export default function CaseStudyPPCASection() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Card - Case Study */}
        <div className="bg-white rounded-2xl p-8 md:p-10">
          <BadgeBlue>Case Study</BadgeBlue>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-primary tracking-tight mb-8 leading-tight">
            How We Cut CPA By 58% While Doubling Lead Volume For a Personal
            Injury Law Firm?
          </h2>

          <div className="bg-[#F6F8FA] rounded-xl p-6 mb-8">
            <div className="flex flex-col items-start gap-3">
              <CommonImage
                src={CaseStudyIcon1.src || CaseStudyIcon1}
                alt={"case-study-bar-chart-icon"}
              />
              <div>
                <p className="text-primary text-lg md:text-xl lg:text-2xl font-medium tracking-[-0.24px] leading-relaxed">
                  Reduced cost per qualified lead from $420 to $176, increased
                  monthly case inquiries from 28 to 65, and achieved 6.2x ROAS
                  in just 5 months of Google PPC management.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="bg-[#265A92] text-white text-base font-medium px-6 py-3 rounded-full cursor-pointer flex items-center gap-2">
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-white text-[#265A92] text-base font-medium px-6 py-3 rounded-full cursor-pointer border-1 border-[#265A92]">
              See More Case Studies
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
              Transforming Expensive Clicks Into High-Value Personal Injury
              Cases{" "}
            </p>
            <div className="flex flex-row items-center justify-between gap-2">
              <p className="text-primary text-sm md:text-base font-normal tracking-[-0.24px]">
                Martinez & Associates, a mid-size personal injury law firm, was
                spending $12,000/month on Google Ads with disappointing results.
                Their previous PPC management company was driving traffic, but
                most leads were low-quality, people searching for free legal
                advice or cases outside their practice area.
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
