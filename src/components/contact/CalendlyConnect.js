import React from "react";
import { InlineWidget } from "react-calendly";
import { Star } from "lucide-react";
import CalendlyReviewIcon1 from "@/public/assets/contact-calendly-icon-1.svg";
import CalendlyReviewIcon2 from "@/public/assets/contact-calendly-icon-2.svg";
import CommonImage from "../common/CommonImage";

const CalendlyConnect = () => {
  return (
    <div className="min-h-screen bg-[#265A92] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Side - Calendly Widget */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <InlineWidget
              url="https://calendly.com/codebyali17"
              styles={{
                height: "100%",
                width: "100%",
              }}
              pageSettings={{
                backgroundColor: "ffffff",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "1e40af",
                textColor: "1f2937",
              }}
            />
          </div>

          {/* Right Side - Testimonial */}
          <div className="flex flex-col justify-center text-white space-y-8 px-4 lg:px-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Highly rated 4.9 out of 5 by 1200+ entrepreneurs just like
                Aceworks
              </h1>
            </div>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              Join the ranks of over 1200 entrepreneurs who have entrusted us
              with their marketing needs and our exceptional service firsthand.
            </p>

            {/* Review Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {/* Clutch Card */}
              <div className="rounded-xl p-3">
                <div className="flex items-center mb-4">
                  <CommonImage
                    src={CalendlyReviewIcon1.src || CalendlyReviewIcon1}
                    alt={"review icon 1"}
                    className="w-14 h-14"
                  />
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#7BDAF8] text-[#7BDAF8]"
                    />
                  ))}
                  <span className="ml-2 text-white font-semibold">5.0</span>
                </div>
                <p className="text-sm text-white">26 REVIEWS</p>
              </div>

              {/* Google Card */}
              <div className="rounded-xl p-3">
                <div className="flex items-center mb-4">
                  <CommonImage
                    src={CalendlyReviewIcon2.src || CalendlyReviewIcon2}
                    alt={"review icon 2"}
                    className="w-14 h-14"
                  />
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#7BDAF8] text-[#7BDAF8]"
                    />
                  ))}
                  <span className="ml-2 text-white font-semibold">4.8</span>
                </div>
                <p className="text-sm text-white">26 REVIEWS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendlyConnect;
