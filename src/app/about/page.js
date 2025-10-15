import React from "react";
import Aboutbanner from "../../components/about/AboutBanner";
import ClientReview from "../../components/about/ClientReview";
import MakeBusiness from "../../components/about/MakeBusiness";
import OurPriority from "../../components/about/OurPriority";
import FutureBusiness from "../../components/about/FutureBusiness";
import OurTeam from "../../components/about/OurTeam";
import OurWork from "../../components/about/OurWork";
import TansformBusiness from "../../components/about/TansformBusiness";
import Faq from "../../components/home/Faq";

const about = () => {
  return (
    <div>
      <Aboutbanner/>
      <ClientReview />
      <MakeBusiness />
      <OurPriority />
      <FutureBusiness />
      <OurTeam />
      <OurWork />
      <TansformBusiness />
      <Faq />
    </div>
  );
};

export default about;
