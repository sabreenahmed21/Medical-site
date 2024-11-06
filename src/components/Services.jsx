import React from "react";
import { Container } from "react-bootstrap";
import { BiInjection } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "../styles/Services.css";

export default function Services() {
  return (
    <section className="service-section">
      <Container>
        <div className="service">
          <div className="row">
            <div className="col-xs-12 col-xl-4">
              <div className="content-1">
                <h5 className="title">services</h5>
                <h2>We Cover A Big Variety Of Medical Services</h2>
                <p>
                  We provide the special tips and advice’s of heath care
                  treatment and high level of best.
                </p>
                <button className="btn" type="submit">
                  All Services
                </button>
              </div>
            </div>
            <div className="col-xs-12 col-xl-8">
              <div className="columns">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={20}
                  style={{ padding: "10px" }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    591: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                    },
                    992: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="column ">
                      <div className="icon">
                        <BiInjection className="slider-icon" />
                      </div>
                      <div className="content">
                        <h3>vaccine</h3>
                        <p>
                          Phasellus venenatis porta rhoncus. Integer et viverra
                          felis.
                        </p>
                        <button className="btn">View More</button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="column ">
                      <div className="icon">
                        <BiInjection className="slider-icon" />
                      </div>
                      <div className="content">
                        <h3>vaccine</h3>
                        <p>
                          Phasellus venenatis porta rhoncus. Integer et viverra
                          felis.
                        </p>
                        <button className="btn">View More</button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="column ">
                      <div className="icon">
                        <BiInjection className="slider-icon" />
                      </div>
                      <div className="content">
                        <h3>vaccine</h3>
                        <p>
                          Phasellus venenatis porta rhoncus. Integer et viverra
                          felis.
                        </p>
                        <button className="btn">View More</button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="column ">
                      <div className="icon">
                        <BiInjection className="slider-icon" />
                      </div>
                      <div className="content">
                        <h3>vaccine</h3>
                        <p>
                          Phasellus venenatis porta rhoncus. Integer et viverra
                          felis.
                        </p>
                        <button className="btn">View More</button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="column ">
                      <div className="icon">
                        <BiInjection className="slider-icon" />
                      </div>
                      <div className="content">
                        <h3>vaccine</h3>
                        <p>
                          Phasellus venenatis porta rhoncus. Integer et viverra
                          felis.
                        </p>
                        <button className="btn">View More</button>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
