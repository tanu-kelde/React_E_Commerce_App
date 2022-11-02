import Button from "react-bootstrap/Button";
import { RiLayoutGridLine } from "react-icons/ri";
import { BsList } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";
import { BsRecordCircleFill } from "react-icons/bs";
import { FiSquare } from "react-icons/fi";

export function Filter() {
  return (
    <>
      <div className="container mt-4 ">
        <Button className="filterButton" variant="light">
          <Button variant="light">
            <BsCircle /> Filter Text{" "}
          </Button>
          <Button variant="light">
            <BsRecordCircleFill /> Filter Text
          </Button>
        </Button>
        <Button variant="light" className="filterButtonSecond">
          <Button variant="light">
            <FiSquare style={{ color: "#A9A9A9" }} /> Filtre
          </Button>
          <Button variant="light"> Nbm</Button>
        </Button>
        {/* <Button  className='filterButton' variant='light'><BsCircle /> Filter Text  <BsRecordCircleFill />  Filter Text</Button> */}
      </div>
    </>
  );
}
