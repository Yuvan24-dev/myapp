import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';  

const services = [
    { 
        title: "Currency Wallet", 
        description: "A secure currency wallet for all transactions.",
        imageUrl: "./images/s1.png"  
    },
    { 
        title: "Security Storage", 
        description: "High-end security storage for your assets.", 
        imageUrl: "./images/s2.png"  
    },
    { 
        title: "Expert Support", 
        description: "24/7 expert support at your service.", 
        imageUrl: "./images/s3.png"  
    }
];

const Services = () => (
    <Container className="my-5">
        <h2 className="text-center">Our Services</h2>
        <Row>
            {services.map((service, index) => (
                <Col md={4} key={index}>
                    <Card className="border-0 text-center">
                        {/* Image at the top of each card */}
                        <Card.Img 
                            variant="top" 
                            src={service.imageUrl} 
                            alt={`Image for ${service.title}`} 
                            className="service-card-img" 
                        />
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
