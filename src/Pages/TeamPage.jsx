import React, { useEffect } from "react";

import Brands from "../Sections/Brands/Brands";
import Contact from "../Sections/Contact/Contact";
import GetTouch from "../Sections/GetTouch/GetTouch";
import Testimonial from "../Sections/Testimonial/Testimonial";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";
import TeamMember from "../Components/TeamMember/TeamMember";

import img from "../images/team-banner.jpg";
import data from "../json/data.json";

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <React.Fragment>
      <Breadcrumb img={img} title="Our Team">
        <li className="breadcrumb-item active text-white" aria-current="page">
          Team
        </li>
      </Breadcrumb>

      <div className="our-team py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
            {data.our_team.map((member) => (
              <div className="col" key={member.id}>
                <TeamMember {...member}></TeamMember>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <OurTeam /> */}
      <GetTouch />
      <Testimonial />
      <Contact />
      <Brands />
    </React.Fragment>
  );
};

export default TeamPage;
