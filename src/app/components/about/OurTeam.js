"use client";
import Image from "next/image";
import Slider from "react-slick";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
  { icon: "/assets/team1.png" },
  { icon: "/assets/team1.png" },
  { icon: "/assets/team1.png" },
  { icon: "/assets/team1.png" },
  { icon: "/assets/team1.png" },
  { icon: "/assets/team1.png" },
 

];

export default function ClientReview() {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
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
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8 our-team">
        <div className="container mx-auto">
            <badge className="badge-orange m-auto">
                We are more than a team.
            </badge>
          <h3 className=" mb-8">
           Driving culture forward <br/>
with great people
          </h3>
<p>
    Join our dynamic team! Grow your skills, collaborate with experts, and make <br/>
an impact. Apply today and shape the future together!
</p>
          <Slider {...settings}>
            {content.map((item, idx) => (
              <div key={idx} className="">
                <Image
                  
                  src={item.icon}
                  alt={`client-logo-${idx}`}
                 style={{height:'max-content'}}
                  width={563}
                  height={300}
                  className="mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-center job-opening">
        <a href='' className='btn btn-orange  '> View Job Openings</a>

        </div>
      </section>
    </div>
  );
}
