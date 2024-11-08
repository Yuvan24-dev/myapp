import React from 'react';
import { Navbar, Nav, Container, Carousel, Button, Row, Col } from 'react-bootstrap';
import './App.css';  // Assuming you still need this for custom CSS
import { MdPerson2 } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";

const App = () => (
  <div className="topmenu" >
    {/* Navbar */}
    <Navbar expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#" className="navbar-brand">
          <h4>Finexo</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#why-us">Why Us</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#login"><MdPerson2 />Login</Nav.Link>
            <Nav.Link href="#team"><MdOutlineSearch /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* Carousel Section */}
    <div className="carousel-container">
      <Carousel
        id="carouselDemo"
        interval={3000}  // Automatically move after 3 seconds
        pause="hover"  // Pause on hover
        indicators={true} // Show indicators
        nextIcon={<span className="carousel-control-next-icon" />}
        prevIcon={<span className="carousel-control-prev-icon" />}
        className="custom-carousel"
      >
        {/* First Carousel Item */}
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
                <div className="img-box"> {/* Placeholder for image or custom content */} </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        {/* Second Carousel Item */}
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
                <div className="img-box"> {/* Placeholder for image or custom content */} </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        {/* Third Carousel Item */}
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
                <div className="img-box"> {/* Placeholder for image or custom content */} </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>
);

export default App;
