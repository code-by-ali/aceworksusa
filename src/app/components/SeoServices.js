import React from "react";
import Image from "next/image";
import plusIcon from "../../../public/assets/plusIcon.png";
import rotatedPlusIcon from "../../../public/assets/rotatedPlusIcon.png";

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
    <section className="seo-services">
      <div className="container">
        <badge className="badge-orange">SEO Services</badge>
        <div className="d-flex justify-content-between align-items-center flex-col md:flex-row">
          <h3>
            How can we help <br />
            Your business grow
          </h3>
          <div className="d-flex">
            <a href="" className="btn-orange mr-5">
              Free SEO Consultaion
            </a>
            <a href="" className="btn-light">
              Get A Quote
            </a>
          </div>
        </div>
        <div className="accordion seo-service-accordion" id="accordionExample">
          {services.map((service, idx) => {
            const collapseId = `collapse-${idx}`;
            const headingId = `heading-${idx}`;
            const initiallyOpen = false; // set `idx === 0` if you want first open

            return (
              <div className="accordion-item" key={idx}>
                <h2 className="accordion-header" id={headingId}>
                  <button
                    className={`accordion-button ${
                      initiallyOpen ? "" : "collapsed"
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={initiallyOpen ? "true" : "false"}
                    aria-controls={collapseId}
                  >
                    <span>{service.number}</span> {service.title}
                    {/* custom icon span (ms-auto pushes it to right) */}
                    <span
                      className="ms-auto custom-toggle-icon"
                      aria-hidden="true"
                    >
                      <Image
                        unoptimized
                        src={plusIcon}
                        alt="toggle"
                        className="icon-toggle"
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
                  <div className="accordion-body d-flex ">
                    <Image
                      unoptimized
                      alt=""
                      src={service.image}
                      height={104}
                      width={162}
                    ></Image>
                    <p>{service.discription}</p>
                  </div>
                  <div className="text-right small">{service.tagline}</div>
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
