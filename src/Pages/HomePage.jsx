import React from "react";
import AboutUs from "../Sections/AboutUs/AboutUs";
import GetTouch from "../Sections/GetTouch/GetTouch";
import Landing from "../Sections/Landing/Landing";
import Services from "../Sections/Services/Services";
import WhyUs from "../Sections/WhyUs/WhyUs";

const HomePage = () => {
  return (
    <div className="home-page">
      <Landing />
      <AboutUs />
      <Services />
      <GetTouch />
      <WhyUs />
    </div>
  );
};

export default HomePage;
