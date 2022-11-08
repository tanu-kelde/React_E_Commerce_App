import React from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import "primeicons/primeicons.css";
import { Nav, Navbar } from "react-bootstrap";
import Inventory from "../../Inventory/Inventory";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

export function HeaderThird() {
  // const location = useLocation();

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        style={{ margin: "20px" }}
      >
        <Container className="mt-3">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Inventeroy
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/inventory">
                inventory
              </Dropdown.Item>
              <Dropdown.Item href="">cookies</Dropdown.Item>
              <Dropdown.Item href="">pizza</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Fruit and vegetables
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="">Mangoes</Dropdown.Item>
              <Dropdown.Item href="">Bananas</Dropdown.Item>
              <Dropdown.Item href="">Grapes</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Meat and fish
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="">Meat</Dropdown.Item>
              <Dropdown.Item href="">Fish</Dropdown.Item>
              <Dropdown.Item href="">Chicken</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Drinks
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="">Wine</Dropdown.Item>
              <Dropdown.Item href="">Coffee</Dropdown.Item>
              <Dropdown.Item href="">Juice</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Kitchen
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="">Kettle</Dropdown.Item>
              <Dropdown.Item href="">Toaster</Dropdown.Item>
              <Dropdown.Item href="">Dishwasher</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Special nutrition
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="">Beans</Dropdown.Item>
              <Dropdown.Item href="">Berries</Dropdown.Item>
              <Dropdown.Item href="">Whole Grains</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Baby
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="">Clothing and Layette.</Dropdown.Item>
              <Dropdown.Item href="">Feeding Supplies.</Dropdown.Item>
              <Dropdown.Item href="">Gear and Furniture.</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Pharmacy
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="">
                Acetone 500ml. Item No: TH-06.
              </Dropdown.Item>
              <Dropdown.Item href="">
                ASPRO CLEAR TABLET 24'S. ...
              </Dropdown.Item>
              <Dropdown.Item href="">
                Carbosorb X Activated Charcoal 50g. ...
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  );
}
