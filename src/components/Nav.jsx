import React, { useEffect, useState } from "react";
import "../styles/Nav.css";
import {
  Button,
  Container,
  Form,
  Modal,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import logo from "../assets/logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GoPlus } from "react-icons/go";

const NavLinks = ({ handleShow }) => (
  <Nav className="ml-auto">
    <NavLink to="/" exact activeClassName="active">
      Home
    </NavLink>
    <NavDropdown
      title={
        <span className="title">
          Pages <GoPlus className="plus" />
        </span>
      }
      className="custom-dropdown"
      id="basic-nav-dropdown"
    >
      <NavDropdown.Item as={NavLink} to="/about">
        About Us
      </NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/team">
        Our Team
      </NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/faq">
        FAQ's
      </NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/booking">
        Booking
      </NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="*">
        Error 404
      </NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/login">
        Login / Register
      </NavDropdown.Item>
    </NavDropdown>
    <NavDropdown
      title={
        <span className="title">
          Services <GoPlus className="plus" />
        </span>
      }
      className="custom-dropdown"
      id="basic-nav-dropdown"
    >
      <NavDropdown.Item as={NavLink} to="/services">
        Service
      </NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/service-details">
        Service Details
      </NavDropdown.Item>
    </NavDropdown>
    <NavDropdown
      id="basic-nav-dropdown"
      title={
        <span className="title">
          Blog <GoPlus className="plus" />
        </span>
      }
      className="custom-dropdown"
    >
      <NavDropdown.Item as={NavLink} to="/blog">
        Blog
      </NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/blog-details">
        Blog Details
      </NavDropdown.Item>
    </NavDropdown>
    <NavLink to="/search" onClick={handleShow}>
      <VscSearch />
    </NavLink>
    <NavLink to="/telephone" className={"tele"}>
      <BsFillTelephoneFill /> (+01) 999 888 777
    </NavLink>
    <NavLink to="/contact">
      <Button>
        Contact us
        <span>
          <FaAngleRight />
        </span>
      </Button>
    </NavLink>
  </Nav>
);

export default function Navb() {
  const [show, setShow] = useState(false);
  const [offcanvasShow, setOffcanvasShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOffcanvasClose = () => setOffcanvasShow(false);
  const handleOffcanvasShow = () => setOffcanvasShow(true);

  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand to="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={handleOffcanvasShow}
          />
          {/* Offcanvas for small screens */}
          <Offcanvas
            id="offcanvasNavbar"
            placement="start"
            show={offcanvasShow}
            onHide={handleOffcanvasClose}
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <NavLinks handleShow={handleShow} />
            </Offcanvas.Body>
          </Offcanvas>
          {/* Navbar collapse for large screens only */}
          <Navbar.Collapse id="basic-navbar-nav">
            <NavLinks handleShow={handleShow} />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal for Search */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="searchForm">
              <Form.Control type="text" placeholder="Enter search term..." />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
