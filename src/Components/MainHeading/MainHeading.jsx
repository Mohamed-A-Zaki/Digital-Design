import React from "react";
import "./MainHeading.scss";

const MainHeading = ({ text, className }) => {
  // className="special"
  return (
    <span
      className={`${className} main-heading text-uppercase fw-bold fs-5 pb-3 d-inline-block position-relative`}
    >
      {text}
    </span>
  );
};

export default MainHeading;
