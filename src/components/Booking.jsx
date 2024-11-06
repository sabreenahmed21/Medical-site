import React from "react";
import { Container } from "react-bootstrap";
import "../styles/Booking.css";
import phone from "../assets/mobile.png";
import client from "../assets/women.png";
import comment from "../assets/comment.png";
import setting from "../assets/setting.png";
import location from "../assets/location.png";

export default function Booking() {
  return (
    <section className="booking">
      <Container>
        <>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="form">
                <h3 className="title">Book Appointment</h3>
                <form >
                  <div className="form-group">
                    <select className="form-select">
                      <option>Select Department</option>
                      <option>one</option>
                      <option>two</option>
                      <option>three</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select className="form-select">
                      <option>Select Docter</option>
                      <option>one</option>
                      <option>two</option>
                      <option>three</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-select"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="form-select"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="date"
                      placeholder="Date"
                      className="form-select"
                    />
                  </div>
                  <button className="btn">
                    Appointment Now
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="img-booking">
                <img src={phone} alt="phone" />
                <div className="imgs-group">
                  <img src={client} alt="img" className="img1" />
                  <img src={comment} alt="img" className="img2" />
                  <img src={setting} alt="img" className="img3" />
                  <img src={location} alt="img" className="img4" />
                </div>
              </div>
            </div>
          </div>
        </>
      </Container>
    </section>
  );
}
