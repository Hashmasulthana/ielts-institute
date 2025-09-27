import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Features.css"; 

function Features() {
  const features = [
    { title: "Speaking Practice", text: "Improve fluency with guided speaking sessions." },
    { title: "Mock Tests", text: "Simulate real IELTS exams for practice." },
    { title: "AI Band Score", text: "Get instant feedback with AI evaluation." },
    { title: "Flexible Classes", text: "Learn at your own pace online or offline." }
  ];

  return (
    <section id="features" className="features-section py-5">
      <Container>
        <h2 className="text-center mb-5 features-title">Our Features</h2>
        <Row>
          {features.map((f, idx) => (
            <Col md={3} sm={6} key={idx} className="mb-4">
              <Card className="feature-card text-center h-100">
                <Card.Body>
                  <Card.Title className="feature-title">{f.title}</Card.Title>
                  <Card.Text className="feature-text">{f.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Features;
