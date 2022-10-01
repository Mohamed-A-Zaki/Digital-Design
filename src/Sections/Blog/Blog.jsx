import "./Blog.scss";

import React from "react";
import MainHeading from "../../Components/MainHeading/MainHeading";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";

import blog_1 from "../../images/blog-img1.jpg";
import blog_2 from "../../images/blog-img2.jpg";
import blog_3 from "../../images/blog-img3.jpg";
import blog_4 from "../../images/blog-img4.jpg";
import blog_5 from "../../images/blog-img5.jpg";
import blog_6 from "../../images/blog-img6.jpg";

const Blog = () => {
  return (
    <div className="blog py-5">
      <div className="container">
        <div className="heading text-center mb-5">
          <MainHeading>Blog Posts</MainHeading>
          <SectionHeading>Read Our Blog</SectionHeading>
        </div>

        <div className="row row-cols-1 row-cols-xl-2 text-white g-3">
          <div className="col">
            <div className="row g-3">
              <div className="col-md-6">
                <div
                  className="box p-2 rounded overflow-hidden position-relative"
                  style={{ backgroundImage: `url(${blog_1})` }}
                >
                  <div className="outline rounded p-2 h-100 d-flex flex-column justify-content-between overflow-hidden">
                    <div className="day py-1 px-3 ms-auto rounded">
                      May 1, 2021
                    </div>
                    <div className="desc">
                      <p className="h5 fw-bold m-0">
                        It is a long established fact that a reader will be
                        distracted
                      </p>
                      <div className="read-more py-1 px-3 rounded mt-3">
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="box p-2 rounded overflow-hidden position-relative"
                  style={{ backgroundImage: `url(${blog_2})` }}
                >
                  <div className="outline rounded p-2 h-100 d-flex flex-column justify-content-between overflow-hidden">
                    <div className="day py-1 px-3 ms-auto rounded">
                      May 1, 2021
                    </div>
                    <div className="desc">
                      <p className="h5 fw-bold m-0">
                        It is a long established fact that a reader will be
                        distracted
                      </p>
                      <div className="read-more py-1 px-3 rounded mt-3">
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div
                  className="box special p-2 rounded overflow-hidden position-relative"
                  style={{ backgroundImage: `url(${blog_3})` }}
                >
                  <div className="outline rounded p-2 h-100 d-flex flex-column justify-content-between overflow-hidden">
                    <div className="day py-1 px-3 ms-auto rounded">
                      May 1, 2021
                    </div>
                    <div className="desc">
                      <p className="h5 fw-bold m-0">
                        It is a long established fact that a reader will be
                        distracted
                      </p>
                      <div className="read-more py-1 px-3 rounded mt-3">
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="row g-3">
              <div className="col-12">
                <div
                  className="box special p-2 rounded overflow-hidden position-relative"
                  style={{ backgroundImage: `url(${blog_4})` }}
                >
                  <div className="outline rounded p-2 h-100 d-flex flex-column justify-content-between overflow-hidden">
                    <div className="day py-1 px-3 ms-auto rounded">
                      May 1, 2021
                    </div>
                    <div className="desc">
                      <p className="h5 fw-bold m-0">
                        It is a long established fact that a reader will be
                        distracted
                      </p>
                      <div className="read-more py-1 px-3 rounded mt-3">
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="box p-2 rounded overflow-hidden position-relative"
                  style={{ backgroundImage: `url(${blog_5})` }}
                >
                  <div className="outline rounded p-2 h-100 d-flex flex-column justify-content-between overflow-hidden">
                    <div className="day py-1 px-3 ms-auto rounded">
                      May 1, 2021
                    </div>
                    <div className="desc">
                      <p className="h5 fw-bold m-0">
                        It is a long established fact that a reader will be
                        distracted
                      </p>
                      <div className="read-more py-1 px-3 rounded mt-3">
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="box p-2 rounded overflow-hidden position-relative"
                  style={{ backgroundImage: `url(${blog_6})` }}
                >
                  <div className="outline rounded p-2 h-100 d-flex flex-column justify-content-between overflow-hidden">
                    <div className="day py-1 px-3 ms-auto rounded">
                      May 1, 2021
                    </div>
                    <div className="desc">
                      <p className="h5 fw-bold m-0">
                        It is a long established fact that a reader will be
                        distracted
                      </p>
                      <div className="read-more py-1 px-3 rounded mt-3">
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
