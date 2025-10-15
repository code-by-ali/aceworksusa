import React from "react";
import LogoSlickSlider from "./LogoSlickSlider";

const CompaniesLogo = () => {
  return (
    <section className="">
      <div className="text-center font-light text-2xl tracking-[-0.48px] text-primary">
        Trusted by top companies across industries
      </div>
      <div className="pt-4">
        <LogoSlickSlider />
      </div>
    </section>
  );
};

export default CompaniesLogo;
