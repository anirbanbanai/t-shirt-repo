import React, { useContext } from 'react';
import { moneyCon } from '../grandpa/Grandpa';

const Sister = () => {
    const [money , setMoney] = useContext(moneyCon)
    return (
        <div className='border-2 p-2 rounded-xl'>
            <h2>Sister</h2>
            <button onClick={()=> setMoney(money + 150)}>send 150$</button>
        </div>
    );
};

export default Sister;