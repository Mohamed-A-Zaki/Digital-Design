import React from "react";
import Brands from "../Sections/Brands/Brands";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";
import Contact from "../Sections/Contact/Contact";
import Portfoilo from "../Sections/Portfoilo/Portfoilo";

import img from "../images/portfolio-banner.jpg";
import { Link } from "react-router-dom";

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <Breadcrumb img={img} title="Our Portfolio">
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
              Portfolio
            </li>
          </ol>
        </nav>
      </Breadcrumb>
      
      <Portfoilo />
      <Contact />
      <Brands />
    </div>
  );
};

export default PortfolioPage;
