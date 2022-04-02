import React from 'react';
import SpecialAkjon from '../SpecialAkjon/SpecialAkjon';

const Myself = ({ house }) => {
    return (
        <div>
            <h1>Myself</h1>
            <p>house: {house}</p>
            <SpecialAkjon></SpecialAkjon>
        </div>
    );
};

export default Myself;