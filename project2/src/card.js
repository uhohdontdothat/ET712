import React, { useState } from 'react';
import './App.css'
import Modalwindow from './modalwindow';
import placeholder from './images/placeholder.png'

const Card = function(props){
    const [showModal, setShowModal] = useState(false);

    const handleCardClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };
    return(
        <>
            <main className='cardcontainer' onClick={handleCardClick}>
                <section className='card'>
                    {props.children}
                    <div className='cardfooter'>
                        <p>View</p>
                    </div>
                </section>
            </main>
            <Modalwindow visible={showModal} onClose={handleClose} img={props.image} name={props.name} price={props.price} description={props.description} onAddToCart={props.onAddToCart}/>
        </>
    )
}

export default Card