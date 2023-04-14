import "./ScrollToTop.scss";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const Listener = () => setShow(window.scrollY >= 1000);
    window.addEventListener("scroll", Listener);
    return () => window.removeEventListener("scroll", Listener);
  }, []);

  return (
    <AiOutlineArrowUp
      size={40}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`scroll-to-top p-2 position-fixed bottom-0 rounded text-white m-4 ${
        show ? "active" : ""
      }`}
    />
  );
};

export default ScrollToTop;
