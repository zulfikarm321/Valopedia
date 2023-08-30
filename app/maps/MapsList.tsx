import GridList from '@/components/GridList';
import Image from 'next/image';
import Link from 'next/link';

function MapsList({ maps }: any) {
    return (
        <GridList>
            {maps.map((map: any) => (
                <Link key={map.uuid} href={'/maps/' + map.uuid}>
                    <div className="group overflow-hidden border-2 border-dark hover:border-white shadow-md rounded-lg relative">
                        <div className="overlay w-full h-0 absolute -top-12 z-10 group-hover:grid group-hover:h-full group-hover:top-0 place-items-center transition-all ease-in-out duration-500">
                            <div className="bg bg-[#FF4655] opacity-80 absolute w-full h-full "></div>
                            <h1 className="text-4xl font-bold text-white absolute w-full h-full text-center grid place-items-center">
                                {map.displayName}
                            </h1>
                        </div>
                        <Image
                            src={map.splash}
                            width={600}
                            height={200}
                            alt="Picture of the author"
                            quality={75}
                        />
                    </div>{' '}
                </Link>
            ))}
        </GridList>
    );
}

export default MapsList;
