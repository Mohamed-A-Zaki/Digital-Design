import React from "react";
import "./ButtonComp.scss";

const ButtonComp = ({ className, type, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-comp btn ${className} px-4 text-white fw-bold position-relative overflow-hidden`}
    >
      {children}
    </button>
  );
};

export default ButtonComp;
