import React, { useEffect } from "react";

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
import ButtonComp from "../Components/Button/ButtonComp";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <React.Fragment>
      <Landing />
      <AboutUs bg_image={true} model={true}>
        <ButtonComp
          className="main-btn px-5 py-2"
          onClick={() => navigate("/about")}
        >
          Read More
        </ButtonComp>
      </AboutUs>
      <Services heading={true} count={6} />
      <GetTouch />
      <WhyUs />
      <Pricing />
      <Portfoilo />
      <OurTeam />
      <Testimonial />
      <Blog />
      <Contact />
      <Brands />
    </React.Fragment>
  );
};

export default HomePage;
