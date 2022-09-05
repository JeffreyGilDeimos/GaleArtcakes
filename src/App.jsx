import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
