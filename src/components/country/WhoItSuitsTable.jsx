// components/country/WhoItSuitsTable.jsx
import React from 'react';

const WhoItSuitsTable = ({ country, parseText, excludedCountries1 }) => (
    <div className="overflow-x-auto w-full">
        <table className="w-full border-collapse">
            <colgroup>
                <col className="w-1/2"/>
                <col className="w-1/2"/>
            </colgroup>
            <thead>
            <tr>
                <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left text-[14px] font-semibold text-gray-700 w-1/2">
                    {excludedCountries1.includes(country.url) ? "Категории граждан" : "Типы визы"}
                </th>
                <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left text-[14px] font-semibold text-gray-700 w-1/2">
                    Цель поездки
                </th>
            </tr>
            </thead>
            <tbody>
            {country.matchTable &&
                country.matchTable.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                        <td className="border border-[#CEE2FA] px-4 py-3 text-[14px] text-gray-700">{parseText(row.typeviza)}</td>
                        <td className="border border-[#CEE2FA] px-4 py-3 text-[14px] text-gray-700">{parseText(row.goaltrip)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default WhoItSuitsTable;