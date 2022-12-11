import { BrowserRouter } from "react-router-dom";
import './App.css'
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";


function App() { 

  return (
    <BrowserRouter>
    <div className="App">
    <Header />
     <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/cart" element={<Cart />} />
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
