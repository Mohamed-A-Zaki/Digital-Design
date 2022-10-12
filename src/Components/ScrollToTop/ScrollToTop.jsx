import React, { useState } from "react";
import "./ScrollToTop.scss";

import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  window.addEventListener("scroll", () => {
    setShow(window.scrollY >= 1000);
  });

  return (
    <div
      className={`scroll-to-top position-fixed fs-3 bottom-0 rounded text-white m-4 ${
        show ? "active" : ""
      }`}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <AiOutlineArrowUp />
    </div>
  );
};

export default ScrollToTop;
