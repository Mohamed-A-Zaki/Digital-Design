import React from "react";
import Brands from "../Sections/Brands/Brands";
import OurTeam from "../Sections/OurTeam/OurTeam";
import Testimonial from "../Sections/Testimonial/Testimonial";
import WhyUs from "../Sections/WhyUs/WhyUs";

const AboutPage = () => {
  return (
    <div className="about-page">
      <WhyUs></WhyUs>
      <OurTeam></OurTeam>
      <Testimonial></Testimonial>
      <Brands></Brands>
    </div>
  );
};

export default AboutPage;
