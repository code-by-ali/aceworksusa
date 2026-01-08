import React from "react";
import SocialMediaMarketingHero from "@/src/components/social-media-marketing/SocialMediaMarketingHero";
import SocialMediaMarketingServices from "@/src/components/social-media-marketing/SocialMediaMarketingServices";
import CaseStudySMMSection from "@/src/components/social-media-marketing/CaseStudySMMSection";
import CalendlyConnectSMM from "@/src/components/social-media-marketing/CalendlyConnectSMM";
import ContactFormSMM from "@/src/components/social-media-marketing/ContactFormSMM";
import SMMFaq from "@/src/components/social-media-marketing/SMMFaq";

const page = () => {
  return (
    <div>
      <SocialMediaMarketingHero />
      <SocialMediaMarketingServices />
      <CaseStudySMMSection />
      <CalendlyConnectSMM />
      <ContactFormSMM />
      <SMMFaq />
    </div>
  );
};

export default page;
