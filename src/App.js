import { BrowserRouter } from "react-router-dom";
import './App.css'
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {
  const [cart, setCart] = useState([])


  return (
    <BrowserRouter>
    <div className="App">
    <Header />
     <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart}/> } />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
