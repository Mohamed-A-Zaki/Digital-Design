import "./OurTeam.scss";

import React from "react";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import MainHeading from "../../Components/MainHeading/MainHeading";
import SocialMedia from "../../Components/SocialMedia/SocialMedia";
import Outline from "../../Components/Outline/Outline";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import data from "../../json/data.json";

const OurTeam = () => {
  return (
    <section className="our-team bg-dark py-5">
      <div className="container-fluid px-md-4 px-lg-5 text-white">
        <Outline>
          <div className="container py-5">
            <div className="heading text-center">
              <MainHeading className="dark-border">Our Team</MainHeading>
              <SectionHeading className="text-white">
                Meet Our Experts
              </SectionHeading>
            </div>

            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              {data.our_team.map(({ id, name, job, img }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className="top position-relative mx-4">
                      <Outline className="rounded-0 rounded-top border-bottom-0 position-absolute bottom-0 end-0 start-0"></Outline>
                      <div className="image">
                        <img
                          src={img}
                          className="img-fluid d-block m-auto"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="details position-relative rounded overflow-auto">
                      <div className="data text-center p-2">
                        <div className="name fw-bold fs-2">{name}</div>
                        <div className="job text-uppercase">{job}</div>
                      </div>
                      <div className="social-wrapper position-absolute top-0 start-0 end-0 bottom-0 bg-light bg-opacity-75 d-flex align-items-center justify-content-center opacity-0">
                        <SocialMedia></SocialMedia>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Outline>
      </div>
    </section>
  );
};

export default OurTeam;
