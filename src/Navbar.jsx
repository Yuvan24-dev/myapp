import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import { MdPerson2 } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";

const NavbarComponent = () => (
  <Navbar expand="lg" className="topmenu" variant="dark">
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
);

export default NavbarComponent;
