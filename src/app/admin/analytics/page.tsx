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
        <div className="space-y-10 animate-fadeIn pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-2xl font-heading font-bold text-gray-950">Analyses de Performance</h1>
                    <p className="text-gray-500 text-sm font-medium mt-1 uppercase tracking-wide">Suivi du chiffre d'affaires et des ventes</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-gray-600 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all">
                        Exporter PDF
                    </button>
                    <select className="flex-1 md:flex-none px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-gray-950 bg-white border border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-[#D4AF37]/5 cursor-pointer">
                        <option>6 Derniers Mois</option>
                        <option>Année 2026</option>
                    </select>
                </div>
            </div>

            {/* Key Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Revenue Global', value: '£91,050', change: '+15.2%', positive: true, icon: '💰' },
                    { label: 'Actions Complétées', value: '339', change: '+8.4%', positive: true, icon: '📅' },
                    { label: 'Panier Moyen', value: '£268', change: '+2.1%', positive: true, icon: '💵' },
                    { label: 'Taux Fidélité', value: '78%', change: '+4.5%', positive: true, icon: '🔄' },
                ].map((stat) => (
                    <div key={stat.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-xl">
                                {stat.icon}
                            </div>
                            <span className={`text-xs font-black px-2 py-1 rounded-lg ${stat.positive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">{stat.label}</p>
                        <p className="text-2xl font-black text-gray-950">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Revenue Evolution Chart */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-base font-bold text-gray-950 uppercase tracking-widest">Trajectoire du C.A.</h3>
                        <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]"></div>
                            <span>Profit Réel</span>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {monthlyRevenue.map((data) => (
                            <div key={data.month} className="space-y-2.5">
                                <div className="flex justify-between items-end">
                                    <span className="text-sm font-bold text-gray-500">{data.month}</span>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-black text-gray-950">£{data.revenue.toLocaleString()}</span>
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{data.bookings} RDV</span>
                                    </div>
                                </div>
                                <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1] rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Services Ranking */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                    <h3 className="text-base font-bold text-gray-950 uppercase tracking-widest mb-8">Top Prestations</h3>
                    <div className="space-y-4">
                        {topServices.map((service, index) => (
                            <div key={service.name} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50/50 border border-gray-100 group hover:bg-white hover:shadow-md transition-all">
                                <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-xs font-black text-gray-400 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
                                    0{index + 1}
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-sm font-bold text-gray-900 truncate">{service.name}</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{service.bookings} VENTES</p>
                                </div>
                                <span className="text-sm font-black text-gray-950">{service.revenue}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;
