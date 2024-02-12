import './App.css';
import Carousel from './Carousel';
import Navbar from './Navbar';
import Cards from './Cards';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import data from './Data'
import Cart from './Cart'
import React from 'react'

function App() {

  const [cartData, setCartData] = React.useState([])

  const handleCartData = (product) =>{
    setCartData((cartData) => [...cartData,{data:product, quantity: 1} ])
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Carousel/>
        <Routes>
          <Route path="/" element={<Cards data={data} handleCartData={handleCartData}/>}/>
          <Route path="/cart" element={<Cart data={cartData}/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
