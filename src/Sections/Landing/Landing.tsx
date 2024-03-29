import "./Landing.scss";
import { useNavigate } from "react-router-dom";

import Outline from "../../Components/Outline/Outline";
import ButtonComp from "../../Components/Button/ButtonComp";
import ContainerFluid from "../../Components/ContainerFluid/ContainerFluid";

import banner from "../../images/banner-man.png";
import chart from "../../images/chart.svg";
import client from "../../images/client-satisfaction.svg";
import experience from "../../images/experience.svg";

const Landing = () => {
  let navigate = useNavigate();
  return (
    <section className="landing bg-dark pb-5 pt-3">
      <ContainerFluid className="w-auto">
        <Outline>
          <div className="row flex-column-reverse flex-lg-row align-items-center text-center">
            <div className="col">
              <div className="image position-relative m-auto">
                <img
                  src={banner}
                  className="banner img-fluid position-relative"
                  alt="banner-man"
                />
                <img
                  src={chart}
                  className="position-absolute bottom-0 mb-5 p-3 bg-light bg-opacity-25 rounded-3 d-none d-xl-block"
                  alt="chart"
                />
                <img
                  src={client}
                  className="position-absolute top-50 p-3 bg-light bg-opacity-25 rounded-3 d-none d-xl-block"
                  alt="client"
                />
                <img
                  src={experience}
                  className="position-absolute top-0 my-5 p-4 bg-light bg-opacity-25 rounded-circle d-none d-xl-block"
                  alt="experience"
                />
              </div>
            </div>
            <div className="col p-4 pb-0">
              <div className="content m-auto mw-100">
                <span className="text-uppercase fw-bold">Welcome</span>
                <h1 className="text-white display-4 fw-bold">
                  Groww Your Business With Us
                </h1>
                <p className="fw-bold my-3 lh-lg">
                  Various versions have evolved over the years, sometimes by
                  accident, sometimes on purpose
                </p>
                <ButtonComp
                  className="secondary-btn"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us Now
                </ButtonComp>
              </div>
            </div>
          </div>
        </Outline>
      </ContainerFluid>
    </section>
  );
};

export default Landing;
