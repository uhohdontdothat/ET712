import React from 'react'
import '../App.css'
import Card from '../card'
import Product from '../cardcontent'
import Shopnavbars from '../shopnavbars'

const Peripheral = function({onAddToCart}){
    return(
        <>
        <header>
            <h1 className='title'>SHOP</h1>
            <h2 className='checkit'>CPUs</h2>
        </header>
        <div>
            <Shopnavbars/>
        </div>
        <main className='products'>
            <Card name='Mouse' price={50} description='words' onAddToCart={onAddToCart}><Product name='Mouse' price={50}/></Card>
            <Card name='Keyboard' price={75} description='words' onAddToCart={onAddToCart}><Product name='Keyboard' price={75}/></Card>
            <Card name='Monitor' price={125} description='words' onAddToCart={onAddToCart}><Product name='Monitor' price={125}/></Card>
            <Card name='Headphones' price={80} description='words' onAddToCart={onAddToCart}><Product name='Headphones' price={80}/></Card>
        </main>
        </>
    )
}

export default Peripheral