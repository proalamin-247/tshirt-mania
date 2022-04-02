import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const SpecialAkjon = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h5>SpecialAkjon</h5>
            <p>ornaments: {ring}</p>
        </div>
    );
};

export default SpecialAkjon;