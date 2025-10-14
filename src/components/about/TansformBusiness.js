"use client";
import Image from "next/image";

export default function TransformBusiness() {
  return (
    <div>
      {/* Transform Business Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#2B5A8C] relative overflow-hidden">
        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left Icon */}
          <div className="absolute top-20 left-[15%] w-12 h-12 sm:w-16 sm:h-16 bg-[#8BC34A] rounded-full flex items-center justify-center animate-float">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
            </svg>
          </div>

          {/* Top Center Icon */}
          <div className="absolute top-16 left-[35%] w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center animate-float-delayed">
            <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#2B5A8C]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
            </svg>
          </div>

          {/* Top Right Icon */}
          <div className="absolute top-20 right-[15%] w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center animate-float">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#2B5A8C]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
            </svg>
          </div>

          {/* Bottom Right Icon */}
          <div className="absolute bottom-32 right-[20%] w-12 h-12 sm:w-16 sm:h-16 bg-[#FF5252] rounded-full flex items-center justify-center animate-float-delayed">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
            </svg>
          </div>

          {/* Bottom Center Icon */}
          <div className="absolute bottom-28 left-[45%] w-10 h-10 sm:w-14 sm:h-14 bg-[#FFA726] rounded-full flex items-center justify-center animate-float">
            <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
            </svg>
          </div>

          {/* Small Dots */}
          <div className="absolute bottom-40 left-[25%] w-3 h-3 bg-white rounded-full opacity-60"></div>
          <div className="absolute top-32 right-[35%] w-3 h-3 bg-white rounded-full opacity-60"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Transform your business <br />
            potential with us
          </h2>
          
          <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
            Elevate your success with cutting-edge solutions—partner with us to <br className="hidden sm:block" />
            unlock growth, efficiency, and unbeatable results.
          </p>

          {/* CTA Button */}
          <div className="mt-11">
            <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Book a Call Now
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          @keyframes float-delayed {
            0%, 100% {
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