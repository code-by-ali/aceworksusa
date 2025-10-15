"use client";
import CommonImage from "../common/CommonImage";
import TransformIcon1 from "@/public/assets/about-us-transform-icon-1.svg";
import TransformIcon2 from "@/public/assets/about-us-transform-icon-2.svg";
import TransformIcon3 from "@/public/assets/about-us-transform-icon-3.svg";
import TransformIcon4 from "@/public/assets/about-us-transform-icon-4.svg";
import TransformIcon5 from "@/public/assets/about-us-transform-icon-5.svg";

export default function TransformBusiness() {
  return (
    <div>
      {/* Transform Business Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#2B5A8C] relative overflow-hidden">
        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute bottom-10 left-[10%] w-8 h-8 sm:w-12 sm:h-12 ring-4 ring-white rounded-full flex items-center justify-center animate-float">
            <CommonImage
              src={TransformIcon1.src || TransformIcon1}
              alt="icon-1"
              className="h-full w-full"
            />
          </div>

          <div className="absolute bottom-24 left-[20%] w-8 h-8 sm:w-12 sm:h-12 ring-4 ring-white rounded-full flex items-center justify-center animate-float-delayed">
            <CommonImage
              src={TransformIcon2.src || TransformIcon2}
              alt="icon-2"
              className="h-full w-full"
            />
          </div>

          <div className="absolute bottom-24 right-[30%] w-8 h-8 sm:w-12 sm:h-12 ring-4 ring-white rounded-full flex items-center justify-center animate-float">
            <CommonImage
              src={TransformIcon3.src || TransformIcon3}
              alt="icon-3"
              className="h-full w-full"
            />
          </div>

          <div className="absolute bottom-4 right-[40%] w-8 h-8 sm:w-12 sm:h-12 ring-4 ring-white rounded-full flex items-center justify-center animate-float-delayed">
            <CommonImage
              src={TransformIcon4.src || TransformIcon4}
              alt="icon-4"
              className="h-full w-full"
            />
          </div>

          <div className="absolute bottom-10 right-[15%] w-8 h-8 sm:w-12 sm:h-12 ring-4 ring-white rounded-full flex items-center justify-center animate-float">
            <CommonImage
              src={TransformIcon5.src || TransformIcon5}
              alt="icon-5"
              className="h-full w-full"
            />
          </div>

          {/* Small Dots */}
          <div className="absolute bottom-10 left-[50%] w-3 h-3 bg-white rounded-full opacity-60"></div>
          <div className="absolute bottom-16 right-[25%] w-3 h-3 bg-white rounded-full opacity-60"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-[-2px] leading-tight mb-6">
            Transform your business <br />
            potential with us
          </h2>

          <p className="text-lg md:text-xl text-white/70 mb-10 font-normal leading-relaxed">
            Elevate your success with cutting-edge solutions—partner with us to{" "}
            <br className="hidden sm:block" />
            unlock growth, efficiency, and unbeatable results.
          </p>

          {/* CTA Button */}
          <div className="mt-11">
            <button className="inline-flex items-center gap-2 bg-secondary cursor-pointer text-white text-base font-bold px-8 py-4 rounded-full">
              Book a Call Now
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          @keyframes float-delayed {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 4s ease-in-out infinite;
          }
        `}</style>
      </section>
    </div>
  );
}
