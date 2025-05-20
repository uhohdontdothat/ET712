import React from 'react';
import {Link} from 'react-router-dom';
import'./App.css';

const Navbars = function(){
    return(
        <>
            <nav className='navheader'>
                <section className='iconlink'></section>
                <section className='navlinks'>
                    <button className='tablink'><Link to="/home">Home</Link></button>
                    <button className='tablink'><Link to="/shop">Shop</Link></button>
                    <button className='tablink'><Link to="/about">About</Link></button>
                    <button className='tablink'><Link to="/cart">Cart</Link></button>
                </section>
            </nav>
        </>
    )
}

export default Navbars