import "./Portfoilo.scss";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import Outline from "../../Components/Outline/Outline";
import MainHeading from "../../Components/MainHeading/MainHeading";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";

import data from "../../json/data.json";

const Portfoilo = () => {
  const [category, setCategory] = useState("all");
  const [cat_items, setCat_items] = useState(data.portfolio);

  const [categories] = useState([
    "all",
    ...new Set(data.portfolio.map(({ category }) => category)),
  ]);

  function handle_filtering(cat) {
    setCategory(cat);
    if (cat === "all") {
      setCat_items(data.portfolio);
    } else {
      setCat_items(data.portfolio.filter(({ category }) => category === cat));
    }
  }

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
              <li
                key={index}
                onClick={() => handle_filtering(cat)}
                className={`text-uppercase px-3 px-lg-4 fw-semibold ${
                  cat === category ? "active" : ""
                }`}
              >
                {cat}
              </li>
            );
          })}
        </ul>

        <div className="gallery mt-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {cat_items.map(({ id, category, img }) => {
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
