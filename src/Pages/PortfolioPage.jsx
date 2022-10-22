import React from "react";
import Brands from "../Sections/Brands/Brands";
import Contact from "../Sections/Contact/Contact";
import Portfoilo from "../Sections/Portfoilo/Portfoilo";

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <Portfoilo />
      <Contact />
      <Brands />
    </div>
  );
};

export default PortfolioPage;
