import React from 'react';

function Content({ agent }: any) {
    return (
        <div className="ps-5 p-8">
            <div className="flex items-center">
                <img
                    src={agent.role.displayIcon}
                    alt="role icon"
                    width={24}
                    className="bg-gray-800 p-1 rounded-full mr-2"
                />
                <h3 className="text-base md:text-lg font-semibold uppercase text-gray-600">
                    {agent.role.displayName}
                </h3>
            </div>
            <h1 className="text-3xl md:text-5xl uppercase font-extrabold text-primary mt-2 mb-4">
                {agent.displayName}
            </h1>
            <p className="text-gray-700 leading-relaxed">{agent.description}</p>
        </div>
    );
}

export default Content;
