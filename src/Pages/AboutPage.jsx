import React from "react";
import WhyUs from "../Sections/WhyUs/WhyUs";
import Brands from "../Sections/Brands/Brands";
import OurTeam from "../Sections/OurTeam/OurTeam";
import Contact from "../Sections/Contact/Contact";
import Testimonial from "../Sections/Testimonial/Testimonial";

const AboutPage = () => {
  return (
    <div className="about-page">
      <WhyUs />
      <OurTeam />
      <Testimonial />
      <Contact />
      <Brands />
    </div>
  );
};

export default AboutPage;
