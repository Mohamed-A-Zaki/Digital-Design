import React, { useEffect } from "react";

import Brands from "../Sections/Brands/Brands";
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
      <Brands />
    </React.Fragment>
  );
};

export default BlogListPage;
