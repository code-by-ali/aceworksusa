"use client";
import Image from "next/image";
import Slider from "react-slick";
import BadgeOrange from "../common/BadgeOrange";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
  { icon: "/assets/team1.png", alt: "Team member working on laptop" },
  { icon: "/assets/team2.png", alt: "Team member portrait" },
  { icon: "/assets/team3.png", alt: "Team members collaborating" },
  { icon: "/assets/team1.png", alt: "Team member working on laptop" },
  { icon: "/assets/team2.png", alt: "Team member portrait" },
  { icon: "/assets/team3.png", alt: "Team members collaborating" },
];

export default function OurTeam() {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    centerMode: false, // Disabled centerMode to prevent scaling
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div>
      {/* Our Team Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#2B5A8C] relative overflow-hidden">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <h2 className="text-[12rem] sm:text-[16rem] lg:text-[20rem] font-bold text-white whitespace-nowrap">
            Acework
          </h2>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <BadgeOrange className="mx-auto mb-6">
              We are more than a team.
            </BadgeOrange>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Driving culture forward <br />
              with great people
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join our dynamic team! Grow your skills, collaborate with experts,
              and make <br className="hidden lg:block" />
              an impact. Apply today and shape the future together!
            </p>
          </div>

          {/* Team Slider */}
          <div className="team-slider mb-12 lg:mb-16">
            <Slider {...settings}>
              {content.map((item, idx) => (
                <div key={idx} className="px-3">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      width={400}
                      height={450}
                      className="w-full h-auto object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              View Job Openings
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
