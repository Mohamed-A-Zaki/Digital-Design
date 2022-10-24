import React from "react";

import Brands from "../Sections/Brands/Brands";
import Pricing from "../Sections/Pricing/Pricing";
import Contact from "../Sections/Contact/Contact";
import GetTouch from "../Sections/GetTouch/GetTouch";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";
import Testimonial from "../Sections/Testimonial/Testimonial";

import img from "../images/pricing-banner.jpg";

const PricingPage = () => {
  return (
    <React.Fragment>
      <Breadcrumb img={img} title="Our Pricing">
        <li className="breadcrumb-item active text-white" aria-current="page">
          Pricing
        </li>
      </Breadcrumb>
      <Pricing />
      <GetTouch />
      <Testimonial />
      <Contact />
      <Brands />
    </React.Fragment>
  );
};

export default PricingPage;
