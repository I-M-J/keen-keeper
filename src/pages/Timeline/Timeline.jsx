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

    return (
        <div>
            <h2>Timeline</h2>

            {timeline.map((item, index) => (
                <div key={index} className='flex items-center'>
                    <div>
                        <img src={imageRelObj[item.type]} alt="" />
                    </div>

                    <div className='space-y-1'>
                        <h3><span>{(item.type).charAt(0).toUpperCase() + (item.type).slice(1)}</span> with {item.name}</h3>

                        <p>{item.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;