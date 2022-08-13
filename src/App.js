import './App.css';
// PAGESs
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Cart from "./pages/Cart"
//  COMPONENTS
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
//  react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Announcement/>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/productlist" element={<ProductList/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
