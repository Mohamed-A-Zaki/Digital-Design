import "./Testimonial.scss";

import React from "react";
import MainHeading from "../../Components/MainHeading/MainHeading";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";

import testimonial_image from "../../images/testimonial-img1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import data from "../../json/data.json";

const Testimonial = () => {
  return (
    <section className="testimonial py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <div className="box">
              <MainHeading className="special">Testimonial</MainHeading>
              <SectionHeading>What The People Thinks About Us</SectionHeading>

              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={true}
                loop={true}
                grabCursor={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
              >
                {data.testimonials.map(({ id, name, info, img, desc }) => {
                  return (
                    <SwiperSlide key={id} className="rounded-4 p-4 bg-white">
                      <div className="d-flex gap-3 align-items-center">
                        <div className="image">
                          <img
                            src={img}
                            className="rounded-circle"
                            alt="img_1"
                          />
                        </div>
                        <div className="title">
                          <div className="name h5 mb-0">{name}</div>
                          <div className="info">{info}</div>
                        </div>
                      </div>
                      <p className="lead mt-4">{desc}</p>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          <div className="d-none d-xl-block col-xl-5">
            <div className="box">
              <div className="testimonial_image position-relative">
                <img
                  src={testimonial_image}
                  className="rounded-circle img-fluid"
                  alt="testimonial_image"
                />
                {data.testimonials.map(({ id, img, name }) => {
                  return (
                    <img
                      key={id}
                      src={img}
                      alt={name}
                      className="position-absolute rounded-circle img-thumbnail"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
