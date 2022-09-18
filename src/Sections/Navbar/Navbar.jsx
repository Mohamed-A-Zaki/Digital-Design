import "./Navbar.scss";

import React from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg py-3 sticky-top">
      <div className="container">
        {/* navbar-brand */}
        <Link
          className="navbar-brand fw-bold fs-2 p-0 position-relative"
          to="/"
          custom-data="Digital Design"
        >
          Digital Design
        </Link>

        {/* navbar-toggler button */}
        <button
          className="navbar-toggler shadow-none border-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <FaBars className="fs-3 text-light" />
        </button>

        {/* start offcanvas */}
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          {/* offcanvas-header */}
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Digital Design
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          {/* offcanvas-body */}
          <div className="offcanvas-body align-items-center gap-2 gap-lg-3 gap-xl-4">
            {/* navbar-nav */}
            <ul className="navbar-nav gap-2 gap-lg-3 gap-xl-4 justify-content-end flex-grow-1">
              {/* nav-item */}
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-semibold px-0 text-white "
                  aria-current="page"
                  to="home"
                >
                  Home
                </NavLink>
              </li>
              {/* nav-item */}
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-semibold px-0 text-white "
                  aria-current="page"
                  to="about"
                >
                  About Us
                </NavLink>
              </li>
              {/* nav-item */}
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-semibold px-0 text-white "
                  aria-current="page"
                  to="services"
                >
                  Services
                </NavLink>
              </li>
              {/* nav-item */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link fw-semibold px-0 text-white  dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                {/* dropdown-menu */}
                <ul className="dropdown-menu p-0">
                  {/* dropdown-item */}
                  <li>
                    <NavLink className="dropdown-item py-2" to="portfolio">
                      Portfolio
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider m-0" />
                  </li>
                  {/* dropdown-item */}
                  <li>
                    <NavLink className="dropdown-item py-2" to="details">
                      Portfolio Detail
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider m-0" />
                  </li>
                  {/* dropdown-item */}
                  <li>
                    <NavLink className="dropdown-item py-2" to="pricing">
                      Pricing
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider m-0" />
                  </li>
                  {/* dropdown-item */}
                  <li>
                    <NavLink className="dropdown-item py-2" to="team">
                      Team
                    </NavLink>
                  </li>
                </ul>
              </li>
              {/* nav-item */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link fw-semibold px-0 text-white  dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </Link>
                {/* dropdown-menu */}
                <ul className="dropdown-menu p-0">
                  {/* dropdown-item */}
                  <li>
                    <NavLink className="dropdown-item py-2" to="blog-list">
                      Blog List
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider m-0" />
                  </li>
                  {/* dropdown-item */}
                  <li>
                    <NavLink className="dropdown-item py-2" to="blog-details">
                      Blog Details
                    </NavLink>
                  </li>
                </ul>
              </li>
              {/* nav-item */}
              <li className="nav-item ">
                <NavLink
                  className="nav-link fw-semibold px-0 text-white "
                  aria-current="page"
                  to="contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {/* button */}
            <Link className="btn px-4 d-none d-lg-block text-white fw-bold position-relative overflow-hidden">
              Get Started
            </Link>
          </div>
        </div>
        {/* end offcanvas */}
      </div>
    </nav>
  );
};

export default Navbar;
