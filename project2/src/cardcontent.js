import React from 'react'
import './App.css'

const Product = function(props){
    const handleAdd = () => {
        props.onAddToCart({
            name: props.name,
            price: props.price,
            image: props.image,
            quantity: 1
        });
    };
    return(
        <>
            <section className="product">
                <img className='image' src={props.image}/>
                <div className='productname'>
                    <p>{props.name}</p>
                </div>
                <div className="productprice">
                    <p>${props.price}</p>
                </div>


            </section>
        </>
    )
}

export default Product