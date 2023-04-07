import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='text-purple-700 text-2xl '>
            <Link className='mr-4' to='/'>Home</Link>
            <Link className='mr-4' to='/order'>Order-Review</Link>
            <Link className='mr-4' to='/about'>AboutLInk</Link>
            <Link className='mr-4' to='/contact'>Contact</Link>
        </nav>
    );
}

export default Header;