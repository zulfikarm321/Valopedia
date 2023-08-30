import Stats from './Stats';
import Preview from './Preview';
import SkinList from './SkinList';

const fetchWeapon = async (id: string) => {
    const res = await fetch('https://valorant-api.com/v1/weapons/' + id);
    return res.json();
};

async function page({ params }: { params: { weaponId: string } }) {
    const { data } = await fetchWeapon(params.weaponId);
    const skins = data.skins.filter(
        (skin: any) =>
            !skin.displayName.includes('Standar') &&
            !skin.displayName.includes('Random')
    );

    return (
        <div>
            <div className="flex flex-col lg:flex-row lg:items-start  gap-5">
                <Preview data={data} />
                <Stats data={data} />
            </div>
            <div className="mt-4">
                <SkinList skins={skins} />
            </div>
        </div>
    );
}

export default page;
