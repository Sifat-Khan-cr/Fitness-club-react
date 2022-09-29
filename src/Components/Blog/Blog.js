import React from 'react';

const Blog = () => {
    return (
        <div className='text-left mx-auto w-6/12 hidden lg:block'>
            <div className='my-5'>
                <h1 className='text-4xl mb-2'>How does react work?</h1>
                <p className='text-xl'>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.</p>
            </div>
            <div className='my-5'>
                <h1 className='text-4xl'>Props vs State</h1>
                <p className='text-xl'>
                    Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
            </div>
            <div className='my-5'>
                <h1 className='text-4xl'>Uses of useEffect</h1>
                <ol className='text-xl'>
                    <li>Running once on mount: fetch API data
                    </li>
                    <li>Running on state change: validating input field</li>
                    <li> Running on state change: live filtering</li>
                    <li> Running on state change: trigger animation on new array value</li>
                    <li>Running on props change: update paragraph list on fetched API data update</li>
                    <li>Running on props change: updating fetched API data to get BTC updated price</li>
                </ol>
            </div>

        </div >
    );
};

export default Blog;