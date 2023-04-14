import React from "react";
import useScrollToTop from "../Hooks/useScrollToTop";

import Brands from "../Sections/Brands/Brands";
import Contact from "../Sections/Contact/Contact";
import Pricing from "../Sections/Pricing/Pricing";
import GetTouch from "../Sections/GetTouch/GetTouch";
import Testimonial from "../Sections/Testimonial/Testimonial";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";
import Services from "../Sections/Services/Services";

import img from "../images/services-banner.jpg";

const ServicesPage = () => {
  useScrollToTop();

  return (
    <React.Fragment>
      <Breadcrumb img={img} title="Our Services">
        <li className="breadcrumb-item active text-white" aria-current="page">
          Services
        </li>
      </Breadcrumb>
      <Services heading={false} />
      <GetTouch />
      <Pricing />
      <Testimonial />
      <Contact />
      <Brands />
    </React.Fragment>
  );
};

export default ServicesPage;
