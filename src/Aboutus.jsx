import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';  

const AboutSection = () => (
    <div className="Section secmargin py-5" style={{ backgroundColor: 'rgb(4,4,87)' }}>
        <Container className="my-5">
            <h1 style={{ color: 'white' }}>
                About <span style={{ color: '#00bbf0' }}>US</span>
            </h1>
            <p style={{ color: 'white' }}>
                Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
            </p>
        </Container>

        <Container className="justify-content-center">
            <Row>
                <Col md={6}>
                    <div className="img-box1">
                        {/* Add image or background styles here if needed */}
                    </div>
                </Col>

                <Col md={6}>
                    <div className="detail-box" style={{ color: 'white', textAlign: 'left', lineHeight: '20px' }}>
                        <h3>We Are Finexo</h3>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                            are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                            the middle of text. All
                        </p>
                        <p>
                            Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
                        </p>
                        <Button variant="primary" className="btno" style={{ borderRadius: '0%' }}>
                            Read More
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default AboutSection;
