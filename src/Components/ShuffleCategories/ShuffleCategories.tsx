import "./ShuffleCategories.scss";

type Props = {
  categories: string[];
  category: string;
  handle_filtering: (cat: string) => void;
};

const ShuffleCategories = (props: Props) => {
  const { categories, category, handle_filtering } = props;

  return (
    <ul className="categories list-unstyled mb-0 p-0 d-flex justify-content-center flex-wrap m-auto border border-2 rounded">
      {categories.map((cat, index) => {
        return (
          <li
            key={index}
            onClick={() => handle_filtering(cat)}
            className={`text-uppercase px-3 px-lg-4 fw-semibold ${
              cat === category ? "active" : ""
            }`}
          >
            {cat}
          </li>
        );
      })}
    </ul>
  );
};

export default ShuffleCategories;
