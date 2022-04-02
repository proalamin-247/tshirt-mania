import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = ({ house }) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h1>Aynty area</h1>
            <p>house: {house}</p>
            <p><small>gift: {ring}</small></p>
        </div>
    );
};

export default Aunty;