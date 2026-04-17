import React, { useContext, useState } from 'react';
import FriendsContext from '../../contexts/FriendsContext';
import callImage from '../../assets/call.png';
import textImage from '../../assets/text.png';
import videoImage from '../../assets/video.png';
import { TbMoodEmpty } from 'react-icons/tb';

const Timeline = () => {
    const [filter, setFilter] = useState("");

    const { timeline } = useContext(FriendsContext);

    let finalTimeline = timeline;

    const imageRelObj = {
        call: callImage,
        text: textImage,
        video: videoImage
    }

    // console.log(timeline);

    if (filter) {
        finalTimeline = timeline.filter((item) => item.type === filter.toLowerCase());
    }

    return (
        <section className='bg-[#F8FAFC] py-20'>
            <div className='max-w-277.5 mx-auto w-9/10 xl:w-111/160 space-y-6'>
                <h2 className='font-bold text-5xl text-black-1F'>Timeline</h2>

                <div className="dropdown dropdown-start md:dropdown-end md:dropdown-right w-64 sm:w-1/2 md:w-3/7">
                    <div tabIndex={0} role="button" className="w-full btn h-fit p-2 text-lg text-gray-64 rounded-lg border border-[#E9E9E9]">Filter Timeline {filter ? `by ${filter}` : "All"}</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 shadow-sm space-y-1 w-64">
                        <li onClick={() => setFilter("Text")} className='text-lg rounded-lg text-gray-64 border border-[#E9E9E9] p-2'><a>Filter Timeline by Text</a></li>
                        <li onClick={() => setFilter("Call")} className='text-lg rounded-lg text-gray-64 border border-[#E9E9E9] p-2'><a>Filter Timeline by Call</a></li>
                        <li onClick={() => setFilter("Video")} className='text-lg rounded-lg text-gray-64 border border-[#E9E9E9] p-2'><a>Filter Timeline by Video</a></li>
                    </ul>
                </div>

                <div>
                    {
                        (finalTimeline.length === 0) && (
                            <div className='flex flex-col items-center justify-center gap-4 py-20 text-center bg-white rounded-lg border border-white drop-shadow-sm'>
                                <TbMoodEmpty className='text-9xl text-gray-64/50' />

                                <p className='text-2xl text-gray-64 w-9/10'>{filter ? <span>No Timeline data available for the filter <strong>{filter}</strong>.</span> : "No Timeline data available, please add some interactions."}</p>
                            </div>
                        )
                    }
                </div>

                <div className='space-y-6'>
                    {finalTimeline.map((item, index) => (
                        <div key={index} className='flex items-center gap-4 bg-white p-4 border border-[#E9E9E9] rounded-lg'>
                            <div>
                                <img src={imageRelObj[item.type]} alt="" />
                            </div>

                            <div className='space-y-1'>
                                <h3 className='text-lg text-gray-64'><span className='font-medium text-xl text-green-24'>{(item.type).charAt(0).toUpperCase() + (item.type).slice(1)}</span> with {item.name}</h3>

                                <p className='font-medium text-gray-64'>{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;