const Cart = ({ cart, setCart }) => {
    const removeItem = (name) => {
        setCart(cart.filter(item => item.name !== name));
    };

    const clearCart = () => {
        setCart([]);
    };

    const taxRate = 0.0816;
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    return (
        <>
            <h1 className="title">Cart</h1>
            {cart.map((item, index) => (
                <div key={index} className="cart-item">
                    <img className="image" src={item.image} alt={item.name} />
                    <p>{item.name}     x {item.quantity}</p>
                    <p>${item.price.toFixed(2)}</p>
                    <button className="buttoncart" onClick={() => removeItem(item.name)}>Remove</button>
                </div>
            ))}
            <hr />
            <div className="pricing">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Tax (8.16%): ${tax.toFixed(2)}</p>
            <p>Total: ${total.toFixed(2)}</p>
            <button className="buttoncart" onClick={clearCart}>Clear Cart</button>
            <button className='buttoncart'>Checkout</button>
            </div>
        </>
    );
};

export default Cart;
