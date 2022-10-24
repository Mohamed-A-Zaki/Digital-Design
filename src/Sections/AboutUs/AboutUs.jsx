import "./AboutUs.scss";

import React from "react";
import ButtonComp from "../../Components/Button/ButtonComp";
import MainHeading from "../../Components/MainHeading/MainHeading";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";

import about from "../../images/about-img.jpg";
import video from "../../images/banner-video.mp4";

import { BsFillTriangleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  let navigate = useNavigate();

  return (
    <section className="about-us py-5 my-lg-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 g-4">
          <div className="col">
            <div className="box">
              <MainHeading className="special">About Us</MainHeading>
              <SectionHeading>We're More Than Digital Agency</SectionHeading>
              <div className="text text-muted my-4">
                <div>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
                <div className="my-4">
                  The point of using That is the that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Contrary to popular belief, That is the not simply random
                  text.
                </div>
                <div>
                  It has roots in a piece of classical Latin literature from 45
                  BC, making it over 2000 years old. Various versions have
                  evolved over the years, sometimes by accident, sometimes on
                  purpose.
                </div>
              </div>
              <ButtonComp className="main-btn px-5 py-2" onClick={() => navigate("/about")}>Read More</ButtonComp>
            </div>
          </div>

          <div className="col">
            <div className="box position-relative h-100 d-flex align-items-center">
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
                <div className="modal-dialog modal-dialog-centered modal-xl">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
