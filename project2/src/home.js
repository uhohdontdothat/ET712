import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

import Card from './card'
import Product from './cardcontent'
import IntelCorei914900k from './images/IntelCorei9-14900K.jpg'
import AMDRadeonRX7900XT from './images/AMDRadeonRX7900XTXSpeedster.jpg'
import NVIDIAGeForceRTX5090 from './images/ASUSNVIDIAGeForceRTX5090ROGAstral.jpg'
import motherboard2 from './images/motherboard2.jpg'



const Home = function({onAddToCart}){
    return(
        <>
        <header className='home'>
            <h3 className='title'>The parts you need, All in 1 place!</h3>
        </header>
        <div className='backgrounddisplay'>
            <button><Link className='shoplink' to="/shop">Shop Now!</Link></button>
        </div>
        
        <div className='checkit'>
            <h1 className='title'>Check out what we got!</h1>
            <h3>We have various computer parts, from GPUs, to Power Supplies! We even have peripherals that will definetly come in handy. All at the mot affordable prices we could get for you, our dearest customer!</h3>
            <h2>This weeks popular products!</h2>
        </div>
        <div className='products'>
            <Card image={IntelCorei914900k} name='Intel Core i9 14900K' price={420.00} description='The Intel Core i9 14900K features 8 performance cores, 16 efficient cores, and 32 threads with 68MB total cache. It supports 192GB of DDR5-5600 memory and is compatible with Intel B660, B760, H610, H670, H770, Z690, and Z790 chipsets.' onAddToCart={onAddToCart}><Product image={IntelCorei914900k} name='Intel Core i9 14900K' price={420.00} /></Card>
            <Card image={AMDRadeonRX7900XT} name='AMD Radeon RX 7900 XTX Speedster' price={1170.00} description='This GPU comes with 24GB of GDDR6 384-bit memory and supports up to 7680 x 4320 resolution. It runs on PCIe 4.0, has a full-height triple-slot design, and offers DisplayPort 2.1, DisplayPort 1.4a, and HDMI 2.1 connectivity.' onAddToCart={onAddToCart}><Product image={AMDRadeonRX7900XT} name='AMD Radeon RX 7900 XTX Speedster' price={1170.00}/></Card>
            <Card image={NVIDIAGeForceRTX5090} name='ASUS NVIDIA GeForce RTX 5090 ROG Astral' price={3360.00} description='This GPU features 32GB of GDDR7 512-bit memory and supports resolutions up to 7680 x 4320. It uses PCIe 5.0, fits a full-height quad-slot design, and includes DisplayPort 2.1a and HDMI 2.1b outputs.' onAddToCart={onAddToCart}><Product image={NVIDIAGeForceRTX5090} name='ASUS Nivida GeForce RTX 5090 ROG Astral' price={3360.00}/></Card>
            <Card image={motherboard2} name='ASUS X870E-E ROG Strix Gaming WiFi AMD AM5 ATX Motherboard' price={500.00} description='This AMD X870E motherboard supports AMD AM5 Ryzen processors and up to 192GB of dual-channel DDR5 memory across 4 288-pin DIMM slots.' onAddToCart={onAddToCart}><Product image={motherboard2} name='ASUS X870E-E ROG Strix Gaming WiFi AMD AM5 ATX Motherboard' price={500.00}/></Card>
        </div>
        </>
    )
}

export default Home