import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const SpecialAkjon = () => {
    const [ornaments, house] = useContext(RingContext);
    return (
        <div>
            <h5>SpecialAkjon</h5>
            <p>ornaments: {ornaments}</p>
        </div>
    );
};

export default SpecialAkjon;