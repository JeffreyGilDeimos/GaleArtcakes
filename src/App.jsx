import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./components/pages/About";
import BuyMenu from "./components/pages/BuyMenu";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import Cart from "./components/pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/About" element={<About />} />
        <Route path="/BuyMenu" element={<BuyMenu />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
