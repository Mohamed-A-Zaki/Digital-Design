import "./OurTeam.scss";
import React from "react";

import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import ContainerFluid from "../../Components/ContainerFluid/ContainerFluid";
import MainHeading from "../../Components/MainHeading/MainHeading";
import TeamMember from "../../Components/TeamMember/TeamMember";
import Outline from "../../Components/Outline/Outline";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import data from "../../json/data.json";

const OurTeam = () => {
  return (
    <section className="our-team bg-dark py-5">
      <ContainerFluid className="text-white">
        <Outline>
          <div className="container py-5">
            <div className="heading text-center">
              <MainHeading className="dark-border">Our Team</MainHeading>
              <SectionHeading>Meet Our Experts</SectionHeading>
            </div>

            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              grabCursor={true}
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
              {data.our_team.map((member) => {
                return (
                  <SwiperSlide key={member.id}>
                    <TeamMember {...member}></TeamMember>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Outline>
      </ContainerFluid>
    </section>
  );
};

export default OurTeam;
