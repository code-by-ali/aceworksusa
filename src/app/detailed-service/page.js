import React from "react";
import CalendlyConnect from "@/src/components/contact/CalendlyConnect";
import ContactForm from "@/src/components/contact/ContactForm";
import CaseStudySection from "@/src/components/detailed-service/CaseStudySection";
import DigitalStrategyHero from "@/src/components/detailed-service/DigitalStrategyHero";
import DigitalStrategyServices from "@/src/components/detailed-service/DigitalStrategyServices";

const page = () => {
  return (
    <div>
      <DigitalStrategyHero />
      <DigitalStrategyServices />
      <CaseStudySection />
      <CalendlyConnect />
      <ContactForm />
    </div>
  );
};

export default page;
