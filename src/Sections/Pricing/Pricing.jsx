import "./Pricing.scss";
import React, { useState } from "react";

import Outline from "../../Components/Outline/Outline";
import ButtonComp from "../../Components/Button/ButtonComp";
import MainHeading from "../../Components/MainHeading/MainHeading";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import HeadingParagraph from "../../Components/HeadingParagraph/HeadingParagraph";
import ShuffleCategories from "../../Components/ShuffleCategories/ShuffleCategories";

import data from "../../json/data.json";

const Pricing = () => {
  const [categories] = useState(Object.keys(data.pricing[0].price));
  const [category, setCategory] = useState(categories[0]);

  function handle_filtering(cat) {
    setCategory(cat);
  }

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="heading text-center">
          <MainHeading>Pricing</MainHeading>
          <SectionHeading>Our Special Plans For Your Business</SectionHeading>
          <HeadingParagraph className="mb-4">
            The generated That is the therefore always free from repetition,
            injected humour, or non-characteristic words etc.
          </HeadingParagraph>
        </div>

        <ShuffleCategories
          category={category}
          categories={categories}
          handle_filtering={handle_filtering}
        ></ShuffleCategories>

        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 text-center g-3 mt-2">
          {data.pricing.map((item) => {
            return (
              <div className="col" key={item.id}>
                <div className="item shadow rounded p-3">
                  <Outline className="p-4">
                    <div className="plane-name h3 fw-bold">{item.plan}</div>
                    <div className="price display-4 fw-bold my-4">
                      ${item.price[category]}
                    </div>

                    <hr className="w-75 m-auto border-top border-2 border-dark" />

                    <ul className="list-unstyled my-4">
                      {item.features["active"].map((item, index) => {
                        return (
                          <li key={index} className="fw-bold py-1">
                            {item}
                          </li>
                        );
                      })}
                      {item.features["not-active"].map((item, index) => {
                        return (
                          <li key={index} className="fw-bold py-1 text-muted">
                            {item}
                          </li>
                        );
                      })}
                    </ul>

                    <ButtonComp className="secondary-btn">Join Now</ButtonComp>
                  </Outline>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
