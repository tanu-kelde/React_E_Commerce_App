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
import 'primeicons/primeicons.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";

export function HeaderSecond() {
  const baseURL = "https://freshness12.herokuapp.com/product-data?search=cake";
  const [data,setData] =React.useState([]);
  const [searchData, setSearchData] = React.useState(false);

  useEffect(() => {
     axios.get(baseURL).then(response=>{
      console.log(response.data);
      setData(response.data);
      // setSearchData(response.data);
     }).catch(err=>{
      console.log(err);
     })
  }, []);

  const firstExample = {
    size: 25,
    edit: false,
  };


  const HandleSearch=((event)=>{
   let value = event.target.value;
   console.log(value);
   let result=[];
   result=data.filter((result=>{
    console.log(result)
    return result.title.search(value) !== -1;
    console.log(result);
   }))
   setSearchData(result);
  // setData(event.target.value);
  // console.log(event.target.value);
  // if(event.target.value===""){
  //   setSearchData(false);
  // }
  // else {
  //   setSearchData(true);
  // }

  })

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
            <InputGroup className="drop" style={{color:"black"}} onChange={(event)=>HandleSearch(event)}>
           
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
            </Nav>
          </Navbar.Collapse>
        </Container>
   
      </Navbar>
      <div className="container mt-4">
       <div className="row">
     <div className="col-12">
     {data.map((m) => (
              <div key={m["_id"]} className="col-4 mt-5">
                <Card style={{ width: "50rem" }} className="mt-4">
                  <div className="container">
                    <div className="row">
                      <div className="col-4">
                        <Card.Img variant="top" src={m?.image} />
                      </div>
                      <div className="col-4">
                        <Card.Body>
                          <Card.Title
                            style={{ fontWeight: "600", textAlign: "start" }}
                          >
                            {m?.title}
                          </Card.Title>
                          <Card.Text
                            style={{
                              fontSize: "12px",
                              color: "#575757",
                              textAlign: "start",
                            }}
                            className="mt-3"
                          >
                            {m?.discription}
                            <br />
                            <ReactStars
                              {...firstExample}
                              value={m?.rating}
                            />
                            <br />
                            <div
                              className="row mt-3"
                              style={{ color: "#A9A9A9" }}
                            >
                              <div className="col-5">
                                Fresheness <br />
                                Farm <br />
                                Delivery <br />
                                Stock
                              </div>
                              <div className="col-7">
                                <a style={{ color: "#6A983C" }}>
                                  {m.freshness}
                                </a>
                                <br />
                                {m?.farm} <br />
                                {m?.delivery} <br />
                                <a style={{ color: "#6A983C" }}>{m.stock}</a>
                              </div>
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </div>
                      <div className="col-4 mt-3">
                        <Card.Title
                          style={{ fontWeight: "600", textAlign: "start" }}
                        >
                          {m?.price} USD
                        </Card.Title>
                        <Card.Text
                          className="price"
                          style={{ textAlign: "start" }}
                        >
                          48.56
                        </Card.Text>
                        <Card.Text
                          className="text"
                          style={{ textAlign: "start" }}
                        >
                          Free Shipping <br />
                          Delivery in 1 day
                        </Card.Text>
                        <Button
                          style={{
                            color: "white",
                            backgroundColor: "#6A983C",
                            borderColor: "#46760A",
                            fontWeight: "700",
                            marginRight: "90px",
                          }}
                        >
                          Product Detail <BsChevronRight />
                        </Button>
                        <Button
                          variant="light"
                          style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            marginRight: "100px",
                          }}
                        >
                          <AiOutlineHeart />
                          Add to wish list
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
     </div>
       </div>
        </div>
      </div>
  )}



