import React from "react";
import Brands from "../Sections/Brands/Brands";
import GetTouch from "../Sections/GetTouch/GetTouch";
import Testimonial from "../Sections/Testimonial/Testimonial";
import Services from "../Sections/Services/Services";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <Services></Services>
      <GetTouch></GetTouch>
      <Testimonial></Testimonial>
      <Brands></Brands>
    </div>
  );
};

export default ServicesPage;
