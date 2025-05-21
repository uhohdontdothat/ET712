import React from 'react'
import '../App.css'
import Card from '../card'
import Product from '../cardcontent'
import Shopnavbars from '../shopnavbars'
import mouse from '../images/mouse.jpg'
import keyboard from '../images/keyboard.jpg'
import monitor from '../images/monitor.jpg'
import headphones from '../images/headphones.jpg'

const Peripheral = function({onAddToCart}){
    return(
        <>
        <header>
            <h1 className='title'>SHOP</h1>
            <h2 className='checkit'>Peripherals</h2>
        </header>
        <div>
            <Shopnavbars/>
        </div>
        <main className='products'>
            <Card image={mouse} name='Logitech G G502 HERO Gaming Mouse' price={40.00} description='This wired gaming mouse features a 25,600 DPI Hero 25K optical sensor for precise tracking and is designed for right-handed claw or tip grip users. It includes RGB backlighting, a standard scroll wheel, 11 programmable buttons, and comes in a sleek black finish.' onAddToCart={onAddToCart}><Product image={mouse} name='Logitech G G502 HERO Gaming Mouse' price={40.00}/></Card>
            <Card image={keyboard} name='Keychron V1 Max QMK/VIA Custom Mechanical Keyboard - White' price={100.00} description='This compact mechanical keyboard features 67 standard keys and 12 function keys, offering a streamlined layout for efficient typing. It connects via a wired USB for reliable performance.' onAddToCart={onAddToCart}><Product image={keyboard} name='Keychron V1 Max QMK/VIA Custom Mechanical Keyboard - White' price={100.00}/></Card>
            <Card image={monitor} name='MSI G272QPF E2 27" 2K QHD (2560 x 1440) 180Hz Gaming Monitor' price={200.00} description='This monitor features a 180 Hz refresh rate and 0.5ms response time on an IPS panel with Adaptive Sync support. It offers DisplayPort 1.4 and HDMI 2.0b inputs, plus a 100 x 100 mm VESA mount. The stand is fully adjustable with height, tilt, swivel, and pivot options.words' onAddToCart={onAddToCart}><Product image={monitor} name='MSI G272QPF E2 27" 2K QHD (2560 x 1440) 180Hz Gaming Monitor' price={200.00}/></Card>
            <Card image={headphones} name='HeadBose QuietComfort Ultra Bluetooth Wireless Active Noise Cancelling Headphones - Blackhones' price={500.00} description='These over-ear headphones feature active noise cancellation and offer both wired (3.5mm jack) and Bluetooth wireless connectivity. They come in a sleek black design for comfortable, versatile use.' onAddToCart={onAddToCart}><Product image={headphones} name='HeadBose QuietComfort Ultra Bluetooth Wireless Active Noise Cancelling Headphones - Blackhones' price={500.00}/></Card>
        </main>
        </>
    )
}

export default Peripheral