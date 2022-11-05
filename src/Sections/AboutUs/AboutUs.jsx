import "./AboutUs.scss";

import React from "react";
import Model from "../../Components/Model/Model";
import MainHeading from "../../Components/MainHeading/MainHeading";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";

import about from "../../images/about-img2.jpg";

const AboutUs = ({ model, bg_image, children }) => {
  return (
    <section className={`about-us ${bg_image ? "bg-image my-lg-5" : ""} py-5`}>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 g-4 align-items-center">
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
              {children}
            </div>
          </div>

          <div className="col">
            {model ? (
              <Model></Model>
            ) : (
              <div className="image">
                <img src={about} className="img-thumbnail" alt="img" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
