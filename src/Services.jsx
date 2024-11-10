import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';  
import imgs1 from './images/s1.png';
import imgs2 from './images/s2.png';
import imgs3 from './images/s3.png';


const services = [
    { 
        title: "Currency Wallet", 
        description: "A secure currency wallet for all transactions.",
        imageUrl: imgs1 
    },
    { 
        title: "Security Storage", 
        description: "High-end security storage for your assets.", 
        imageUrl: imgs2 
    },
    { 
        title: "Expert Support", 
        description: "24/7 expert support at your service.", 
        imageUrl: imgs3  
    }
];

const Services = () => (
    <Container className="my-5">
        <h2 className="text-center">Our <span className="forspan">Services</span></h2>
        <Row>
            {services.map((service, index) => (
                <Col md={4} key={index}>
                    <Card className="border-0 text-center">
                        {/* Image at the top of each card */}
                        <Card.Img 
                            variant="top" 
                            src={service.imageUrl} 
                            alt={`Image for ${service.title}`} 
                            className="card-img-top d-flex justify-content-center" 
                        />
                        <Card.Body>
                            <Card.Title>{service.title}</Card.Title>
                            <Card.Text>{service.description}</Card.Text>
                            <Card.Link className='btno nav_link' href="#">Read More</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
);

export default Services;
