import React, { useContext } from 'react';
import { ringContext } from '../grandpa/Grandpa';

const Special = ({ring}) => {
    const angti = useContext(ringContext)
    return (
        <div className='border-2 p-2 rounded-xl'>
            <h2>Special</h2>
            <h3>Ring : {angti}</h3>
        </div>
    );
};

export default Special;