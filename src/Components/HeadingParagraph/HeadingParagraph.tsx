import React from "react";

type Props = {
  className?: string;
  children: string;
};

const HeadingParagraph = ({ className = "", children }: Props) => {
  return (
    <p
      className={`text-muted m-auto mw-100 ${className}`}
      style={{ width: "700px" }}
    >
      {children}
    </p>
  );
};

export default HeadingParagraph;
