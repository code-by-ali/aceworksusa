"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BadgeBlue from "../common/BadgeBlue";

const content = [
  {
    title: "Digital Marketing",
    number: "120",
    icon: "/assets/icon-one.png",
    text: "Over 625 active projects demonstrate our capacity to scale globally and reliably",
  },
  {
    title: "Search Engine Optimized",
    number: "120",
    icon: "/assets/icon-two.png",
    text: "Over 625 active projects demonstrate our capacity to scale globally and reliably",
  },
  {
    title: "Social Media Marketing",
    number: "$720M",
    icon: "/assets/icon-three.png",
    text: "Clients manage $720M+ in media using our design-driven systems effectively.",
  },
  {
    title: "Projects complete",
    number: "500",
    icon: "/assets/icon-one.png",
    text: "Over 625 active projects demonstrate our capacity to scale globally and reliably",
  },
];

export default function DigitalMarketing() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <BadgeBlue className="mx-auto">Our Services</BadgeBlue>

        <h3 className="text-center text-3xl sm:text-4xl xl:text-5xl font-semibold tracking-[-2px] text-primary   mb-4">
          Full Service Digital <br />
          Marketing Agency
        </h3>

        <p className="text-center text-description text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-12">
          We offer comprehensive Service Digital Marketing solutions to boost
          your online presence. Our services include SEO, social media
          marketing, paid ads, content creation, and email marketing, all
          tailored to your business needs.
        </p>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mb-12 py-4"
        >
          {content.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-[0px_2px_6px_0px_#19213D1A] border border-[#F1F2F9] rounded-2xl p-6 lg:p-8 h-full">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-medium text-base md:text-lg text-primary flex-1 pr-4">
                    {item.title}
                  </h4>
                  <Image
                    unoptimized
                    alt={item.title}
                    src={item.icon}
                    width={72}
                    height={72}
                    className="flex-shrink-0"
                  />
                </div>

                <h5 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
                  {item.number}
                  <span className="text-secondary">+</span>
                </h5>

                <p className="text-sm md:text-base text-description font-normal leading-relaxed">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex">
          <a
            href="#"
            className="inline-block bg-secondary text-white font-bold px-8 py-3 rounded-full text-base"
          >
            Get A Quote
          </a>
        </div>
      </div>
    </section>
  );
}
