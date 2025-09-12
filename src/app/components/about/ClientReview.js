"use client";
import Image from "next/image";
import Slider from "react-slick";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
  { icon: "/assets/aboutlogo.png" },
  { icon: "/assets/aboutlogo.png" },
  { icon: "/assets/aboutlogo.png" },

  { icon: "/assets/aboutlogo.png" },
  { icon: "/assets/aboutlogo.png" },
  { icon: "/assets/aboutlogo.png" },
  { icon: "/assets/aboutlogo.png" },
  { icon: "/assets/aboutlogo.png" },
  { icon: "/assets/aboutlogo.png" },
  { icon: "/assets/aboutlogo.png" },
  { icon: "/assets/aboutlogo.png" },
  { icon: "/assets/aboutlogo.png" },
];

export default function ClientReview() {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // large screens
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 client-review">
        <div className="container mx-auto">
          <h3 className="text-2xl font-semibold mb-8">
            2,500+ professionals, teams, and <br />
            enterprises grow with Aceworks
          </h3>

          <Slider {...settings}>
            {content.map((item, idx) => (
              <div key={idx} className="d-flex  justify-content-between">
                <Image
                  unoptimized
                  src={item.icon}
                  alt={`client-logo-${idx}`}
                  width={100}
                  height={100}
                 
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}
