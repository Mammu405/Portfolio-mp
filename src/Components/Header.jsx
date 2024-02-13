import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container className='nav-container nav-logo' fluid>
        <Navbar.Brand className='mx-5 px-5 fs-2 logo text-warning' href="/">MUHAMMED</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className='fs-5' id="navbarScroll">
          <Nav
            className="me-auto my-3 my-lg-0 nav-menu"
            style={{ maxHeight: '100px',marginLeft:'600px'}}
            navbarScroll
          >
            <Nav.Link className='pe-4 nav-links nav-item text-light' href="/">Home</Nav.Link>
            <Nav.Link className='pe-4 nav-links nav-item text-light' href="/about">About</Nav.Link>
            <Nav.Link className='pe-4 nav-links nav-item text-light' href="/project">Projects</Nav.Link>
            <Nav.Link className='pe-4nav-links nav-item text-light' href="/skills">Skills</Nav.Link>
            <Nav.Link className=' nav-links nav-item text-light' href="/contact">Contact</Nav.Link>


     
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header