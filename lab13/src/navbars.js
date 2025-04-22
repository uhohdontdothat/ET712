import React from 'react';
import {Link} from 'react-router-dom';
import'./App.css';

const Navbars = function(){
    return(
        <>
            <header className='title'><h1>Navigation Bars</h1></header>
            <nav className='navheader'>
                <section className='iconlink'>
                    <a href='https://www.qcc.cuny.edu/' target="_blank">QCC</a>
                </section>
                <section className='navlinks'>
                    <button className='tablink'><Link to="/home">Home</Link></button>
                    <button className='tablink'><Link to="/about">About Us</Link></button>
                    <button className='tablink'><Link to="/contact">Contact Us</Link></button>
                </section>
            </nav>
        </>
    )
}

export default Navbars