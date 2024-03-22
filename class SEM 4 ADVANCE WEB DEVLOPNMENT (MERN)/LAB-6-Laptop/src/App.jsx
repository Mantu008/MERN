import "./App.css";
import Hadder from "./component/Hadder";
import { Routes, Route } from "react-router";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import MyCart from "./component/MyCart";
import Login from "./component/Login";
import { useState } from "react";

function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <div>
        <Hadder />
        <Routes>
          <Route
            path="/"
            element={<Home setCartData={setCartData} cartData={cartData} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mycart" element={<MyCart cartData={cartData} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
