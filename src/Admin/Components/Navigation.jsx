import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




function Navigation() {
  return (
   <>

   <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand  href="#home">BC<span className='text-danger'>ted</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="/Products">Products</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item  href="/Signup">Create An Account</NavDropdown.Item>
              <NavDropdown.Item href="/Login">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="/Admin">Admin</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   </> 
    
  )
}

export default Navigation