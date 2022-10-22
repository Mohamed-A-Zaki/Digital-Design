import React from "react";
import Brands from "../Sections/Brands/Brands";
import Contact from "../Sections/Contact/Contact";
import OurTeam from "../Sections/OurTeam/OurTeam";
import GetTouch from "../Sections/GetTouch/GetTouch";
import Testimonial from "../Sections/Testimonial/Testimonial";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";

import img from "../images/team-banner.jpg";
import { Link } from "react-router-dom";

const TeamPage = () => {
  return (
    <div className="team-page">
      <Breadcrumb img={img} title="Our Team">
        <nav aria-label="breadcrumb" className="my-5">
          <ol className="breadcrumb text-uppercase m-auto py-2 px-4 fw-bold rounded">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none text-white">
                Home
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-white"
              aria-current="page"
            >
              Team
            </li>
          </ol>
        </nav>
      </Breadcrumb>
      
      <OurTeam />
      <GetTouch />
      <Testimonial />
      <Contact />
      <Brands />
    </div>
  );
};

export default TeamPage;
