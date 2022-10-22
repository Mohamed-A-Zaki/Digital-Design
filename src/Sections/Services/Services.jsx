import "./Services.scss";

import React from "react";
import MainHeading from "../../Components/MainHeading/MainHeading";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";

import { Link } from "react-router-dom";

import data from "../../json/data.json";
import Outline from "../../Components/Outline/Outline";

const Services = () => {
  return (
    <section className="services py-5">
      <div className="container">
        <div className="heading text-center">
          <MainHeading>Services</MainHeading>
          <SectionHeading>What Can We Do For You</SectionHeading>
          <p className="text-muted m-auto">
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
                  <Outline className="p-3">
                    <div className="number fw-bold fs-1">{number}</div>
                    <h3 className="fw-bold text-truncate">{name}</h3>
                    <p className="my-3 text-muted">{description}</p>
                    <Link to="#">Read More</Link>
                  </Outline>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
