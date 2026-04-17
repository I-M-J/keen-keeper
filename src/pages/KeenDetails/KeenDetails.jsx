import React, { useContext } from 'react';
import FriendsContext from '../../contexts/FriendsContext';
import { useParams } from 'react-router';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';
import { FiArchive } from 'react-icons/fi';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import { HiOutlineVideoCamera } from 'react-icons/hi';

const KeenDetails = () => {
    const { friendsData } = useContext(FriendsContext);

    const { id } = useParams();

    console.log(id);

    const currentFriend = friendsData.find((friend) => friend.id === Number(id));

    console.log(currentFriend);

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

    const due_date = new Date(currentFriend.next_due_date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

    return (
        <section className='max-w-277.5 mx-auto w-9/10 xl:w-111/160 py-20'>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>
                <div className='col-span-2 space-y-4'>
                    <div className='p-6 drop-shadow-sm bg-white rounded-lg space-y-3 text-center'>
                        <div className='flex items-center justify-center'>
                            <img src={`/Keen Photos/${currentFriend.picture}.png`} alt="" />
                        </div>

                        <div className='space-y-2 flex flex-col items-center'>
                            <h2 className='font-semibold text-xl text-black-1F'>{currentFriend.name}</h2>


                            <div className={`font-medium text-xs text-white rounded-full px-2 py-1.5 w-fit ${statusStylesObjs[currentFriend.status].style}`}>{statusStylesObjs[currentFriend.status].title}</div>

                            <div className='flex items-center gap-1'>
                                {
                                    currentFriend.tags.map((tag, index) => <div className='bg-[#CBFADB] text-green-24 text-xs px-2 py-1.5 font-medium rounded-full' key={index}>{tag.toUpperCase()}</div>)
                                }
                            </div>
                        </div>


                        <p className='font-medium italic text-gray-64'>{currentFriend.bio}</p>

                        <p className='text-sm text-gray-64'>Email: {currentFriend.email}</p>
                    </div>

                    <div className='space-y-2'>
                        <div className='font-medium text-black-1F flex items-center justify-center gap-2 w-full py-4 border border-[#E9E9E9] rounded-sm'><RiNotificationSnoozeLine /><span>Snooze 2 Weeks</span></div>

                        <div className='font-medium text-black-1F flex items-center justify-center gap-2 w-full py-4 border border-[#E9E9E9] rounded-sm'><FiArchive /><span>Archive</span></div>

                        <div className='font-medium flex items-center justify-center gap-2 text-[#EF4444] w-full py-4 border border-[#E9E9E9] rounded-sm'><RiDeleteBinLine /><span>Delete</span></div>
                    </div>

                </div>

                <div className='col-span-3 grid grid-cols-3 gap-6'>
                    <div className='flex flex-col items-center text-center py-8 gap-2 col-span-1 drop-shadow-sm bg-white border border-white rounded-lg'>
                        <h2 className='font-semibold text-3xl text-green-24'>{currentFriend.days_since_contact}</h2>
                        <p className='text-lg text-gray-64'>Days Since Contact</p>
                    </div>

                    <div className='flex flex-col items-center text-center py-8 gap-2 col-span-1 drop-shadow-sm bg-white border border-white rounded-lg'>
                        <h2 className='font-semibold text-3xl text-green-24'>{currentFriend.goal}</h2>
                        <p className='text-lg text-gray-64'>Goal (Days)</p>
                    </div>

                    <div className='flex flex-col items-center text-center py-8 gap-2 col-span-1 drop-shadow-sm bg-white border border-white rounded-lg'>
                        <h2 className='font-semibold text-3xl text-green-24'>{due_date}</h2>
                        <p className='text-lg text-gray-64'>Next Due</p>
                    </div>

                    <div className='col-span-3 space-y-4 bg-white border border-white drop-shadow-sm p-6 rounded-lg'>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-medium text-xl text-green-24'>Relationship Goal</h3>
                            <div className='font-medium text-sm text-black-1F py-2 px-4.25 bg-[#F8FAFC] border border-[#E9E9E9] rounded-sm'>Edit</div>
                        </div>
                        <p className='text-lg text-gray-64'>Connect every <span className='text-black-1F font-bold'>{currentFriend.goal} days</span></p>
                    </div>

                    <div className='col-span-3 bg-white border border-white drop-shadow-sm p-6 rounded-lg grid grid-cols-3 gap-4'>
                        <h3 className='font-medium text-xl text-green-24 col-span-3'>Quick Check-in</h3>

                        <div className='flex flex-col items-center gap-2 py-4 bg-[#F8FAFC] border border-[#E9E9E9] rounded-lg col-span-1'>
                            <LuPhoneCall className='text-3xl text-black-1F' />
                            <p className='text-lg text-black-1F'>Call</p>
                        </div>
                        <div className='flex flex-col items-center gap-2 py-4 bg-[#F8FAFC] border border-[#E9E9E9] rounded-lg col-span-1'>
                            <MdOutlineTextsms className='text-3xl text-black-1F' />
                            <p className='text-lg text-black-1F'>Text</p>
                        </div>
                        <div className='flex flex-col items-center gap-2 py-4 bg-[#F8FAFC] border border-[#E9E9E9] rounded-lg col-span-1'>
                            <HiOutlineVideoCamera className='text-3xl text-black-1F' />
                            <p className='text-lg text-black-1F'>Video</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default KeenDetails;