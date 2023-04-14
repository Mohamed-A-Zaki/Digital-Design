import { useState } from "react";
import data from "../../json/data.json";

import MainHeading from "../../Components/MainHeading/MainHeading";
import Gallery, { CatItem } from "../../Components/Gallery/Gallery";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import ShuffleCategories from "../../Components/ShuffleCategories/ShuffleCategories";

const Portfoilo = () => {
  const [categories] = useState<string[]>([
    "all",
    ...new Set(data.portfolio.map(({ category }) => category)),
  ]);

  const [category, setCategory] = useState<string>(categories[0]);
  const [cat_items, setCat_items] = useState<CatItem[]>(data.portfolio);

  function handle_filtering(cat: string) {
    setCategory(cat);
    if (cat === "all") {
      setCat_items(data.portfolio);
    } else {
      setCat_items(data.portfolio.filter(({ category }) => category === cat));
    }
  }

  return (
    <section className="portfoilo py-5">
      <div className="container">
        <div className="heading text-center">
          <MainHeading>Portfoilo</MainHeading>
          <SectionHeading>See Our Recent Works</SectionHeading>
        </div>

        <ShuffleCategories
          category={category}
          categories={categories}
          handle_filtering={handle_filtering}
        ></ShuffleCategories>

        <Gallery cat_items={cat_items} />
      </div>
    </section>
  );
};

export default Portfoilo;
