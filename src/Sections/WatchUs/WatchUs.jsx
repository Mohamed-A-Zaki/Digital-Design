import "./WatchUs.scss";

import React from "react";
import Model from "../../Components/Model/Model";
import MainHeading from "../../Components/MainHeading/MainHeading";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";

import { BsCheckLg } from "react-icons/bs";

const WatchUs = () => {
  return (
    <section className="watch-us py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 g-4 align-items-center">
          <div className="col">
            <Model></Model>
          </div>

          <div className="col">
            <div className="box">
              <MainHeading className="special">Watch Us</MainHeading>
              <SectionHeading>See How We Work</SectionHeading>
              <div className="text text-muted my-4">
                It has roots in a piece of classical Latin literature from 45
                BC, making it over 2000 years old. Various versions have evolved
                over the years, sometimes by accident, sometimes on purpose.
              </div>

              <ul className="list-unstyled mb-0 text-muted">
                <li className="my-3">
                  <BsCheckLg className="text-white fs-2 rounded me-3 p-2" />
                  <span>
                    Many desktop publishing packages and web page editors now
                    use It is the.
                  </span>
                </li>
                <li className="my-3">
                  <BsCheckLg className="text-white fs-2 rounded me-3 p-2" />
                  <span>
                    Injected humour, or randomised words slightly believable.
                  </span>
                </li>
                <li className="my-3">
                  <BsCheckLg className="text-white fs-2 rounded me-3 p-2" />
                  <span>
                    It is the generators on the Internet tend to repeat
                    predefined chunks.
                  </span>
                </li>
                <li className="my-3">
                  <BsCheckLg className="text-white fs-2 rounded me-3 p-2" />
                  <span>
                    Contrary to popular belief, That is the not simply random
                    text.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchUs;
