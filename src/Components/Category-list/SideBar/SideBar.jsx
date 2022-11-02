// import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./SideBar.css";
import { CDBSidebar, CDBSidebarFooter } from "cdbreact";
import { AiFillStar } from "react-icons/ai";
import { Slider } from "@mui/material";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsChevronRight } from "react-icons/bs";
import {AiOutlineHeart} from 'react-icons/ai';
import { stock } from "../../../assets/images";
import {BsChevronDown} from 'react-icons/bs'
export function SideBar() {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-3">
            <div
              style={{
                display: "flex",
                height: "200vh",
                overflow: "scroll initial",
                marginleft: "150px",
                // width:"100px"
              }}
              className="mt-3"
            >
              <CDBSidebar textColor="#fff" backgroundColor="white">
                <CDBSidebarFooter>
                  <div className="container mt-4">
                    <h5 style={{ fontWeight: "bold", color: "black" }}>
                      Categories
                    </h5>
                    <p style={{ color: "black" }}>
                      Category Name{" "}
                      <Button
                        variant="light"
                        style={{ color: "#6A983C", marginLeft: "50px" }}
                      >
                        32
                      </Button>
                    </p>
                    <p style={{ color: "black" }}>
                      Category Name{" "}
                      <Button
                        variant="light"
                        style={{ color: "#6A983C", marginLeft: "50px" }}
                      >
                        48
                      </Button>
                    </p>
                    <p style={{ color: "black" }}>
                      Category Name{" "}
                      <Button
                        variant="light"
                        style={{ color: "#6A983C", marginLeft: "50px" }}
                      >
                        32
                      </Button>
                    </p>
                    <p style={{ color: "black" }}>
                      Category Name{" "}
                      <Button
                        variant="light"
                        style={{ color: "#6A983C", marginLeft: "50px" }}
                      >
                        48
                      </Button>
                    </p>
                    <h5
                      style={{ fontWeight: "bold", color: "black" }}
                      className="mt-4"
                    >
                      Brands
                    </h5>
                    <Form className="form mt-4">
                      <Form.Check type="checkbox" className="mt-3">
                        <Form.Check.Input type="checkbox" />
                        <Form.Check.Label className="checkbox">
                          Filtre by brand item
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Check type="checkbox" className="mt-3">
                        <Form.Check.Input type="checkbox" />
                        <Form.Check.Label className="checkbox">
                          Filtre by brand item
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Check type="checkbox" className="mt-3">
                        <Form.Check.Input type="checkbox" />
                        <Form.Check.Label className="checkbox">
                          Filtre by brand item
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Check type="checkbox" className="mt-3">
                        <Form.Check.Input type="checkbox" />
                        <Form.Check.Label className="checkbox">
                          Filtre by brand item
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Check type="checkbox" className="mt-3">
                        <Form.Check.Input type="checkbox" />
                        <Form.Check.Label className="checkbox">
                          Filtre by brand item
                        </Form.Check.Label>
                      </Form.Check>
                    </Form>
                  </div>
                  <h5
                    style={{ fontWeight: "bold", color: "black" }}
                    className="mt-4"
                  >
                    Rating
                  </h5>
                  <Form className="form mt-4">
                    <Form.Check type="checkbox" className="mt-3">
                      <Form.Check.Input type="checkbox" />
                      <Form.Check.Label className="checkbox starFirst">
                        <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                        <AiFillStar /> <AiFillStar />
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check type="checkbox" className="mt-3">
                      <Form.Check.Input type="checkbox" />
                      <Form.Check.Label className="checkbox starFirst">
                        <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                        <AiFillStar />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check type="checkbox" className="mt-3">
                      <Form.Check.Input type="checkbox" />
                      <Form.Check.Label className="checkbox starFirst">
                        <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check type="checkbox" className="mt-3">
                      <Form.Check.Input type="checkbox" />
                      <Form.Check.Label className="checkbox starFirst">
                        <AiFillStar /> <AiFillStar />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check type="checkbox" className="mt-3">
                      <Form.Check.Input type="checkbox" />
                      <Form.Check.Label className="checkbox starFirst">
                        <AiFillStar />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />
                      </Form.Check.Label>
                    </Form.Check>
                  </Form>
                  <h5
                    style={{ fontWeight: "bold", color: "black" }}
                    className="mt-5"
                  >
                    Price
                  </h5>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    style={{
                      width: "200px",
                      marginLeft: "15px",
                      color: "#6A983C",
                    }}
                  />
                  <div>
                    <p style={{ color: "black" }}>Min</p>
                    {/* <Button variant="light" className="minMaxButton"> */}
                      <Button variant="light" className="minMaxButton">0</Button>
                    {/* </Button> */}
                    {/* <p style={{color:"black"}}>Max</p> */}
                    {/* <Button
                      variant="light"
                      className="minMaxButton"
                      style={{ marginLeft: "50px" }}
                    > */}
                      <Button variant="light"  className="minMaxButton"
                      style={{ marginLeft: "50px" }}>000</Button>
                    {/* </Button> */}
                  </div>
                  <div className="mt-5">
                    <Button
                      variant="light"
                      style={{ backgroundColor: "#6A983C", color: "white" }}
                    >
                      Apply
                    </Button>
                    <Button
                      variant="light"
                      style={{ color: "#A9A9A9", marginLeft: "50px" }}
                    >
                      Reset
                    </Button>
                  </div>
                </CDBSidebarFooter>
              </CDBSidebar>
            </div>
          </div>
          <div className="col-8 mt-5">
            <Card style={{ width: "50rem" }} className="mt-4">
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <Card.Img variant="top" src={stock} />
                  </div>
                  <div className="col-4">
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "600" }} >
                        Product Title
                      </Card.Title>
                      <Card.Text style={{ fontSize: "12px", color: "#575757" }} className="mt-3">
                        Space for a small product description
                        <br />
                        <AiFillStar style={{ color: "black" }} />{" "}
                        <AiFillStar style={{ color: "black" }} />
                        <AiFillStar style={{ color: "black" }} />
                        <AiFillStar style={{ color: "black" }} />
                        <AiFillStar style={{ color: "black" }} />
                        <br />
                        <div className="row mt-3" style={{ color: "#A9A9A9" }}>
                          <div className="col-5">
                            Fresheness <br />
                            Farm <br />
                            Delivery <br />
                            Stock
                          </div>
                          <div className="col-7">
                            <a style={{ color: "#6A983C" }}>New</a> (Extra
                            fresh)
                            <br />
                            Grocery Tarm <br />
                            Europe <br />
                            <a style={{ color: "#6A983C" }}>320 pcs</a>
                          </div>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </div>
                  <div className="col-4 mt-3">
                    <Card.Title style={{ fontWeight: "600" }}>
                      36.99 USD
                    </Card.Title>
                    <Card.Text className="price">48.56</Card.Text>
                    <Card.Text className="text">
                      Free Shipping <br />
                      Delivery in 1 day
                    </Card.Text>
                    <Button style={{color:"white",backgroundColor:"#6A983C",borderColor:"#46760A",fontWeight:"700"}}>
                      Product Detail <BsChevronRight />
                    </Button>
                    <Button variant="light" style={{fontSize:"14px",fontWeight:"600"}}>
                      <AiOutlineHeart />Add to wish list
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            <Card style={{ width: "50rem" }} className="mt-4">
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <Card.Img variant="top" src={stock} />
                  </div>
                  <div className="col-4">
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "600" }} >
                        Product Title
                      </Card.Title>
                      <Card.Text style={{ fontSize: "12px", color: "#575757" }} className="mt-3">
                        Space for a small product description
                        <br />
                        <AiFillStar style={{ color: "black" }} />{" "}
                        <AiFillStar style={{ color: "black" }} />
                        <AiFillStar style={{ color: "black" }} />
                        <AiFillStar style={{ color: "black" }} />
                        <AiFillStar style={{ color: "black" }} />
                        <br />
                        <div className="row mt-3" style={{ color: "#A9A9A9" }}>
                          <div className="col-5">
                            Fresheness <br />
                            Farm <br />
                            Delivery <br />
                            Stock
                          </div>
                          <div className="col-7">
                            <a style={{ color: "#6A983C" }}>New</a> (Extra
                            fresh)
                            <br />
                            Grocery Tarm <br />
                            Europe <br />
                            <a style={{ color: "#6A983C" }}>320 pcs</a>
                          </div>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </div>
                  <div className="col-4 mt-3">
                    <Card.Title style={{ fontWeight: "600" }}>
                      36.99 USD
                    </Card.Title>
                    <Card.Text className="price">48.56</Card.Text>
                    <Card.Text className="text">
                      Free Shipping <br />
                      Delivery in 1 day
                    </Card.Text>
                    <Button style={{color:"white",backgroundColor:"#6A983C",borderColor:"#46760A",fontWeight:"700"}}>
                      Product Detail <BsChevronRight />
                    </Button>
                    <Button variant="light" style={{fontSize:"14px",fontWeight:"600"}}>
                      <AiOutlineHeart />Add to wish list
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            <Card style={{ width: "50rem" }} className="mt-4">
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <Card.Img variant="top" src={stock} />
                  </div>
                  <div className="col-4">
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "600" }} >
                        Product Title
                      </Card.Title>
                      <Card.Text style={{ fontSize: "12px", color: "#575757" }} className="mt-3">
                        Space for a small product description
                        <br />
                        <AiFillStar style={{ color: "black" }} />{" "}
                        <AiFillStar style={{ color: "black" }} />
                        <AiFillStar style={{ color: "black" }} />
                        <AiFillStar style={{ color: "black" }} />
                        <AiFillStar style={{ color: "black" }} />
                        <br />
                        <div className="row mt-3" style={{ color: "#A9A9A9" }}>
                          <div className="col-5">
                            Fresheness <br />
                            Farm <br />
                            Delivery <br />
                            Stock
                          </div>
                          <div className="col-7">
                            <a style={{ color: "#6A983C" }}>New</a> (Extra
                            fresh)
                            <br />
                            Grocery Tarm <br />
                            Europe <br />
                            <a style={{ color: "#6A983C" }}>320 pcs</a>
                          </div>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </div>
                  <div className="col-4 mt-3">
                    <Card.Title style={{ fontWeight: "600" }}>
                      36.99 USD
                    </Card.Title>
                    <Card.Text className="price">48.56</Card.Text>
                    <Card.Text className="text">
                      Free Shipping <br />
                      Delivery in 1 day
                    </Card.Text>
                    <Button style={{color:"white",backgroundColor:"#6A983C",borderColor:"#46760A",fontWeight:"700"}}>
                      Product Detail <BsChevronRight />
                    </Button>
                    <Button variant="light" style={{fontSize:"14px",fontWeight:"600"}}>
                      <AiOutlineHeart />Add to wish list
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            <Card style={{ width: "50rem" }} className="mt-4">
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <Card.Img variant="top" src={stock} />
                  </div>
                  <div className="col-4">
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "600" }} >
                        Product Title
                      </Card.Title>
                      <Card.Text style={{ fontSize: "12px", color: "#575757" }} className="mt-3">
                        Space for a small product description
                        <br />
                        <AiFillStar style={{ color: "black" }} />{" "}
                        <AiFillStar style={{ color: "black" }} />
                        <AiFillStar style={{ color: "black" }} />
                        <AiFillStar style={{ color: "black" }} />
                        <AiFillStar style={{ color: "black" }} />
                        <br />
                        <div className="row mt-3" style={{ color: "#A9A9A9" }}>
                          <div className="col-5">
                            Fresheness <br />
                            Farm <br />
                            Delivery <br />
                            Stock
                          </div>
                          <div className="col-7">
                            <a style={{ color: "#6A983C" }}>New</a> (Extra
                            fresh)
                            <br />
                            Grocery Tarm <br />
                            Europe <br />
                            <a style={{ color: "#6A983C" }}>320 pcs</a>
                          </div>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </div>
                  <div className="col-4 mt-3">
                    <Card.Title style={{ fontWeight: "600" }}>
                      36.99 USD
                    </Card.Title>
                    <Card.Text className="price">48.56</Card.Text>
                    <Card.Text className="text">
                      Free Shipping <br />
                      Delivery in 1 day
                    </Card.Text>
                    <Button style={{color:"white",backgroundColor:"#6A983C",borderColor:"#46760A",fontWeight:"700"}}>
                      Product Detail <BsChevronRight />
                    </Button>
                    <Button variant="light" style={{fontSize:"14px",fontWeight:"600"}}>
                      <AiOutlineHeart />Add to wish list
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            <Card style={{ width: "50rem" }} className="mt-4">
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <Card.Img variant="top" src={stock} />
                  </div>
                  <div className="col-4">
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "600" }} >
                        Product Title
                      </Card.Title>
                      <Card.Text style={{ fontSize: "12px", color: "#575757" }} className="mt-3">
                        Space for a small product description
                        <br />
                        <AiFillStar style={{ color: "black" }} />{" "}
                        <AiFillStar style={{ color: "black" }} />
                        <AiFillStar style={{ color: "black" }} />
                        <AiFillStar style={{ color: "black" }} />
                        <AiFillStar style={{ color: "black" }} />
                        <br />
                        <div className="row mt-3" style={{ color: "#A9A9A9" }}>
                          <div className="col-5">
                            Fresheness <br />
                            Farm <br />
                            Delivery <br />
                            Stock
                          </div>
                          <div className="col-7">
                            <a style={{ color: "#6A983C" }}>New</a> (Extra
                            fresh)
                            <br />
                            Grocery Tarm <br />
                            Europe <br />
                            <a style={{ color: "#6A983C" }}>320 pcs</a>
                          </div>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </div>
                  <div className="col-4 mt-3">
                    <Card.Title style={{ fontWeight: "600" }}>
                      36.99 USD
                    </Card.Title>
                    <Card.Text className="price">48.56</Card.Text>
                    <Card.Text className="text">
                      Free Shipping <br />
                      Delivery in 1 day
                    </Card.Text>
                    <Button style={{color:"white",backgroundColor:"#6A983C",borderColor:"#46760A",fontWeight:"700"}}>
                      Product Detail <BsChevronRight />
                    </Button>
                    <Button variant="light" style={{fontSize:"14px",fontWeight:"600"}}>
                      <AiOutlineHeart />Add to wish list
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
         <div className="col-4">
         <a style={{color:"#A9A9A9"}}>Page</a> : 1 2 <a style={{color:"#6A983C"}}>3</a> 4 
         </div>
         <div className="col-4">
          <Button style={{ backgroundColor:"#6A983C",borderColor:"#46760A",color:"white",fontWeight:"700",marginLeft:"70px" }}>See more products <BsChevronDown/></Button>
         </div>
         <div className="col-4">
         <a style={{color:"#6A983C",marginLeft:"170px"}}>360</a> Products
         </div>
        </div>
      </div>
    </>
  );
}
