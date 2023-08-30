import GridList from '@/components/GridList';
import Image from 'next/image';

function MapsList({ maps }: any) {
    return (
        <GridList>
            {maps.map((map: any) => (
                <div
                    key={map.uuid}
                    className="group  overflow-hidden border-2 border-dark shadow-md rounded-lg"
                >
                    <Image
                        src={map.splash}
                        width={600}
                        height={200}
                        alt="Picture of the author"
                        loading="lazy"
                    />
                </div>
            ))}
        </GridList>
    );
}

export default MapsList;
