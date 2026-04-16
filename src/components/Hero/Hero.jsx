import React from 'react';
import { GoPlus } from 'react-icons/go';

const Hero = () => {
    return (
        <section className='max-w-277.5 mx-auto w-9/10 xl:w-111/160 mb-10'>
            <div className='flex flex-col items-center text-center'>
                <h1 className='font-bold text-5xl text-black-1F mb-4'>Friends to keep close in your life</h1>

                <p className='md:w-3/5 text-gray-64 mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                <button className='btn h-fit px-4 py-3 bg-green-24 text-white font-semibold rounded-sm w-fit'><GoPlus />Add a Friend</button>
            </div>
        </section>
    );
};

export default Hero;