import React from "react";
import AboutUs from "../Sections/AboutUs/AboutUs";
import GetTouch from "../Sections/GetTouch/GetTouch";
import Landing from "../Sections/Landing/Landing";

const HomePage = () => {
  return (
    <div className="home-page">
      <Landing />
      <AboutUs />
      <GetTouch />
    </div>
  );
};

export default HomePage;
