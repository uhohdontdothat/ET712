import React from 'react'
import '../App.css'
import Card from '../card'
import Product from '../cardcontent'
import Shopnavbars from '../shopnavbars'
import placeholder from '../images/placeholder.png'
import AMDRyzen77800X3D from '../images/AMDRyzen77800X3D.jpg'
import AMDRyzen57600X from '../images/AMDRyzen57600X.jpg'
import AMDRyzen99950X from '../images/AMDRyzen99950X.jpg'
import IntelCorei914900k from '../images/IntelCorei9-14900K.jpg'

const CPU = function({onAddToCart}){
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
            <Card image={AMDRyzen77800X3D} name='AMD Ryzen 7 7800X3D' price={360.00} description='The AMD Ryzen 7 7800X3D features 8 cores, 16 threads, and 104MB total cache for fast, efficient performance. It supports DDR5-5200 memory and works with AMD A620, B650(E), B840, B850, and X670(E)/X870(E) chipsets.' onAddToCart={onAddToCart}><Product image={AMDRyzen77800X3D} name='AMD Ryzen 7 7800X3D' price={360.00}/></Card>
            <Card image={AMDRyzen57600X} name='AMD Ryzen 5 7600X' price={190.00} description='The AMD Ryzen 5 7600X offers 6 cores, 12 threads, and 38MB of cache for smooth everyday performance. It supports DDR5-5200 memory and is compatible with AMD A620, B650(E), B840, B850, and X670(E)/X870(E) chipsets.' onAddToCart={onAddToCart}><Product image={AMDRyzen57600X} name='AMD Ryzen 5 7600X' price={190.00} /></Card>
            <Card image={IntelCorei914900k} name='Intel Core i9 14900K' price={420.00} description='The Intel Core i9 14900K features 8 performance cores, 16 efficient cores, and 32 threads with 68MB total cache. It supports 192GB of DDR5-5600 memory and is compatible with Intel B660, B760, H610, H670, H770, Z690, and Z790 chipsets.' onAddToCart={onAddToCart}><Product image={IntelCorei914900k} name='Intel Core i9 14900K' price={420.00} /></Card>
            <Card image={AMDRyzen99950X} name='AMD Ryzen 9 9950X' price={500.00} description='The AMD Ryzen 9 9950X delivers high-end performance with 16 cores, 32 threads, and 80MB of cache. It supports up to 192GB of DDR5-5600 memory and works with AMD A620, B650(E), B840, B850, and X670(E)/X870(E) chipsets.' onAddToCart={onAddToCart}><Product image={AMDRyzen99950X} name='AMD Ryzen 9 9950X' price={500.00} /></Card>
        </main>
        </>
    )
}

export default CPU