import "./Footer.scss";

import React from "react";
import ButtonComp from "../../Components/Button/ButtonComp";
import MainHeading from "../../Components/MainHeading/MainHeading";
import SocialMedia from "../../Components/SocialMedia/SocialMedia";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";

import { Link } from "react-router-dom";
import { MdPhone, MdEmail, MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-dark pt-5 text-white">
      <div className="container-fluid px-md-4 px-lg-5">
        <div className="outline rounded">
          <div className="container py-5">
            {/* start form */}
            <form className="text-center">
              <MainHeading className="dark-border">Newsletter</MainHeading>
              <SectionHeading>Let's Stay In Touch</SectionHeading>
              <div className="input-div position-relative w-50 m-auto">
                <input
                  type="email"
                  name="email"
                  aria-label="form-email"
                  placeholder="Enter Email Address..."
                  className="form-control p-3 border-0 shadow-none"
                />
                <ButtonComp
                  type="submit"
                  className="main-btn position-absolute end-0 top-50 translate-middle-y me-3 mt-3 mt-xl-0"
                >
                  Subscribe Now
                </ButtonComp>
              </div>
            </form>
            {/* end form */}

            {/* start row */}
            <div className="row g-4 mt-5">
              {/* row-cols-1 row-cols-md-2 row-cols-lg-4 */}
              <div className="col-md-6 col-xl-3">
                <div className="box">
                  <h3 className="h1 mb-4">Digital Design</h3>
                  <div className="item my-3 d-flex gap-2">
                    <MdPhone className="fs-3 d-block" />
                    <span>+123 4567 890</span>
                  </div>
                  <div className="item my-3 d-flex gap-2">
                    <MdEmail className="fs-3 d-block" />
                    <span>info@email.com</span>
                  </div>
                  <div className="item my-3 d-flex gap-2">
                    <MdLocationPin className="fs-3 d-block" />
                    <span>2363 Norma Avenue, Dayton, Ohio, 45406</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-3">
                <div className="box">
                  <MainHeading className="special dark-border">Our Links</MainHeading>
                  <div className="d-flex gap-5 my-3">
                    <ul className="list-unstyled mb-0">
                      <li className="my-3">
                        <Link
                          to="/"
                          className="text-decoration-none link-light"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          to="/"
                          className="text-decoration-none link-light"
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          to="/"
                          className="text-decoration-none link-light"
                        >
                          Services
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          to="/"
                          className="text-decoration-none link-light"
                        >
                          Portfolio
                        </Link>
                      </li>
                    </ul>

                    <ul className="list-unstyled mb-0">
                      <li className="my-3">
                        <Link
                          to="/"
                          className="text-decoration-none link-light"
                        >
                          Team
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          to="/"
                          className="text-decoration-none link-light"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          to="/"
                          className="text-decoration-none link-light"
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="my-3">
                        <Link
                          to="/"
                          className="text-decoration-none link-light"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-2">
                <div className="box">
                  <MainHeading className="special dark-border">Our Services</MainHeading>
                  <ul className="list-unstyled mb-0 my-3">
                    <li className="my-3">
                      <Link to="/" className="text-decoration-none link-light">
                        Graphic Design
                      </Link>
                    </li>
                    <li className="my-3">
                      <Link to="/" className="text-decoration-none link-light">
                        Web Design
                      </Link>
                    </li>
                    <li className="my-3">
                      <Link to="/" className="text-decoration-none link-light">
                        Web Development
                      </Link>
                    </li>
                    <li className="my-3">
                      <Link to="/" className="text-decoration-none link-light">
                        UI / UX
                      </Link>
                    </li>
                    <li className="my-3">
                      <Link to="/" className="text-decoration-none link-light">
                        SEO Marketing
                      </Link>
                    </li>
                    <li className="my-3">
                      <Link to="/" className="text-decoration-none link-light">
                        Mobile App
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-xl-4">
                <div className="box">
                  <MainHeading className="special dark-border">About Us</MainHeading>
                  <p className="my-4">
                    That is the simply dummy text of the printing and
                    typesetting industry. It is a long established fact that a
                    reader will be distracted by the readable content of a page
                    when looking at its layout.
                  </p>
                  <SocialMedia></SocialMedia>
                </div>
              </div>
            </div>
            {/* end row */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copy-right d-flex justify-content-between flex-column flex-lg-row gap-3 py-4">
          <div className="text-center">
            Copyright © 2021 <span>Geek Code Lab</span>. All Rights Reserved.
          </div>
          <div className="links d-flex gap-4 justify-content-center">
            <div className="position-relative">Privacy Policy</div>
            <div className="position-relative">Privacy Policy</div>
            <div className="position-relative">Privacy Policy</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
