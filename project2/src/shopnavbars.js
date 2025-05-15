import React from 'react';
import {Link} from 'react-router-dom';
import'./App.css';

const Shopnavbars = function(){
    return(
        <>
         <nav className='navheader'>
            <section className='iconlink'></section>
                <section className='navlinks'>
                    <button className='tablink'><Link to="/cpu">CPUs</Link></button>
                    <button className='tablink'><Link to="/gpu">GPUs</Link></button>
                    <button className='tablink'><Link to="/motherboard">Mother Boards</Link></button>
                    <button className='tablink'><Link to="/peripheral">Peripherals</Link></button>
                </section>
        </nav>
        </>
    )
}

export default Shopnavbars