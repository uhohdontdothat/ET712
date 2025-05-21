import React from 'react';
import {Link} from 'react-router-dom';
import'./App.css';

const Navbars = function(){
    return(
        <>
            <nav className='navheader'>
                <section className='iconlink'></section>
                <section className='navlinks'>
                    <button className='tablink'><Link className='tablink' to="/home">Home</Link></button>
                    <button className='tablink'><Link className='tablink' to="/shop">Shop</Link></button>
                    <button className='tablink'><Link className='tablink' to="/about">About</Link></button>
                    <button className='tablink'><Link className='tablink' to="/cart">Cart</Link></button>
                </section>
            </nav>
        </>
    )
}

export default Navbars