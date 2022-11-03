import Form from "react-bootstrap/Form";
import "./GridCard.css";
import { CDBSidebar, CDBSidebarFooter } from "cdbreact";
import { AiFillStar } from "react-icons/ai";
import { Slider } from "@mui/material";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsChevronRight } from "react-icons/bs";
import {AiOutlineHeart} from 'react-icons/ai';
import { stock,logo } from "../../../../assets/images";
import {BsChevronDown} from 'react-icons/bs'

export function GridCard(){
    return (
        <>
          <div className="container mt-5 " style={{'marginLeft':'300px'}}>
        <div className="row">
          <div className="col-9">
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
          </div>
          </div>
      
          </div>
        </div>
      </div>
        </>
    )
}