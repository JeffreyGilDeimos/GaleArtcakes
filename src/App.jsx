import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import Cake from "./components/pages/Cake";
import About from "./components/pages/About";
import Cart from "./components/pages/Cart";
import Login from "./components/pages/authentication/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cakes" element={<Menu />} />
        <Route path="/cake/:id" element={<Cake />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
