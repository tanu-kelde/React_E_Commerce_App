import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "primeicons/primeicons.css";
import { BsChevronRight } from "react-icons/bs";
import './SectionHeadlineCard.css';
import { logo, stock, natural } from "../../../assets/images";
import { Blog } from "../Blog";

export function SectionHeadlineCard() {
  
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <h6 className="h6">Section Headline</h6>
          </div>
          <div className="col-6">
            <Button variant="light" className="fifthContainerButton">
              Button <BsChevronRight />
            </Button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-3">
            {/* {
        post.map((m)=>{
          <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={m?.image} />
          <Card.Body>
            <Card.Title className="title">{m?.title}</Card.Title>
            <Card.Text className="description">
              {m?.discription}
            </Card.Text>
            <Button variant="light">{m?.price} USD</Button>
            <Button className="buyNow">Buy Now</Button>
          </Card.Body>
        </Card>
        })
       } */}
          </div>
        </div>
        <div className="row mt-5  ">
          <div className="col-3">
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
          <div className="col-3">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={stock} />
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
          <div className="col-3">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title className="title">Product Title</Card.Title>
                <Card.Text className="description">
                  Space for a small product description
                </Card.Text>
                <Button variant="light">1.12 USD</Button>
                <Button className="buyNow">Buy Now</Button>
                <p className="price">48.56</p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={stock} />
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
   {/* <Blog /> */}
    </>
  );
}

