import React, { useContext } from 'react';
import Cusin from '../Cusisn/Cusin';
import { ringContext } from '../grandpa/Grandpa';

const Auntry = ({ring}) => {
    const eee = useContext(ringContext)
    return (
        <div className='border-2 p-2 rounded-xl'>
            <h1>Aunty</h1>
            <section className='flex'>
                <Cusin>Abir</Cusin>
                <Cusin hasFriend={true} ring={ring}>Nibir</Cusin>
                <Cusin eee={eee}>Saloni</Cusin>
            </section>
        </div>
    );
};

export default Auntry;