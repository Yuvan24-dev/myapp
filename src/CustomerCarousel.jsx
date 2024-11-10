import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import client1 from './images/client1.jpg'; 
import client2 from './images/client2.jpg';

const CustomerCarousel = () => {
    return (
        <section className="forsection">
            <Container className="text-center py-5">
                <h3>
                    What Says Our <span style={{ color: 'aqua' }}>Customers</span>
                </h3>
            </Container>
            <Carousel interval={5000} indicators={false} controls={true}>
                <Carousel.Item>
                    <Row className="mx-0">
                        <Col lg={5} sm={6} className="shadowfor mx-auto">
                            <div className="card no-border position-relative px-5 mx-3">
                                <div className="image-wrapper position-absolute rounded-circle">
                                    <img
                                        src={client1}
                                        alt="Client Image"
                                        className="img-fluid rounded-circle position-absolute"
                                    />
                                </div>
                                <div className="card-body mt-0 pt-5 text-left">
                                    <h2 className="card-title m-0">Lus Den</h2>
                                    <p className="text-muted">magna aliqua. Ut</p>
                                    <p className="card-text1">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} sm={6} className="shadowfor mx-auto">
                            <div className="card no-border position-relative px-5 mx-3">
                                <div className="image-wrapper position-absolute rounded-circle">
                                    <img
                                        src={client2}
                                        alt="Client Image"
                                        className="img-fluid rounded-circle position-absolute"
                                    />
                                </div>
                                <div className="card-body mt-0 pt-5 text-left">
                                    <h2 className="card-title m-0">Zen Court</h2>
                                    <p className="text-muted">magna aliqua. Ut</p>
                                    <p className="card-text1">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>

                <Carousel.Item>
                    <Row className="mx-0">
                        <Col lg={5} sm={6} className="shadowfor mx-auto">
                            <div className="card no-border position-relative px-5 mx-3">
                                <div className="image-wrapper position-absolute rounded-circle">
                                    <img
                                        src={client1}
                                        alt="Client Image"
                                        className="img-fluid rounded-circle"
                                    />
                                </div>
                                <div className="card-body mt-0 pt-5 text-left">
                                    <h2 className="card-title m-0">Jane Doe</h2>
                                    <p className="text-muted">magna aliqua. Ut</p>
                                    <p className="card-text1">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} sm={6} className="shadowfor mx-auto">
                            <div className="card no-border position-relative px-5 mx-3">
                                <div className="image-wrapper position-absolute rounded-circle">
                                    <img
                                        src={client2}
                                        alt="Client Image"
                                        className="img-fluid rounded-circle"
                                    />
                                </div>
                                <div className="card-body mt-0 pt-5 text-left">
                                    <h2 className="card-title m-0">John Smith</h2>
                                    <p className="text-muted">magna aliqua. Ut</p>
                                    <p className="card-text1">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default CustomerCarousel;
