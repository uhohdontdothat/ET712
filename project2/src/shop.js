import React from 'react'
import './App.css'

import Shopnavbars from './shopnavbars'

const Shop = function(){
    return(
        <>
        <header>
            <h1>SHOP</h1>
            <h2>What are we looking for?</h2>
        </header>
        <div>
            <Shopnavbars/>
        </div>

        </>
    )
}

export default Shop