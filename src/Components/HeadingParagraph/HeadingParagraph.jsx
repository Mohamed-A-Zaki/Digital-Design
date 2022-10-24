import React from "react";

const HeadingParagraph = ({ className, children }) => {
  return (
    <p
      className={`text-muted m-auto mw-100 ${className || ""}`}
      style={{ width: "700px" }}
    >
      {children}
    </p>
  );
};

export default HeadingParagraph;
