import "./TextList.scss";
import { BsCheckLg } from "react-icons/bs";

const TextList = () => {
  return (
    <ul className="text-list list-unstyled mb-0 p-0 text-muted">
      <li className="my-3">
        <BsCheckLg className="text-white fs-2 rounded p-2" />
        <span>
          Many desktop publishing packages and web page editors now use It is
          the.
        </span>
      </li>
      <li className="my-3">
        <BsCheckLg className="text-white fs-2 rounded p-2" />
        <span>Injected humour, or randomised words slightly believable.</span>
      </li>
      <li className="my-3">
        <BsCheckLg className="text-white fs-2 rounded p-2" />
        <span>
          It is the generators on the Internet tend to repeat predefined chunks.
        </span>
      </li>
      <li className="my-3">
        <BsCheckLg className="text-white fs-2 rounded p-2" />
        <span>
          Contrary to popular belief, That is the not simply random text.
        </span>
      </li>
    </ul>
  );
};

export default TextList;
