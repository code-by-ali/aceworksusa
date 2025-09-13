import React from "react";
import Image from "next/image";
import plusIcon from "../../../public/assets/plusIcon.png";

const services = [
  {
    title: "Local SEO Marketing",
    number: "001",
    tagline: "12 Projects",
    image: "/assets/local-service.png",
    discription:
      "Maximize your presence on search engine results pages on a local scale",
  },
  {
    title: "Google My Buisness",
    number: "002",
    tagline: "2 Projects",
    image: "/assets/local-service.png",
    discription:
      "Over 625 active projects demonstrate our capacity to scale globally and reliably",
  },
  {
    title: "Link Building & Content",
    number: "003",
    tagline: "3 Projects",
    image: "/assets/local-service.png",
    discription:
      "Over 625 active projects demonstrate our capacity to scale globally and reliably",
  },
  {
    title: "Email Marketing",
    number: "004",
    tagline: "4 Projects",
    image: "/assets/local-service.png",
    discription:
      "Over 625 active projects demonstrate our capacity to scale globally and reliably",
  },
  {
    title: "Design & Branding",
    number: "005",
    tagline: "5 Projects",
    image: "/assets/local-service.png",
    discription:
      "Over 625 active projects demonstrate our capacity to scale globally and reliably",
  },
  {
    title: "ORM Management",
    number: "006",
    tagline: "6 Projects",
    image: "/assets/local-service.png",
    discription:
      "Over 625 active projects demonstrate our capacity to scale globally and reliably",
  },
];

const SeoServices = () => {
  return (
    <section className="seo-services py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <span className="badge-orange mb-4 block text-sm sm:text-base">
          SEO Services
        </span>

        {/* Heading + Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h3 className="!text-3xl sm:!text-4xl xl:!text-5xl font-bold leading-snug">
            How can we help <br />
            Your business grow
          </h3>

          <div className="flex flex-col flex-wrap sm:flex-row gap-2 w-full md:w-auto">
            <a href="" className="btn-orange w-full sm:w-auto">
              Free SEO Consultation
            </a>
            <a href="" className="btn-light w-full sm:w-auto">
              Get A Quote
            </a>
          </div>
        </div>

        {/* Accordion */}
        <div className="accordion seo-service-accordion" id="accordionExample">
          {services.map((service, idx) => {
            const collapseId = `collapse-${idx}`;
            const headingId = `heading-${idx}`;
            const initiallyOpen = false;

            return (
              <div className="accordion-item mb-4" key={idx}>
                <h2 className="accordion-header" id={headingId}>
                  <button
                    className={`flex justify-between items-center shadow-none !outline-none !transition-none bg-transparent text-[#fff] py-4 accordion-button  ${
                      initiallyOpen ? "" : "collapsed"
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={initiallyOpen ? "true" : "false"}
                    aria-controls={collapseId}
                  >
                    <div className="flex items-center gap-4">
                      <div className="font-semibold text-xs text-[#d1d1d1] uppercase">
                        {service.number}
                      </div>
                      <div className="text-[#fff] font-semibold text-lg sm:text-xl md:text-2xl">
                        {service.title}
                      </div>
                    </div>
                    <span
                      className="ml-auto custom-toggle-icon"
                      aria-hidden="true"
                    >
                      <Image
                        unoptimized
                        src={plusIcon}
                        alt="toggle"
                        className="icon-toggle w-5 h-5 sm:w-6 sm:h-6"
                      />
                    </span>
                  </button>
                </h2>
                <div
                  id={collapseId}
                  className={`accordion-collapse collapse ${
                    initiallyOpen ? "show" : ""
                  }`}
                  aria-labelledby={headingId}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body flex flex-col md:flex-row gap-4 items-start">
                    <Image
                      unoptimized
                      alt=""
                      src={service.image}
                      height={104}
                      width={162}
                      className="rounded-md object-contain"
                    />
                    <p className="max-w-[250px] font-normal text-white text-base sm:text-lg md:text-xl">
                      {service.discription}
                    </p>
                  </div>
                  <div className="text-right text-white font-bold text-xs sm:text-sm md:text-base mt-2">
                    {service.tagline}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SeoServices;
