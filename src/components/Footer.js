import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <Container className="text-center">
        <div className="footer-top mb-3">
          <span className="footer-logo">IELTS Institute</span>
        </div>
        <div className="footer-social mb-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
        <p>© 2025 IELTS Institute | Contact: info@ielts.com</p>
      </Container>
    </footer>
  );
}

export default Footer;
