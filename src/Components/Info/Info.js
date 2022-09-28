import React from 'react';
import Personal from '../Personal/Personal';

const Info = () => {
    return (
        <div className='mt-10'>
            <Personal></Personal>
            <div>
                <h1 className='text-4xl mt-10 mb-5'>Add a break</h1>
                <div className='flex flex-row rounded-lg justify-evenly bg-cyan-100 p-5 mx-10'>
                    <button className='btn btn-circle'>10s</button>
                    <button className='btn btn-circle'>20s</button>
                    <button className='btn btn-circle'>30s</button>
                    <button className='btn btn-circle'>40s</button>
                    <button className='btn btn-circle'>50s</button>
                </div>
            </div>

            <div>
                <h1 className='text-4xl mt-10 mb-5'>Details</h1>
                <div className='flex flex-row justify-evenly items-center rounded-lg bg-cyan-100 p-5 mx-10'>
                    <h1 className='text-2xl block'>Exercise time :</h1>
                    <p className='text-xl'>00 min</p>

                </div>


            </div>
            <div>
                <h1 className='text-4xl mt-10 mb-5'>Break</h1>
                <div className='flex flex-row justify-evenly items-center rounded-lg bg-cyan-100 p-5 mx-10'>
                    <h1 className='text-2xl block'>Break time :</h1>
                    <p className='text-xl'>00 sec</p>

                </div>


            </div>



        </div>
    );
};

export default Info;