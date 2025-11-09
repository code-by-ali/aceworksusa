import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import BadgeBlue from "../common/BadgeBlue";
import CommonImage from "../common/CommonImage";
import TestimonialQuote from "@/public/assets/contact-testimonial-quote-icon.svg";
import TestimonialCompanyLogo1 from "@/public/assets/contact-testimonial-company-logo-1.svg";

export default function TestimonialsSection() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "Aceworks simplifies marketing planning effortlessly! With AI budgeting, I save 20% more monthly, and the expense tracking keeps my spending in check effectively.",
      author: "Rayan Kay",
      role: "Photographer",
      company: TestimonialCompanyLogo1,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rayan",
    },
    {
      id: 2,
      text: "This platform transformed how we manage our finances. The AI-powered insights have helped us optimize our budget allocation and reduce unnecessary expenses significantly.",
      author: "Sarah Mitchell",
      role: "Entrepreneur",
      company: TestimonialCompanyLogo1,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      id: 3,
      text: "Outstanding features and exceptional customer service! The real-time tracking and automated categorization save us hours every month. Highly recommended!",
      author: "John Rodriguez",
      role: "Business Owner",
      company: TestimonialCompanyLogo1,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    {
      id: 4,
      text: "The best investment decision for our company. The dashboard is intuitive, the insights are actionable, and the support team is always responsive and helpful.",
      author: "Emily Chen",
      role: "CFO",
      company: TestimonialCompanyLogo1,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
    {
      id: 5,
      text: "Finally, a solution that understands what small businesses need. The pricing is fair, and the value you get is incredible. We've already recommended it to our network.",
      author: "Michael Thompson",
      role: "Consultant",
      company: TestimonialCompanyLogo1,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
  ];

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    }
  };

  return (
    <div className="w-full overflow-hidden bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12">
          <BadgeBlue>Testimonial</BadgeBlue>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary mb-4 px-4 leading-tight">
            What are people saying
            <br className="hidden sm:block" />
            <span className="sm:inline"> about us right now?</span>
            <div className="flex items-center justify-center mt-4">
              <CommonImage
                src={TestimonialQuote.src || TestimonialQuote}
                alt={"quote-icon"}
                className="h-12 w-12"
              />
            </div>
          </h1>
        </div>

        {/* Testimonials Swiper - with proper container */}
        <div className="relative max-w-4xl md:max-w-5xl mx-auto">
          <div className="px-8 sm:px-12 md:px-16">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={30}
              loop={false}
              onSlideChange={handleSlideChange}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="flex flex-col items-center text-center py-6 sm:py-8">
                    {/* Testimonial Text */}
                    <p className="text-xl lg:text-2xl text-[#414D48] mb-6 sm:mb-8 leading-relaxed px-2">
                      {testimonial.text}
                    </p>

                    {/* Author Info */}
                    <div className="flex flex-col items-center gap-3 sm:gap-4">
                      {/* Avatar */}
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-gray-200"
                      />

                      {/* Name and Role */}
                      <p className="text-primary text-lg md:text-xl">
                        <span className="font-bold">{testimonial.author},</span>
                        <span className="font-normal"> {testimonial.role}</span>
                      </p>

                      {/* Company */}
                      <div className="flex items-center gap-1.5">
                        <CommonImage
                          src={testimonial.company.src || testimonial.company}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            disabled={isBeginning}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-2.5 rounded-full transition-all ${
              isBeginning
                ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-50"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
            }`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            disabled={isEnd}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-2.5 rounded-full transition-all ${
              isEnd
                ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-50"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
            }`}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
