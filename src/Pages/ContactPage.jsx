import React, { useEffect } from "react";
import Brands from "../Sections/Brands/Brands";
import Breadcrumb from "../Sections/Breadcrumb/Breadcrumb";
import ContactForm from "../Components/ContactForm/ContactForm";

import img from "../images/contact-banner.jpg";
import ContactLinks from "../Sections/ContactLinks/ContactLinks";

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

      <ContactLinks></ContactLinks>

      <section className="contact-us pb-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <ContactForm></ContactForm>
            </div>
            <div className="col-lg-5">
              <iframe
                className="w-100 h-100 rounded border"
                style={{ minHeight: "400px" }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1386.304378061145!2d31.357786076741036!3d31.042558918472533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1667060367002!5m2!1sen!2seg"
                loading="lazy"
                allowFullScreen=""
                referreroplicy="no-referrer-when-downgrade"
                title="our-location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Brands />
    </React.Fragment>
  );
};

export default ContactPage;
