import "./Category.scss";

type Props = {
  name: string;
  count: number;
};

const Category = ({ name, count }: Props) => {
  return (
    <div className="category d-flex align-items-center justify-content-between p-2 my-2 rounded">
      <div className="name">{name}</div>
      <div className="count rounded py-1 px-2">
        {String(count).length === 1 ? `0${count}` : count}
      </div>
    </div>
  );
};

export default Category;
