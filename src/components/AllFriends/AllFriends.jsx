import React, { Suspense, use, useContext } from 'react';
import FriendsContext from '../../contexts/FriendsContext';
import FriendCard from './FriendCard/FriendCard';



const FriendsList = ({ friendsPromise }) => {
    const friends = use(friendsPromise);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {
                friends.map(friend => <FriendCard key={friend.id} friend={friend} />)
            }
        </div>
    );
};

const AllFriends = () => {
    const { friendsPromise } = useContext(FriendsContext);

    return (
        <section className='max-w-277.5 mx-auto w-9/10 xl:w-111/160 pt-10'>
            <h2 className='font-semibold text-2xl text-black-1F mb-4'>Your Friends</h2>

            <Suspense fallback={<div className='py-10 flex items-center justify-center'><span className="loading loading-dots loading-xl"></span></div>}>
                <FriendsList friendsPromise={friendsPromise} />
            </Suspense>
        </section>
    );
};

export default AllFriends;