import React from "react";

import WhyUs from "../Sections/WhyUs/WhyUs";
import Brands from "../Sections/Brands/Brands";
import OurTeam from "../Sections/OurTeam/OurTeam";
import Contact from "../Sections/Contact/Contact";
import Testimonial from "../Sections/Testimonial/Testimonial";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";

import img from "../images/about-banner.jpg";

const AboutPage = () => {
  return (
    <div className="about-page">
      <Breadcrumb img={img} title="About Us">
        <li className="breadcrumb-item active text-white" aria-current="page">
          About
        </li>
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
