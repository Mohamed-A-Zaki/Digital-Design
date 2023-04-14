import GalleyItem from "../GalleyItem/GalleyItem";

export type CatItem = {
  id: number;
  category: string;
  img: string;
};

type Props = {
  cat_items: CatItem[];
};

const Gallery = ({ cat_items }: Props) => {
  return (
    <div className="gallery mt-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {cat_items.map((item) => {
          return (
            <div className="col" key={item.id}>
              <GalleyItem {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
