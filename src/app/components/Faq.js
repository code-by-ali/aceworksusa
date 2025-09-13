import React from "react";
import FaqContent from "./FaqContent";
const Faq = () => {
  return (
    <section className="faq-sec ">
      <div className="container">
        <badge className="badge-blue m-auto">FAQ</badge>

        <h3 className="!text-3xl sm:!text-4xl xl:!text-5xl !font-semibold text-center">
          We’re here to answer all <br /> your questions
        </h3>
        <FaqContent />
        <p className="tag-line font-medium text-center !mt-6 text-sm sm:text-base text-[#25252580]">
          If you cant find what youre looking for, feel free to{" "}
          <span className="underline underline-offset-2 text-inherit">
            Contact us
          </span>{" "}
          directly,
        </p>
      </div>
    </section>
  );
};

export default Faq;
