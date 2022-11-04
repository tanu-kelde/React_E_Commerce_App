import Form from "react-bootstrap/Form";
import "./GridCard.css";
import React from "react";
import { CDBSidebar, CDBSidebarFooter } from "cdbreact";
import { AiFillStar } from "react-icons/ai";
import { Slider } from "@mui/material";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { stock, logo } from "../../../../assets/images";
import { BsChevronDown } from "react-icons/bs";
import axios from "axios";
import { useState, useEffect } from "react";

export function GridCard() {
  const baseURL = "https://freshness12.herokuapp.com/product-category/bakery";

  const [post, setPost] = React.useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get(baseURL);
    setPost(result.data);
    console.log(result.data);
  };
  return (
    <>
      <div className="container mt-5" style={{ marginLeft: "300px" }}>
        <div className="row">
          <div className="col-9">
            {/* <div className="row" style={{ marginLeft: "50px" }}>
            <div className="col-lg-9 mt-3"> */}
        <div className="row" style={{ marginLeft: "20px" }}>
        {post.map((m) => (
          <div key={m["_id"]} className="col-4 mt-5">
            <Card style={{ width: "15rem" ,'height':'23rem'}}>
              <Card.Img variant="top" src={m?.image} style={{width:"240px",height:"180px"}}/>
              <Card.Body>
                <Card.Title className="title1 mt-2">{m?.title}</Card.Title>
                <Card.Text className="description1 mt-2">{m?.discription}</Card.Text>
                <Button variant="light" className="USDButton1 mt-4">
                  {m?.price} USD
                </Button>
                <Button className="buyNow mt-4">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
{/* </div>
</div> */}
              {/* <div className="col-4">
                <Card style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title className="title">Product Title</Card.Title>
                    <Card.Text className="description">
                      Space for a small product description
                    </Card.Text>
                    <Button variant="light">1.12 USD</Button>
                    <Button className="buyNow">Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-4">
                <Card style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title className="title">Product Title</Card.Title>
                    <Card.Text className="description">
                      Space for a small product description
                    </Card.Text>
                    <Button variant="light">1.12 USD</Button>
                    <Button className="buyNow">Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-4">
                <Card style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title className="title">Product Title</Card.Title>
                    <Card.Text className="description">
                      Space for a small product description
                    </Card.Text>
                    <Button variant="light">1.12 USD</Button>
                    <Button className="buyNow">Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-4 mt-5">
                <Card style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title className="title">Product Title</Card.Title>
                    <Card.Text className="description">
                      Space for a small product description
                    </Card.Text>
                    <Button variant="light">1.12 USD</Button>
                    <Button className="buyNow">Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-4 mt-5">
                <Card style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title className="title">Product Title</Card.Title>
                    <Card.Text className="description">
                      Space for a small product description
                    </Card.Text>
                    <Button variant="light">1.12 USD</Button>
                    <Button className="buyNow">Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-4 mt-5">
                <Card style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title className="title">Product Title</Card.Title>
                    <Card.Text className="description">
                      Space for a small product description
                    </Card.Text>
                    <Button variant="light">1.12 USD</Button>
                    <Button className="buyNow">Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-4 mt-5">
                <Card style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title className="title">Product Title</Card.Title>
                    <Card.Text className="description">
                      Space for a small product description
                    </Card.Text>
                    <Button variant="light">1.12 USD</Button>
                    <Button className="buyNow">Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-4 mt-5">
                <Card style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title className="title">Product Title</Card.Title>
                    <Card.Text className="description">
                      Space for a small product description
                    </Card.Text>
                    <Button variant="light">1.12 USD</Button>
                    <Button className="buyNow">Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-4 mt-5">
                <Card style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title className="title">Product Title</Card.Title>
                    <Card.Text className="description">
                      Space for a small product description
                    </Card.Text>
                    <Button variant="light">1.12 USD</Button>
                    <Button className="buyNow">Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-4 mt-5">
                <Card style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title className="title">Product Title</Card.Title>
                    <Card.Text className="description">
                      Space for a small product description
                    </Card.Text>
                    <Button variant="light">1.12 USD</Button>
                    <Button className="buyNow">Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-4 mt-5">
                <Card style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title className="title">Product Title</Card.Title>
                    <Card.Text className="description">
                      Space for a small product description
                    </Card.Text>
                    <Button variant="light">1.12 USD</Button>
                    <Button className="buyNow">Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-4 mt-5">
                <Card style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title className="title">Product Title</Card.Title>
                    <Card.Text className="description">
                      Space for a small product description
                    </Card.Text>
                    <Button variant="light">1.12 USD</Button>
                    <Button className="buyNow">Buy Now</Button>
                  </Card.Body>
                </Card>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
