import React, { useContext, useState } from 'react';
import Cusin from '../Cusisn/Cusin';
import { moneyCon } from '../grandpa/Grandpa';

const Uncle = () => {
    const [ money , setgMoney ] = useContext(moneyCon)
    return (
        <div className='border-2 p-2 rounded-xl'>
            <h1>Ungcle</h1>
            <button onClick={()=>setgMoney(money + 1000)}>Send 1000$</button>
            {/* <p><small>Grandpa Money : {money}</small></p> */}
            <section className='flex'>
                <Cusin>Nabil</Cusin>
                <Cusin>Nabila</Cusin>
            </section>
        </div>
    );
};

export default Uncle;