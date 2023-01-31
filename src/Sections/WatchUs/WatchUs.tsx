import React from "react";

import Model from "../../Components/Model/Model";
import TextList from "../../Components/TextList/TextList";
import MainHeading from "../../Components/MainHeading/MainHeading";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";

const WatchUs = () => {
  return (
    <section className="watch-us py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-xl-2 g-4 align-items-center">
          <div className="col">
            <Model />
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
              <TextList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchUs;
