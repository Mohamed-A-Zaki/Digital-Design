import "./BlogDetails.scss";
import React from "react";

import TextList from "../../Components/TextList/TextList";
import ModelButton from "../../Components/ModelButton/ModelButton";
import SocialMedia from "../../Components/SocialMedia/SocialMedia";

import { MdOutlineFormatQuote } from "react-icons/md";

const BlogDetails = () => {
  return (
    <section className="blog-details">
      <div className="image position-relative">
        <img
          src="images/blog-img1.jpg"
          className="img-fluid rounded w-100"
          alt="blog-details"
        />
        <ModelButton></ModelButton>
      </div>

      <div className="title h3 my-4 fw-bold">
        It Is A Long Established Fact That A Reader Will Be Distracted Of A Page
        When Looking At Its Layout.
      </div>

      <p className="my-4 text-muted">
        That is the simply dummy text of the printing and typesetting industry.
        It is the has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>

      <p className="my-4 text-muted">
        There are many variations of passages of It is the available, but the
        majority have suffered alteration in some form, by injected humour, All
        the It is the generators on the Internet tend to repeat predefined
        chunks as necessary, making this the first true generator on the
        Internet.
      </p>

      <blockquote className="blockquote fw-bold fst-italic shadow p-4 border-top border-5 rounded d-flex my-4">
        There are many variations of passages of It is the available, but the
        majority have suffered alteration in some form
        <MdOutlineFormatQuote className="display-3 position-relative" />
      </blockquote>

      <TextList></TextList>

      <div className="images my-4">
        <div className="row row-cols-1 row-cols-lg-2 g-4">
          <div className="col">
            <img
              src="images/recent-img1.jpg"
              className="img-fluid w-100 rounded shadow"
              alt="blog-details"
            />
          </div>
          <div className="col">
            <img
              src="images/blog-img3.jpg"
              className="img-fluid w-100 rounded shadow"
              alt="blog-details"
            />
          </div>
        </div>
      </div>

      <p className="my-4 text-muted">
        The point of using That is the that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. It was popularised in the
        1960s with the release of Letraset sheets containing It is the passages
      </p>

      <hr className="my-4 opacity-100" />

      <div className="d-flex justify-content-between">
        <div className="tags">
          <span className="title">Tags : </span>
          <span className="tag d-inline-block py-1 px-2 bg-light rounded my-2">
            web
          </span>
          <span className="tag d-inline-block py-1 px-2 bg-light rounded my-2">
            Graphic
          </span>
          <span className="tag d-inline-block py-1 px-2 bg-light rounded my-2">
            Brand
          </span>
        </div>
        <SocialMedia></SocialMedia>
      </div>
    </section>
  );
};

export default BlogDetails;
