import React from 'react'
import './App.css'

import Card from './card'
import Product from './cardcontent'
import Shopnavbars from './shopnavbars'
import CPU from './categories/cpu';
import { Link } from 'react-router-dom';

const Shop = function(){
    return(
        <>
        <header>
            <h1>SHOP</h1>
            <h2>What are we looking for?</h2>
        </header>
        <div>
            <button className='tablink'><Link to="/categories/cpu">CPUs</Link></button>
            <button className='tablink'><Link to="/categories/gpu">GPUs</Link></button>
            <button className='tablink'><Link to="/categories/motherboard">Mother Boards</Link></button>
            <button className='tablink'><Link to="/categories/peripheral">Peripherals</Link></button>
        </div>

        </>
    )
}

export default Shop