import React from "react";
import "../styles/Header.css";
import headerimg from "../assets/doctor.png";
import img1 from "../assets/shape5.png";
import img2 from "../assets/shape9.png";
import img3 from "../assets/shape8.png";
import img4 from "../assets/shape7.png";
import img5 from "../assets/shape10.png";
import { Container } from "react-bootstrap";

export default function Header() {
  return (
    <div className="main-banner">
      <Container>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h5>We Provide All Health Care Solution</h5>
            <h2>Protect Your Health And Take Care To Of Your Health</h2>
            <button className="btn">Read More</button>
          </div>
          <div className="col-sm-12 col-md-5 header-img">
            <img src={headerimg} alt="docter" />
          </div>
          <img src={img1} alt="shape" className="pt-img1" />
          <img src={img2} alt="shape" className="pt-img2" />
          <img src={img3} alt="shape" className="pt-img3" />
          <img src={img4} alt="shape" className="pt-img4" />
          <img src={img5} alt="shape" className="pt-img5" />
        </div>
      </Container>
    </div>
  );
}
