import React from 'react';
import {Link} from 'react-router-dom';
import'./App.css';

const Shopnavbars = function(){
    return(
        <>
         <nav className='shopnavheader'>
            <section className='iconlink'></section>
                <section className='shopnavlinks'>
                    <button className='tablink'><Link to="/categories/cpu">CPUs</Link></button>
                    <button className='tablink'><Link to="/categories/gpu">GPUs</Link></button>
                    <button className='tablink'><Link to="/categories/motherboard">Mother Boards</Link></button>
                    <button className='tablink'><Link to="/categories/peripheral">Peripherals</Link></button>
                </section>
        </nav>
        </>
    )
}

export default Shopnavbars