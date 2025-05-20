import React from 'react'
import '../App.css'
import Card from '../card'
import Product from '../cardcontent'
import Shopnavbars from '../shopnavbars'

const Motherboard = function({onAddToCart}){
    return(
        <>
        <header>
            <h1 className='title'>SHOP</h1>
            <h2 className='checkit'>Mother Boards</h2>
        </header>
        <div>
            <Shopnavbars/>
        </div>
        <main className='products'>
            <Card name='motherboard1' price={500} description='words' onAddToCart={onAddToCart}><Product name='motherboard1' price={500}/></Card>
            <Card name='motherboard2' price={250} description='words' onAddToCart={onAddToCart}><Product name='motherboard2' price={250}/></Card>
            <Card name='motherboard3' price={300} description='words' onAddToCart={onAddToCart}><Product name='motherboard3' price={300}/></Card>
            <Card name='motherboard4' price={150} description='words' onAddToCart={onAddToCart}><Product name='motherboard4' price={150}/></Card>
        </main>
        </>
    )
}

export default Motherboard