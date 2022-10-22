import React from "react";
import AboutUs from "../Sections/AboutUs/AboutUs";
import GetTouch from "../Sections/GetTouch/GetTouch";
import Landing from "../Sections/Landing/Landing";
import OurTeam from "../Sections/OurTeam/OurTeam";
import Services from "../Sections/Services/Services";
import WhyUs from "../Sections/WhyUs/WhyUs";
import Blog from "../Sections/Blog/Blog";
import Brands from "../Sections/Brands/Brands";
import Testimonial from "../Sections/Testimonial/Testimonial";
import Contact from "../Sections/Contact/Contact";
import Portfoilo from "../Sections/Portfoilo/Portfoilo";
import Pricing from "../Sections/Pricing/Pricing";

const HomePage = () => {
  return (
    <div className="home-page">
      <Landing />
      <AboutUs />
      <Services />
      <GetTouch />
      <WhyUs />
      <Pricing />
      <Portfoilo />
      <OurTeam />
      <Testimonial />
      <Blog />
      <Contact />
      <Brands />
    </div>
  );
};

export default HomePage;
