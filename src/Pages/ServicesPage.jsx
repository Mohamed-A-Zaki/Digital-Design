import React from "react";

import Brands from "../Sections/Brands/Brands";
import Contact from "../Sections/Contact/Contact";
import Pricing from "./../Sections/Pricing/Pricing";
import GetTouch from "../Sections/GetTouch/GetTouch";
import Services from "../Sections/Services/Services";
import Testimonial from "../Sections/Testimonial/Testimonial";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";

import img from "../images/services-banner.jpg";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <Breadcrumb img={img} title="Our Services">
        <li className="breadcrumb-item active text-white" aria-current="page">
          Services
        </li>
      </Breadcrumb>
      <Services />
      <GetTouch />
      <Pricing />
      <Testimonial />
      <Contact />
      <Brands />
    </div>
  );
};

export default ServicesPage;
