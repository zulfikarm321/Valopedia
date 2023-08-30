import React from 'react';

function Stats({ data }: any) {
    return (
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
                                    {data.weaponStats.firstBulletAccuracy}
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
                                        data.weaponStats?.damageRanges[0]
                                            .headDamage
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
                                        data.weaponStats?.damageRanges[0]
                                            .bodyDamage
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
                                        data.weaponStats?.damageRanges[0]
                                            .legDamage
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
    );
}

export default Stats;
