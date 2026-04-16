import React, { Suspense, use, useContext } from 'react';
import FriendsContext from '../../contexts/FriendsContext';



const FriendsList = ({ friendsPromise }) => {
    const friends = use(friendsPromise);
    return (
        <div>
            {
                friends.map(friend => <div key={friend.id}>{friend.id}</div>)
            }
        </div>
    );
};

const AllFriends = () => {
    const { friendsPromise } = useContext(FriendsContext);

    return (
        <section>
            <h2>Your Friends</h2>

            <Suspense fallback={<div>Loading...</div>}>
                <FriendsList friendsPromise={friendsPromise} />
            </Suspense>
        </section>
    );
};

export default AllFriends;