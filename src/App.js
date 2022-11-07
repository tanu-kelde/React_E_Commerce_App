import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HeaderFirst,
  HeaderSecond,
  HeaderThird,
  CategoryList,
  Footer
} from "../src/Components";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from './Components/Home/home'; 
import Inventory from './Components/Inventory/Inventory'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderFirst />
        <HeaderSecond />
        <HeaderThird />
     <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/inventory" element={<Inventory/>} />
      </Routes>
     </Router>
        <Footer />
      </header>
    </div>
  );
}

export default App;
