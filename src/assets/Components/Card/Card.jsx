import React from 'react';

const Card = ({ cart, removeCart }) => {
    let massage;
    if(cart.length === 0){
        massage =<p>please add some product</p>
    }
    else{
        massage= <div>
            <h2>Boroloxxxx</h2>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length > 1 ? 'text-3xl bg-purple-400' : 'text-3xl bg-red-500'}>Order summery : {cart.length}</h2>
            {
                cart.length > 2 ? <span className='bg-purple-500'>Aro kino</span> : <span>Fopkiraa</span>
            }
            <h2 className=' font-bold'>{massage}</h2>
            {
                cart.map(m => <p
                    key={m._id}
                >{m.name}
                    <button className='bg-red-500 px-3 rounded-xl ml-3' onClick={()=>removeCart(m._id)}>X</button>

                </p>)
            }
            {cart.length=== 2 && <p>dounbblke</p>}
            {
                cart.length === 3 || <h3>tinta to holo na</h3>
            }
        </div>
    );
};

export default Card;

/*

* condition renderaing

1. use if else to set a variable that will contain an element , components
2. ternary oparator : condition? 'for true' : 'for false'
3 . logical && (if the condition is true then the next thing will be displayed)
4 . logical || (if the condition is false then the next thing will be displayed)
*/ 