'use client';

import React, { useState } from 'react';

function Abilities({ abilities }: any) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentAbility = abilities[currentIndex];

    const handleCurrentIndex = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="border-t-2 border-dark p-8 ps-5">
            <div className="abilities flex flex-wrap items-center gap-4">
                {abilities.map(
                    (ablility: any, index: number) =>
                        ablility.displayIcon && (
                            <div
                                key={index}
                                onClick={() => handleCurrentIndex(index)}
                                className={`shadow-lg border-gray-600 rounded-xl p-2  cursor-pointer hover:scale-110 ${
                                    index === currentIndex
                                        ? 'bg-[#FF4655] '
                                        : 'bg-dark border-none'
                                }`}
                            >
                                <img
                                    src={ablility.displayIcon}
                                    alt={ablility.displayName}
                                    width={42}
                                />
                            </div>
                        )
                )}
            </div>
            <div className="selected mt-8">
                <h3 className="text-xl mb-4 uppercase">
                    {currentAbility.displayName}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    {currentAbility.description}
                </p>
            </div>
        </div>
    );
}

export default Abilities;
