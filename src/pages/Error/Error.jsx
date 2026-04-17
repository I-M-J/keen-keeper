import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <section className='min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center text-center px-4'>

            <h1 className='text-8xl font-black text-green-24 mb-4'>404</h1>

            <p className='text-xl font-semibold text-black-1F mb-2'>Page Not Found</p>

            <p className='text-gray-64 mb-8 max-w-sm'>The page you're looking for doesn't exist or has been moved.</p>

            <Link
                to='/'
                className='px-6 py-2.5 rounded-lg text-white text-sm font-medium bg-green-24 hover:bg-black-1F transition-all duration-200'
            >
                Go Back Home
            </Link>

        </section>
    );
};

export default Error;
