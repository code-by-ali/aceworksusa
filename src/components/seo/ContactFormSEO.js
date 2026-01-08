"use client";

import { useState } from "react";
import BadgeBlue from "../common/BadgeBlue";
import CommonImage from "@/src/components/common/CommonImage";
import ContactFormBg from "@/public/assets/contact-form-bg.svg";

export default function ContactFormSEO() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    website: "",
    monthlyTraffic: "",
    seoGoals: "",
    referralSource: "",
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
      businessName: "",
      email: "",
      phone: "",
      website: "",
      monthlyTraffic: "",
      seoGoals: "",
      referralSource: "",
    });
  };

  return (
    <section className="py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <BadgeBlue className="mx-auto px-6">Contact Us</BadgeBlue>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-[-1px] sm:tracking-[-2px] text-primary leading-tight mb-3 sm:mb-4">
            Ready To Stop Losing <br className="hidden sm:block" />
            Customers To Your Competitors?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-primary/70 font-medium max-w-3xl mx-auto">
            Let's talk about your SEO goals. Whether you need a complete website
            overhaul or just want to rank for a few key terms, our SEO
            specialists will build a custom strategy that fits your budget and
            delivers real business growth.
          </p>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden bg-white flex items-stretch">
            <CommonImage
              src={ContactFormBg.src || ContactFormBg}
              alt="Contact illustration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Form */}
          <div className="bg-white drop-shadow-md border border-[#F1F2F9] rounded-2xl p-5 sm:p-8 lg:p-10 flex flex-col justify-center h-full">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-6">
              Get Your Free SEO Strategy Session
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6 text-primary"
            >
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Business Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Website URL
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Website URL"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Current Monthly Website Traffic
                </label>
                <select
                  name="monthlyTraffic"
                  value={formData.monthlyTraffic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                >
                  <option value="">Select traffic range</option>
                  <option>0 – 1,000</option>
                  <option>1,000 – 5,000</option>
                  <option>5,000 – 20,000</option>
                  <option>20,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  What Are Your Main SEO Goals?
                </label>
                <textarea
                  name="seoGoals"
                  value={formData.seoGoals}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Increase rankings, traffic, leads..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  How Did You Hear About Us?
                </label>
                <select
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                >
                  <option value="">Select option</option>
                  <option>Google</option>
                  <option>Social Media</option>
                  <option>Referral</option>
                  <option>Advertisement</option>
                  <option>Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-white font-bold py-3.5 sm:py-4 rounded-full text-sm sm:text-base"
              >
                Get My Free SEO Audit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
