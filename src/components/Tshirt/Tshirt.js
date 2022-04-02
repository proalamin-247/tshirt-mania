import React from 'react';
import './Tshirt.css'

const Tshirt = (props) => {
    const { name, picture, price, id} = props.tshirt;
    return (
        <div>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>${price}</p>
        </div>
    );
};

export default Tshirt;