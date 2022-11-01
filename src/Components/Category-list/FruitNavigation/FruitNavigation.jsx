import "./FruitNavigation.css";
import Button from 'react-bootstrap/Button';
import {RiLayoutGridLine} from 'react-icons/ri';
import {BsList} from 'react-icons/bs';

export function FruitNavigation() {
  return (
    <>
      <div className="container mt-4 ">
        <p style={{color:"#A9A9A9"}}>
          HomePage / <a style={{color:"black"}}>Fruit and vegetables</a>
        </p>
      </div>
      <div className="container mt-4 fruitANDveg">
        <div className="row">
          <div className="col-6 " >
            <h2>Fruit and vegetables</h2>
          </div>
          <div className="col-6 buttons">
          <Button variant='light'>   <RiLayoutGridLine style={{color:"#6A983C",}}/> Grid View</Button>
          <Button  variant='light' style={{color:"#A9A9A9"}}>  <BsList style={{color:"#A9A9A9",}}/> List View</Button>
          <Button  variant='light' style={{color:"#A9A9A9"}}>   <a style={{color:"#6A983C"}}>117</a> Products</Button>
          </div>
        </div>
      </div>
    </>
  );
}
