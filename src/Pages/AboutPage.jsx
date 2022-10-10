import React from "react";
import WhyUs from "../Sections/WhyUs/WhyUs";
import Brands from "../Sections/Brands/Brands";
import OurTeam from "../Sections/OurTeam/OurTeam";
import Contact from "../Sections/Contact/Contact";
import Testimonial from "../Sections/Testimonial/Testimonial";

const AboutPage = () => {
  return (
    <div className="about-page">
      <WhyUs></WhyUs>
      <OurTeam></OurTeam>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Brands></Brands>
    </div>
  );
};

export default AboutPage;
