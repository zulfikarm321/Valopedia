import WeaponList from './WeaponList';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

const fetchWeapons = async () => {
    const res = await fetch('https://valorant-api.com/v1/weapons/', {
        cache: 'no-store'
    });
    return res.json();
};

async function Weapons() {
    const { data } = await fetchWeapons();

    return (
        <Suspense fallback={<Loading text="Waiting the weapons" />}>
            <WeaponList data={data} />
        </Suspense>
    );
}

export default Weapons;
