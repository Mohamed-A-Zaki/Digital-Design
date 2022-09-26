import React from "react";
import "./WhyUs.scss";
import MainHeading from "../../Components/MainHeading/MainHeading";
import SectionHeading from "./../../Components/SectionHeading/SectionHeading";

import data from "../../json/data.json";

const WhyUs = () => {
  return (
    <section className="why-us py-5">
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-lg-2 g-5 align-items-center">
          <div className="col">
            <div className="box">
              <div className="statistics d-grid gap-5 position-relative">
                {data.statistics.map(({ id, count, text }) => {
                  return (
                    <div
                      key={id}
                      className="item bg-white shadow p-4 text-center rounded"
                    >
                      <span className="number display-4 fw-bold">{count}</span>
                      <div className="text-muted">{text}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="box">
              <MainHeading text="Why Choose Us" className="special" />
              <SectionHeading text="Boost Your Website Traffic" />
              <p className="mt-4 mb-0 text-muted">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using That is the that it has a more-or-less normal
                distribution of letters, as making it look like readable
                English.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
