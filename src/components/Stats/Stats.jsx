import React, { useContext } from 'react';
import FriendsContext from '../../contexts/FriendsContext';

const Stats = () => {
    const { friendsData } = useContext(FriendsContext);

    const statsObjs = [
        {
            title: "Total Friends",
            data: friendsData.length
        },
        {
            title: "On Track",
            data: friendsData.filter(friend => friend.status === "on_track").length
        },
        {
            title: "Need Attention",
            data: friendsData.filter(friend => friend.status === "overdue").length
        },
        {
            title: "Interactions This Month",
            data: 12
        }
    ]

    return (
        <section className='max-w-277.5 mx-auto w-9/10 xl:w-111/160 mb-10'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {statsObjs.map((stats, index) => {
                    return (
                        <div className='bg-white rounded-lg drop-shadow-sm py-8 flex flex-col items-center gap-2 text-center' key={index}>
                            <h2 className='font-semibold text-3xl text-green-24'>{stats.data}</h2>
                            <p className='text-lg text-gray-64'>{stats.title}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Stats;