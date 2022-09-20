import React from "react";
import "./MainButton.scss";
import { Link } from "react-router-dom";

const MainButton = ({ text }) => {
  return (
    <Link className="main-btn btn px-4 text-white fw-bold position-relative overflow-hidden">
      {text}
      {/* d-none d-lg-block */}
    </Link>
  );
};

export default MainButton;
