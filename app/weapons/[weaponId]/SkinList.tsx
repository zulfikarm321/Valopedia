import GridList from '@/components/GridList';
import Image from 'next/image';

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

                        <Image
                            width={300}
                            height={100}
                            src={skin.displayIcon}
                            alt={skin.displayName}
                            loading="lazy"
                        />
                    </div>
                ))}
            </GridList>
        </>
    );
}

export default SkinList;
