import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import whyimg from './images/w1.png';
import whyimg1 from './images/w2.png';
import whyimg2 from './images/w3.png';
import whyimg3 from './images/w4.png';
import './App.css';

const WhyUs = () => (
    <section className="whys_section py-5" style={{ backgroundColor: 'white' }}>
        <Container className="heading_container heading_center ">
            <h3>
                Why Choose <span style={{ color: '#00bbf0' }}>Us</span>
            </h3>
            <div className="why_container my-5">
                <Row className="m-0 ">
                    <Col className="col-12 py-4">
                        <div className="img-box2">
                            <img className="forimg" src={whyimg} alt="Expert Management" />
                        </div>
                        <div className="detail-box">
                            <h5>Expert Management</h5>
                            <p>Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti,
                                molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                                Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus.</p>
                        </div>
                    </Col>

                    <Col  className="col-12 py-4">
                        <div className="img-box2">
                            <img className="forimg" src={whyimg1} alt="Secure Investment" />
                        </div>
                        <div className="detail-box">
                            <h5>Secure Investment</h5>
                            <p>Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti,
                                molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                                Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus.</p>
                        </div>
                    </Col>

                    <Col className="col-12 py-4">
                        <div className="img-box2">
                            <img className="forimg" src={whyimg2} alt="Instant Trading" />
                        </div>
                        <div className="detail-box">
                            <h5>Instant Trading</h5>
                            <p>Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti,
                                molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                                Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus.</p>
                        </div>
                    </Col>

                    <Col className="col-12 py-4">
                        <div className="img-box2">
                            <img className="forimg" src={whyimg3} alt="Happy Customers" />
                        </div>
                        <div className="detail-box">
                            <h5>Happy Customers</h5>
                            <p>
                                Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti,
                                molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                                Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </section>
);

export default WhyUs;
