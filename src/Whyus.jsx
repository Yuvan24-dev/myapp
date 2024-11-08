import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import whyimg  from './images/w1.png'
import './App.css';

const WhyUs = () => (
    <Container className="text-center my-5">
        <h2>Why Choose Us</h2>
        <Row className='d-flex flex-column'>
            <Col className='py-4' md={3}>
               <div className='img_forbd'><img className='img_why' src={whyimg} alt="Icon" /></div> 
                <h5>Expert Management</h5>
                <p>We provide the best management for all crypto-related services.</p>
            </Col>
            <Col className='py-4' md={3}>
               <div className='img_forbd'><img className='img_why' src={whyimg} alt="Icon" /></div> 
                <h5>Expert Management</h5>
                <p>We provide the best management for all crypto-related services.</p>
            </Col>
            <Col className='py-4' md={3}>
               <div className='img_forbd'><img className='img_why' src={whyimg} alt="Icon" /></div> 
                <h5>Expert Management</h5>
                <p>We provide the best management for all crypto-related services.</p>
            </Col>
            <Col className='py-4' md={3}>
               <div className='img_forbd'><img className='img_why' src={whyimg} alt="Icon" /></div> 
                <h5>Expert Management</h5>
                <p>We provide the best management for all crypto-related services.</p>
            </Col>
        </Row>
    </Container>
);

export default WhyUs;
