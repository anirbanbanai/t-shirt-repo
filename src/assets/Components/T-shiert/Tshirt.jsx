import React from 'react';

const Tshirt = ({tshirt , handleAddToCart}) => {
    console.log(tshirt);
    const {name , picture , price  , index , gender} = tshirt;
    return (
        <div className='border-2 p-4 bg-red-100 rounded-xl'>
            <img className='w-[250px] h-[200px] mx-auto' src={picture} alt="" />
            <h2 className='text-xl font-semibold'>{name}</h2>
            <h2 className='text-xl font-semibold'>Price : ${price}</h2>
            <button onClick={()=>handleAddToCart(tshirt)} className='bg-orange-400 p-2 rounded-xl'>buy now</button>
        </div>
    );
};

export default Tshirt;