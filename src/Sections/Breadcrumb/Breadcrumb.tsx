import "./Breadcrumb.scss";
import { Link } from "react-router-dom";

import Outline from "../../Components/Outline/Outline";
import ContainerFluid from "../../Components/ContainerFluid/ContainerFluid";

type Props = {
  img: String;
  title: String;
  children: React.ReactNode;
};

const Breadcrumb = ({ img, title, children }: Props) => {
  return (
    <section
      className="breadcrumb-section position-relative"
      style={{ backgroundImage: `url(${img})` }}
    >
      <ContainerFluid className="py-5">
        <Outline className="py-5">
          <h2 className="display-4 fw-bold text-white text-center mt-5">
            {title}
          </h2>
          <nav aria-label="breadcrumb" className="my-5">
            <ol className="breadcrumb text-uppercase m-auto py-2 px-4 fw-bold rounded">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none text-white">
                  Home
                </Link>
              </li>
              {children}
            </ol>
          </nav>
        </Outline>
      </ContainerFluid>
    </section>
  );
};

export default Breadcrumb;
