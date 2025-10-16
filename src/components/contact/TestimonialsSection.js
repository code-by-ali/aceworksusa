import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

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
      company: "Fintech",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rayan"
    },
    {
      id: 2,
      text: "This platform transformed how we manage our finances. The AI-powered insights have helped us optimize our budget allocation and reduce unnecessary expenses significantly.",
      author: "Sarah Mitchell",
      role: "Entrepreneur",
      company: "Tech Startup",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      id: 3,
      text: "Outstanding features and exceptional customer service! The real-time tracking and automated categorization save us hours every month. Highly recommended!",
      author: "John Rodriguez",
      role: "Business Owner",
      company: "Retail Co",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
    },
    {
      id: 4,
      text: "The best investment decision for our company. The dashboard is intuitive, the insights are actionable, and the support team is always responsive and helpful.",
      author: "Emily Chen",
      role: "CFO",
      company: "Finance Pro",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
    },
    {
      id: 5,
      text: "Finally, a solution that understands what small businesses need. The pricing is fair, and the value you get is incredible. We've already recommended it to our network.",
      author: "Michael Thompson",
      role: "Consultant",
      company: "Business Solutions",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    }
  ];

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    }
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span className="text-blue-600 font-semibold text-sm">Testimonial</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What are people saying<br />about us right now?
          </h1>
        </div>

        {/* Testimonials Swiper */}
        <div className="relative">
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
                <div className="flex flex-col items-center text-center px-4 sm:px-8 py-8">
                  {/* Quote Mark */}
                  <div className="text-6xl text-gray-300 font-serif mb-6">
                    "
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl leading-relaxed">
                    {testimonial.text}
                  </p>

                  {/* Author Info */}
                  <div className="flex flex-col items-center gap-4">
                    {/* Avatar */}
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full border-2 border-gray-200"
                    />

                    {/* Name and Role */}
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>

                    {/* Company */}
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span className="text-sm font-medium">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            disabled={isBeginning}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 z-10 p-2 rounded-full transition-all ${
              isBeginning
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer'
            }`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            disabled={isEnd}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 z-10 p-2 rounded-full transition-all ${
              isEnd
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer'
            }`}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}