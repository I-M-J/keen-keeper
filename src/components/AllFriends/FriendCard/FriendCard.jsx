import React from 'react';

const FriendCard = ({ friend }) => {
    console.log(friend);

    const statusStylesObjs = {
        on_track: {
            title: "On-Track",
            style: "bg-green-24"
        },
        almost_due: {
            title: "Almost Due",
            style: "bg-[#EFAD44]"
        },
        overdue: {
            title: "Overdue",
            style: "bg-[#EF4444]"
        }
    }

    return (
        <div className='p-6 drop-shadow-sm bg-white rounded-lg space-y-3'>
            <div className='flex items-center justify-center'>
                <img src={`/Keen Photos/${friend.picture}.png`} alt="" />
            </div>

            <div className='space-y-2 text-center flex items-center flex-col'>
                <h2 className='font-semibold text-xl text-black-1F'>{friend.name}</h2>

                <p className='text-xs text-gray-64'>{friend.days_since_contact}d ago</p>

                <div className='flex items-center gap-2'>
                    {
                        friend.tags.map((tag, index) => <div className='bg-[#CBFADB] text-green-24 px-2 py-1.5 font-medium rounded-full' key={index}>{tag.toUpperCase()}</div>)
                    }
                </div>

                <div className={`font-medium text-xs text-white rounded-full px-2 py-1.5 w-fit ${statusStylesObjs[friend.status].style}`}>{statusStylesObjs[friend.status].title}</div>
            </div>


        </div>
    );
};

export default FriendCard;