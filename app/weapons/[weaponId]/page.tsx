import GridList from '@/components/GridList';

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
            <div className="flex items-start gap-5">
                <div className="border-2 border-dark bg-white rounded-lg p-4 flex-1">
                    <h3 className="uppercase text-xl font-bold">
                        {data.displayName}
                    </h3>
                    <img src={data.displayIcon} alt={data.displayName} />
                    {/* {data.shopData && (
                        <div className="flex">
                            <p>{data.shopData.categoryText}</p>
                            <p>${data.shopData.cost}</p>
                        </div>
                    )} */}
                </div>

                <div className="border-2 border-dark bg-white rounded-lg p-4 flex-1">
                    <h3 className="uppercase text-xl font-bold">STATS</h3>
                    {data.weaponStats ? (
                        <table className="table-auto mt-4 text-center w-full">
                            <thead>
                                <th className="border-2 border-dark p-1 bg-slate-400">
                                    Fire Rate
                                </th>
                                <th className="border-2 border-dark p-1 bg-slate-400">
                                    Magazine Size
                                </th>
                                <th className="border-2 border-dark p-1 bg-slate-400">
                                    Equip Time
                                </th>
                                <th className="border-2 border-dark p-1 bg-slate-400">
                                    Reload Time
                                </th>
                                <th className="border-2 border-dark p-1 bg-slate-400">
                                    First Bullet Accuracy
                                </th>
                            </thead>
                            <tbody>
                                <td className="border-2 border-dark p-1">
                                    {data.weaponStats.fireRate}
                                </td>
                                <td className="border-2 border-dark p-1">
                                    {data.weaponStats.magazineSize}
                                </td>
                                <td className="border-2 border-dark p-1">
                                    {data.weaponStats.equipTimeSeconds}
                                </td>
                                <td className="border-2 border-dark p-1">
                                    {data.weaponStats.reloadTimeSeconds}
                                </td>
                                <td className="border-2 border-dark p-1">
                                    {data.weaponStats.firstBulletAccuracy}
                                </td>
                            </tbody>
                        </table>
                    ) : (
                        <h1>No Stats</h1>
                    )}
                </div>
            </div>
            <div>
                <h1>SKINS</h1>
                <GridList min="320px" gap="20px">
                    {skins.map((skin: any) => (
                        <div
                            key={skin.uuid}
                            className="group bg-white p-4 overflow-hidden border-2 border-dark shadow-md rounded-lg hover:bg-[#FF4655]"
                        >
                            <h1 className="uppercase text-lg font-bold mb-4 ">
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
            </div>
        </div>
    );
}

export default page;
