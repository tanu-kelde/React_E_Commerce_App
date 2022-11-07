// import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./SideBar.css";
import { CDBSidebar, CDBSidebarFooter } from "cdbreact";
import { AiFillStar } from "react-icons/ai";
import { Slider } from "@mui/material";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { stock } from "../../../assets/images";
import { BsChevronDown } from "react-icons/bs";
export function SideBar() {
  return (
    <>
      <div className="container mt-3 cardContain">
        <div className="row">
          <div className="col-3">
            <div
              style={{
                display: "flex",
                height: "200vh",
                overflow: "scroll initial",
                marginleft: "150px",
              }}
              className="mt-3"
            >
              <CDBSidebar textColor="#fff" backgroundColor="white">
                <CDBSidebarFooter>
                  <div className="container mt-4">
                    <h5 style={{ fontWeight: "bold", color: "black" }}>
                      Categories
                    </h5>
                    <p style={{ color: "black" }}>
                      Category Name{" "}
                      <Button
                        variant="light"
                        style={{ color: "#6A983C", marginLeft: "50px" }}
                      >
                        32
                      </Button>
                    </p>
                    <p style={{ color: "black" }}>
                      Category Name{" "}
                      <Button
                        variant="light"
                        style={{ color: "#6A983C", marginLeft: "50px" }}
                      >
                        48
                      </Button>
                    </p>
                    <p style={{ color: "black" }}>
                      Category Name{" "}
                      <Button
                        variant="light"
                        style={{ color: "#6A983C", marginLeft: "50px" }}
                      >
                        32
                      </Button>
                    </p>
                    <p style={{ color: "black" }}>
                      Category Name{" "}
                      <Button
                        variant="light"
                        style={{ color: "#6A983C", marginLeft: "50px" }}
                      >
                        48
                      </Button>
                    </p>
                    <h5
                      style={{ fontWeight: "bold", color: "black" }}
                      className="mt-4"
                    >
                      Brands
                    </h5>
                    <Form className="form mt-4">
                      <Form.Check type="checkbox" className="mt-3">
                        <Form.Check.Input type="checkbox" />
                        <Form.Check.Label className="checkbox">
                          Filtre by brand item
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Check type="checkbox" className="mt-3">
                        <Form.Check.Input type="checkbox" />
                        <Form.Check.Label className="checkbox">
                          Filtre by brand item
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Check type="checkbox" className="mt-3">
                        <Form.Check.Input type="checkbox" />
                        <Form.Check.Label className="checkbox">
                          Filtre by brand item
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Check type="checkbox" className="mt-3">
                        <Form.Check.Input type="checkbox" />
                        <Form.Check.Label className="checkbox">
                          Filtre by brand item
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Check type="checkbox" className="mt-3">
                        <Form.Check.Input type="checkbox" />
                        <Form.Check.Label className="checkbox">
                          Filtre by brand item
                        </Form.Check.Label>
                      </Form.Check>
                    </Form>
                  </div>
                  <h5
                    style={{ fontWeight: "bold", color: "black" }}
                    className="mt-4"
                  >
                    Rating
                  </h5>
                  <Form className="form mt-4">
                    <Form.Check type="checkbox" className="mt-3">
                      <Form.Check.Input type="checkbox" />
                      <Form.Check.Label className="checkbox starFirst">
                        <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                        <AiFillStar /> <AiFillStar />
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check type="checkbox" className="mt-3">
                      <Form.Check.Input type="checkbox" />
                      <Form.Check.Label className="checkbox starFirst">
                        <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                        <AiFillStar />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check type="checkbox" className="mt-3">
                      <Form.Check.Input type="checkbox" />
                      <Form.Check.Label className="checkbox starFirst">
                        <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check type="checkbox" className="mt-3">
                      <Form.Check.Input type="checkbox" />
                      <Form.Check.Label className="checkbox starFirst">
                        <AiFillStar /> <AiFillStar />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check type="checkbox" className="mt-3">
                      <Form.Check.Input type="checkbox" />
                      <Form.Check.Label className="checkbox starFirst">
                        <AiFillStar />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />{" "}
                        <AiFillStar style={{ color: "#A9A9A9" }} />
                      </Form.Check.Label>
                    </Form.Check>
                  </Form>
                  <h5
                    style={{ fontWeight: "bold", color: "black" }}
                    className="mt-5"
                  >
                    Price
                  </h5>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    style={{
                      width: "200px",
                      marginLeft: "15px",
                      color: "#6A983C",
                    }}
                  />
                  <div>
                    <p style={{ color: "black" }}>Min</p>
                    <Button variant="light" className="minMaxButton">
                      0
                    </Button>
                    <Button
                      variant="light"
                      className="minMaxButton"
                      style={{ marginLeft: "50px" }}
                    >
                      000
                    </Button>
                  </div>
                  <div className="mt-5">
                    <Button
                      variant="light"
                      style={{ backgroundColor: "#6A983C", color: "white" }}
                    >
                      Apply
                    </Button>
                    <Button
                      variant="light"
                      style={{ color: "#A9A9A9", marginLeft: "50px" }}
                    >
                      Reset
                    </Button>
                  </div>
                </CDBSidebarFooter>
              </CDBSidebar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
