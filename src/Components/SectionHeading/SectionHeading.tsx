import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const SectionHeading = ({ className = "", children }: Props) => {
  return <h2 className={`display-5 fw-bold my-4 ${className}`}>{children}</h2>;
};

export default SectionHeading;
