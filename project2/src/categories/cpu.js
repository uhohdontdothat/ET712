import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Card from '../card'
import Product from '../cardcontent'

const CPU = function(){
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
            <Card><Product name='cpu1' price='$500'/></Card>
            <Card><Product name='cpu2' price='$250'/></Card>
            <Card><Product name='cpu3' price='$300'/></Card>
            <Card><Product name='cpu4' price='$150'/></Card>
        </main>
        </>
    )
}

export default CPU