import 'react-bootstrap'
import './All.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import { Nav, Card, Button, Navbar, NavDropdown, Container, NavbarBrand } from 'react-bootstrap'

export default function Navcomp() {

  // const icon = <FontAwesomeIcon icon={faCoffee} />
    const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
    return(
        <>
  <Navbar collapseOnSelect expand="lg" variant="light" className="navtop" fixed="top">
  <Container>
  <NavbarBrand>
    <img src="https://raw.githubusercontent.com/dhiman-vansh/Coding/master/Better%20Minds%20Logo.JPG"
    width='70' className='imgnav' />
  </NavbarBrand>
  <Navbar.Brand href="/"><strong>Better Minds</strong></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Courses" id="collasible-nav-dropdown"  
            show={show}
            onMouseEnter={showDropdown} 
            onMouseLeave={hideDropdown}
            >
        <NavDropdown.Item href="#action/3.1" >IX</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" >X</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">XI</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">XII</NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">About Us</Nav.Link>
      <Nav.Link href="#deets">Teams</Nav.Link>
      <Nav.Link eventKey={2} href="#foot">
        Contact Us
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <Navbar.Brand href="/login" ><strong>Login</strong></Navbar.Brand>
  </Container>
</Navbar>
       </>
    )
}