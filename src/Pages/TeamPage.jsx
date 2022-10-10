import React from "react";
import Brands from "../Sections/Brands/Brands";
import Contact from "../Sections/Contact/Contact";
import GetTouch from "../Sections/GetTouch/GetTouch";
import OurTeam from "../Sections/OurTeam/OurTeam";
import Testimonial from "../Sections/Testimonial/Testimonial";

const TeamPage = () => {
  return (
    <div className="team-page">
      <OurTeam></OurTeam>
      <GetTouch></GetTouch>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Brands></Brands>
    </div>
  );
};

export default TeamPage;
