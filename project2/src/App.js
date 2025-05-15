import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// local files
import Home from './home';
import Shop from './shop';
import Navbars from './navbars';
import Footer from './footer';
import CPU from './categories/cpu';
import GPU from './categories/gpu';
import Motherboard from './categories/motherboard';
import Peripheral from './categories/peripheral';
import About from './about';
import Cart from './cart';

// reference lab13 if there are issues

function App() {
  return (
    <>
    <h1>Computer Parts Store (NAME WIP)</h1> 

      <BrowserRouter>
      <header>
        <Navbars/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/>}/>
          
          <Route path='/categories/cpu' element={<CPU/>}/>
          <Route path='/categories/gpu' element={<GPU/>}/>
          <Route path='/categories/motherboard' element={<Motherboard/>}/>
          <Route path='/categories/peripheral' element={<Peripheral/>}/>
        </Routes>
      </main>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
