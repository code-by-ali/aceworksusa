import CaseStudyDetail from "@/src/components/case-studies-detailed/CaseStudyDetail";
import RelatedCaseStudies from "@/src/components/case-studies-detailed/RelatedCaseStudies";
import React from "react";

const page = () => {
  return (
    <div>
      <CaseStudyDetail />
      <RelatedCaseStudies />
    </div>
  );
};

export default page;
