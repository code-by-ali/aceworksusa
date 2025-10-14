"use client";
import Image from "next/image";
import BadgeBlue from "../common/BadgeBlue";
import CommonImage from "../common/CommonImage"

export default function Aboutbanner() {
  return (
    <div>
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
                <Image
                  src="/assets/about-1.png"
                  alt="Team collaboration"
                  className="w-full rounded-2xl"
                  unoptimized
                  width={500}
                  height={336}
                />
                <Image
                  src="/assets/about-2.png"
                  alt="Team meeting"
                  className="w-full rounded-2xl"
                  unoptimized
                  width={500}
                  height={336}
                />
              </div>
              <div className="flex items-center">
                <Image
                  src="/assets/about-3.png"
                  alt="Team discussion"
                  className="w-full rounded-2xl"
                  unoptimized
                  width={500}
                  height={336}
                />
              </div>
              <div className="flex items-center">
                <Image
                  src="/assets/about-4.png"
                  alt="Individual work"
                  className="w-full rounded-2xl"
                  unoptimized
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
