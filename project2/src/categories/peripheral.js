import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Card from '../card'
import Product from '../cardcontent'

const Peripheral = function(){
    return(
        <>
        <header>
            <h1>SHOP</h1>
            <h2>CPUs</h2>
        </header>
        <div>
            <button className='tablink'><Link to="/categories/cpu">CPUs</Link></button>
            <button className='tablink'><Link to="/categories/gpu">GPUs</Link></button>
            <button className='tablink'><Link to="/categories/motherboard">Mother Boards</Link></button>
            <button className='tablink'><Link to="/categories/peripheral">Peripherals</Link></button>
        </div>
        <main>
            <Card><Product name='Mouse' price='$50'/></Card>
            <Card><Product name='Keyboard' price='$75'/></Card>
            <Card><Product name='Monitor' price='$125'/></Card>
            <Card><Product name='Headphones' price='$80'/></Card>
        </main>
        </>
    )
}

export default Peripheral