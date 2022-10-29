import React, { useEffect } from "react";
import Brands from "../Sections/Brands/Brands";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";


import img from "../images/contact-banner.jpg";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <React.Fragment>
      <Breadcrumb img={img} title="Contact Us">
        <li className="breadcrumb-item active text-white" aria-current="page">
          Contact Us
        </li>
      </Breadcrumb>
      <Brands />
    </React.Fragment>
  );
};

export default ContactPage;
