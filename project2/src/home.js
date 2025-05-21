import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

import Card from './card'
import Product from './cardcontent'

const Home = function(){
    return(
        <>
        <header className='home'>
            <h3 className='title'>The parts you need, All in 1 place!</h3>
        </header>
        <div className='backgrounddisplay'>
            <button><Link className='shoplink' to="/shop">Shop Now!</Link></button>
        </div>
        
        <div className='checkit'>
            <h1 className='title'>Check out what we got!</h1>
            <h3>We have various computer parts, from GPUs, to Power Supplies! We even have peripherals that will definetly come in handy. All at the mot affordable prices we could get for you, our dearest customer!</h3>
            <h2>This weeks popular products!</h2>
        </div>
        <div>
            <Card><Product name='GPU' price='$200.00'/></Card>
        </div>
        </>
    )
}

export default Home