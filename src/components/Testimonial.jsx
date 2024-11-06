import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import tree from "../assets/testimonial.png";

import doc1 from '../assets/doc1.jpg';
import doc2 from '../assets/doc2.jpg';
import doc3 from '../assets/doc3.jpg';
import doc4 from '../assets/doc4.jpg';
import doc5 from '../assets/doc5.jpg';
import doc6 from '../assets/doc6.jpg';

import "../styles/Testimonial.css";
import { Link } from "react-router-dom";

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <Container>
        <div className="testimonial">
          <div className="box">
            <h5 className="title">Testimonial</h5>
            <h2>See What Are The Patients Saying About us</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-xs-12">
              <div className="docs">
                <img src={tree} alt="img" className="bg-img"/>
                <ul>
                  <li data-member="1">
                    <Link to="#">
                      <img src={doc1} alt="img" />
                    </Link>
                  </li>
                  <li data-member="2">
                    <Link to="#">
                      <img src={doc2} alt="img" />
                    </Link>
                  </li>
                  <li data-member="3">
                    <Link to="#">
                      <img src={doc3} alt="img" />
                    </Link>
                  </li>
                  <li data-member="4">
                    <Link to="#">
                      <img src={doc4} alt="img" />
                    </Link>
                  </li>
                  <li data-member="5">
                    <Link to="#">
                      <img src={doc5} alt="img" />
                    </Link>
                  </li>
                  <li data-member="6">
                    <Link to="#">
                      <img src={doc6} alt="img" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-xs-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
              >
                <SwiperSlide>
                  <div className="slide-box">
                    <div className="head">
                      <FaQuoteLeft />
                    </div>
                    <div className="content">
                      <p>
                        Lorem ipsum is dolor sit amet, csectetur adipiscing
                        elit, dolore smod tempor incididunt ut labore et.
                      </p>
                    </div>
                    <div className="foot">
                      <div className="client-info">
                        <h5>John Deo</h5>
                        <p>patient</p>
                      </div>
                      <div className="icon">
                        <FaQuoteRight />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-box">
                    <div className="head">
                      <FaQuoteLeft />
                    </div>
                    <div className="content">
                      <p>
                        Lorem ipsum is dolor sit amet, csectetur adipiscing
                        elit, dolore smod tempor incididunt ut labore et.
                      </p>
                    </div>
                    <div className="foot">
                      <div className="client-info">
                        <h5>John Deo</h5>
                        <p>patient</p>
                      </div>
                      <div className="icon">
                        <FaQuoteRight />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-box">
                    <div className="head">
                      <FaQuoteLeft />
                    </div>
                    <div className="content">
                      <p>
                        Lorem ipsum is dolor sit amet, csectetur adipiscing
                        elit, dolore smod tempor incididunt ut labore et.
                      </p>
                    </div>
                    <div className="foot">
                      <div className="client-info">
                        <h5>John Deo</h5>
                        <p>patient</p>
                      </div>
                      <div className="icon">
                        <FaQuoteRight />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-box">
                    <div className="head">
                      <FaQuoteLeft />
                    </div>
                    <div className="content">
                      <p>
                        Lorem ipsum is dolor sit amet, csectetur adipiscing
                        elit, dolore smod tempor incididunt ut labore et.
                      </p>
                    </div>
                    <div className="foot">
                      <div className="client-info">
                        <h5>John Deo</h5>
                        <p>patient</p>
                      </div>
                      <div className="icon">
                        <FaQuoteRight />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
