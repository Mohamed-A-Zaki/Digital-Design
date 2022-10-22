import React from "react";
import WhyUs from "../Sections/WhyUs/WhyUs";
import Brands from "../Sections/Brands/Brands";
import OurTeam from "../Sections/OurTeam/OurTeam";
import Contact from "../Sections/Contact/Contact";
import Testimonial from "../Sections/Testimonial/Testimonial";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";

import img from "../images/about-banner.jpg";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-page">
      <Breadcrumb img={img} title="About Us">
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
              About
            </li>
          </ol>
        </nav>
      </Breadcrumb>
      
      <WhyUs />
      <OurTeam />
      <Testimonial />
      <Contact />
      <Brands />
    </div>
  );
};

export default AboutPage;
