import React, { useContext } from 'react';
import FriendsContext from '../../contexts/FriendsContext';
import { useParams } from 'react-router';

const KeenDetails = () => {
    const { friendsData } = useContext(FriendsContext);

    const { id } = useParams();

    console.log(id);

    const currentFriend = friendsData.find((friend) => friend.id === Number(id));

    console.log(currentFriend);

    return (
        <section className='max-w-277.5 mx-auto w-9/10 xl:w-111/160'>
            <div></div>
            <div>
                <div>
                    {/* <img src="" alt="" /> */}
                </div>

                <h2></h2>

                <div></div>

                <div></div>

                <p></p>

                <p>Email: </p>
            </div>



            <div></div>
        </section>
    );
};

export default KeenDetails;