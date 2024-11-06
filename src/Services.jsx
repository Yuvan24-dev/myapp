import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';


const services = [
    { title: "Currency Wallet", description: "A secure currency wallet for all transactions." },
    { title: "Security Storage", description: "High-end security storage for your assets." },
    { title: "Expert Support", description: "24/7 expert support at your service." }
];

const Services = () => (
    <Container className="my-5">
        <h2 className="text-center">Our Services</h2>
        <Row>
            {services.map((service, index) => (
                <Col md={4} key={index}>
                    <Card className="border-0 text-center">
                        <Card.Body>
                            <Card.Title>{service.title}</Card.Title>
                            <Card.Text>{service.description}</Card.Text>
                            <Card.Link href="#">Read More</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
);

export default Services;
