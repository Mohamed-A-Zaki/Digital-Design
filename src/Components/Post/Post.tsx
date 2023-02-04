import "./Post.scss";
import { Link } from "react-router-dom";

type Props = {
  img: string;
  title: string;
  date: string;
};

const Post = ({ img, title, date }: Props) => {
  return (
    <div className="post d-flex align-items-center gap-3 my-4">
      <img src={img} className="img-fluid rounded" alt={title} />
      <div className="content">
        <Link
          to="/blog-details"
          className="title h5 d-block mb-2 text-decoration-none link-dark"
        >
          {title}
        </Link>
        <div className="date fw-bold">{date}</div>
      </div>
    </div>
  );
};

export default Post;
