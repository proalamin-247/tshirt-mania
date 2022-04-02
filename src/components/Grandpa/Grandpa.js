import React, { createContext, useState } from 'react';
import Uncal from '../Uncal/Uncal'
import Father from '../Father/Father'
import Aunty from '../Aunty/Aunty'
import './Grandpa.css'

export const RingContext = createContext('Diamonds');


const Grandpa = () => {
    // const house = 7;
    const [house, sethouse] = useState(1);

    const ornaments = 'Diamonds Ring acah but dita parmu na apadtow aga nija skill develop karo';

    const handaleBuyAhouse = () =>{
        const newHouseCount =house + 1;
        sethouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={ornaments}>
            <div className='grandpa-container'>
                <h1>Sabdhannnn, this is Grandpa area</h1>
                <button onClick={handaleBuyAhouse}>Buy a house</button>
                <p>house: {house}</p>
                <div className='grandpa-details'>
                    <Father house={house} ornaments={ornaments}></Father>
                    <Uncal house={house} ></Uncal>
                    <Aunty house={house} ></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;