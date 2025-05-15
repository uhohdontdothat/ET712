import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Card from '../card'
import Product from '../cardcontent'

const Motherboard = function(){
    return(
        <>
        <header>
            <h1>SHOP</h1>
            <h2>Mother Boards</h2>
        </header>
        <div>
            <button className='tablink'><Link to="/categories/cpu">CPUs</Link></button>
            <button className='tablink'><Link to="/categories/gpu">GPUs</Link></button>
            <button className='tablink'><Link to="/categories/motherboard">Mother Boards</Link></button>
            <button className='tablink'><Link to="/categories/peripheral">Peripherals</Link></button>
        </div>
        <main>
            <Card><Product name='motherboard1' price='$500'/></Card>
            <Card><Product name='motherboard2' price='$250'/></Card>
            <Card><Product name='motherboard3' price='$300'/></Card>
            <Card><Product name='motherboard4' price='$150'/></Card>
        </main>
        </>
    )
}

export default Motherboard