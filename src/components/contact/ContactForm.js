"use client";

import { useState } from "react";
import { Mail, Phone, FileText, User } from "lucide-react";
import BadgeBlue from "../common/BadgeBlue";
import CommonImage from "@/src/components/common/CommonImage";
import ContactFormBg from "@/public/assets/contact-form-bg.svg";
import FBIcon from "@/public/assets/social-fb-icon.svg";
import InstaIcon from "@/public/assets/social-insta-icon.svg";
import TwitterIcon from "@/public/assets/social-twitter-icon.svg";
import PinterestIcon from "@/public/assets/social-pinterest-icon.svg";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      additionalInfo: "",
    });
  };

  return (
    <section className="py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <BadgeBlue className="mx-auto px-6">Contact Us</BadgeBlue>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-[-1px] sm:tracking-[-2px] text-primary leading-tight mb-3 sm:mb-4">
            Get in touch with <br className="hidden sm:block" />
            acework now today
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-primary/70 font-medium max-w-2xl sm:max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions, feedback, or
            need support, our team is here to help.
          </p>
        </div>

        {/* Social Links */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-[#265A92] font-bold tracking-[-0.3px] mb-4">
            Follow us on:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {[
              { icon: FBIcon, label: "Facebook" },
              { icon: InstaIcon, label: "Instagram" },
              { icon: TwitterIcon, label: "Twitter" },
              { icon: PinterestIcon, label: "Pinterest" },
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                aria-label={item.label}
                className="flex items-center gap-3 sm:gap-4 text-gray-600 hover:text-secondary transition-colors"
              >
                <div className="p-2 bg-[#F4F5F4] rounded-full flex-shrink-0">
                  <CommonImage
                    src={item.icon.src || item.icon}
                    alt={`social-${item.label.toLowerCase()}-icon`}
                    height={20}
                    width={20}
                    className="sm:h-6 sm:w-6"
                  />
                </div>
                <span className="text-sm sm:text-base font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Image - on top for mobile/tablet, left for desktop */}
          <div className="rounded-2xl overflow-hidden bg-white flex items-stretch order-1 lg:order-none">
            <CommonImage
              src={ContactFormBg.src || ContactFormBg}
              alt="Contact illustration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Form */}
          <div className="bg-white drop-shadow-md border border-[#F1F2F9] rounded-2xl p-5 sm:p-8 lg:p-10 flex flex-col justify-center h-full order-2 lg:order-none">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-3 w-5 h-5 text-primary" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-2.5 sm:py-3 text-primary border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3 w-5 h-5 text-primary" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@mail.com"
                    className="w-full pl-12 pr-4 py-2.5 sm:py-3 text-primary border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-3 w-5 h-5 text-primary" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 1234 56784"
                    className="w-full pl-12 pr-4 py-2.5 sm:py-3 text-primary border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Additional Info */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Additional Info
                </label>
                <div className="relative">
                  <FileText className="absolute left-4 top-3 w-5 h-5 text-primary" />
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    placeholder="Additional info that you may want to add..."
                    rows="4"
                    className="w-full pl-12 pr-4 py-2.5 sm:py-3 text-primary border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-secondary text-white font-bold py-3.5 sm:py-4 rounded-full text-sm sm:text-base cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
