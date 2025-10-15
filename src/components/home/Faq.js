import React from "react";
import FaqContent from "./FaqContent";
import BadgeBlue from "../common/BadgeBlue";

const Faq = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <BadgeBlue className="mx-auto mb-2">FAQ</BadgeBlue>

        <h3 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-center mb-8 text-primary tracking-[-2px]">
          We're here to answer all <br /> your questions
        </h3>

        <FaqContent />

        <p className="font-medium text-center mt-6 text-sm md:text-base text-description">
          If you cant find what youre looking for, feel free to{" "}
          <span className="underline underline-offset-2 text-inherit cursor-pointer">
            Contact us
          </span>{" "}
          directly.
        </p>
      </div>
    </section>
  );
};

export default Faq;
