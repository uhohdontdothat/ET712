import React from 'react'
import '../App.css'
import Card from '../card'
import Product from '../cardcontent'
import Shopnavbars from '../shopnavbars'

const CPU = function(){
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
            <Card><Product name='cpu1' price='$500'/></Card>
            <Card><Product name='cpu2' price='$250'/></Card>
            <Card><Product name='cpu3' price='$300'/></Card>
            <Card><Product name='cpu4' price='$150'/></Card>
        </main>
        </>
    )
}

export default CPU