import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "primeicons/primeicons.css";

export function HeaderFirst() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container className="mt-3">
          <Navbar.Brand href="/" style={{ color: "#6A983C" }}>
            Chat with us
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" style={{ color: "black" }}>
                +420 366 775 664
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "black" }}>
                info@freshnesecom.com
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="" style={{ color: "#6A983C" }}>
                Blog
              </Nav.Link>
              <Nav.Link href="" style={{ color: "#6A983C" }}>
                About us
              </Nav.Link>
              <Nav.Link href="" style={{ color: "#6A983C" }}>
                Careers
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}


