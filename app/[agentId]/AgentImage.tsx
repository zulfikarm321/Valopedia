import React from 'react';

function AgentImage({ agent }: any) {
    const bgGradient = {
        background: `
        url(${agent.background}) no-repeat center,
        linear-gradient(45deg, #${agent.backgroundGradientColors[0]}, #${agent.backgroundGradientColors[3]})
    `,
        backgroundSize: 'cover' // Atur ukuran latar belakang sesuai kebutuhan
    };

    return (
        <>
            <div
                className="wrapper overflow-hidden border-2 border-gray-900 rounded-lg"
                style={bgGradient}
            >
                <img
                    src={agent.fullPortraitV2}
                    alt={agent.displayName}
                    width={600}
                    className="object-cover scale-90 animate hover:scale-100 transition-transform duration-5000 "
                />
            </div>
            <audio controls autoPlay className="w-full mt-4">
                <source
                    src={agent.voiceLine.mediaList[0].wave}
                    type="audio/wav"
                />
                Browsermu tidak mendukung tag audio
            </audio>
        </>
    );
}

export default AgentImage;
