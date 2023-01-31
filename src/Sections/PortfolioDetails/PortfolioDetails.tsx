import React from "react";
import "./PortfolioDetails.scss";

import data from "../../json/data.json";
import img from "../../images/portfolio-detail-img.png";

const PortfolioDetails = () => {
  return (
    <section className="portfolio-details pt-5">
      <div className="container">
        <div className="image">
          <img
            src={img}
            className="w-100 border border-3 rounded"
            alt="portfolio-details"
          />
        </div>

        <div className="row g-4 mt-3">
          <div className="col-xl-8">
            <div className="box">
              <h4 className="fw-bold mb-4">
                It Is A Long Established Fact That A Reader Will Be Distracted
              </h4>
              <div className="text text-muted">
                <p>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam voluptatem.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="box shadow px-4 py-2 rounded">
              {data["company-details"].map(({ id, title, value }) => {
                return (
                  <div className="item my-3" key={id}>
                    <div className="title text-muted">{title}</div>
                    <div className="value fw-bold fs-5">{value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetails;
