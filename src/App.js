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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderFirst />
        <HeaderSecond />
        <HeaderThird />
        {/* <CategoryMenu />
        <Sidebar />
        <Customers />
        <SectionHeadlineCard />
        <Blog /> */}
     <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/category-list" Component={<CategoryList/>} /> */}
      </Routes>
     </Router>
        <Footer />
      </header>
    </div>
  );
}

export default App;
