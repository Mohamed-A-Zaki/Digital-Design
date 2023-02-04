import "./WhyUs.scss";
import data from "../../json/data.json";

import Statistic from "../../Components/Statistic/Statistic";
import MainHeading from "../../Components/MainHeading/MainHeading";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";

const WhyUs = () => {
  return (
    <section className="why-us py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 g-5 align-items-center">
          <div className="col">
            <div className="box">
              <div className="statistics d-grid gap-5 position-relative">
                {data.statistics.map((stat) => {
                  return <Statistic key={stat.id} {...stat} />;
                })}
              </div>
            </div>
          </div>

          <div className="col">
            <div className="box">
              <MainHeading className="special">Why Choose Us</MainHeading>
              <SectionHeading>Boost Your Website Traffic</SectionHeading>
              <p className="mt-4 mb-0 text-muted">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using That is the that it has a more-or-less normal
                distribution of letters, as making it look like readable
                English.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
