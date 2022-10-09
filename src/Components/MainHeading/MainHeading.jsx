import React from "react";
import "./MainHeading.scss";

const MainHeading = ({ className, children }) => {
  // className="special"
  return (
    <span
      className={`${
        className || ""
      } main-heading text-uppercase fw-bold fs-5 pb-3 d-inline-block position-relative`}
    >
      {children}
    </span>
  );
};

export default MainHeading;
