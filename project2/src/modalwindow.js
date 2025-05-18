import React from "react"
import './App.css'

const Modalwindow = function({ visible, onClose, img, name, price, description } ){
    if(!visible) return null;

    return(
        <>
        <section className="modalwindow">
            <div className="window">
                <header className="modalheader">
                    <p className="name">{name}</p>
                    <h3 className="closex" onClick={onClose}>X</h3>
                </header>
                <img className='image'src={img}/>
                <main className="modalmain">
                    <p>{price}</p>
                    <p>{description}</p>
                </main>
            </div>
            <button>Add to Cart</button>
        </section>
        </>
    )
}

export default Modalwindow