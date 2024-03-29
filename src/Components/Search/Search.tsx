import "./Search.scss";
import { BiSearch } from "react-icons/bi";
import MainHeading from "../MainHeading/MainHeading";

const Search = () => {
  return (
    <div className="search">
      <MainHeading className="special">Blog Posts</MainHeading>
      <div className="search-input mt-4 position-relative">
        <input
          type="search"
          className="form-control shadow border-0 px-4 py-3"
          placeholder="Search here..."
        />
        <div className="icon position-absolute top-50 translate-middle-y rounded text-white py-2 px-3 mx-2 overflow-hidden">
          <BiSearch className="fs-4"/>
        </div>
      </div>
    </div>
  );
};

export default Search;
