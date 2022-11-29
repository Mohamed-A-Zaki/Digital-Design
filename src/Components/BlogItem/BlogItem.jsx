import React from "react";
import "./BlogItem.scss";
import Outline from "../Outline/Outline";

const BlogItem = ({ img, day, desc, className }) => {
  return (
    <div
      className={`blog_item p-2 rounded overflow-hidden position-relative text-white ${
        className || ""
      }`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <Outline className="p-2 h-100 d-flex flex-column justify-content-between overflow-hidden">
        <div className="day py-1 px-3 rounded">{day}</div>
        <div className="desc">
          <p className="h5 fw-bold m-0">{desc}</p>
          <div className="read-more py-1 px-3 rounded mt-3">Read More</div>
        </div>
      </Outline>
    </div>
  );
};

export default BlogItem;
