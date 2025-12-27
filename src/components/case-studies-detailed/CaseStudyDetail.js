import { LinkIcon, PhoneIcon } from "lucide-react";
import React from "react";
import CaseStudyDetailedImg1 from "@/public/assets/case-study-detailed-img-1.svg";
import CaseStudyDetailedImg2 from "@/public/assets/case-study-detailed-img-2.svg";
import CaseStudyDetailedImg3 from "@/public/assets/case-study-detailed-img-3.svg";
import CaseStudyDetailedImg4 from "@/public/assets/case-study-detailed-img-4.svg";
import CaseStudyDetailedImg5 from "@/public/assets/case-study-detailed-img-5.svg";
import CommonImage from "../common/CommonImage";

export default function CaseStudyDetail() {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="bg-[#F7F7F7] rounded-2xl p-8 md:p-12 mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-primary tracking-tight mb-6">
            Volta Studio
          </h1>
          <p className="text-[#6E6E6E] text-lg md:text-xl mb-8 max-w-xl">
            We designed a dynamic digital platform for this forward-thinking
            tech agency that focuses on AI.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items gap-2 cursor-pointer bg-[#FF5E15] text-white font-medium px-6 py-3 rounded-full transition-all shadow-lg shadow-orange-500/30">
              Visit the link
              <span>
                <LinkIcon />
              </span>
            </button>
            <button className="flex items gap-2 cursor-pointer bg-white text-primary font-medium px-6 py-3 rounded-full border border-gray-200">
              Contact Us
              <PhoneIcon />
            </button>
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-8">
          <CommonImage
            src={CaseStudyDetailedImg1.src || CaseStudyDetailedImg1}
            alt="Yellow flower macro"
            className="w-full h-[500px] md:h-[600px] object-cover rounded-2xl"
          />
        </div>

        {/* Industry Section */}
        <div className="bg-[#F7F7F7] rounded-2xl p-8 md:p-12 mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
            Industry: LegalTech & Document Analysis
          </h2>
          <p className="text-[#6e6e6e] text-lg font-medium leading-relaxed">
            Process contracts and lengthy legal documents in seconds, but its
            interface felt intimidating to non-technical users. The messaging
            also created an unintended fear that the AI might replace rather
            than assist human lawyers.
          </p>
        </div>

        {/* The Goal Section */}
        <div className="bg-[#F7F7F7] rounded-2xl p-8 md:p-12 mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
            The goal
          </h2>
          <div className="space-y-4 text-[#6e6e6e] font-medium leading-relaxed">
            <p>
              Digital Dynamo approached us to build a website that would amplify
              their reputation as a tech innovator. They needed a platform that
              showcased their expertise, attracted top-tier clients, and
              reflected their vibrant, fast-paced culture. They wanted to break
              the mold of typical tech agency sites by embracing a bold.
            </p>
            <p>
              Our challenge was to craft an experience that would communicate
              their technical prowess while remaining approachable and human.
              Immersive visuals that would stand out in a crowded market.
            </p>
            <p>
              We reframed the platform's story around creativity and time-saving
              rather than just automation. The new brand narrative positioned
              FrameForge as a collaborator — an assistant that gave creators
              more time to focus on storytelling. We incorporated a live
              side-by-side comparison.
            </p>
          </div>
        </div>

        {/* Process Image */}
        <div className="mb-8">
          <img
            src={CaseStudyDetailedImg2.src || CaseStudyDetailedImg2}
            alt="Orange and pink gradient"
            className="w-full h-[500px] md:h-[600px] object-cover rounded-2xl"
          />
        </div>

        {/* The Process Section */}
        <div className="bg-[#F7F7F7] rounded-2xl p-8 md:p-12 mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
            The process
          </h2>
          <div className="space-y-4 text-[#6e6e6e] font-medium leading-relaxed">
            <p>
              We started by defining the key user personas, ensuring the website
              would resonate with tech decision-makers and forward-thinking
              brands. Through extensive workshops with their team, we refined
              the design direction to align with Digital Dynamo's vision for the
              future.
            </p>
            <p>
              Our design approach combined immersive visuals, interactive
              storytelling, and seamless animations. We infused their every
              interaction felt intentional and on-brand, while also highlighting
              Digital Dynamo's diverse capabilities in tech innovation.
            </p>
            <p>
              We reframed the platform's story around creativity and time-saving
              rather than just automation. Every design detail carried an
              assistant that gave creators more time to focus on storytelling.
              We incorporated a live side-by-side comparison tool on the site,
              allowing visitors to see real footage alongside AI-edited
              sequences instantly.
            </p>
          </div>
        </div>

        {/* Results Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <img
            src={CaseStudyDetailedImg3.src || CaseStudyDetailedImg3}
            alt="Red architectural structure"
            className="w-full h-[400px] object-cover rounded-2xl col-span-2"
          />
          <img
            src={CaseStudyDetailedImg4.src || CaseStudyDetailedImg4}
            alt="Vintage light bulb"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </div>

        {/* Results Section */}
        <div className="bg-[#F7F7F7] rounded-2xl p-8 md:p-12 mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
            Results
          </h2>
          <div className="space-y-4 text-[#6e6e6e] font-medium leading-relaxed">
            <p>
              The new site positions Vista as a creative leader, giving them a
              digital platform that not only showcases their work but also
              builds trust with prospective clients. Feedback has been
              overwhelmingly positive, with an increase in project inquiries and
              a stronger online presence that aligns perfectly with their
              vision.
            </p>
            <p>
              A collection of transformations where AI and design met with
              purpose. Every project began with a problem that felt too big or
              too complex, yet ended with a solution that felt inevitable once
              it was in place. Our approach blends strategy, creativity, and
              technology.
            </p>
            <p>
              We reframed the platform's story around creativity and time-saving
              rather than just automation. The new brand narrative positioned
              FrameForge as a collaborator — an assistant that gave creators
              more time to focus on storytelling. We incorporated a live
              side-by-side comparison tool on the site, allowing visitors to see
              raw footage alongside AI-edited sequences instantly.
            </p>
          </div>
        </div>

        {/* Final Large Image */}
        <div className="mb-8">
          <img
            src={CaseStudyDetailedImg5.src || CaseStudyDetailedImg5}
            alt="Abstract gradient waves"
            className="w-full h-[500px] md:h-[600px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
