import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Footer,
  HeaderFirst,
  HeaderSecond,
  HeaderThird,
  CategoryMenu,
  Sidebar,
  Customers,
  SectionHeadlineCard,
  Blog,
} from "../src/Components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderFirst />
        <HeaderSecond />
        <HeaderThird />
        <CategoryMenu />
        <Sidebar />
        <Customers />
        <SectionHeadlineCard />
        <Blog />
        <Footer />
      </header>
    </div>
  );
}

export default App;
