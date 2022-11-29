import "./Service.scss";
import React from "react";
import { Link } from "react-router-dom";
import Outline from "../Outline/Outline";

const Service = ({ number, name, img, description }) => {
  return (
    <div className="service shadow p-3 rounded position-relative">
      <img
        src={img}
        alt={name}
        className="position-absolute bottom-0 opacity-25 h-auto"
      />
      <Outline className="p-3">
        <div className="number fw-bold fs-1">{number}</div>
        <h3 className="fw-bold text-truncate">{name}</h3>
        <p className="my-3 text-muted">{description}</p>
        <Link to="#">Read More</Link>
      </Outline>
    </div>
  );
};

export default Service;
