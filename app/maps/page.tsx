import MapsList from './MapsList';

const fetchMaps = async () => {
    const res = await fetch('https://valorant-api.com/v1/maps');
    return res.json();
};

async function Maps() {
    const { data } = await fetchMaps();

    return (
        <div>
            <MapsList maps={data} />
        </div>
    );
}

export default Maps;
