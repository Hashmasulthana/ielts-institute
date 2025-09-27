import React from "react";
import { Container, Carousel, Card } from "react-bootstrap";
import "./Testimonials.css"; 

function Testimonials() {
  const reviews = [
    { name: "Riya", text: "Thanks to this institute, I scored Band 8 in my IELTS exam!" },
    { name: "Arjun", text: "Mock tests helped me build confidence and improve my timing." },
    { name: "Fatima", text: "Great trainers and amazing AI tools for practice." }
  ];

  return (
    <section id="testimonials" className="testimonials-section py-5">
      <Container>
        <h2 className="text-center mb-5 testimonials-title">What Our Students Say</h2>
        <Carousel indicators={false} interval={4000}>
          {reviews.map((r, idx) => (
            <Carousel.Item key={idx}>
              <Card className="testimonial-card mx-auto text-center p-4">
                <Card.Body>
                  <Card.Text>"{r.text}"</Card.Text>
                  <h6 className="mt-3 fw-bold text-orange">- {r.name}</h6>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default Testimonials;
