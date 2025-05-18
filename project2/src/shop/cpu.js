import React from 'react'
import '../App.css'
import Card from '../card'
import Product from '../cardcontent'
import Shopnavbars from '../shopnavbars'
import placeholder from '../images/placeholder.png'

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
        <main className='products'>
            <Card image={placeholder} name='cpu1' price='$500' description='words'><Product image={placeholder} name='cpu1' price='$500'/></Card>
            <Card name='cpu2' price='$250'><Product name='cpu2' price='$250'/></Card>
            <Card name='cpu3' price='$300'><Product name='cpu3' price='$300'/></Card>
            <Card name='cpu4' price='$150'><Product name='cpu4' price='$150'/></Card>
        </main>
        </>
    )
}

export default CPU