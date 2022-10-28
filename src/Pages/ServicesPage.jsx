import React from "react";

import Brands from "../Sections/Brands/Brands";
import Contact from "../Sections/Contact/Contact";
import Service from "../Components/Service/Service";
import Pricing from "./../Sections/Pricing/Pricing";
import GetTouch from "../Sections/GetTouch/GetTouch";
import Testimonial from "../Sections/Testimonial/Testimonial";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";

import img from "../images/services-banner.jpg";

import data from "../json/data.json";

const ServicesPage = () => {
  return (
    <React.Fragment>
      <Breadcrumb img={img} title="Our Services">
        <li className="breadcrumb-item active text-white" aria-current="page">
          Services
        </li>
      </Breadcrumb>

      <div className="services py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
            {data.services.map((service) => (
              <div className="col" key={service.id}>
                <Service {...service}></Service>
              </div>
            ))}
          </div>
        </div>
      </div>

      <GetTouch />
      <Pricing />
      <Testimonial />
      <Contact />
      <Brands />
    </React.Fragment>
  );
};

export default ServicesPage;
