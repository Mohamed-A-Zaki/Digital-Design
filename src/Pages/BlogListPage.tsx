import React, { useEffect } from "react";

import Brands from "../Sections/Brands/Brands";
import Sidebar from "../Sections/Sidebar/Sidebar";
import BlogItem from "../Components/BlogItem/BlogItem";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";
import Pagination from "../Components/Pagination/Pagination";

import img from "../images/blog-bg.jpg";
import data from "../json/data.json";

const BlogListPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <React.Fragment>
      <Breadcrumb img={img} title="Our Blog">
        <li className="breadcrumb-item active text-white" aria-current="page">
          Blog
        </li>
      </Breadcrumb>

      <section className="our-blog py-5">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="row row-cols-1 row-cols-xl-2 g-4">
                {data.blog.map((blog_item) => {
                  return (
                    <div className="col" key={blog_item.id}>
                      <BlogItem {...blog_item}></BlogItem>
                    </div>
                  );
                })}
              </div>

              <Pagination></Pagination>
            </div>

            <div className="col-lg-4">
              <Sidebar></Sidebar>
            </div>
          </div>
        </div>
      </section>

      <Brands />
    </React.Fragment>
  );
};

export default BlogListPage;
