import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading d-flex align-items-center justify-content-center position-absolute bg-dark">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
