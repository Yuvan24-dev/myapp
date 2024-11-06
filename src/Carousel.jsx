import React from 'react';
import { Carousel, Container, Button, Row, Col } from 'react-bootstrap';
import './App.css';


const CarouselComponent = () => {
    return (
        <Carousel id="carouselDemo">
            <Carousel.Item className="carousel-item active">
                <Container className="py-lg-5 py-sm-0">
                    <Row className="row-custom rowmargin py-5">
                        <Col md={6} className="sliderleft">
                            <div className="fort">
                                <h2>Crypto Currency</h2>
                                <p className="lh-base">
                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam
                                    fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat
                                    molestias, veniam, vel architecto veritatis delectus repellat modi
                                    impedit sequi.
                                </p>
                                <Button className="btno mt-2">Read More</Button>
                            </div>
                        </Col>
                        <Col md={6}>
                            {/* <div className="img-box"> {} </div> */}
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>

            {/* Repeat Carousel.Item for additional slides */}
            <Carousel.Item>
                <Container className="py-lg-5 py-sm-0">
                    <Row className="row-custom rowmargin py-5">
                        <Col md={6} className="sliderleft">
                            <div className="fort">
                                <h2>Crypto Currency</h2>
                                <p className="lh-base">
                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam
                                    fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat
                                    molestias, veniam, vel architecto veritatis delectus repellat modi
                                    impedit sequi.
                                </p>
                                <Button className="btno mt-2">Read More</Button>
                            </div>
                        </Col>
                        {/* <Col md={6}>
                            <div className="img-box"> {/} </div>
                        </Col> */}
                    </Row>
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container className="py-lg-5 py-sm-0">
                    <Row className="row-custom rowmargin py-5">
                        <Col md={6} className="sliderleft">
                            <div className="fort">
                                <h2>Crypto Currency</h2>
                                <p className="lh-base">
                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam
                                    fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat
                                    molestias, veniam, vel architecto veritatis delectus repellat modi
                                    impedit sequi.
                                </p>
                                <Button className="btno mt-2">Read More</Button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="img-box"> {/* Image or custom background could go here */} </div>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselComponent;
