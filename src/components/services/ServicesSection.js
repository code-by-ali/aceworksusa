"use client";
import React, { useState } from "react";
import BadgeBlue from "../common/BadgeBlue";
import { PlusIcon } from "lucide-react";

export default function ServicesSection() {
  const [expandedId, setExpandedId] = useState(1); // Set first item as default

  const services = [
    {
      id: 1,
      category: "Web Design and Development",
      description:
        "Your website is your digital storefront, and first impressions matter. Our web marketing experts create high-converting websites that don't just look beautiful but actually turn visitors into paying customers. From user experience to mobile optimization, every element is designed to support your online digital marketing goals.",
      tags: [
        "UI UX Design",
        "Custom Website Design",
        "eCommerce Development",
        "Content Management Systems (CMS)",
        "Website Maintenance and Support",
        "SEO Integration",
        "Conversion Rate Optimization",
      ],
    },
    {
      id: 2,
      category: "Digital Marketing",
      description:
        "Your business deserves more than just website traffic; it needs qualified leads and paying customers. As a leading digital marketing agency near me for businesses across America, we deliver comprehensive online marketing campaigns that combine SEO, PPC, content marketing and social media to maximize your ROI. We're not just another marketing agency near me; we're your growth partner focused on measurable results that impact your bottom line.",
      tags: [
        "SEO (Search Engine Optimization)",
        "PPC Advertising (Google Ads, Facebook Ads)",
        "Social Media Marketing",
        "Email Marketing",
        "Content Marketing",
        "Digital PR & Link Building",
      ],
    },
    {
      id: 3,
      category: "Branding & Creative Services",
      description:
        "Your brand is more than a logo; it's the story that connects you with your customers. Our creative team builds powerful brand identities that make your business unforgettable. Whether you're a startup or an established company, we craft visual identities that align perfectly with your digital marketing strategy and resonate with your target audience.",
      tags: [
        "Logo Design & Brand Identity",
        "Brand Strategy & Positioning",
        "Visual Identity Design",
        "Social Media Graphics",
        "Pitch Deck Design",
        "Print Designs & Illustrations",
        "Packaging Design",
      ],
    },
    {
      id: 4,
      category: "App Design & Development",
      description:
        "People are glued to their phones. If your app crashes, loads slowly or feels clunky, they're gone. We build apps that actually work, fast, smooth and so intuitive your users don't need instructions. Whether it's iOS or Android, we handle everything from the first sketch to App Store launch.",
      tags: [
        "iOS/Android App Development",
        "Custom App Development",
        "Mobile Optimization",
        "App Store Optimization (ASO)",
        "Cross-Platform Development",
      ],
    },
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex flex-col items-center justify-center">
            <BadgeBlue>Expertise</BadgeBlue>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary mb-2 max-w-4xl">
              Full-Service Digital Marketing Solutions That Drive Results
            </h2>
          </div>
        </div>

        {/* Left Sidebar Navigation */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Hidden on mobile, shows on lg+ */}
          <div className="hidden lg:block lg:w-72 flex-shrink-0">
            <div className="sticky top-6 space-y-3">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#service-${service.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setExpandedId(service.id);
                    document
                      .getElementById(`service-${service.id}`)
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                  className={`flex items-center gap-3 text-left px-0 py-2 transition-all group ${
                    expandedId === service.id
                      ? "text-orange-500 font-medium"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <span
                    className={`text-lg transition-transform ${
                      expandedId === service.id ? "scale-110" : "scale-100"
                    }`}
                  >
                    ▶
                  </span>
                  <span className="text-base">{service.category}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 space-y-6">
            {services.map((service) => (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="bg-[#F5F7F9] rounded-2xl  p-6 sm:p-8 scroll-mt-6"
              >
                {/* Card Header */}
                <h3 className="text-2xl md:text-3xl font-bold text-primary tracking-tight mb-4">
                  {service.category}
                </h3>

                {/* Description */}
                <p className="text-primary/80 text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1.5 px-3 py-2 bg-gray-50 border border-gray-200 text-gray-700 text-xs sm:text-sm rounded-lg transition-colors cursor-default"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Link */}
                <button className="bg-white w-full py-4  px-4 flex flex-row justify-between items-center rounded-2xl gap-2">
                  <span className="text-lg md:text-xl font-medium tracking-tight">
                    View Details
                  </span>
                  <span className="">
                    <PlusIcon />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
