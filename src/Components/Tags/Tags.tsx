import "./Tags.scss";
import data from "../../json/data.json";
import MainHeading from "../MainHeading/MainHeading";

const Tags = () => {
  return (
    <div className="tags my-5">
      <MainHeading className="special">Tags</MainHeading>

      <div className="tags_list mt-4">
        {data.tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="tag d-inline-block py-1 px-2 bg-light rounded my-2"
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
