import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../T-shiert/Tshirt';
import Card from '../Card/Card';
import  { Toaster, toast } from 'react-hot-toast';

const Home = () => {
    const shirt = useLoaderData();
    const [cart, setCart] = useState([]);
    // console.log(shirt)

    const handleAddToCart = shirt => {
        const exixs = cart.find(ts => ts._id === shirt._id);
        if (exixs) {
         toast('You have added t shirt')
        }
        else {

            const newCart = [...cart, shirt];
            setCart(newCart)
        }
    }

    const removeCart = id => {
        const remining = cart.filter(ts => ts._id !== id)
        setCart(remining)
    }

    return (
         <>
            <h2 className='text-2xl font-bold'>This is Home :{shirt.length}</h2>
        <div className='grid grid-cols-3'>
           
            <div className='col-span-2 grid  md:grid-cols-2 lg:grid-cols-3 gap-3 '>
                {
                    shirt.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className=''>
                <Card cart={cart} removeCart={removeCart}></Card>
            </div>
        </div>
         </>
    );
};

export default Home;