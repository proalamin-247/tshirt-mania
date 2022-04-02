import React from 'react';
import './Tshirt.css'

const Tshirt = (props) => {
    const {handleAddToCart, tshirt} = props;
    const { name, picture, price, id} = tshirt;
    return (
        <div className='tshirt-card'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>${price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Add to cart</button>
        </div>
    );
};

export default Tshirt;