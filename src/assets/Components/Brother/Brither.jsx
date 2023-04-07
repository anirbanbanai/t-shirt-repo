import React, { useContext } from 'react';
import { ringContext } from '../grandpa/Grandpa';

const Brither = () => {
    const rrrr = useContext(ringContext)
    return (
        <div className='border-2 p-2 rounded-xl'>
            <h2>brother</h2>
            <p>{rrrr}</p>
        </div>
    );
};

export default Brither;