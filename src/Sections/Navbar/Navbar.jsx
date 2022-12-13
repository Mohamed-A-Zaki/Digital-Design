import "./Navbar.scss";

import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import ButtonComp from "../../Components/Button/ButtonComp";

const Navbar = () => {
  const [navbar_theme, setNavbar_theme] = useState("dark");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setNavbar_theme("light");
      } else {
        setNavbar_theme("dark");
      }
    });
  }, []);

  return (
    <nav
      className={`navbar ${
        navbar_theme === "dark" ? "navbar-dark bg-dark" : "bg-white"
      } navbar-expand-lg py-3 sticky-top shadow`}
    >
      <div className="container-fluid px-md-4 px-lg-5">
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
          className={`navbar-toggler shadow-none ${
            navbar_theme === "dark" ? "border-light" : "border-dark"
          }`}
          type="button"
          aria-label="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <FaBars
            className={`fs-3 ${
              navbar_theme === "dark" ? "text-light" : "text-dark"
            } `}
          />
        </button>

        {/* start offcanvas */}
        <div
          className={`offcanvas offcanvas-end ${
            navbar_theme === "dark" ? "text-bg-dark" : ""
          }`}
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
              className={`btn-close shadow-none ${
                navbar_theme === "dark" && "btn-close-white"
              }`}
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
                  className={`nav-link fw-semibold px-0 ${
                    navbar_theme === "dark" ? "text-white" : "text-dark"
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              {/* nav-item */}
              <li className="nav-item">
                <NavLink
                  className={`nav-link fw-semibold px-0 ${
                    navbar_theme === "dark" ? "text-white" : "text-dark"
                  }`}
                  aria-current="page"
                  to="about"
                >
                  About Us
                </NavLink>
              </li>
              {/* nav-item */}
              <li className="nav-item">
                <NavLink
                  className={`nav-link fw-semibold px-0 ${
                    navbar_theme === "dark" ? "text-white" : "text-dark"
                  }`}
                  aria-current="page"
                  to="services"
                >
                  Services
                </NavLink>
              </li>
              {/* nav-item */}
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link fw-semibold px-0 dropdown-toggle ${
                    navbar_theme === "dark" ? "text-white" : "text-dark"
                  } ${
                    location.pathname === "/portfolio" ||
                    location.pathname === "/details" ||
                    location.pathname === "/pricing" ||
                    location.pathname === "/team"
                      ? "active"
                      : ""
                  }`}
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
                  className={`nav-link fw-semibold px-0 dropdown-toggle ${
                    navbar_theme === "dark" ? "text-white" : "text-dark"
                  } 
                  ${
                    location.pathname === "/blog-list" ||
                    location.pathname === "/blog-details"
                      ? "active"
                      : ""
                  }`}
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
                  className={`nav-link fw-semibold px-0 ${
                    navbar_theme === "dark" ? "text-white" : "text-dark"
                  }`}
                  aria-current="page"
                  to="contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {/* button */}
            <ButtonComp
              className={`${
                navbar_theme === "dark" ? "nav-btn" : "main-btn"
              } d-none d-lg-block`}
              onClick={() => navigate("/contact")}
            >
              Get Started
            </ButtonComp>
          </div>
        </div>
        {/* end offcanvas */}
      </div>
    </nav>
  );
};

export default Navbar;
