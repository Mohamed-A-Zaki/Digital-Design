import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";
import Contact from "../Sections/Contact/Contact";
import Brands from "../Sections/Brands/Brands";

import img from "../images/portfolio-banner.jpg";

const PortfolioDetailsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <React.Fragment>
      <Breadcrumb img={img} title="Portfolio Detail">
        <li className="breadcrumb-item">
          <Link to="/portfolio" className="text-decoration-none text-white">
            Portfolio
          </Link>
        </li>
        <li className="breadcrumb-item active text-white" aria-current="page">
          Portfolio Detail
        </li>
      </Breadcrumb>
      <Contact />
      <Brands />
    </React.Fragment>
  );
};

export default PortfolioDetailsPage;
