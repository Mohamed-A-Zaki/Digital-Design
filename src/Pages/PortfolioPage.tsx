import React, { useEffect } from "react";

import Brands from "../Sections/Brands/Brands";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";
import Contact from "../Sections/Contact/Contact";
import Portfoilo from "../Sections/Portfoilo/Portfoilo";

import img from "../images/portfolio-banner.jpg";

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  
  return (
    <React.Fragment>
      <Breadcrumb img={img} title="Our Portfolio">
        <li className="breadcrumb-item active text-white" aria-current="page">
          Portfolio
        </li>
      </Breadcrumb>
      <Portfoilo />
      <Contact />
      <Brands />
    </React.Fragment>
  );
};

export default PortfolioPage;
