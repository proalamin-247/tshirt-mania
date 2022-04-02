import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [ornaments, house] = useContext(RingContext);
    return (
        <div>
            <h1>Aynty area</h1>
            <p>house: {house}</p>
            <p><small>gift: {ornaments}</small></p>
        </div>
    );
};

export default Aunty;