import React from 'react'
import '../App.css'
import Card from '../card'
import Product from '../cardcontent'
import Shopnavbars from '../shopnavbars'
import AMDRadeonRX7900XT from '../images/AMDRadeonRX7900XTXSpeedster.jpg'
import AMDRadeonRX9070Prime from '../images/ASUSAMDRadeonRX9070Prime.jpg'
import NVIDIAGeForceRTX5090 from '../images/ASUSNVIDIAGeForceRTX5090ROGAstral.jpg'
import NVIDIAGeForceRTX3060 from '../images/GigabyteNVIDIAGeForceRTX3060GamingRev2.jpg'

const GPU = function({onAddToCart}){
    return(
        <>
        <header>
            <h1 className='title'>SHOP</h1>
            <h2 className='checkit'>GPUs</h2>
        </header>
        <div>
            <Shopnavbars/>
        </div>
        <main className='products'>
            <Card image={AMDRadeonRX9070Prime} name='ASUS AMD Radeon RX 9070 Prime' price={660.00} description='This GPU features 16GB of GDDR6 256-bit memory and supports up to 7680 x 4320 resolution. It uses PCIe 5.0, fits in a full-height triple-slot design, and includes DisplayPort 2.1a and HDMI 2.1b outputs.ords' onAddToCart={onAddToCart}><Product image={AMDRadeonRX9070Prime} name='ASUS AMD Radeon RX 9070 Prime' price={660.00}/></Card>
            <Card image={AMDRadeonRX7900XT} name='AMD Radeon RX 7900 XTX Speedster' price={1170.00} description='This GPU comes with 24GB of GDDR6 384-bit memory and supports up to 7680 x 4320 resolution. It runs on PCIe 4.0, has a full-height triple-slot design, and offers DisplayPort 2.1, DisplayPort 1.4a, and HDMI 2.1 connectivity.' onAddToCart={onAddToCart}><Product image={AMDRadeonRX7900XT} name='AMD Radeon RX 7900 XTX Speedster' price={1170.00}/></Card>
            <Card image={NVIDIAGeForceRTX5090} name='ASUS NVIDIA GeForce RTX 5090 ROG Astral' price={3360.00} description='This GPU features 32GB of GDDR7 512-bit memory and supports resolutions up to 7680 x 4320. It uses PCIe 5.0, fits a full-height quad-slot design, and includes DisplayPort 2.1a and HDMI 2.1b outputs.' onAddToCart={onAddToCart}><Product image={NVIDIAGeForceRTX5090} name='ASUS Nivida GeForce RTX 5090 ROG Astral' price={3360.00}/></Card>
            <Card image={NVIDIAGeForceRTX3060} name='Gigabyte NVIDIA GeForce RTX 3060 Gaming Rev 2' price={355.00} description='This GPU features 12GB of GDDR6 192-bit memory and supports resolutions up to 7680 x 4320. It uses PCIe 4.0, fits a full-height triple-slot design, and includes DisplayPort 1.4a and HDMI 2.1 outputs.' onAddToCart={onAddToCart}><Product image={NVIDIAGeForceRTX3060} name='Gigabyte NVIDIA GeForce RTX 3060 Gaming Rev 2' price={355.00}/></Card>
        </main>
        </>
    )
}

export default GPU