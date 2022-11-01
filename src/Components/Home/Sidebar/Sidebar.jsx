import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "primeicons/primeicons.css";
import { BsChevronRight } from "react-icons/bs";
import axios from "axios";
import { useState, useEffect } from "react";
import { CDBSidebar, CDBSidebarFooter } from "cdbreact";
import "./Sidebar.css";
import { Customers } from "../Customers";
import { logo } from "../../../assets/images";

export function Sidebar() {
  const baseURL = "https://freshness12.herokuapp.com/user/userdata";

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
      <div
        style={{
          display: "flex",
          height: "90vh",
          overflow: "scroll initial",
          marginleft: "25px",
        }}
        className="mt-5 "
      >
        <CDBSidebar textColor="#fff" backgroundColor="white">
          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div
              className="sidebar-btn-wrapper"
              style={{
                padding: "20px 5px",
                color: "black",
                textAlign: "center",
              }}
            >
              <h6 className="h6">Best Selling Products</h6>
            </div>

            <div
              style={{
                color: "#6A983C",
                textAlign: "start",
                marginLeft: "80px",
              }}
            >
              <u>
                <a>Kitchen</a>
              </u>
              <br />
              <u>
                <a>Meat and fish</a>
              </u>
              <br />
              <u>
                <a>Special nutrision</a>
              </u>
              <br />
              <u>
                <a>Pharmacy</a>
              </u>
              <br />
              <u>
                <a>Baby</a>
              </u>
            </div>
            <Button
              variant="light"
              style={{ border: " black" }}
              className="mt-5 h6"
            >
              More Products <BsChevronRight />{" "}
            </Button>

            <h6 className="h6 mt-5">Bestfrom Farmers</h6>
            <div
              style={{
                color: "#6A983C",
                textAlign: "start",
                marginLeft: "80px",
              }}
            >
              <u>
                <a>Carrots</a>
              </u>
              <br />
              <u>
                <a>Tometoes</a>
              </u>
              <br />
              <u>
                <a>Potetoes</a>
              </u>
              <br />
              <u>
                <a>Chicken</a>
              </u>
              <br />
              <u>
                <a>Pork</a>
              </u>
            </div>
            <Button
              variant="light"
              style={{ border: " black" }}
              className="mt-5 h6"
            >
              More Products <BsChevronRight />{" "}
            </Button>
          </CDBSidebarFooter>
        </CDBSidebar>
        {/* {post.map((m) => (
          <div key={m["_id"]} className="col-3">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={m?.image} />
              <Card.Body>
                <Card.Title className="title">{m?.title}</Card.Title>
                <Card.Text className="description">{m?.discription}</Card.Text>
                <Button variant="light" className="USDButton">
                  {m?.price} USD
                </Button>
                <Button className="buyNow">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
        ))} */}
        <div className="row" style={{ marginLeft: "50px" }}>
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
        </div>
      </div>
    </>
  );
}
