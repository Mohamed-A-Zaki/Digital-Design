import React from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";

import contact_img from "../../images/contact-img.png";

const Contact = () => {
  return (
    <section className="contact-us pt-5">
      <div className="container">
        <div className="row g-0 align-items-end">
          <div className="col-lg-5 d-none d-lg-block">
            <div className="image">
              <img src={contact_img} className="img-fluid" alt="contact_img" />
            </div>
          </div>
          <div className="col-lg-7">
            <ContactForm></ContactForm>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
