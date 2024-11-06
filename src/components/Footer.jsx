/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/Footer.css";
import { Container } from "react-bootstrap";
import logo from "../assets/logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkdin.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const socialIcons = [
    { img: facebook, link: "#", alt: "Facebook icon" },
    { img: twitter, link: "#", alt: "Twitter icon" },
    { img: insta, link: "#", alt: "Instagram icon" },
    { img: linkedin, link: "#", alt: "LinkedIn icon" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Booking", href: "/booking" },
    { name: "FAQs", href: "/faqs" },
    { name: "Blogs", href: "/blog" },
    { name: "Our Team", href: "/team" },
  ];

  const services = [
    { name: "Dental Care", href: "/dental-care" },
    { name: "Cardiac Clinic", href: "/cardiac-clinic" },
    { name: "Massage Therapy", href: "/massage-therapy" },
    { name: "Cardiology", href: "/cardiology" },
    { name: "Precise Diagnosis", href: "/precise-diagnosis" },
    { name: "Ambulance Services", href: "/ambulance-services" },
  ];

  return (
    <div className="footer">
      <Container>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 column">
            <img src={logo} alt="Company logo" className="logo" />
            <p className="logo-parag">
              Lorem ipsum is dolor sit amet, consectetur adipiscing elit, dolore
              smod tempor incididunt ut labore et.
            </p>
            <div className="contact-box">
              <div className="icon">
                <BsFillTelephoneFill />
              </div>
              <div className="contact-number">
                <p className="content">Contact Us</p>
                <h5 className="number">+01 123 456 7890</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 column">
            <div className="quik-links">
              <h3>Quick Links</h3>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 column">
            <h3>Our Services</h3>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href}>{service.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 subscribe">
            <h3>Subscribe</h3>
            <form>
              <input type="email" name="email" placeholder="Email Address" />
              <button type="submit">Subscribe Now</button>
            </form>
            <ul className="social-links">
              {socialIcons.map((icon, index) => (
                <li key={index}>
                  <a href={icon.link}>
                    <img src={icon.img} alt={icon.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <p className="copy">
          Copyright © 2024 Design & Developed by
          <Link to="https://github.com/sabreenahmed21" target="_blank">
            Sabreen Ahmed
          </Link>
        </p>
      </Container>
    </div>
  );
}
