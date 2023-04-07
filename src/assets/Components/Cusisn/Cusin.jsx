import React from 'react';
import Friend from '../Friend/Friend';

const Cusin = ({children , hasFriend , ring}) => {
    return (
        <div className='border-2 p-2 rounded-xl'>
            <h2 className='font-bold'>Cusin</h2>
            <p><small>{children}</small></p>
           { hasFriend &&  <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cusin;