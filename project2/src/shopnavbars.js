import React from 'react';
import {Link} from 'react-router-dom';
import'./App.css';

const Shopnavbars = function(){
    return(
        <>
         <nav className='shopnavheader'>
            <section className='iconlink'></section>
                <section className='shopnavlinks'>
                    <button className='tablink'><Link className='tablink' to="/shop/cpu">CPUs</Link></button>
                    <button className='tablink'><Link className='tablink' to="/shop/gpu">GPUs</Link></button>
                    <button className='tablink'><Link className='tablink' to="/shop/motherboard">Mother Boards</Link></button>
                    <button className='tablink'><Link className='tablink' to="/shop/peripheral">Peripherals</Link></button>
                </section>
        </nav>
        </>
    )
}

export default Shopnavbars