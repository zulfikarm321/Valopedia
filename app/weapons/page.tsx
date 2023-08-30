import React from 'react';
import WeaponList from './WeaponList';

const fetchWeapons = async () => {
    const res = await fetch('https://valorant-api.com/v1/weapons/', {
        cache: 'no-store'
    });
    return res.json();
};

async function Weapons() {
    const { data } = await fetchWeapons();

    return (
        <>
            <WeaponList data={data} />
        </>
    );
}

export default Weapons;
