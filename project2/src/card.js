import React, { useState } from 'react';
import './App.css'
import Modalwindow from './modalwindow';
import placeholder from './images/placeholder.png'

// reference lab 12. ideally you want to make a function there you use as a card to display the product.
// the modal window would present the same information as the card but with an detailed description
// the modal window would also allow the user to buy more than 1 thing, and yada yada yada.
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
            <main className='cardcontainer'>
                <section className='card' onClick={handleCardClick}>
                    {props.children}
                    <div className='cardfooter'><button>Add to Cart</button></div>
                </section>
            </main>
            <Modalwindow visible={showModal} onClose={handleClose} img={props.image} name={props.name} price={props.price} description={props.description}/>
        </>
    )
}

export default Card