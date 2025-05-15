import React from 'react';
import './App.css'

// reference lab 12. ideally you want to make a function there you use as a card to display the product.
// the modal window would present the same information as the card but with an detailed description
// the modal window would also allow the user to buy more than 1 thing, and yada yada yada.
const Card = function(props){
    return(
        <>
            <main className='cardcontainer'>
                <section className='card'>
                    {props.children}
                    <div className='cardfooter'><p>Add to Cart</p></div>
                </section>
            </main>
        </>
    )
}

export default Card