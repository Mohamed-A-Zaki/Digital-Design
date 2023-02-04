import data from "../../json/data.json";

import Service from "../../Components/Service/Service";
import MainHeading from "../../Components/MainHeading/MainHeading";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import HeadingParagraph from "../../Components/HeadingParagraph/HeadingParagraph";

type Props = {
  heading: boolean;
  count?: number;
};

const Services = ({ heading, count = data.services.length }: Props) => {
  return (
    <section className="services py-5">
      <div className="container">
        {heading && (
          <div className="heading text-center">
            <MainHeading>Services</MainHeading>
            <SectionHeading>What Can We Do For You</SectionHeading>
            <HeadingParagraph className="mb-4">
              It is the dolor sit amet, consectetur adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </HeadingParagraph>
          </div>
        )}

        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
          {data.services.slice(0, count).map((service) => {
            return (
              <div className="col" key={service.id}>
                <Service {...service} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
