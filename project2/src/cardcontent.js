import React from 'react'
import './App.css'

const Product = function(props){
    return(
        <>
            <section className="product">
                {/*<img src={props.image}/>*/}
                <div className='productname'>
                    <p>{props.name}</p>
                </div>
                <div className="productprice">
                    <p>{props.price}</p>
                </div>
            </section>
        </>
    )
}

export default Product