import React from "react";
import Brands from "../Sections/Brands/Brands";
import Contact from "../Sections/Contact/Contact";
import Pricing from "./../Sections/Pricing/Pricing";
import GetTouch from "../Sections/GetTouch/GetTouch";
import Services from "../Sections/Services/Services";
import Testimonial from "../Sections/Testimonial/Testimonial";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";

import img from "../images/services-banner.jpg";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <Breadcrumb img={img} title="Our Services">
        <nav aria-label="breadcrumb" className="my-5">
          <ol className="breadcrumb text-uppercase m-auto py-2 px-4 fw-bold rounded">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none text-white">
                Home
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-white"
              aria-current="page"
            >
              Services
            </li>
          </ol>
        </nav>
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
