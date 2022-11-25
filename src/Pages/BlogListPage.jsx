import React, { useEffect } from "react";

import Brands from "../Sections/Brands/Brands";
import Sidebar from "../Sections/Sidebar/Sidebar";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";

import img from "../images/blog-bg.jpg";

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
          <div className="row">
            <div className="col-lg-8"></div>
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
