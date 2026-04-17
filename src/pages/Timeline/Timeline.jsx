import React, { useContext } from 'react';
import FriendsContext from '../../contexts/FriendsContext';
import callImage from '../../assets/call.png';
import textImage from '../../assets/text.png';
import videoImage from '../../assets/video.png';

const Timeline = () => {
    const { timeline } = useContext(FriendsContext);

    const imageRelObj = {
        call: callImage,
        text: textImage,
        video: videoImage
    }

    console.log(timeline);

    return (
        <section className='bg-[#F8FAFC] py-20'>
            <div className='max-w-277.5 mx-auto w-9/10 xl:w-111/160 space-y-6'>
                <h2 className='font-bold text-5xl text-black-1F'>Timeline</h2>

                {timeline.map((item, index) => (
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
        </section>
    );
};

export default Timeline;