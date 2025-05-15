import React from 'react'
import '../App.css'
import Card from '../card'
import Product from '../cardcontent'
import Shopnavbars from '../shopnavbars'

const GPU = function(){
    return(
        <>
        <header>
            <h1>SHOP</h1>
            <h2>GPU</h2>
        </header>
        <div>
            <Shopnavbars/>
        </div>
        <main>
            <Card><Product name='gpu1' price='$1000'/></Card>
            <Card><Product name='gpu2' price='$400'/></Card>
            <Card><Product name='gpu3' price='$350'/></Card>
            <Card><Product name='gpu4' price='$250'/></Card>
        </main>
        </>
    )
}

export default GPU