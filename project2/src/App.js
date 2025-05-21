import './App.css';
import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// local files
import Home from './home';
import Shop from './shop';
import Navbars from './navbars';
import Footer from './footer';
import CPU from './shop/cpu';
import GPU from './shop/gpu';
import Motherboard from './shop/motherboard';
import Peripheral from './shop/peripheral';
import About from './about';
import Cart from './cart';
import sitelogo from './images/Fluffy_site_logo.png'

// reference lab13 if there are issues

function App() {
const [cart, setCart] = useState([]);
const handleAddToCart = (item) => {
  const found = cart.find(i => i.name === item.name);
  if (found) {
    setCart(cart.map(i => 
      i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
    ));
  } else {
    setCart([...cart, item]);
  }
};

  return (
    <>
      <BrowserRouter>
      <header className='header'>
        <a href='./home'>
          <img  className='sitelogo' src={sitelogo} alt='Site logo'/> 
        </a>
        <div className='headernavbars'>
          <Navbars/>
        </div>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home onAddToCart={handleAddToCart}/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
          
          <Route path='/shop/cpu' element={<CPU onAddToCart={handleAddToCart}/>}/>
          <Route path='/shop/gpu' element={<GPU onAddToCart={handleAddToCart}/>}/>
          <Route path='/shop/motherboard' element={<Motherboard onAddToCart={handleAddToCart}/>}/>
          <Route path='/shop/peripheral' element={<Peripheral onAddToCart={handleAddToCart}/>}/>
        </Routes>
      </main>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
