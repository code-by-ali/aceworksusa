import React from "react";

export const BadgeBlue = ({ children, className = "" }) => (
  <span
    className={`font-medium text-[15.75px] leading-[25.6px] bg-[#2b6396] w-max px-3 py-2 text-white rounded-full border border-[#265a92] block rotate-[-8deg] ${className}`}
  >
    {children}
  </span>
);

export default BadgeBlue;
