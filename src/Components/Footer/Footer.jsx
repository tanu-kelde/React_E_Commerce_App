import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import './Footer.css';
 
 export function Footer() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <h6 className="h6">Get in touch</h6>
          <Card.Text className="vagetable mt-3">About Us</Card.Text>
          <Card.Text className="vagetable">Carrers</Card.Text>
          <Card.Text className="vagetable">Press Releases</Card.Text>
          <Card.Text className="vagetable">Blog</Card.Text>
        </div>
        <div className="col-3">
          <h6 className="h6">Connections</h6>
          <Card.Text className="vagetable mt-3">Facebook</Card.Text>
          <Card.Text className="vagetable">Twitter</Card.Text>
          <Card.Text className="vagetable">Instagram</Card.Text>
          <Card.Text className="vagetable">Youtube</Card.Text>
          <Card.Text className="vagetable">Linked in</Card.Text>
        </div>
        <div className="col-3">
          <h6 className="h6">Earnings</h6>
          <Card.Text className="vagetable mt-3">Become an Affiliate</Card.Text>
          <Card.Text className="vagetable">Advertise your product</Card.Text>
          <Card.Text className="vagetable">Sell on Market</Card.Text>
        </div>
        <div className="col-3">
          <h6 className="h6">Account</h6>
          <Card.Text className="vagetable mt-3">Your account</Card.Text>
          <Card.Text className="vagetable">Returns Centre</Card.Text>
          <Card.Text className="vagetable">100 % purchase protection</Card.Text>
          <Card.Text className="vagetable">Chat with us</Card.Text>
          <Card.Text className="vagetable">Help</Card.Text>
        </div>
      </div>
      <div className="row mt-5 footer">
        <h6 className="h6">Product tags</h6>
        <div className="col-1">
          <Button variant="light" >Beans</Button>
        </div>
        <div className="col-1">
          <Button variant="light" >Carrots</Button>
        </div>
        <div className="col-1">
          <Button variant="light" >Apples</Button>
        </div>
        <div className="col-1">
          <Button variant="light" >Garlic</Button>
        </div>
        <div className="col-1">
          <Button variant="light" >Mushrooms</Button>
        </div>
        <div className="col-1">
          <Button variant="light" >Tomatoes</Button>
        </div>
        <div className="col-1">
          <Button variant="light" >Chilli</Button>
        </div>
        <div className="col-1">
          <Button variant="light" >Broccoli</Button>
        </div>
        <div className="col-1">
          <Button variant="light">Watermelons</Button>
        </div>
        <div className="col-1">
          <Button variant="light" >Oranges</Button>
        </div>
        <div className="col-1">
          <Button variant="light" >Bananas</Button>
        </div>
        <div className="col-1">
          <Button variant="light" >Grapes</Button>
        </div>
      </div>
      <div className="row ">
        <div className="col-6 footer">
        <Button variant="light" >Cherries</Button>
        <Button variant="light" >Meat</Button>
        <Button variant="light">Seo tag</Button>
        <Button variant="light" >Fish</Button>
        <Button variant="light" >Seo tag</Button>
        <Button variant="light">Fresh food</Button>
        <Button variant="light" >Lemons</Button>
        </div>
       
      </div>
      <div>
      <Card.Text style={{color:"#575757"}} className="footer mt-3 ">Copyright © 2020 petrbilek.com</Card.Text>
      </div>
    </div>
  );
}


