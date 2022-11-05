import React from "react";
import "./ModelButton.scss";

import { BsFillTriangleFill } from "react-icons/bs";

const ModelButton = () => {
  return (
    <button
      type="button"
      className="model-btn border-0 rounded-circle d-flex align-items-center justify-content-center position-absolute top-50 start-50 translate-middle"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      aria-label="toogle-model-bttton"
    >
      <BsFillTriangleFill className="text-white fs-5 ms-1" />
    </button>
  );
};

export default ModelButton;
