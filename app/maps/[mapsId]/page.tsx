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
            <div className="flex flex-col lg:flex-row gap-5 justify-center items-start">
                <div className="bg-white border-2 border-dark rounded-lg flex-1">
                    <Image
                        src={data.splash}
                        alt={data.displayName}
                        width={600}
                        height={300}
                        className="w-full h-auto border-b-2 border-dark"
                    />
                    <div className="bg-white rounded-lg p-4">
                        <h1 className="font-bold text-4xl">
                            {data.displayName}
                        </h1>
                        <p className="text-gray-700 leading-relaxed my-4">
                            {data.narrativeDescription}
                        </p>
                        <div className="flex items-center justify-between">
                            <p>{data.tacticalDescription}</p>
                            <p>{data.coordinates}</p>
                        </div>
                    </div>
                </div>{' '}
                <div className="p-4 bg-dark border-2 border-dark rounded-lg flex-1">
                    <Image
                        src={data.displayIcon}
                        alt={data.displayName}
                        width={600}
                        height={300}
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </Suspense>
    );
}

export default page;
