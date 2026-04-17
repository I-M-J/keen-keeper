import React, { useContext } from 'react';
import FriendsContext from '../../contexts/FriendsContext';

const Analytics = () => {
    const { timeline } = useContext(FriendsContext);

    return (
        <section>
            <div className='max-w-277.5 mx-auto w-9/10 xl:w-111/160 py-20 space-y-6'>
                <h2 className='font-bold text-5xl text-black-1F mb-6'>Friendship Analytics</h2>

                <div className='bg-white rounded-lg border border-white drop-shadow-sm p-8'>
                    <h3 className='font-medium text-xl text-green-24'>By Interaction Type</h3>
                </div>
            </div>
        </section>
    );
};

export default Analytics;