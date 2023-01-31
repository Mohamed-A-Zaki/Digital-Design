import "./Tags.scss";
import React from "react";
import MainHeading from "../MainHeading/MainHeading";

const Tags = () => {
  let tags_list = [
    "Business",
    "Web",
    "Graphics",
    "Brand",
    "Development",
    "Website",
    "Strategy",
    "Mission",
  ];

  return (
    <div className="tags">
      <MainHeading className="special">Tags</MainHeading>

      <div className="tags_list mt-4">
        {tags_list.map((tag, index) => {
          return <span key={index} className="tag d-inline-block py-1 px-2 bg-light rounded my-2">{tag}</span>;
        })}
      </div>
    </div>
  );
};

export default Tags;
