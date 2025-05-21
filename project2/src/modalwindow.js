import React from "react"
import './App.css'

const Modalwindow = function({ onAddToCart, visible, onClose, img, name, price, description } ){
    const [i, setI] = React.useState(1);
    if(!visible) return null;

    return(
        <>
        <section className="modalwindow">
            <div className="window">
                <header className="modalheader">
                    <h3 className="closex" onClick={onClose}>X</h3>
                    <p className="name">{name}</p>
                </header>
                <img className='imagemodal'src={img}/>
                <main className="modalmain">
                    <p>${price}</p>
                    <p>{description}</p>
                </main>
                <footer className='modalfooter'>
                    <input className="input" type="number" value={i} onChange={(e) => setI(Number(e.target.value))} min={1}/>
                    <button onClick={() => {
                    onAddToCart({name, price: Number(price),image: img, quantity: i});onClose();}}>
                        Add to Cart
                    </button>
                </footer>
            </div>
        </section>
        </>
    )
}

export default Modalwindow