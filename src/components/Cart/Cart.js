import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h1>Selected item: {cart.length}</h1>
            {
                cart.map(tshirt=> <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;