import React from 'react';
import Hero from '../../components/Hero/Hero';
import Stats from '../../components/Stats/Stats';
import AllFriends from '../../components/AllFriends/AllFriends';

const Home = () => {
    return (
        <section className='bg-[#F8FAFC] py-20'>
            <Hero />

            <Stats />

            <hr className='max-w-277.5 mx-auto w-9/10 xl:w-111/160 border-[#E9E9E9]' />

            <AllFriends />
        </section>
    );
};

export default Home;