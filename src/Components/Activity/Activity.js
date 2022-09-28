import React from 'react';

const Activity = (props) => {
    const { name, id, age, image, time } = props.activity;
    return (
        <div className='flex flex-col bg-red-200 '>
            <img src={image} alt="" />
            <h1>name :{name}</h1>
            <h1>Age :{age}</h1>
            <h1>Time :{time} sec</h1>

        </div>
    );
};

export default Activity;