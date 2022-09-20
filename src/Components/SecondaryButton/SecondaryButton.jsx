import React from "react";
import "./SecondaryButton.scss";
import { Link } from "react-router-dom";

const SecondaryButton = ({ text }) => {
  return (
    <Link className="secondary-btn btn border border-1 px-4 text-white fw-bold position-relative overflow-hidden">
      {text}
    </Link>
  );
};

export default SecondaryButton;
