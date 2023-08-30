import GridList from '@/components/GridList';
import Image from 'next/image';
import { BsImageFill } from 'react-icons/bs';

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

                        {skin.displayIcon ? (
                            <Image
                                width={400}
                                height={100}
                                src={skin.displayIcon}
                                alt={skin.displayName}
                                loading="lazy"
                                quality={75}
                            />
                        ) : (
                            <div className="flex justify-center items-center h-1/2 gap-2">
                                <p>NO IMAGE</p>
                                <BsImageFill />
                            </div>
                        )}
                    </div>
                ))}
            </GridList>
        </>
    );
}

export default SkinList;
