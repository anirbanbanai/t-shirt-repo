import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Auntry from '../Uncle/Auntry';

export const ringContext = createContext('sgold');
export const moneyCon = createContext(0);

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMOney] = useState(0)
    return (
        <div className='border-2 border-red-600 p-5 m-5'>
            <h2 className='text-3xl font-bold mb-4'>GRandpa</h2>
            <p>Has Money : {money}</p>
            <moneyCon.Provider value={[money , setMOney]}>
                <ringContext.Provider value='golden ring'>
                    <section className='flex justify-between'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Auntry ring={ring}></Auntry>
                    </section>
                </ringContext.Provider>
            </moneyCon.Provider>
        </div>
    );
};

export default Grandpa;
/*
1. create content and export
2. create a provider and pass a value
3. use useContext  to recive

*/ 