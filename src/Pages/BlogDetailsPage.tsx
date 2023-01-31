import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Brands from "../Sections/Brands/Brands";
import Sidebar from "../Sections/Sidebar/Sidebar";
import Comments from "../Sections/Comments/Comments";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";
import LeaveReply from "../Sections/LeaveReply/LeaveReply";
import BlogDetails from "../Sections/BlogDetails/BlogDetails";
import RelatedBlogs from "../Sections/RelatedBlogs/RelatedBlogs";

import img from "../images/blog-bg.jpg";

const BlogDetailsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <React.Fragment>
      <Breadcrumb img={img} title="Blog Detail">
        <li className="breadcrumb-item">
          <Link to="/blog-list" className="text-decoration-none text-white">
            Blog
          </Link>
        </li>
        <li className="breadcrumb-item active text-white" aria-current="page">
          Blog Detail
        </li>
      </Breadcrumb>

      <section className="our-blog py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <BlogDetails></BlogDetails>
              <RelatedBlogs></RelatedBlogs>
              <Comments></Comments>
              <LeaveReply></LeaveReply>
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

export default BlogDetailsPage;
