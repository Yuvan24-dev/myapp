import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { whyimg } from './images/w1.png'
import './App.css';

const WhyUs = () => (
    <Container className="text-center my-5">
        <h2>Why Choose Us</h2>
        <Row>
            <Col md={3}>
                <img src="w1.png" alt="Icon" />
                <h5>Expert Management</h5>
                <p>We provide the best management for all crypto-related services.</p>
            </Col>
            {/* Repeat for other items */}
        </Row>
    </Container>
);

export default WhyUs;
