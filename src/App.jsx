import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Route, Routes, Link } from 'react-router-dom';
//importing custom components
import Home from './Home';
import About from './About';
import Error from './Error';
import Product from './Product';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <div className="App">
      <div>
        <Link style={{ textDecoration: 'none', paddingLeft: '5px', paddingRight: '5px' }} to="/">Home</Link>
        <Link style={{ textDecoration: 'none', paddingLeft: '5px', paddingRight: '5px' }} to="about">About</Link>
        <Link style={{ textDecoration: 'none', paddingLeft: '5px', paddingRight: '5px' }} to="products">Our Products</Link>
        <Link style={{ textDecoration: 'none', paddingLeft: '5px', paddingRight: '5px' }} to="products/Smart Phone">Smart Phone</Link>
        <Link style={{ textDecoration: 'none', paddingLeft: '5px', paddingRight: '5px' }} to="products/Smart TV's">Smart TV's</Link>
      </div>
      <h1>Welcome</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="products" element={<Product />}>
          <Route path=":productID" element={<ProductDetails />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
