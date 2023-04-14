import "./TextList.scss";
import { BsCheckLg } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

const TextList = () => {
  return (
    <IconContext.Provider
      value={{ size: "28px", className: "text-white rounded p-2" }}
    >
      <ul className="text-list list-unstyled mb-0 p-0 text-muted">
        <li className="my-3">
          <BsCheckLg />
          <span>
            Many desktop publishing packages and web page editors now use It is
            the.
          </span>
        </li>
        <li className="my-3">
          <BsCheckLg />
          <span>Injected humour, or randomised words slightly believable.</span>
        </li>
        <li className="my-3">
          <BsCheckLg />
          <span>
            It is the generators on the Internet tend to repeat predefined
            chunks.
          </span>
        </li>
        <li className="my-3">
          <BsCheckLg />
          <span>
            Contrary to popular belief, That is the not simply random text.
          </span>
        </li>
      </ul>
    </IconContext.Provider>
  );
};

export default TextList;
