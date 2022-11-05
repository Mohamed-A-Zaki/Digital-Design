import React from "react";
import "./Model.scss";

import about from "../../images/about-img.jpg";
import video from "../../images/banner-video.mp4";

import { BsFillTriangleFill } from "react-icons/bs";

const Model = () => {
  return (
    <div className="model-section position-relative d-flex align-items-center">
      <div className="image">
        <img src={about} className="img-thumbnail" alt="img" />
      </div>

      <button
        type="button"
        className="model-btn border-0 rounded-circle d-flex align-items-center justify-content-center position-absolute top-50 start-50 translate-middle"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        aria-label="toogle-model-bttton"
      >
        <BsFillTriangleFill className="text-white fs-5 ms-1" />
      </button>

      {/* start model */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Banner-Video
              </h5>
              <button
                type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <video src={video} className="w-100" controls></video>
            </div>
          </div>
        </div>
      </div>
      {/* end model */}
    </div>
  );
};

export default Model;
