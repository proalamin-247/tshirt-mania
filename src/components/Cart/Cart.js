import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart}) => {

    // coditional option
    // 1. element variable
    let command;
    if(cart.length === 0){
        command = <p>add some item</p>
    }
    else if(cart.length === 1){
        command=<p>1 item added, add more..</p>
    }
    else(
        command = <p><small>Thanks to adding</small></p>
    )

    // 2. ternary operator = condition ? true : false
    // 3. && Operator (shorthand)
    // 4. || Operator (shorthand)


    return (
        <div>
            <h1>Selected item: {cart.length}</h1>
            {
                cart.map(tshirt=> <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
                    </p>)
            }
            {cart.length === 0 || <p>okk more add more add</p>}
            {cart.length === 3 && <p>3 item added ok!</p>}
            {/* {command} */}
            {cart.length !== 4 ? <p>keep adding</p> : <button>Remove all</button>} {/* ternary operator */}
            {cart.length > 0 && <button>buy now</button>}
        </div>
    );
};

export default Cart;