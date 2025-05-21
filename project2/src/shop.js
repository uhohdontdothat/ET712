import React from 'react'
import './App.css'

import Shopnavbars from './shopnavbars'

const Shop = function(){
    return(
        <>
        <header>
            <h1 className='title'>SHOP</h1>
            <h2 className='checkit'>What are we looking for today?</h2>
        </header>
        <div>
            <Shopnavbars/>
        </div>

        </>
    )
}

export default Shop