import Abilities from '@/app/[agentId]/Abilities';
import React from 'react';
import Content from './Content';

const fetchAgent = async (id: string) => {
    const res = await fetch('https://valorant-api.com/v1/agents/' + id);
    return res.json();
};

async function Detail({ params }: { params: { agentId: string } }) {
    const { data } = await fetchAgent(params.agentId);

    const bgAgent = {
        background: `
        url(${data.background}) no-repeat center
       
    `,
        backgroundSize: 'cover' // Atur ukuran latar belakang sesuai kebutuhan
    };

    const bgGradient = {
        background: `
        url(${data.background}) no-repeat center,
        linear-gradient(45deg, #${data.backgroundGradientColors[0]}, #${data.backgroundGradientColors[3]})
    `,
        backgroundSize: 'cover' // Atur ukuran latar belakang sesuai kebutuhan
    };

    return (
        <div className="flex flex-col lg:flex-row items-center gap-10 min-h-[85vh] ">
            <div className="flex-1">
                <div
                    className="wrapper overflow-hidden border-2 border-gray-900 rounded-lg"
                    style={bgGradient}
                >
                    <img
                        src={data.fullPortraitV2}
                        alt={data.displayName}
                        width={600}
                        className="object-cover scale-90 animate hover:scale-100 transition-transform duration-5000 "
                    />
                </div>
                <audio controls autoPlay className="w-full">
                    <source
                        src={data.voiceLine.mediaList[0].wave}
                        type="audio/wav"
                    />
                    Browsermu tidak mendukung tag audio
                </audio>
            </div>
            <div className="flex-1 border-4 border-gray-800 rounded-lg">
                <Content agent={data} />
                <Abilities abilities={data.abilities} />
            </div>
        </div>
    );
}

export default Detail;
