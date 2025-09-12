import React from "react";
import DigitalSolution from "./components/DigitalSolution";
import HeroSection from "./components/HeroSection";
import RealResult from "./components/RealResult";
import Founded from "./components/Founded";
import CompaniesLogo from "./components/CompaniesLogo";
import DigitalMarketing from "./components/DigitalMarekting";
import SeoServices from "./components/SeoServices";
import Blog from "./components/Blog";
import Faq from "./components/Faq";
const page = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <DigitalSolution />
      <RealResult />
      <Founded />
      <CompaniesLogo />
      <DigitalMarketing />
      <SeoServices />
      <Faq />
      <Blog />
    </div>
  );
};

export default page;
