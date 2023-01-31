import "./ContactLinks.scss";
import React from "react";

import Outline from "../../Components/Outline/Outline";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const ContactLinks = () => {
  return (
    <section className="contact-links py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          <div className="col">
            <div className="box bg-white shadow p-3 rounded">
              <Outline className="py-3 px-5 d-flex flex-column align-items-center text-center">
                <FaPhoneAlt className="bg-dark p-2 mb-2 rounded" />
                <a
                  href="tel:1234567890"
                  className="text-decoration-none text-muted lh-lg"
                >
                  +123 4567 890
                </a>
                <a
                  href="tel:0987654321"
                  className="text-decoration-none text-muted lh-lg"
                >
                  +098 7654 321
                </a>
              </Outline>
            </div>
          </div>
          <div className="col">
            <div className="box bg-white shadow p-3 rounded">
              <Outline className="py-3 px-5 d-flex flex-column align-items-center text-center">
                <MdEmail className="bg-dark p-2 mb-2 rounded" />
                <a
                  href="mailto:info@email.com"
                  className="text-decoration-none text-muted lh-lg"
                >
                  info@email.com
                </a>
                <a
                  href="mailto:support@email.com"
                  className="text-decoration-none text-muted lh-lg"
                >
                  support@email.com
                </a>
              </Outline>
            </div>
          </div>
          <div className="col">
            <div className="box bg-white shadow p-3 rounded">
              <Outline className="py-3 px-5 d-flex flex-column align-items-center text-center">
                <IoLocationSharp className="bg-dark p-2 mb-2 rounded" />
                <a
                  href="https://goo.gl/maps/EbSuxNv9HdNieTHX7"
                  className="text-decoration-none text-muted lh-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  2363 Norma Avenue, Dayton, Ohio, 45406
                </a>
              </Outline>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLinks;
