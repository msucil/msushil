"use client";

import { Button, ButtonGroup, Container, Dropdown, DropdownButton, Form, Nav, NavDropdown, Navbar, Offcanvas } from "react-bootstrap";


export default function MainNavBar(){

    return (
        <>
            <Navbar bg="dark" className="mb-3" expand={'lg'}>
              <Container fluid>
                <Navbar.Brand href="#">MSUCIL</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-main-navbar`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-main-navbar`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-main-navbar`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-main-navbar`}>
                      MSUCIL
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1">Home</Nav.Link>
                      <Nav.Link href="#action2">Posts</Nav.Link>
                      <Nav.Link href="#action2">About Me</Nav.Link>
                      
                      <NavDropdown
                        title={<i className='bi bi-moon-stars-fill'/>}
                        id={`offcanvasNavbarDropdown-expand-main-navbar`}
                      >
                        <NavDropdown.Item href="#">
                          <i className="bi bi-moon-stars-fill"/> Dark </NavDropdown.Item>
                        <NavDropdown.Item href="#">
                          <i className="bi bi-sun-fill"/> Light
                        </NavDropdown.Item>
                        <NavDropdown.Item href="">
                          <i className="bi bi-circle-half"/> Auto
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
        </>
    )

}
