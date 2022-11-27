import "./ShuffleCategories.scss";
import React from "react";

const ShuffleCategories = ({ categories, category, handle_filtering }) => {
  return (
    <ul className="categories list-unstyled mb-0 d-flex justify-content-center flex-wrap m-auto border border-2 rounded">
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
  );
};

export default ShuffleCategories;
