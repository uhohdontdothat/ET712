import React from 'react'
import '../App.css'
import Card from '../card'
import Product from '../cardcontent'
import Shopnavbars from '../shopnavbars'
import motherboard1 from '../images/motherboard1.jpg'
import motherboard2 from '../images/motherboard2.jpg'
import motherboard3 from '../images/motherboard3.jpg'
import motherboard4 from '../images/motherboard4.jpg'

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
            <Card image={motherboard1} name='MSI X670E MAG Tomahawk WiFi AMD AM5 ATX Motherboard' price={290.00} description='This AMD X670E motherboard supports AMD AM5 Ryzen processors and up to 192GB of dual-channel DDR5 memory across 4 DIMM slots (288-pin).' onAddToCart={onAddToCart}><Product image={motherboard1} name='MSI X670E MAG Tomahawk WiFi AMD AM5 ATX Motherboard' price={290.00}/></Card>
            <Card image={motherboard2} name='ASUS X870E-E ROG Strix Gaming WiFi AMD AM5 ATX Motherboard' price={500.00} description='This AMD X870E motherboard supports AMD AM5 Ryzen processors and up to 192GB of dual-channel DDR5 memory across 4 288-pin DIMM slots.' onAddToCart={onAddToCart}><Product image={motherboard2} name='ASUS X870E-E ROG Strix Gaming WiFi AMD AM5 ATX Motherboard' price={500.00}/></Card>
            <Card image={motherboard3} name='Gigabyte B650 Gaming X AX V2 AMD AM5 ATX Motherboard' price={200.00} description='This AMD B650 motherboard supports AMD AM5 Ryzen processors and up to 192GB of dual-channel DDR5 memory using 4 288-pin DIMM slots.' onAddToCart={onAddToCart}><Product image={motherboard3} name='Gigabyte B650 Gaming X AX V2 AMD AM5 ATX Motherboard' price={200.00}/></Card>
            <Card image={motherboard4} name='ASUS B650M-A Prime AX II AMD AM5 microATX Motherboard' price={170.00} description='This AMD B650 motherboard is compatible with AMD AM5 Ryzen processors and supports up to 192GB of dual-channel DDR5 memory across 4 288-pin DIMM slots.' onAddToCart={onAddToCart}><Product image={motherboard4} name='ASUS B650M-A Prime AX II AMD AM5 microATX Motherboard' price={170.00}/></Card>
        </main>
        </>
    )
}

export default Motherboard