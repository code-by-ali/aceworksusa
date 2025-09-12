import React from "react";
import FaqContent from "./FaqContent";
const Faq = () => {
  return (
    <section className="faq-sec ">
      <div className="container">
        <badge className="badge-blue m-auto">FAQ</badge>

        <h3 className="">
          We’re here to answer all <br /> your questions
        </h3>
        <FaqContent />
        <p className="tag-line">
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
