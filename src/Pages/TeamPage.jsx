import React from "react";
import Brands from "../Sections/Brands/Brands";
import Contact from "../Sections/Contact/Contact";
import OurTeam from "../Sections/OurTeam/OurTeam";
import GetTouch from "../Sections/GetTouch/GetTouch";
import Testimonial from "../Sections/Testimonial/Testimonial";

const TeamPage = () => {
  return (
    <div className="team-page">
      <OurTeam />
      <GetTouch />
      <Testimonial />
      <Contact />
      <Brands />
    </div>
  );
};

export default TeamPage;
