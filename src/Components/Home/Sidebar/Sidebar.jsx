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
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div
              style={{
                display: "flex",
                height: "90vh",
                overflow: "scroll initial",
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
                    <h6 className="h6" style={{ marginRight: "110px" }}>
                      Best Selling Products
                    </h6>
                  </div>

                  <div
                    style={{
                      color: "#6A983C",
                      textAlign: "start",
                      marginLeft: "10px",
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
                    style={{ border: " black", marginRight: "110px" }}
                    className="mt-5 h6"
                  >
                    More Products <BsChevronRight />{" "}
                  </Button>

                  <h6
                    className="h6 mt-5"
                    style={{ color: "black", marginRight: "110px" }}
                  >
                    Bestfrom Farmers
                  </h6>
                  <div
                    style={{
                      color: "#6A983C",
                      textAlign: "start",
                      marginLeft: "10px",
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
                    style={{ border: " black", marginRight: "110px" }}
                    className="mt-5 h6"
                  >
                    More Products <BsChevronRight />{" "}
                  </Button>
                </CDBSidebarFooter>
              </CDBSidebar>
            </div>
          </div>
          <div className="col-lg-9 mt-3">
            <div className="row" style={{ marginLeft: "20px" }}>
              {post.map((m) => (
                <div key={m["_id"]} className="col-4 mt-5">
                  <Card style={{ width: "15rem", height: "23rem" }}>
                    <Card.Img
                      variant="top"
                      src={m?.image}
                      style={{ width: "240px", height: "180px" }}
                    />
                    <Card.Body>
                      <Card.Title className="title mt-2">{m?.title}</Card.Title>
                      <Card.Text className="description mt-2">
                        {m?.discription}
                      </Card.Text>
                      <Button variant="light" className="USDButton mt-4">
                        {m?.price} USD
                      </Button>
                      <Button className="buyNow mt-4">Buy Now</Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
