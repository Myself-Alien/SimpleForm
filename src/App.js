import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Component/Nav";
import About from "./Component/About";
import Home from "./Component/Home";
import Services from "./Component/Services";
import Contact from "./Component/Contact";

function App() {
  function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    return (
      <div>
        <p>Count : {count}</p>
        <button onClick={increment}>Counter</button>
      </div>
    );
  }
  const name = "Js";
  return (
    <BrowserRouter>
      <div>
        <h1 className="heading">Hello React {name}</h1>
        <Nav />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Counter />
      </div>
    </BrowserRouter>
  );
}

export default App;
