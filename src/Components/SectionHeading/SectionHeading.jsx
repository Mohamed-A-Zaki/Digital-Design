import React from "react";

const SectionHeading = ({ className, children }) => {
  return <h2 className={`h1 fw-bold my-4 ${className}`}>{children}</h2>;
};

export default SectionHeading;
