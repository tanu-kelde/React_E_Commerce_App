import React from "react";
import Button from "react-bootstrap/Button";
import "primeicons/primeicons.css";
import { BsChevronRight } from "react-icons/bs";
import './Customers.css';


export function Customers() {
    return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <h6 className="h6">Our customer says</h6>
          </div>
          <div className="col-6">
            <Button variant="light" className="fifthContainerButton">
              Button <BsChevronRight />
            </Button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-3 para">
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula.
            </p>
            <p className="name">Name and Surname</p>
          </div>
          <div className="col-3 para">
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula.
            </p>
            <p className="name">Name and Surname</p>
          </div>
          <div className="col-3 para">
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula.
            </p>
            <p className="name">Name and Surname</p>
          </div>
          <div className="col-3 para">
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula.
            </p>
            <p className="name">Name and Surname</p>
          </div>
        </div>
      </div>
    </>
  );
}
