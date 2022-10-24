import React from "react";
import ButtonComp from "../../Components/Button/ButtonComp";
import Outline from "../../Components/Outline/Outline";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import ContainerFluid from "../../Components/ContainerFluid/ContainerFluid";

import image from "../../images/get-in-touch.png";
import { useNavigate } from "react-router-dom";

const GetTouch = () => {
  let navigate = useNavigate();
  return (
    <section className="get-in-touch py-5 bg-light position-relative text-center text-lg-start">
      <ContainerFluid>
        <Outline>
          <div className="container">
            <div className="row py-5">
              <div className="col">
                <div className="box">
                  <SectionHeading className="display-5 mb-5">
                    Have A Project In Mind? Let's Get To Work.
                  </SectionHeading>
                  <ButtonComp
                    className="main-btn px-5 py-2"
                    onClick={() => navigate("/contact")}
                  >
                    Get In Touch
                  </ButtonComp>
                </div>
              </div>
              <div className="col d-none d-lg-flex">
                <div className="box">
                  <img
                    src={image}
                    style={{ width: "400px" }}
                    className="position-absolute bottom-0"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </Outline>
      </ContainerFluid>
    </section>
  );
};

export default GetTouch;
