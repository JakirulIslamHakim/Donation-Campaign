import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div >
                <h2 className='text-6xl font-bold'>Oops sorry !!</h2>
                <h3 className='text-3xl font-semibold text-center my-7'>This page can't find </h3>
                <div className='text-center'>
                    <Link className='btn btn-error text-center' to='/'> Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;