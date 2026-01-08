import React from "react";
import SEOHero from "@/src/components/seo/SEOHero";
import SEOServices from "@/src/components/seo/SEOServices";
import CaseStudySEOSection from "@/src/components/seo/CaseStudySEOSection";
import CalendlyConnectSEO from "@/src/components/seo/CalendlyConnectSEO";
import ContactFormSEO from "@/src/components/seo/ContactFormSEO";
import SEOFaq from "@/src/components/seo/SEOFaq";

const page = () => {
  return (
    <div>
      <SEOHero />
      <SEOServices />
      <CaseStudySEOSection />
      <CalendlyConnectSEO />
      <ContactFormSEO />
      <SEOFaq />
    </div>
  );
};

export default page;
