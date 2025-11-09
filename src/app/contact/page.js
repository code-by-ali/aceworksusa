"use client";
import React from "react";
import ContactForm from "@/src/components/contact/ContactForm";
import DedicatedSupportSection from "@/src/components/contact/DedicatedSupportSection";
import PricingSection from "@/src/components/contact/PricingSection";
import TestimonialsSection from "@/src/components/contact/TestimonialsSection";
import CalendlyConnect from "@/src/components/contact/CalendlyConnect";
import CoverageSection from "@/src/components/contact/CoverageSection";

const page = () => {
  return (
    <div>
      <ContactForm />
      <DedicatedSupportSection />
      <PricingSection />
      <TestimonialsSection />
      <CalendlyConnect />
      <CoverageSection />
    </div>
  );
};

export default page;
