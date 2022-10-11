import "./Portfoilo.scss";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import Outline from "../../Components/Outline/Outline";
import MainHeading from "../../Components/MainHeading/MainHeading";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";

import data from "../../json/data.json";

const Portfoilo = () => {
  const [categories] = useState([
    "all",
    ...new Set(data.portfolio.map((item) => item.category)),
  ]);

  return (
    <section className="portfoilo py-5">
      <div className="container">
        <div className="heading text-center ">
          <MainHeading>Portfoilo</MainHeading>
          <SectionHeading>See Our Recent Works</SectionHeading>
        </div>

        <ul className="categories list-unstyled mb-0 d-flex m-auto border border-2 rounded">
          {categories.map((cat, index) => {
            return (
              <li key={index} className="text-uppercase py-3 px-4 fw-semibold">
                {cat}
              </li>
            );
          })}
        </ul>

        <div className="gallery mt-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {data.portfolio.map(({ id, category, img }) => {
              return (
                <div className="col" key={id}>
                  <div className="item position-relative rounded shadow overflow-hidden">
                    <div className="image">
                      <img src={img} className="img-fluid" alt={category} />
                    </div>
                    <div className="overlay position-absolute top-0 start-0 w-100 h-100 p-4 opacity-0">
                      <Outline className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                        <div className="title h3">{category}</div>
                        <div className="sub-title text-white">Web, Graphic</div>
                        <FaSearch className="border rounded mt-3" />
                      </Outline>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfoilo;
