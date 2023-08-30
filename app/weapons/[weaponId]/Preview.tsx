import React from 'react';

function Preview({ data }: any) {
    const trimString = (text: string) => {
        if (!text) return '-';

        const parts = text.split('::');

        if (parts.length > 1) {
            const result = parts[1];
            return result;
        }
    };

    return (
        <div className="border-2 border-dark bg-white rounded-lg p-4 flex-1 overflow-x-scroll ">
            <h3 className="uppercase text-xl font-bold mb-4">
                {data.displayName}
            </h3>
            <img src={data.displayIcon} alt={data.displayName} />

            {data.shopData && (
                <table className="table-auto mt-4 text-center w-full ">
                    <tbody>
                        <tr>
                            <th
                                colSpan={4}
                                className="bg-[#FF4655] border-2 border-dark p-1 text-white"
                            >
                                General
                            </th>
                        </tr>
                        <tr>
                            <th className="border-2 border-dark p-1 bg-slate-400">
                                Type
                            </th>
                            <th className="border-2 border-dark p-1 bg-slate-400">
                                Creeds
                            </th>
                            <th className="border-2 border-dark p-1 bg-slate-400">
                                Wall Penetration
                            </th>
                            <th className="border-2 border-dark p-1 bg-slate-400">
                                Feature
                            </th>
                        </tr>
                        <tr>
                            <td className="border-2 border-dark p-1">
                                {data.shopData.category}
                            </td>
                            <td className="border-2 border-dark p-1">
                                {data.shopData.cost}
                            </td>
                            <td className="border-2 border-dark p-1">
                                {trimString(data.weaponStats.wallPenetration)}
                            </td>
                            <td className="border-2 border-dark p-1">
                                {trimString(data.weaponStats.feature)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Preview;
