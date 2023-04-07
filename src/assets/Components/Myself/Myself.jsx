import React from 'react';
import Special from '../Special/Special';

const Myself = ({ring}) => {
    return (
        <div className='border-2 p-2 rounded-xl'>
            <h2>Myself</h2>
            <Special ring={ring}></Special>
        </div>
    );
};

export default Myself;