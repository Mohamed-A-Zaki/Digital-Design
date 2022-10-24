import "./Brand.scss";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import converse from "../../images/converse-logo.png";
import deloitte from "../../images/deloitte-logo.png";
import rollei from "../../images/rollei-logo.png";
import unison from "../../images/unison-logo.png";
import friendly from "../../images/friendly-s-restaurant-logo.png";

const Brands = () => {
  return (
    <section className="brands py-5 bg-light">
      <div className="container-fluid px-md-4 px-lg-5 py-5">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            520: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <img
              src={converse}
              className="d-block m-auto opacity-25"
              alt="converse"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={deloitte}
              className="d-block m-auto opacity-25"
              alt="deloitte"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={rollei}
              className="d-block m-auto opacity-25"
              alt="rollei"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={unison}
              className="d-block m-auto opacity-25"
              alt="unison"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={friendly}
              className="d-block m-auto opacity-25"
              alt="friendly"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;
