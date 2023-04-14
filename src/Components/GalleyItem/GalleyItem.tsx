import "./GalleyItem.scss";
import Outline from "../Outline/Outline";
import { FaSearch } from "react-icons/fa";

type Props = {
  category: string;
  img: string;
};

const GalleyItem = ({ img, category }: Props) => {
  return (
    <div className="gallery-item position-relative rounded shadow overflow-hidden">
      <div className="image">
        <img src={img} className="img-fluid" alt={category} />
      </div>
      <div className="overlay position-absolute top-0 start-0 w-100 h-100 p-4 opacity-0">
        <Outline className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
          <div className="title h3">{category}</div>
          <div className="sub-title text-white">Web, Graphic</div>
          <FaSearch size={40} className="border rounded mt-3" />
        </Outline>
      </div>
    </div>
  );
};

export default GalleyItem;
