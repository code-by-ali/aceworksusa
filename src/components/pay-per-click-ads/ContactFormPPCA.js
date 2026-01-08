"use client";

import { useState } from "react";
import BadgeBlue from "../common/BadgeBlue";
import CommonImage from "@/src/components/common/CommonImage";
import ContactFormBg from "@/public/assets/contact-form-bg.svg";

export default function ContactFormPPCA() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    website: "",
    monthlyAdSpend: "",
    advertisingPlatforms: "",
    ppcGoal: "",
    workingWithAgency: "",
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
      monthlyAdSpend: "",
      advertisingPlatforms: "",
      ppcGoal: "",
      workingWithAgency: "",
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
            Ready To Stop Wasting Money On
            <br className="hidden sm:block" />
            Ads That Don&apos;t Convert?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-primary/70 font-medium max-w-3xl mx-auto">
            Let's audit your current PPC campaigns (or build a new strategy from
            scratch). Whether you need PPC services near me or a national Google
            ads management agency, our team delivers campaigns that actually
            generate profitable returns, not just traffic.
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
              Get Your Free Google Ads Account Audit
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6 text-primary"
            >
              {/* Full Name */}
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

              {/* Business Name */}
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

              {/* Email */}
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

              {/* Phone */}
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

              {/* Website */}
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

              {/* Monthly Ad Spend */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Current Monthly Ad Spend
                </label>
                <select
                  name="monthlyAdSpend"
                  value={formData.monthlyAdSpend}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                >
                  <option value="">Select ad spend</option>
                  <option>$0</option>
                  <option>Under $2K</option>
                  <option>$2K – $5K</option>
                  <option>$5K – $10K</option>
                  <option>$10K – $20K</option>
                  <option>$20K+</option>
                </select>
              </div>

              {/* Advertising Platforms */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Which Platforms Are You Advertising On?
                </label>
                <input
                  type="text"
                  name="advertisingPlatforms"
                  value={formData.advertisingPlatforms}
                  onChange={handleChange}
                  placeholder="Google, Meta, LinkedIn, etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              {/* PPC Goal */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  What&apos;s Your Main PPC Goal?
                </label>
                <select
                  name="ppcGoal"
                  value={formData.ppcGoal}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                >
                  <option value="">Select goal</option>
                  <option>More Leads</option>
                  <option>More Sales</option>
                  <option>Lower CPA</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Agency */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Are You Currently Working With a PPC Agency?
                </label>
                <select
                  name="workingWithAgency"
                  value={formData.workingWithAgency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                >
                  <option value="">Select option</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              {/* Referral */}
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

              {/* CTA */}
              <button
                type="submit"
                className="w-full bg-secondary text-white font-bold py-3.5 sm:py-4 rounded-full text-sm sm:text-base"
              >
                Get My Free PPC Audit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
