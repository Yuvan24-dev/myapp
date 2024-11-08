import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';


const AboutUs = () => (
    <Container fluid className="bg-primary text-white py-5">
        <Row>
            <Col md={6}>
                <h2>About Us</h2>
                <p>We are Finexo, dedicated to providing secure crypto services...</p>
                <Button variant="light">Read More</Button>
            </Col>
            <Col md={6}>
                <div className="img-box1"> {/* Image Placeholder */} </div>
            </Col>
        </Row>
    </Container>
);

export default AboutUs;
