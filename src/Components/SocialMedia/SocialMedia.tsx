import "./SocialMedia.scss";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <IconContext.Provider
      value={{ size: "40px", className: "rounded-circle p-2 text-white" }}
    >
      <ul className="social list-unstyled d-flex gap-2 mb-0 p-0">
        <li>
          <Link to="/" aria-label="facebook-link">
            <FaFacebookF />
          </Link>
        </li>
        <li>
          <Link to="/" aria-label="instagram-link">
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link to="/" aria-label="twitter-link">
            <FaTwitter />
          </Link>
        </li>
      </ul>
    </IconContext.Provider>
  );
};

export default SocialMedia;
