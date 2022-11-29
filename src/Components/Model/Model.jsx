import React from "react";

import about from "../../images/about-img.jpg";
import video from "../../images/banner-video.mp4";
import ModelButton from "../ModelButton/ModelButton";

const Model = () => {
  return (
    <div className="model-section position-relative d-flex align-items-center">
      <div className="image">
        <img src={about} className="img-thumbnail" alt="img" />
      </div>

      <ModelButton></ModelButton>

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
                className="btn-close m-0 shadow-none"
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
