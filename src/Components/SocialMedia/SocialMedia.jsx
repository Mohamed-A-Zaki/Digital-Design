import "./SocialMedia.scss";

import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <ul className="social list-unstyled d-flex gap-2 mb-0 p-0">
      <li>
        <Link to="/" aria-label="facebook-link">
          <FaFacebookF className="rounded-circle p-2 text-white" />
        </Link>
      </li>
      <li>
        <Link to="/" aria-label="instagram-link">
          <FaInstagram className="rounded-circle p-2 text-white" />
        </Link>
      </li>
      <li>
        <Link to="/" aria-label="twitter-link">
          <FaTwitter className="rounded-circle p-2 text-white" />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;
