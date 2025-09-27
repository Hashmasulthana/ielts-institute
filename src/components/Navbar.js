import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top">
      <Container>
        <Navbar.Brand href="#" className="logo-container">
          <img
            src="https://m.media-amazon.com/images/I/41GnM880O7L.png"
            alt="IELTS Logo"
            className="logo-img"
          />
          <span className="logo-text">IELTS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-btn" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
