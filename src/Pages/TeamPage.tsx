import React from "react";
import useScrollToTop from "../Hooks/useScrollToTop";

import Brands from "../Sections/Brands/Brands";
import Contact from "../Sections/Contact/Contact";
import GetTouch from "../Sections/GetTouch/GetTouch";
import TeamList from "../Sections/TeamList/TeamList";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";
import Testimonial from "../Sections/Testimonial/Testimonial";

import img from "../images/team-banner.jpg";

const TeamPage = () => {
  useScrollToTop();

  return (
    <React.Fragment>
      <Breadcrumb img={img} title="Our Team">
        <li className="breadcrumb-item active text-white" aria-current="page">
          Team
        </li>
      </Breadcrumb>
      <TeamList />
      <GetTouch />
      <Testimonial />
      <Contact />
      <Brands />
    </React.Fragment>
  );
};

export default TeamPage;
