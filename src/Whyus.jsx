import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import whyimg  from './images/w1.png'
import whyimg1  from './images/w2.png'
import whyimg2  from './images/w3.png'
import whyimg3  from './images/w4.png'

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
               <div className='img_forbd'><img className='img_why' src={whyimg1} alt="Icon" /></div> 
                <h5>Secure Inverstment</h5>
                <p>We provide the best management for all crypto-related services.</p>
            </Col>
            <Col className='py-4' md={3}>
               <div className='img_forbd'><img className='img_why' src={whyimg2} alt="Icon" /></div> 
                <h5>Instant Trading</h5>
                <p>We provide the best management for all crypto-related services.</p>
            </Col>
            <Col className='py-4' md={3}>
            <div className='img_forbd'><img className='img_why' src={whyimg3} alt="Icon" /></div> 
               <h5>Happy customers</h5>
                <p>
              Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
              Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
            </p>
            </Col>
        </Row>
    </Container>
);

export default WhyUs;
