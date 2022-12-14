import React, { useState } from 'react';
import Personal from '../Personal/Personal';
import Toast from '../Toast/Toast';

const Info = (props) => {
    const { time } = props;
    const bookMark = JSON.parse(localStorage.getItem('break'));
    const [brea, setBreak] = useState(() => {
        if (bookMark) {
            return bookMark;
        } else {
            return 0;
        }

    });
    const breakHandler = (data) => {
        setBreak(data);
        localStorage.setItem('break', JSON.stringify(data));

    }
    return (
        <div className='lg:mt-10'>
            <Personal></Personal>
            <div className='hidden lg:grid'>
                <h1 className='text-4xl mt-10 mb-5'>Add a break</h1>
                <div className='flex flex-row rounded-lg justify-evenly bg-cyan-100 p-5 mx-10'>
                    <button onClick={() => breakHandler(10)} className='btn btn-circle'>10s</button>
                    <button onClick={() => breakHandler(20)} className='btn btn-circle'>20s</button>
                    <button onClick={() => breakHandler(30)} className='btn btn-circle'>30s</button>
                    <button onClick={() => breakHandler(40)} className='btn btn-circle'>40s</button>
                    <button onClick={() => breakHandler(50)} className='btn btn-circle'>50s</button>
                </div>
            </div>

            <div>
                <h1 className='text-4xl mt-10 mb-5'>Details</h1>
                <div className='flex flex-row justify-evenly items-center rounded-lg bg-cyan-100 p-5 mx-10'>
                    <h1 className='text-2xl block'>Exercise time :</h1>
                    <p className='text-xl'>{time} min</p>

                </div>


            </div>
            <div>
                <h1 className='text-4xl mt-10 mb-5'>Break</h1>
                <div className='flex flex-row justify-evenly items-center rounded-lg bg-cyan-100 p-5 mx-10'>
                    <h1 className='text-2xl block'>Break time :</h1>
                    <p className='text-xl'>{brea} sec</p>

                </div>


            </div>
            <Toast></Toast>

        </div>
    );
};

export default Info;