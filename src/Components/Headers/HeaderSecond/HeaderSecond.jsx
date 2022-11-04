import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import "primeicons/primeicons.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { BsFillPersonFill } from "react-icons/bs";
import {BsFillCartFill} from 'react-icons/bs';
import './HeaderSecond.css';
import { Badge } from 'primereact/badge';
import 'primeicons/primeicons.css';

export function HeaderSecond() {
  return (
    <div>
      <Navbar
        expand="lg"
        bg="light"
        variant="light"
        style={{ marginTop: "20px" }}
      >
       <Container>
          <Navbar.Brand href="" className="fresh" style={{color:"black"}}>
            Freshnesecoms
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <InputGroup className="drop" style={{color:"black"}}>
           
              <DropdownButton
                variant="outline-secondary"
                title="All Categries"
                id="input-group-dropdown-1"
                
              >
                <Dropdown.Item href="">Bakery</Dropdown.Item>
                <Dropdown.Item href="">Fruits and vegitables</Dropdown.Item>
                <Dropdown.Item href="">Meat and fish</Dropdown.Item>
                <Dropdown.Item href="">Drinks</Dropdown.Item>
                <Dropdown.Divider />  
                <Dropdown.Item href="">Kitchen</Dropdown.Item>
              </DropdownButton>
              <Form.Control
                aria-label="Text input with dropdown button"
                placeholder="Search Products, categories ..."
                
              />
            </InputGroup>
            <Nav className="nav1">
              <Nav.Link href="" className="link">
              <BsFillPersonFill />
              </Nav.Link>
             
              <Nav.Link eventKey={2} href="" className="link" >
                <BsFillCartFill   />
              </Nav.Link>
                {/* <span><i className="pi pi-shopping-bag ml-8 p-text-danger p-overlay-badge" style={{ fontSize: '18px' }}><Badge value="2" severity="danger"></Badge></i></span> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
  )}



