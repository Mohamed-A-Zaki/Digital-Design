import React from "react";

import Brands from "../Sections/Brands/Brands";
import Contact from "../Sections/Contact/Contact";
import OurTeam from "../Sections/OurTeam/OurTeam";
import GetTouch from "../Sections/GetTouch/GetTouch";
import Testimonial from "../Sections/Testimonial/Testimonial";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";

import img from "../images/team-banner.jpg";

const TeamPage = () => {
  return (
    <React.Fragment>
      <Breadcrumb img={img} title="Our Team">
        <li className="breadcrumb-item active text-white" aria-current="page">
          Team
        </li>
      </Breadcrumb>
      <OurTeam />
      <GetTouch />
      <Testimonial />
      <Contact />
      <Brands />
    </React.Fragment>
  );
};

export default TeamPage;
