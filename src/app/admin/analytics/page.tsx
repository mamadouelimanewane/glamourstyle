'use client';

import React from 'react';

const AnalyticsPage = () => {
    const monthlyRevenue = [
        { month: 'Jan', revenue: 12450, bookings: 48 },
        { month: 'Feb', revenue: 15200, bookings: 56 },
        { month: 'Mar', revenue: 13800, bookings: 52 },
        { month: 'Apr', revenue: 16500, bookings: 61 },
        { month: 'May', revenue: 14200, bookings: 54 },
        { month: 'Jun', revenue: 18900, bookings: 68 },
    ];

    const topServices = [
        { name: 'Luxury Braids', bookings: 24, revenue: '£5,280' },
        { name: 'Silk Press', bookings: 18, revenue: '£3,240' },
        { name: 'Keratin Treatment', bookings: 12, revenue: '£4,200' },
        { name: 'Bridal Updo', bookings: 8, revenue: '£2,240' },
        { name: 'Full Color', bookings: 15, revenue: '£2,250' },
    ];

    const maxRevenue = Math.max(...monthlyRevenue.map(m => m.revenue));

    return (
        <div className="space-y-6 animate-fadeIn pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Analyses & Business Intelligence</h1>
                    <p className="text-gray-400 text-[9px] font-medium uppercase tracking-wider mt-0.5">Données de Performance Globales</p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-3 py-1.5 text-[8px] font-bold uppercase tracking-widest text-gray-600 bg-white border border-gray-200 rounded hover:bg-gray-50 transition-all">
                        Exporter Données
                    </button>
                    <select className="flex-1 md:flex-none px-3 py-1.5 text-[8px] font-bold uppercase tracking-widest text-gray-900 bg-white border border-gray-200 rounded outline-none focus:ring-1 focus:ring-[#D4AF37] cursor-pointer">
                        <option>6 Derniers Mois</option>
                        <option>Année en cours</option>
                    </select>
                </div>
            </div>

            {/* Key Metrics - Compact Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: 'Revenue Total', value: '£91,050', change: '+15.2%', positive: true, icon: '💰' },
                    { label: 'Total RDV', value: '339', change: '+8.4%', positive: true, icon: '📅' },
                    { label: 'Panier Moyen', value: '£268', change: '+2.1%', positive: true, icon: '💵' },
                    { label: 'Taux Fidélité', value: '78%', change: '+4.5%', positive: true, icon: '🔄' },
                ].map((stat) => (
                    <div key={stat.label} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs">{stat.icon}</span>
                            <span className={`text-[7px] font-black px-1.5 py-0.5 rounded ${stat.positive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-[8px] uppercase tracking-wider font-bold text-gray-400 mb-0.5">{stat.label}</p>
                        <p className="text-base font-black text-gray-950">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue Chart - Compact */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">Trajectoire du Chiffre d'Affaires</h3>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-1.5 text-[8px] font-bold text-gray-400 uppercase">
                                <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                                <span>CA</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {monthlyRevenue.map((data) => (
                            <div key={data.month} className="space-y-2">
                                <div className="flex justify-between items-end">
                                    <span className="text-[10px] font-bold text-gray-500">{data.month}</span>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-black text-gray-950">£{data.revenue.toLocaleString()}</span>
                                        <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">{data.bookings} RDV</span>
                                    </div>
                                </div>
                                <div className="h-1 w-full bg-gray-50 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#D4AF37] rounded-full"
                                        style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Services - Single Column */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                    <h3 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-6">Top Prestations</h3>
                    <div className="space-y-3">
                        {topServices.map((service, index) => (
                            <div key={service.name} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100 group">
                                <div className="w-6 h-6 rounded bg-white border border-gray-200 flex items-center justify-center text-[9px] font-black text-gray-500">
                                    {index + 1}
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-[10px] font-bold text-gray-900 truncate">{service.name}</p>
                                    <p className="text-[8px] text-gray-400 font-bold uppercase tracking-tighter">{service.bookings} VENTES</p>
                                </div>
                                <span className="text-[10px] font-black text-gray-950">{service.revenue}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;
