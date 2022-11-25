import "./Posts.scss";
import React from "react";
import MainHeading from "../MainHeading/MainHeading";

import data from "../../json/data.json";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div className="posts my-4">
      <MainHeading className="special">Recent Post</MainHeading>
      <div className="posts_list">
        {data.posts.map(({ id, img, title, date }) => {
          return (
            <div className="post d-flex align-items-center gap-3 my-4" key={id}>
              <img src={img} className="img-fluid rounded" alt={title} />
              <div className="content">
                <Link to="/blog-details" className="title h5 d-block mb-2 text-decoration-none link-dark">
                  {title}
                </Link>
                <div className="date fw-bold">{date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
