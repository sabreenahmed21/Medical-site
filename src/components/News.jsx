import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import new1 from "../assets/new1.jpg";
import doc1 from "../assets/doc1.jpg";
import new2 from "../assets/new2.jpg";
import new3 from "../assets/new3.jpg";

import "../styles/News.css";
import { MdDateRange } from "react-icons/md";

export default function News() {
  return (
    <section className="news-section">
      <Container>
        <div className="news">
          <div className="box">
            <h5 className="title">Latest News</h5>
            <h2>Our Latest News</h2>
          </div>
          <div className="row">
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
                <div className="box">
                  <img src={new3} alt="img" />
                  <div className="info">
                    <div className="doc">
                      <img src={doc1} alt="img" />
                      <h6>Sonar Moyna</h6>
                    </div>
                    <div className="date">
                    <MdDateRange className="icon" />
                      <p>19 July 2022</p>
                    </div>
                  </div>
                  <h3>Can you get a diflucan prescription online?</h3>
                  <button>
                    <Link to="#" className="btn">
                      Read More
                    </Link>
                    <div className="btn-icon-bx">
                      <IoIosArrowForward />
                    </div>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <img src={new1} alt="img" />
                  <div className="info">
                    <div className="doc">
                      <img src={doc1} alt="img" />
                      <h6>Sonar Moyna</h6>
                    </div>
                    <div className="date">
                    <MdDateRange className="icon" />
                      <p>19 July 2022</p>
                    </div>
                  </div>
                  <h3>Can you get a diflucan prescription online?</h3>
                  <button>
                    <Link to="#" className="btn">
                      Read More
                    </Link>
                    <div className="btn-icon-bx">
                      <IoIosArrowForward />
                    </div>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <img src={new2} alt="img" />
                  <div className="info">
                    <div className="doc">
                      <img src={doc1} alt="img" />
                      <h6>Sonar Moyna</h6>
                    </div>
                    <div className="date">
                    <MdDateRange className="icon" />
                      <p>19 July 2022</p>
                    </div>
                  </div>
                  <h3>Can you get a diflucan prescription online?</h3>
                  <button>
                    <Link to="#" className="btn">
                      Read More
                    </Link>
                    <div className="btn-icon-bx">
                      <IoIosArrowForward />
                    </div>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <img src={new3} alt="img" />
                  <div className="info">
                    <div className="doc">
                      <img src={doc1} alt="img" />
                      <h6>Sonar Moyna</h6>
                    </div>
                    <div className="date">
                    <MdDateRange className="icon" />
                      <p>19 July 2022</p>
                    </div>
                  </div>
                  <h3>Can you get a diflucan prescription online?</h3>
                  <button>
                    <Link to="#" className="btn">
                      Read More
                    </Link>
                    <div className="btn-icon-bx">
                      <IoIosArrowForward />
                    </div>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box">
                  <img src={new1} alt="img" />
                  <div className="info">
                    <div className="doc">
                      <img src={doc1} alt="img" />
                      <h6>Sonar Moyna</h6>
                    </div>
                    <div className="date">
                      <MdDateRange className="icon" />
                      <p>19 July 2024</p>
                    </div>
                  </div>
                  <h3>Can you get a diflucan prescription online?</h3>
                  <button>
                    <Link to="#" className="btn">
                      Read More
                    </Link>
                    <div className="btn-icon-bx">
                      <IoIosArrowForward />
                    </div>
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}
