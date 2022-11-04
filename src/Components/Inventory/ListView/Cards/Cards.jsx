import Form from "react-bootstrap/Form";
import "./Cards.css";
import { CDBSidebar, CDBSidebarFooter } from "cdbreact";
import { AiFillStar } from "react-icons/ai";
import { Slider } from "@mui/material";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsChevronRight } from "react-icons/bs";
import {AiOutlineHeart} from 'react-icons/ai';
import { stock } from "../../../../assets/images";
import {BsChevronDown} from 'react-icons/bs'
export function Cards() {
  return (
    <>
      <div className="container mt-3 contain">
        <div className="row">
          <div className="col-8 mt-5">
            <Card style={{ width: "50rem" }} className="mt-4">
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <Card.Img variant="top" src={stock} />
                  </div>
                  <div className="col-4">
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "600",textAlign:"start" }} >
                        Product Title
                      </Card.Title>
                      <Card.Text style={{ fontSize: "12px", color: "#575757" ,textAlign:"start" }} className="mt-3">
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
                    <Card.Title style={{ fontWeight: "600",textAlign:"start"  }}>
                      36.99 USD
                    </Card.Title>
                    <Card.Text className="price" style={{textAlign:"start" }}>48.56</Card.Text>
                    <Card.Text className="text" style={{textAlign:"start" }}>
                      Free Shipping <br />
                      Delivery in 1 day
                    </Card.Text>
                    <Button style={{color:"white",backgroundColor:"#6A983C",borderColor:"#46760A",fontWeight:"700", marginRight:"90px"}}>
                      Product Detail <BsChevronRight />
                    </Button>
                    <Button variant="light" style={{fontSize:"14px",fontWeight:"600",marginRight:"100px" }}>
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
                      <Card.Title style={{ fontWeight: "600",textAlign:"start"  }} >
                        Product Title
                      </Card.Title>
                      <Card.Text style={{ fontSize: "12px", color: "#575757",textAlign:"start"}} className="mt-3">
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
                    <Card.Title style={{ fontWeight: "600",textAlign:"start"  }}>
                      36.99 USD
                    </Card.Title>
                    <Card.Text className="price" style={{textAlign:"start" }}>48.56</Card.Text>
                    <Card.Text className="text" style={{textAlign:"start" }}>
                      Free Shipping <br />
                      Delivery in 1 day
                    </Card.Text>
                    <Button style={{color:"white",backgroundColor:"#6A983C",borderColor:"#46760A",fontWeight:"700", marginRight:"90px"}}>
                      Product Detail <BsChevronRight />
                    </Button>
                    <Button variant="light" style={{fontSize:"14px",fontWeight:"600",marginRight:"100px"}}>
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
                      <Card.Title style={{ fontWeight: "600",textAlign:"start"  }} >
                        Product Title
                      </Card.Title>
                      <Card.Text style={{ fontSize: "12px", color: "#575757",textAlign:"start"  }} className="mt-3">
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
                    <Card.Title style={{ fontWeight: "600",textAlign:"start"  }}>
                      36.99 USD
                    </Card.Title>
                    <Card.Text className="price" style={{textAlign:"start" }}>48.56</Card.Text>
                    <Card.Text className="text" style={{textAlign:"start" }}>
                      Free Shipping <br />
                      Delivery in 1 day
                    </Card.Text>
                    <Button style={{color:"white",backgroundColor:"#6A983C",borderColor:"#46760A",fontWeight:"700", marginRight:"90px"}}>
                      Product Detail <BsChevronRight />
                    </Button>
                    <Button variant="light" style={{fontSize:"14px",fontWeight:"600",marginRight:"100px"}}>
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
                      <Card.Title style={{ fontWeight: "600",textAlign:"start"  }} >
                        Product Title
                      </Card.Title>
                      <Card.Text style={{ fontSize: "12px", color: "#575757",textAlign:"start"  }} className="mt-3">
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
                    <Card.Title style={{ fontWeight: "600",textAlign:"start"  }}>
                      36.99 USD
                    </Card.Title>
                    <Card.Text className="price" style={{textAlign:"start" }}>48.56</Card.Text>
                    <Card.Text className="text" style={{textAlign:"start" }}>
                      Free Shipping <br />
                      Delivery in 1 day
                    </Card.Text>
                    <Button style={{color:"white",backgroundColor:"#6A983C",borderColor:"#46760A",fontWeight:"700", marginRight:"90px"}}>
                      Product Detail <BsChevronRight />
                    </Button>
                    <Button variant="light" style={{fontSize:"14px",fontWeight:"600",marginRight:"100px"}}>
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
                      <Card.Title style={{ fontWeight: "600",textAlign:"start"  }} >
                        Product Title
                      </Card.Title>
                      <Card.Text style={{ fontSize: "12px", color: "#575757",textAlign:"start"  }} className="mt-3">
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
                    <Card.Title style={{ fontWeight: "600",textAlign:"start" }}>
                      36.99 USD
                    </Card.Title>
                    <Card.Text className="price" style={{textAlign:"start" }}>48.56</Card.Text>
                    <Card.Text className="text" style={{textAlign:"start" }}>
                      Free Shipping <br />
                      Delivery in 1 day
                    </Card.Text>
                    <Button style={{color:"white",backgroundColor:"#6A983C",borderColor:"#46760A",fontWeight:"700", marginRight:"90px"}}>
                      Product Detail <BsChevronRight />
                    </Button>
                    <Button variant="light" style={{fontSize:"14px",fontWeight:"600",marginRight:"100px"}}>
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
                      <Card.Title style={{ fontWeight: "600",textAlign:"start"  }} >
                        Product Title
                      </Card.Title>
                      <Card.Text style={{ fontSize: "12px", color: "#575757" ,textAlign:"start" }} className="mt-3">
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
                    <Card.Title style={{ fontWeight: "600",textAlign:"start"  }}>
                      36.99 USD
                    </Card.Title>
                    <Card.Text className="price" style={{textAlign:"start" }}>48.56</Card.Text>
                    <Card.Text className="text" style={{textAlign:"start" }}>
                      Free Shipping <br />
                      Delivery in 1 day
                    </Card.Text>
                    <Button style={{color:"white",backgroundColor:"#6A983C",borderColor:"#46760A",fontWeight:"700", marginRight:"90px"}}>
                      Product Detail <BsChevronRight />
                    </Button>
                    <Button variant="light" style={{fontSize:"14px",fontWeight:"600",marginRight:"100px"}}>
                      <AiOutlineHeart />Add to wish list
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    
    </>
  );
}
