import React from "react";
import Button from "react-bootstrap/Button";
import "primeicons/primeicons.css";
import { BsChevronRight } from "react-icons/bs";
import { Sidebar } from "../Sidebar";

export function CategoryMenu() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <h6 className="h6">Category Menu</h6>
            <div style={{ color: "#6A983C" }}>
              <u>
                <a>Bakery</a>
              </u>
              <br />
              <u>
                <a>Fruits and vegitables</a>
              </u>
              <br />
              <u>
                <a>Meat and fish</a>
              </u>
              <br />
              <u>
                <a>Drinks</a>
              </u>
              <br />
              <u>
                <a>Kitchen</a>
              </u>
            </div>
            <Button
              variant="light"
              style={{ border: " black" }}
              className="mt-5 h6"
            >
              More categories <BsChevronRight />{" "}
            </Button>
          </div>
          <div className="col-4">
            <a style={{ color: "#6A983C" }}>Banner subfocus</a>
            <h5 className="mt-3 heading">Space for heading</h5>
            <Button
              style={{ border: "1px solid #6A983C" }}
              className="btn btn-light mt-5"
            >
              {" "}
              Read Recepies <BsChevronRight />{" "}
            </Button>
          </div>
          <div className="col-4">
            <a style={{ color: "#6A983C" }}>Banner subfocus</a>
            <h5 className="mt-3 heading">Space for heading</h5>
            <Button
              style={{ border: "1px solid #6A983C" }}
              className="btn btn-light mt-5"
            >
              {" "}
              Read Recepies <BsChevronRight />{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

