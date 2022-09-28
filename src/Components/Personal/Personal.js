import React from 'react';
import pic from '../../Images/pic.jpg'


const Personal = () => {
    return (
        <div>
            <img className='rounded-full w-40 mx-auto mb-5' src={pic} alt="" />
            <h1 className='text-5xl text-bold mb-1'>Sifat Khan</h1>
            <p className='text-xl'>Gazipur,Bangladesh</p>

        </div>
    );
};

export default Personal;