import React from "react";
import BlogItem from "../../Components/BlogItem/BlogItem";

import data from "../../json/data.json";

const RelatedBlogs = () => {
  let random: number = Math.floor(Math.random() * (data.blog.length - 1));

  return (
    <section className="related_blogs my-5">
      <h2 className="h1 mb-4">Related Blogs</h2>
      <div className="row row-cols-1 row-cols-xl-2 g-4">
        {data.blog.slice(random, random + 2).map((blog) => {
          return (
            <div className="col" key={blog.id}>
              <BlogItem {...blog}></BlogItem>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedBlogs;
