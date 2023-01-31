import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import WhyUs from "../Sections/WhyUs/WhyUs";
import Brands from "../Sections/Brands/Brands";
import OurTeam from "../Sections/OurTeam/OurTeam";
import Contact from "../Sections/Contact/Contact";
import Testimonial from "../Sections/Testimonial/Testimonial";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";
import WatchUs from "../Sections/WatchUs/WatchUs";
import ButtonComp from "../Components/Button/ButtonComp";
import AboutUs from "../Sections/AboutUs/AboutUs";

import img from "../images/about-banner.jpg";

const AboutPage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <React.Fragment>
      <Breadcrumb img={img} title="About Us">
        <li className="breadcrumb-item active text-white" aria-current="page">
          About
        </li>
      </Breadcrumb>

      <AboutUs bg_image={false} model={false}>
        <ButtonComp
          className="main-btn py-2"
          onClick={() => navigate("/contact")}
        >
          Contact Us Now
        </ButtonComp>
      </AboutUs>

      <WatchUs></WatchUs>
      <WhyUs />
      <OurTeam />
      <Testimonial />
      <Contact />
      <Brands />
    </React.Fragment>
  );
};

export default AboutPage;
