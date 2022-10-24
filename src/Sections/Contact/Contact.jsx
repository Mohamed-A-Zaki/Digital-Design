import "./Contact.scss";

import React from "react";
import ButtonComp from "../../Components/Button/ButtonComp";
import MainHeading from "../../Components/MainHeading/MainHeading";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";

import contact_img from "../../images/contact-img.png";

const Contact = () => {
  return (
    <section className="contact-us pt-5">
      <div className="container">
        <div className="row g-0 align-items-end">
          <div className="d-none d-lg-block col-lg-5">
            <div className="image">
              <img src={contact_img} className="img-fluid" alt="contact_img" />
            </div>
          </div>
          <div className="col-lg-7">
            <form className="p-5 rounded">
              <MainHeading className="special">Contact Us</MainHeading>
              <SectionHeading>Contact Us For Any Information</SectionHeading>

              <div className="d-flex flex-column flex-md-row gap-4 mb-4">
                <input
                  type="text"
                  className="flex-grow-1 bg-light py-2 px-3 border-0 border-secondary border-bottom border-3"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="flex-grow-1 bg-light py-2 px-3 border-0 border-secondary border-bottom border-3"
                  placeholder="Last Name"
                />
              </div>

              <div className="d-flex flex-column flex-md-row gap-4 mb-4">
                <input
                  type="email"
                  className="flex-grow-1 bg-light py-2 px-3 border-0 border-secondary border-bottom border-3"
                  placeholder="Email Address"
                />
                <input
                  type="tel"
                  className="flex-grow-1 bg-light py-2 px-3 border-0 border-secondary border-bottom border-3"
                  placeholder="Phone Number"
                />
              </div>

              <div className="d-flex gap-4 mb-4">
                <textarea
                  className="flex-grow-1 bg-light py-2 px-3 border-0 border-secondary border-bottom border-3"
                  placeholder="Message"
                ></textarea>
              </div>

              <div>
                <ButtonComp className="main-btn px-5">Submit</ButtonComp>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
