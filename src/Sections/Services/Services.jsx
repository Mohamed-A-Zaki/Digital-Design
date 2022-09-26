import React from "react";
import { Link } from "react-router-dom";

import "./Services.scss";
import data from "../../json/data.json";

import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import MainHeading from "../../Components/MainHeading/MainHeading";

const Services = () => {
  return (
    <div className="services py-5">
      <div className="container pb-5">
        <div className="heading text-center m-auto mw-100">
          <MainHeading text="Services"></MainHeading>
          <SectionHeading text="What Can We Do For You"></SectionHeading>
          <p className="text-black-50 ">
            It is the dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 mt-3">
          {data.services.map(({ id, number, name, img, description }) => {
            return (
              <div className="col" key={id}>
                <div className="item shadow p-3 rounded position-relative">
                  <img
                    src={img}
                    alt={name}
                    className="position-absolute bottom-0 end-0 opacity-25"
                  />
                  <div className="outline rounded p-3">
                    <div className="number fw-bold fs-1">{number}</div>
                    <h3 className="fw-bold">{name}</h3>
                    <p className="my-3 text-black-50">{description}</p>
                    <Link to="#">Read More</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
