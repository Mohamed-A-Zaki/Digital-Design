import React from "react";
import useScrollToTop from "../Hooks/useScrollToTop";

import Brands from "../Sections/Brands/Brands";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";
import ContactLinks from "../Sections/ContactLinks/ContactLinks";
import ContactWithMap from "../Sections/ContactWithMap/ContactWithMap";

import img from "../images/contact-banner.jpg";

const ContactPage = () => {
  useScrollToTop();

  return (
    <React.Fragment>
      <Breadcrumb img={img} title="Contact Us">
        <li className="breadcrumb-item active text-white" aria-current="page">
          Contact Us
        </li>
      </Breadcrumb>
      <ContactLinks />
      <ContactWithMap />
      <Brands />
    </React.Fragment>
  );
};

export default ContactPage;
