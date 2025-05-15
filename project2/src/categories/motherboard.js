import React from 'react'
import '../App.css'
import Card from '../card'
import Product from '../cardcontent'
import Shopnavbars from '../shopnavbars'

const Motherboard = function(){
    return(
        <>
        <header>
            <h1>SHOP</h1>
            <h2>Mother Boards</h2>
        </header>
        <div>
            <Shopnavbars/>
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