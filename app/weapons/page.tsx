import GridList from '@/components/GridList';
import React from 'react';

const fetchWeapons = async () => {
    const res = await fetch('https://valorant-api.com/v1/weapons/');
    return res.json();
};

async function Weapons() {
    const { data } = await fetchWeapons();

    return (
        <div>
            <GridList min="300px" gap="10px">
                {data.map((weapon: any) => (
                    <div className="weapon bg-white p-4 h-56 overflow-hidden border-2 border-gray-800  shadow-md">
                        {/* <h1 className="uppercase text-xl font-bold mb-4">
                            {weapon.displayName}
                        </h1> */}
                        <div className="w-full  h-full flex justify-center items-center">
                            <img
                                src={weapon.displayIcon}
                                alt={weapon.displayName}
                            />
                        </div>
                    </div>
                ))}
            </GridList>
        </div>
    );
}

export default Weapons;
