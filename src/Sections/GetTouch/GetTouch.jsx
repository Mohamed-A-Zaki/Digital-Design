import React from "react";
import ButtonComp from "../../Components/Button/ButtonComp";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";

import image from "../../images/get-in-touch.png";

const GetTouch = () => {
  return (
    <section className="get-in-touch py-5 bg-light position-relative text-center text-lg-start">
      <div className="container-fluid px-2 px-md-4 px-lg-5">
        <div className="outline rounded">
          <div className="container">
            <div className="row py-5">
              <div className="col">
                <div className="box">
                  <SectionHeading
                    text="Have A Project In Mind? Let's Get To Work."
                    className="display-5 mb-5"
                  />
                  <ButtonComp
                    text="Read More"
                    className="main-btn px-5 py-2"
                  ></ButtonComp>
                </div>
              </div>
              <div className="col d-none d-lg-flex">
                <div className="box">
                  <img
                    src={image}
                    style={{ width: "400px" }}
                    className="position-absolute bottom-0"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTouch;
