import React from "react"
import './App.css'

const Modalwindow = function({ visible, onClose, name, price }, ){
    if(!visible) return null;

    return(
        <>
        <section className="modalwindow">
            <div className="window">
                <header className="modalheader">
                    <h3 onClick={onClose}>X</h3>
                </header>
                <main className="modalmain">
                    <p>{name}</p>
                    <p>{price}</p>
                </main>
            </div> 
        </section>
        </>
    )
}

export default Modalwindow