import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoSearch } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
function Herojs() {
  return (
      <header>
        <container fluid className="">
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
              <Navbar.Brand href="#" className='navbar-brand'>Navbar scroll</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" className='nav-right'>
                <Nav>
                  <Nav.Link href="#action1" className='px-lg-5'>Home</Nav.Link>
                  <Nav.Link href="#action1" claclearssName='px-lg-5'>Home</Nav.Link>
                  <Nav.Link href="#action1" className='px-lg-5' >Home</Nav.Link>
                  <Nav.Link href="#action1" className='px-lg-5' >Home</Nav.Link>
                  <Nav.Link href="#action1" className='px-lg-3' >Home</Nav.Link>
                  <Nav.Link href="#action1" className='px-lg-2 px-xl-3' ><IoSearch /></Nav.Link>
                  <Nav.Link href="#action1" className='px-lg-2 px-xl-3' ><IoPersonSharp /></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </container>
      </header>
  )
};
export default Herojs;

