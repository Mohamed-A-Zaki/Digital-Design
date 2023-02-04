import "./Pagination.scss";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation" className="mt-5">
      <ul className="pagination mb-0 justify-content-center align-items-center">
        <li className="page-item">
          <Link
            className="page-link shadow-none text-black py-2 px-3 mx-2 rounded border-0 bg-white text-dark"
            to="#"
          >
            <AiOutlineArrowLeft className="fs-2" />
          </Link>
        </li>
        <li className="page-item">
          <Link
            className="page-link number shadow-none text-black bg-white py-2 px-3 mx-2 rounded"
            to="#"
          >
            1
          </Link>
        </li>
        <li className="page-item">
          <Link
            className="page-link number shadow-none text-black bg-white py-2 px-3 mx-2 rounded"
            to="#"
          >
            2
          </Link>
        </li>
        <li className="page-item">
          <Link
            className="active page-link number shadow-none text-black bg-white py-2 px-3 mx-2 rounded"
            to="#"
          >
            3
          </Link>
        </li>
        <li className="page-item">
          <Link
            className="page-link number shadow-none text-black bg-white py-2 px-3 mx-2 rounded"
            to="#"
          >
            4
          </Link>
        </li>
        <li className="page-item">
          <Link
            className="page-link number shadow-none text-black bg-white py-2 px-3 mx-2 rounded"
            to="#"
          >
            5
          </Link>
        </li>
        <li className="page-item">
          <Link
            className="page-link shadow-none text-black bg-white py-2 px-3 mx-2 rounded border-0 bg-white text-dark"
            to="#"
          >
            <AiOutlineArrowRight className="fs-2" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
