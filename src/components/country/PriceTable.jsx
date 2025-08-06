// components/country/PriceTable.jsx
import React from 'react';

const PriceTable = ({ country, parseText }) => (
    <>
        {/* Desktop Table (md: and above) */}
        <div className="overflow-x-auto w-full mdd:hidden">
            <table className="w-full border-collapse">
                <colgroup>
                    <col className="w-1/3"/>
                    <col className="w-1/3"/>
                    <col className="w-1/3"/>
                </colgroup>
                <thead>
                <tr>
                    <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left font-semibold text-gray-700 w-1/3">
                        Услуга / Сбор
                    </th>
                    <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left font-semibold text-gray-700 w-1/3">
                        Стоимость
                    </th>
                    <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left font-semibold text-gray-700 w-1/3">
                        Примечание
                    </th>
                </tr>
                </thead>
                <tbody>
                {country.priceTable &&
                    country.priceTable.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                            <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">{row.service}</td>
                            <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">{row.cost}</td>
                            <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">{parseText(row.note)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        {/* Mobile Table (below md:) */}
        <div className="overflow-x-auto w-full md:hidden">
            <table className="w-full border-collapse">
                <colgroup>
                    <col className="w-1/2"/>
                    <col className="w-1/2"/>
                </colgroup>
                <thead>
                <tr>
                    <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left text-[14px] font-semibold text-gray-700 w-1/2">
                        Услуга / Сбор
                    </th>
                    <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left text-[14px] font-semibold text-gray-700 w-1/2">
                        Стоимость
                    </th>
                </tr>
                </thead>
                <tbody>
                {country.priceTable &&
                    country.priceTable.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                            <td className="border border-[#CEE2FA] px-4 py-3 text-[14px] text-gray-700">{parseText(row.serviceMob)}</td>
                            <td className="border border-[#CEE2FA] px-4 py-3 text-[14px] text-gray-700">{parseText(row.costMob)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);

export default PriceTable;