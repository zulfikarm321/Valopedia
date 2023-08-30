import Image from 'next/image';
import React from 'react';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

const fetchMap = async (id: string) => {
    const res = await fetch('https://valorant-api.com/v1/maps/' + id);
    return res.json();
};

async function page({ params }: { params: { mapsId: any } }) {
    const { data } = await fetchMap(params.mapsId);

    return (
        <Suspense fallback={<Loading text="Loading for the maps..." />}>
            <div className="flex flex-col justify-center">
                <Image
                    src={data.splash}
                    alt={data.displayName}
                    width={1000}
                    height={500}
                />
                <div className="p-4 bg-white border-2 border-dark w-fit">
                    <Image
                        src={data.displayIcon}
                        alt={data.displayName}
                        width={600}
                        height={300}
                    />
                </div>
            </div>

            <h1>Okee</h1>
        </Suspense>
    );
}

export default page;
