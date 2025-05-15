import React from 'react'
import './App.css'

import Card from './card'
import Product from './cardcontent'

const Home = function(){
    return(
        <>
        <header className='home'>
            <h3>The parts you need, All in 1 place!</h3>
        </header>
        <h2>Shop Now!</h2>
        
        <div>
            <h1>Check out what we got!</h1>
            <p>We have various computer parts, from GPUs, to Power Supplies! We even have peripherals that will definetly come in handy.</p>
        </div>


        <h1>This weeks popular products!</h1>
        <main>
            <Card><Product name='GPU' price='$200.00'/></Card>
        </main>
        </>
    )
}

export default Home