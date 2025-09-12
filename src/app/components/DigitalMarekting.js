"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
    <section className="digital-marketing">
      <div className="container">
        <badge className="badge-blue m-auto">Our Services</badge>

        <h3 className="text-center !text-3xl sm:!text-4xl xl:!text-5xl">
          Full Service Digital <br />
          Marketing Agency
        </h3>
        <p className="subtitle" style={{ marginBottom: "24px" }}>
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
        >
          {content.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="card services-card">
                <div className="d-flex justify-content-between align-items-center">
                  <h4>{item.title}</h4>
                  <Image
                    unoptimized
                    alt=""
                    src={item.icon}
                    width={72}
                    height={72}
                  />
                </div>

                <h5>
                  {item.number} <span>+</span>
                </h5>
                <p>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="d-flex">
          <a href="" className="btn-orange">
            Get A Quote
          </a>
        </div>
      </div>
    </section>
  );
}
