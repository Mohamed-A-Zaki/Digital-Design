import React from "react";

const ContainerFluid = ({ className, children }) => {
  return (
    <div className={`container-fluid px-md-4 px-lg-5 ${className || ""}`}>
      {children}
    </div>
  );
};

export default ContainerFluid;
