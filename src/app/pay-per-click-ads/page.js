import React from "react";
import PPCAHero from "@/src/components/pay-per-click-ads/PPCAHero";
import PPCAServices from "@/src/components/pay-per-click-ads/PPCAServices";
import CaseStudyPPCASection from "@/src/components/pay-per-click-ads/CaseStudyPPCASection";
import CalendlyConnectPPCA from "@/src/components/pay-per-click-ads/CalendlyConnectPPCA";
import ContactFormPPCA from "@/src/components/pay-per-click-ads/ContactFormPPCA";
import PPCAFaq from "@/src/components/pay-per-click-ads/PPCAFaq";

const page = () => {
  return (
    <div>
      <PPCAHero />
      <PPCAServices />
      <CaseStudyPPCASection />
      <CalendlyConnectPPCA />
      <ContactFormPPCA />
      <PPCAFaq />
    </div>
  );
};

export default page;
