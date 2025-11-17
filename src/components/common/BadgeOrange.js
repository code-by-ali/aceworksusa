import React from "react";

const BadgeOrange = ({ children, className = "" }) => (
  <span className={`font-medium text-[15.75px] leading-[25.6px] bg-[#FF5E15] w-max px-3 py-2 text-white rounded-full border border-orange-500 block rotate-[-8deg] ${className}`}>
    {children}
  </span>
);

export default BadgeOrange;