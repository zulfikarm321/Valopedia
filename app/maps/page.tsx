import GridList from '@/components/GridList';
import Image from 'next/image';

const fetchMaps = async () => {
    const res = await fetch('https://valorant-api.com/v1/maps');
    return res.json();
};

async function Maps() {
    const { data } = await fetchMaps();

    return (
        <div>
            <GridList>
                {data.map((map: any) => (
                    <div className="group bg-white overflow-hidden border-2 border-dark shadow-md ">
                        <Image
                            src={map.splash}
                            width={500}
                            height={200}
                            alt="Picture of the author"
                            loading="lazy"
                        />
                    </div>
                ))}
            </GridList>
        </div>
    );
}

export default Maps;
