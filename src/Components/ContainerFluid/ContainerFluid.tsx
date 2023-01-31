import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const ContainerFluid = ({ className = "", children }: Props) => {
  return (
    <div className={`container-fluid px-md-4 px-lg-5 ${className}`}>
      {children}
    </div>
  );
};

export default ContainerFluid;
