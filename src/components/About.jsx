import React from "react";
import "../styles/About.css";
import { Container } from "react-bootstrap";
import img1 from "../assets/pic-1.ad1ed7ee8284087fe9ee.jpg";
import img2 from "../assets/pic-2.0593bc2fd8a13cf8c19f.jpg";
import img3 from "../assets/pic-3.fa689b1037dbf69567a3.jpg";
import { TbAmbulance } from "react-icons/tb";
import { BiDonateBlood, BiInjection } from "react-icons/bi";
import { PiBedBold } from "react-icons/pi";

export default function About() {
  return (
    <section>
      <Container>
        <div className="row">
          <div className="col-lg-6">
            <div className="about-sec1">
              <ul>
                <li>
                  <img src={img1} alt="img" className="about-img" />
                </li>
                <li>
                  <img src={img2} alt="img" className="about-img-2" />
                </li>
                <li>
                  <img src={img3} alt="img" className="about-img-3" />
                </li>
                <li>
                  <div className="exp-box">
                    20 <span>Year Experience</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-sec2">
              <div className="head-box">
                <h6 className="title-text">About Us</h6>
                <h2 className="title">
                  The Great Place Of Medical Hospital Center
                </h2>
                <p>
                  We provide the special tips and advice’s of heath care
                  treatment and high level of best technology involve in the our
                  hospital.
                </p>
              </div>
              <div className="row icons-bx">
                <div className="col-sm-6">
                  <div className="box-1 bx">
                    <div className="icon icon-1">
                      <TbAmbulance />
                    </div>
                    <div className="icon-content">
                      <h5>Emergency Help</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="box-2 bx">
                    <div className="icon icon-2">
                      <PiBedBold />
                    </div>
                    <div className="icon-content">
                      <h5>Qualified Doctors</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="box-3 bx">
                    <div className="icon icon-3">
                      <BiDonateBlood />
                    </div>
                    <div className="icon-content">
                      <h5>Best Professionals</h5>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="box-4 bx">
                    <div className="icon icon-4">
                      <BiInjection />
                    </div>
                    <div className="icon-content">
                      <h5>Medical Treatment</h5>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn">Read More</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
