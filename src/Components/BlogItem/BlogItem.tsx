import "./BlogItem.scss";
import Outline from "../Outline/Outline";

type Props = {
  id: number;
  img: string;
  day: string;
  desc: string;
  className?: string;
};

const BlogItem = ({ img, day, desc, className = "" }: Props) => {
  return (
    <div
      className={`blog_item p-2 rounded overflow-hidden position-relative text-white ${className}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <Outline className="p-2 h-100 d-flex flex-column justify-content-between overflow-hidden">
        <div className="day py-1 px-3 rounded">{day}</div>
        <div className="desc">
          <p className="h5 fw-bold m-0">{desc}</p>
          <div className="read-more py-1 px-3 rounded mt-3">Read More</div>
        </div>
      </Outline>
    </div>
  );
};

export default BlogItem;
