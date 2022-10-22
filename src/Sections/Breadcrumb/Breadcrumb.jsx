import "./Breadcrumb.scss";

import React from "react";
import Outline from "../../Components/Outline/Outline";

const Breadcrumb = ({ img, title, children }) => {
  return (
    <section
      className="breadcrumb-section position-relative py-5"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="container-fluid px-md-4 px-lg-5 py-5">
        <Outline className="py-5">
          <h3 className="display-4 fw-bold text-white text-center mt-5">
            {title}
          </h3>
          {children}
        </Outline>
      </div>
    </section>
  );
};

export default Breadcrumb;
