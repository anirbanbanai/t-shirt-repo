import React from 'react';

const Card = ({ cart, removeCart }) => {
    return (
        <div>
            <h2 className='text-3xl'>Order summery : {cart.length}</h2>
            {
                cart.map(m => <p
                    key={m._id}
                >{m.name}
                    <button className='bg-red-500 px-3 rounded-xl ml-3' onClick={()=>removeCart(m._id)}>X</button>

                </p>)
            }
        </div>
    );
};

export default Card;