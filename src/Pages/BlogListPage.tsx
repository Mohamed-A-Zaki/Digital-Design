import React from "react";
import useScrollToTop from "../Hooks/useScrollToTop";

import Brands from "../Sections/Brands/Brands";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";
import BlogLayout from "../Sections/BlogLayout/BlogLayout";

import img from "../images/blog-bg.jpg";

const BlogListPage = () => {
  useScrollToTop();

  return (
    <React.Fragment>
      <Breadcrumb img={img} title="Our Blog">
        <li className="breadcrumb-item active text-white" aria-current="page">
          Blog
        </li>
      </Breadcrumb>
      <BlogLayout />
      <Brands />
    </React.Fragment>
  );
};

export default BlogListPage;
