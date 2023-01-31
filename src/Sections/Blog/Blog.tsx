import React from "react";
import BlogItem from "../../Components/BlogItem/BlogItem";
import MainHeading from "../../Components/MainHeading/MainHeading";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";

import data from "../../json/data.json";

const Blog = () => {
  const get_sub_list = (start: number, end: number) => {
    return data.blog.slice(start, end).map((item) => {
      let condition = item.id === 3 || item.id === 4;
      return (
        <div className={`${condition ? "col-12" : "col-md-6"}`} key={item.id}>
          <BlogItem
            {...item}
            className={`${condition && "special"}`}
          ></BlogItem>
        </div>
      );
    });
  };

  return (
    <section className="blog py-5">
      <div className="container">
        <div className="heading text-center mb-5">
          <MainHeading>Blog Posts</MainHeading>
          <SectionHeading>Read Our Blog</SectionHeading>
        </div>

        <div className="row row-cols-1 row-cols-xl-2 g-3">
          <div className="col">
            <div className="row g-3">
              {get_sub_list(0, data.blog.length / 2)}
            </div>
          </div>
          <div className="col">
            <div className="row g-3">
              {get_sub_list(data.blog.length / 2, data.blog.length)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
