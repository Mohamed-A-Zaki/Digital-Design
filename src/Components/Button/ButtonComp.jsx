import React from "react";
import { Link } from "react-router-dom";
import "./ButtonComp.scss";

const ButtonComp = ({ text, className }) => {
  return (
    <Link
      className={`btn-comp btn ${className} px-4 text-white fw-bold position-relative overflow-hidden`}
    >
      {text}
    </Link>
  );
};

export default ButtonComp;
