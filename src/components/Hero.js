import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css"; 

function Hero() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-md-start text-center">
            <h1 className="hero-title">Achieve Your Dream IELTS Band</h1>
            <p className="hero-subtext">
              Join our expert trainers and leverage AI-powered practice tools to boost your IELTS score. 
              Get personalized guidance, practice mock tests, and improve your speaking, writing, reading, 
              and listening skills efficiently. Start your journey to success today!
            </p>
            <Button className="hero-btn btn-lg mt-3">Get Started</Button>
          </Col>
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/ielts-coaching-banner-ad-template-design-90ef13fba44ed6b19b1e881d28fd1d11_screen.jpg?ts=1734372062"
              alt="IELTS"
              className="img-fluid rounded hero-img shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
