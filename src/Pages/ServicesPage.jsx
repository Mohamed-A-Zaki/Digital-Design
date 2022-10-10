import React from "react";
import Brands from "../Sections/Brands/Brands";
import Contact from "../Sections/Contact/Contact";
import GetTouch from "../Sections/GetTouch/GetTouch";
import Services from "../Sections/Services/Services";
import Testimonial from "../Sections/Testimonial/Testimonial";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <Services></Services>
      <GetTouch></GetTouch>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Brands></Brands>
    </div>
  );
};

export default ServicesPage;
