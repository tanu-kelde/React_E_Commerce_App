import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "primeicons/primeicons.css";
import { BsChevronRight } from "react-icons/bs";
import { logo, stock, natural } from "../../../assets/images";
import { BsSquare } from "react-icons/bs";
import './Blog.css';

export function Blog() {

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <h6 className="h6">Read our Blog post</h6>
          </div>
          <div className="col-6">
            <Button variant="light" className="fifthContainerButton">
              Go to Blog <BsChevronRight />
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-4 cardColor">
            <Card.Text className="vagetable">Dinner tips</Card.Text>
            <Card
              style={{ width: "18rem", height: "150px" }}
              className="blogCard"
            >
              <Card.Body className="cardBody">
                <Card.Text
                  className="descriptionlast"
                  style={{ color: "white" }}
                >
                  Our chef tips for a great and tasty dinner ready in 20 minutes
                </Card.Text>
                <p className="paragraph" style={{ color: "white" }}>
                  Author 17.6.2020
                </p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            <Card.Img variant="top" src={stock} />
            <Card.Text className="vagetable">Vagetable</Card.Text>
            <Card.Text className="descriptionlast">
              Which vegetable your family will love and want’s eat each day
            </Card.Text>
            <p className="paragraph2">Author 15.6.2020</p>
          </div>
          <div className="col-3">
            <Card.Text>
              Salat is kinda good start to your morning routines
            </Card.Text>
            <p className="paragraph2">Author 15.6.2020</p>
            <Card.Text className="mt-5">
              Salat is kinda good start to your morning routines
            </Card.Text>
            <p className="paragraph2">Author 15.6.2020</p>
            <Card.Text className="mt-5">
              Salat is kinda good start to your morning routines
            </Card.Text>
            <p className="paragraph2">Author 15.6.2020</p>
          </div>
          <div className="col-2 mt-5">
            <span className=" mt-4 icons" style={{ marginTop: "30px" }}>
              <BsSquare size={70} />
              <br />
            </span>
            <br></br>
            <span className="mt-5 icons">
              <BsSquare size={70} />
              <br />
            </span>
            <br></br>
            <span className="mt-5 icons">
              <BsSquare size={70} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
