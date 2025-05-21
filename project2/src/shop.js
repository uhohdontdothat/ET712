import React from 'react'
import './App.css'

import Shopnavbars from './shopnavbars'

const Shop = function(){
    return(
        <>
        <header>
            <h1 className='title'>SHOP</h1>
            <h2 className='checkit'>What are we looking for today?</h2>
            <h3 className='checkit'>With many categories to pick from, your shopping experience could be endless!</h3>
        </header>
        <div>
            <Shopnavbars/>
        </div>

        </>
    )
}

export default Shop