import React from 'react'
import '../App.css'
import Card from '../card'
import Product from '../cardcontent'
import Shopnavbars from '../shopnavbars'

const Peripheral = function(){
    return(
        <>
        <header>
            <h1>SHOP</h1>
            <h2>CPUs</h2>
        </header>
        <div>
            <Shopnavbars/>
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