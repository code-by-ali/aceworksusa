import BrandHeroSection from "@/src/components/services/BrandHeroSection";
import ComparisonSection from "@/src/components/services/ComparisonSection";
import PartnerSlider from "@/src/components/services/PartnerSlider";
import ProcessSection from "@/src/components/services/ProcessSection";
import ServicesSection from "@/src/components/services/ServicesSection";
import React from "react";

const page = () => {
  return (
    <div>
      <BrandHeroSection />
      <PartnerSlider />
      <ServicesSection />
      <ProcessSection />
      <ComparisonSection />
    </div>
  );
};

export default page;
