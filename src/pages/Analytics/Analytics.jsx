import React, { useContext } from 'react';
import FriendsContext from '../../contexts/FriendsContext';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { TbMoodEmpty } from 'react-icons/tb';

const Analytics = () => {
    const { timeline } = useContext(FriendsContext);

    const interactionCounts = {
        call: 0,
        text: 0,
        video: 0
    }

    timeline.forEach((item) => {
        interactionCounts[item.type] += 1;
    });

    const pieChartData = [
        { name: "Call", value: interactionCounts.call, fill: "#244D3F" },
        { name: "Text", value: interactionCounts.text, fill: "#7E35E1" },
        { name: "Video", value: interactionCounts.video, fill: "#37A163" }
    ];

    return (
        <section className='bg-[#F8FAFC] py-20'>
            <div className='max-w-277.5 mx-auto w-9/10 xl:w-111/160 space-y-6'>
                <h2 className='font-bold text-5xl text-black-1F mb-6'>Friendship Analytics</h2>

                <div className='bg-white rounded-lg border border-white drop-shadow-sm p-8'>

                    <div>
                        {
                            (!timeline.length) && (
                                <div className='flex flex-col items-center justify-center gap-4 py-20 text-center'>
                                    <TbMoodEmpty className='text-9xl text-gray-64/50' />

                                    <p className='text-2xl text-gray-64 w-9/10'>No Timeline data available, please add some interactions.</p>
                                </div>
                            )
                        }
                    </div>

                    {
                        (timeline.length > 0) && (
                            <div>
                                <h3 className='font-medium text-xl text-green-24 mb-6'>By Interaction Type</h3>

                                <div className='w-full h-[50dvw] max-h-75'>
                                    <PieChart width="100%" height="100%">
                                        <Pie
                                            data={pieChartData}
                                            dataKey="value"
                                            innerRadius="60%"
                                            outerRadius="80%"
                                            paddingAngle={5}
                                            cornerRadius="9%"
                                        />
                                    </PieChart>
                                </div>

                                <ul className='flex gap-6 justify-center mt-2'>
                                    {pieChartData.map((entry) => (
                                        <li key={entry.name} className='flex items-center gap-2 text-sm'>
                                            <span style={{ backgroundColor: entry.fill }} className='inline-block w-2.5 h-2.5 rounded-full' />
                                            <span className='text-sm leading-5 text-gray-64'>{entry.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Analytics;