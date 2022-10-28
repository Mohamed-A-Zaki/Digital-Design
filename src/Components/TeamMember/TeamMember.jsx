import "./TeamMember.scss";
import React from "react";
import Outline from "../Outline/Outline";
import SocialMedia from "../SocialMedia/SocialMedia";

const TeamMember = ({ name, job, img }) => {
  return (
    <div className="team-member">
      <div className="top position-relative mx-4">
        <Outline className="rounded-0 rounded-top border-bottom-0 position-absolute bottom-0 end-0 start-0"></Outline>
        <div className="image">
          <img src={img} className="img-fluid d-block m-auto" alt="img" />
        </div>
      </div>
      <div className="details position-relative rounded overflow-auto">
        <div className="data text-center p-2">
          <div className="name fw-bold fs-2 text-white">{name}</div>
          <div className="job text-uppercase">{job}</div>
        </div>
        <div className="social-wrapper position-absolute top-0 start-0 end-0 bottom-0 bg-light bg-opacity-75 d-flex align-items-center justify-content-center opacity-0">
          <SocialMedia></SocialMedia>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
