import "./ScrollToTop.scss";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [show, setShow] = useState<boolean>(false);

  const Listener = () => {
    setShow(window.scrollY >= 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", Listener);
    return () => window.removeEventListener("scroll", Listener);
  }, []);

  return (
    <div
      className={`scroll-to-top position-fixed bottom-0 rounded text-white m-4 ${
        show ? "active" : ""
      }`}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <AiOutlineArrowUp />
    </div>
  );
};

export default ScrollToTop;
