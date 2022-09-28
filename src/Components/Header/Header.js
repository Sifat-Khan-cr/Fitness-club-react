import React from 'react';
import logo from '../../Images/logo.png'

const Header = () => {
    return (
        <div className='flex items-center'>
            <img className='w-32' src={logo} alt="logo here" />
            <h1 className='text-5xl hidden lg:flex text-cyan-500'>Sifat's Fitness Club</h1>
        </div>
    );
};

export default Header;