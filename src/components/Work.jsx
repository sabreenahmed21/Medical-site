import React from "react";
import { Container } from "react-bootstrap";
import "../styles/Work.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function Work() {
  return (
    <section>
      <Container>
        <div className="head">
          <h6 className="title-text">Working Process</h6>
          <h2 className="title">How we works?</h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-4">
            <div className="work-bx">
              <div className="work-num-bx">01</div>
              <div className="work-content">
                <h5 className="title ">Make Appointmnet</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of.
                </p>
              </div>
              <button>
                <Link to="#" className="btn">
                  View More
                </Link>
                <div className="btn-icon-bx">
                  <IoIosArrowForward />
                </div>
              </button>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-4">
            <div className="work-bx active">
              <div className="work-num-bx">02</div>
              <div className="work-content">
                <h5 className="title ">Take Treatment</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of.
                </p>
              </div>
              <button>
                <Link to="#" className="btn">
                  View More
                </Link>
                <div className="btn-icon-bx">
                  <IoIosArrowForward />
                </div>
              </button>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-4">
            <div className="work-bx">
              <div className="work-num-bx">03</div>
              <div className="work-content">
                <h5 className="title ">Registration</h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of.
                </p>
              </div>
              <button>
                <Link to="#" className="btn">
                  View More
                </Link>
                <div className="btn-icon-bx">
                  <IoIosArrowForward />
                </div>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
