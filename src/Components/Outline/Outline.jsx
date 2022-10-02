import React from "react";
import "./Outline.scss";

const Outline = ({ className, children }) => {
  return <div className={`outline rounded ${className || ""}`}>{children}</div>;
};

export default Outline;
