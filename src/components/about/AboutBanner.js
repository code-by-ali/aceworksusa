"use client";
import BadgeBlue from "../common/BadgeBlue";
import CommonImage from "../common/CommonImage";
import AboutBannerImg1 from "@/public/assets/about-us-banner-img-1.svg";
import AboutBannerImg2 from "@/public/assets/about-us-banner-img-2.svg";
import AboutBannerImg3 from "@/public/assets/about-us-banner-img-3.svg";
import AboutBannerImg4 from "@/public/assets/about-us-banner-img-4.svg";

export default function Aboutbanner() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <BadgeBlue className="mx-auto">About Company</BadgeBlue>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-[-2px  ] mb-6">
              Building foundations <br />
              for team success.
            </h1>

            <p className="text-lg sm:text-xl text-description mb-16 max-w-3xl mx-auto leading-relaxed">
              We equip teams with strategy, tools, and clarity—turning <br />
              potential into measurable, lasting success.
            </p>
          </div>

          {/* images */}
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-4">
                <CommonImage
                  src={AboutBannerImg1.src || AboutBannerImg1}
                  alt="Team collaboration"
                  className="w-full rounded-2xl"
                  width={500}
                  height={336}
                />
                <CommonImage
                  src={AboutBannerImg2.src || AboutBannerImg2}
                  alt="Team meeting"
                  className="w-full rounded-2xl"
                  width={500}
                  height={336}
                />
              </div>
              <div className="flex items-center">
                <CommonImage
                  src={AboutBannerImg3.src || AboutBannerImg3}
                  alt="Team discussion"
                  className="w-full rounded-2xl"
                  width={500}
                  height={336}
                />
              </div>
              <div className="flex items-center">
                <CommonImage
                  src={AboutBannerImg4.src || AboutBannerImg4}
                  alt="Individual work"
                  className="w-full rounded-2xl"
                  width={500}
                  height={336}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
