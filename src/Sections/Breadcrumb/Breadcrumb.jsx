import "./Breadcrumb.scss";

import React from "react";
import Outline from "../../Components/Outline/Outline";
import ContainerFluid from "../../Components/ContainerFluid/ContainerFluid";
import { Link } from "react-router-dom";

const Breadcrumb = ({ img, title, children }) => {
  return (
    <section
      className="breadcrumb-section position-relative py-5"
      style={{ backgroundImage: `url(${img})` }}
    >
      <ContainerFluid className="py-5">
        <Outline className="py-5">
          <h3 className="display-4 fw-bold text-white text-center mt-5">
            {title}
          </h3>
          <nav aria-label="breadcrumb" className="my-5">
            <ol className="breadcrumb text-uppercase m-auto py-2 px-4 fw-bold rounded">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none text-white">
                  Home
                </Link>
              </li>
              {children}
            </ol>
          </nav>
        </Outline>
      </ContainerFluid>
    </section>
  );
};

export default Breadcrumb;
