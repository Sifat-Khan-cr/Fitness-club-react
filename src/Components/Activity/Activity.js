import React from 'react';

const Activity = (props) => {
    const { name, age, image, time } = props.activity;
    const { handleClick } = props;
    return (
        <div className="card bg-base-100 shadow-xl p-2">
            <img src={image} alt="" className="rounded-xl w-full h-64" />

            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Age : {age}</p>
                <p>Time : {time} min</p>
                <button onClick={() => handleClick(time)} className="btn btn-primary bg-cyan-500 w-full">Start Now</button>
            </div>
        </div>
    );
};

export default Activity;