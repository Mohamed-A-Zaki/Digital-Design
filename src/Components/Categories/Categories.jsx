import "./Categories.scss";
import React from "react";
import MainHeading from "../MainHeading/MainHeading";

import data from "../../json/data.json";

const Categories = () => {
  return (
    <div className="categoties my-4">
      <MainHeading className="special">Category</MainHeading>
      <div className="categories_list">
        {data.categories.map(({ id, name, count }) => {
          return (
            <div
              className="category d-flex align-items-center justify-content-between p-2 my-2 rounded"
              key={id}
            >
              <div className="name">{name}</div>
              <div className="count rounded py-1 px-2">
                {String(count).length === 1 ? `0${count}` : count}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
