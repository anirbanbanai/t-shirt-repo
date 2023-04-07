import React from 'react';
import Myself from '../Myself/Myself';
import Brither from '../Brother/Brither';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
    return (
        <div className='border-2 p-2 rounded-xl'>
            <h2>Father</h2>
            <section className='flex'>
                <Myself ring={ring}></Myself>
                <Brither></Brither>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;