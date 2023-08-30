import GridList from '@/components/GridList';
import React from 'react';

function SkinList({ skins }: any) {
    return (
        <>
            <h3 className="uppercase text-xl font-bold">SKINS</h3>
            <GridList>
                {skins.map((skin: any) => (
                    <div
                        key={skin.uuid}
                        className="group bg-white p-4 overflow-hidden border-2 border-dark shadow-md rounded-lg hover:bg-[#FF4655]"
                    >
                        <h1 className="uppercase font-semibold mb-4 group-hover:text-white">
                            {skin.displayName}
                        </h1>
                        <div className="flex justify-center items-center">
                            <img
                                width={300}
                                src={skin.displayIcon}
                                alt={skin.displayName}
                            />
                        </div>
                    </div>
                ))}
            </GridList>
        </>
    );
}

export default SkinList;
