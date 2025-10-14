import React from "react";
import DigitalSolution from "../components/home/DigitalSolution";
import HeroSection from "../components/home/HeroSection";
import RealResult from "../components/home/RealResult";
import Founded from "../components/home/Founded";
import CompaniesLogo from "../components/home/CompaniesLogo";
import DigitalMarketing from "../components/home/DigitalMarketing";
import SeoServices from "../components/home/SeoServices";
import Blog from "../components/home/Blog";
import Faq from "../components/home/Faq";
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
