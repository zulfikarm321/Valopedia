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
            <div className="flex flex-col lg:flex-row lg:items-start  gap-5">
                <div className="border-2 border-dark bg-white rounded-lg p-4 flex-1">
                    <h3 className="uppercase text-xl font-bold mb-4">
                        {data.displayName}
                    </h3>
                    <img src={data.displayIcon} alt={data.displayName} />
                    {data.shopData && (
                        <div className="flex">
                            <p>{data.shopData.categoryText}</p>
                            <p>${data.shopData.cost}</p>
                        </div>
                    )}
                </div>

                <div className="border-2 border-dark bg-white rounded-lg p-4 flex-1 overflow-x-scroll ">
                    <h3 className="uppercase text-xl font-bold">STATS</h3>
                    {data.weaponStats ? (
                        <>
                            <table className="table-auto mt-4 text-center w-full ">
                                <tbody>
                                    <tr>
                                        <th
                                            colSpan={5}
                                            className="bg-[#FF4655] border-2 border-dark p-1 text-white"
                                        >
                                            Primary Fire
                                        </th>
                                    </tr>
                                    <tr>
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
                                    </tr>
                                    <tr>
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
                                            {
                                                data.weaponStats
                                                    .firstBulletAccuracy
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="table-auto mt-4 text-center w-full">
                                <tbody>
                                    <tr>
                                        <th></th>
                                        <th
                                            colSpan={3}
                                            className="bg-[#FF4655] border-2 border-dark p-1 text-white"
                                        >
                                            Damage
                                        </th>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <th className="border-2 border-dark p-1 bg-slate-400">
                                            0m - 15m
                                        </th>
                                        <th className="border-2 border-dark p-1 bg-slate-400">
                                            15m - 30m
                                        </th>
                                        <th className="border-2 border-dark p-1 bg-slate-400">
                                            30m - 50m
                                        </th>
                                    </tr>
                                    <tr>
                                        <th
                                            className="border-2 border-dark p-1 bg-slate-400"
                                            colSpan={0}
                                        >
                                            Head
                                        </th>
                                        <td className="border-2 border-dark p-1">
                                            {
                                                data.weaponStats
                                                    ?.damageRanges[0].headDamage
                                            }
                                        </td>
                                        <td className="border-2 border-dark p-1">
                                            {data.weaponStats.damageRanges[2]
                                                ?.headDamage ||
                                                data.weaponStats.damageRanges[1]
                                                    ?.headDamage ||
                                                data.weaponStats.damageRanges[0]
                                                    ?.headDamage}
                                        </td>
                                        <td className="border-2 border-dark p-1">
                                            {data.weaponStats.damageRanges[2]
                                                ?.headDamage ||
                                                data.weaponStats.damageRanges[1]
                                                    ?.headDamage ||
                                                data.weaponStats.damageRanges[0]
                                                    ?.headDamage}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th
                                            className="border-2 border-dark p-1 bg-slate-400"
                                            colSpan={0}
                                        >
                                            Body
                                        </th>
                                        <td className="border-2 border-dark p-1">
                                            {
                                                data.weaponStats
                                                    ?.damageRanges[0].bodyDamage
                                            }
                                        </td>
                                        <td className="border-2 border-dark p-1">
                                            {data.weaponStats.damageRanges[2]
                                                ?.bodyDamage ||
                                                data.weaponStats.damageRanges[1]
                                                    ?.bodyDamage ||
                                                data.weaponStats.damageRanges[0]
                                                    ?.bodyDamage}
                                        </td>
                                        <td className="border-2 border-dark p-1">
                                            {data.weaponStats.damageRanges[2]
                                                ?.bodyDamage ||
                                                data.weaponStats.damageRanges[1]
                                                    ?.bodyDamage ||
                                                data.weaponStats.damageRanges[0]
                                                    ?.bodyDamage}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th
                                            className="border-2 border-dark p-1 bg-slate-400"
                                            colSpan={0}
                                        >
                                            Leg
                                        </th>
                                        <td className="border-2 border-dark p-1">
                                            {
                                                data.weaponStats
                                                    ?.damageRanges[0].legDamage
                                            }
                                        </td>
                                        <td className="border-2 border-dark p-1">
                                            {data.weaponStats.damageRanges[2]
                                                ?.legDamage ||
                                                data.weaponStats.damageRanges[1]
                                                    ?.legDamage ||
                                                data.weaponStats.damageRanges[0]
                                                    ?.legDamage}
                                        </td>
                                        <td className="border-2 border-dark p-1">
                                            {data.weaponStats.damageRanges[2]
                                                ?.legDamage ||
                                                data.weaponStats.damageRanges[1]
                                                    ?.legDamage ||
                                                data.weaponStats.damageRanges[0]
                                                    ?.legDamage}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
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
