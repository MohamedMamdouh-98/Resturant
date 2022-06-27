import React from 'react'
import './Navs.css'
import Logo from '../../images/logo.png';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

function Navs() {
    return (
        <Navbar expand="lg" className='shadow-lg sticky-top'>
        <Container>
            <Navbar.Brand>
                <img src={Logo}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto fw-bold ">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About Us</Nav.Link>
                <Nav.Link href="#link">Explorer Food</Nav.Link>
                <Nav.Link href="#link">Review</Nav.Link>
                <Nav.Link href="#link">Faq</Nav.Link>
                </Nav>
                <Nav.Link href="#deets" id="last-nav">+201028561</Nav.Link>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navs