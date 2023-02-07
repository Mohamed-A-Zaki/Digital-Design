import data from "../../json/data.json";
import Category from "../Category/Category";
import MainHeading from "../MainHeading/MainHeading";

const Categories = () => {
  return (
    <div className="categories my-5 w-100">
      <MainHeading className="special">Category</MainHeading>
      <div className="categories_list">
        {data.categories.map((cat) => {
          return <Category key={cat.id} {...cat} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
