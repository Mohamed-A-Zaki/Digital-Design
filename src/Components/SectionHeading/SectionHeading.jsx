import React from "react";

const SectionHeading = ({ className, children }) => {
  return <h2 className={`display-5 fw-bold my-4 ${className || ""}`}>{children}</h2>;
};

export default SectionHeading;
