"use client";
import Slider from "react-slick";
import BadgeOrange from "../common/BadgeOrange";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommonImage from "../common/CommonImage";

import OurTeamImg1 from "@/public/assets/about-us-our-team-img-1.svg";
import OurTeamImg2 from "@/public/assets/about-us-our-team-img-2.svg";
import OurTeamImg3 from "@/public/assets/about-us-our-team-img-3.svg";

const content = [
  { image: OurTeamImg1, alt: "Team member working on laptop" },
  { image: OurTeamImg2, alt: "Team member portrait" },
  { image: OurTeamImg3, alt: "Team members collaborating" },
  { image: OurTeamImg1, alt: "Team member working on laptop" },
  { image: OurTeamImg2, alt: "Team member portrait" },
  { image: OurTeamImg3, alt: "Team members collaborating" },
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
        <div className="absolute inset-0 bottom-[-40px] sm:bottom-[-120px]  lg:bottom-[-150px] flex items-end justify-center opacity-10 pointer-events-none">
          <h2 className="text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-white whitespace-nowrap">
            Acework
          </h2>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <BadgeOrange className="mx-auto">
              We are more than a team.
            </BadgeOrange>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-[-1px] mb-6">
              Driving culture forward <br />
              with great people
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
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
                    <CommonImage
                      src={item.image.src || item.image}
                      alt={item.alt}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="inline-flex items-center gap-2 bg-secondary text-base text-white font-semibold px-8 py-4 rounded-full cursor-pointer">
              View Job Openings
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
