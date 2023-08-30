import GridList from '@/components/GridList';
import Image from 'next/image';

function MapsList(maps: any) {
    return (
        <GridList>
            {maps.map((map: any) => (
                <div className="group bg-white overflow-hidden border-2 border-dark shadow-md">
                    <img
                        src={map.splash}
                        width={600}
                        height={200}
                        alt="Picture of the author"
                    />
                </div>
            ))}
        </GridList>
    );
}

export default MapsList;
