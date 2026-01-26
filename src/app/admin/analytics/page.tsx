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
        <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-gray-950">Analytics</h1>
                    <p className="text-gray-500 text-sm font-medium">Business intelligence and performance data.</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-gray-600 bg-white border border-gray-200 rounded-full hover:shadow-md transition-all">
                        Export Report
                    </button>
                    <select className="flex-1 md:flex-none px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-gray-900 bg-white border border-gray-200 rounded-full outline-none focus:ring-1 focus:ring-[#D4AF37] cursor-pointer">
                        <option>Last 6 Months</option>
                        <option>Last Year</option>
                        <option>All Time</option>
                    </select>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Total Revenue', value: '£91,050', change: '+15.2%', positive: true, icon: '💰', sub: 'Last 6 months' },
                    { label: 'Total Bookings', value: '339', change: '+8.4%', positive: true, icon: '📅', sub: 'Last 6 months' },
                    { label: 'Avg. Transaction', value: '£268', change: '+2.1%', positive: true, icon: '💵', sub: 'Per booking' },
                    { label: 'Rating', value: '4.9/5', change: '+0.3', positive: true, icon: '⭐', sub: 'Based on 127 reviews' },
                ].map((stat) => (
                    <div key={stat.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gray-50 rounded-bl-full -translate-y-4 translate-x-4 opacity-50" />
                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <span className="text-2xl">{stat.icon}</span>
                            <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${stat.positive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>{stat.change}</span>
                        </div>
                        <h3 className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{stat.label}</h3>
                        <p className="text-3xl font-heading font-bold text-gray-950">{stat.value}</p>
                        <p className="text-[10px] text-gray-400 mt-2 font-medium">{stat.sub}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Revenue Chart Placeholder */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
                        <h3 className="text-xl font-heading font-bold text-gray-950">Revenue Trajectory</h3>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#D4AF37]"></div>
                                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Revenue</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Bookings</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {monthlyRevenue.map((data) => (
                            <div key={data.month} className="space-y-3">
                                <div className="flex justify-between items-end">
                                    <span className="text-sm font-bold text-gray-900">{data.month}</span>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-black text-gray-950">£{data.revenue.toLocaleString()}</span>
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{data.bookings} BOOKINGS</span>
                                    </div>
                                </div>
                                <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1] rounded-full transition-all duration-1000"
                                        style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Services */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                    <h3 className="text-xl font-heading font-bold text-gray-950 mb-8">Performance Mix</h3>
                    <div className="space-y-4">
                        {topServices.map((service, index) => (
                            <div key={service.name} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 transition-all group">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs shadow-sm ${index === 0 ? 'bg-[#D4AF37] text-white shadow-[#D4AF37]/20 border border-[#D4AF37]' :
                                    'bg-white text-gray-400 border border-gray-100'
                                    }`}>
                                    #{index + 1}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-bold text-gray-900 leading-tight group-hover:text-[#D4AF37] transition-colors">{service.name}</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase mt-0.5 tracking-tighter">{service.bookings} SESSION SOLD</p>
                                </div>
                                <span className="text-sm font-black text-gray-950">{service.revenue}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Additional Insights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-2 h-full bg-gray-50" />
                    <h4 className="text-[10px] font-bold mb-6 text-gray-400 uppercase tracking-widest">Peak Utilization</h4>
                    <div className="space-y-4">
                        {[
                            { label: '2:00 PM - 4:00 PM', val: '32%', color: 'bg-[#D4AF37]' },
                            { label: '10:00 AM - 12:00 PM', val: '28%', color: 'bg-gray-800' },
                            { label: '4:00 PM - 6:00 PM', val: '24%', color: 'bg-gray-400' }
                        ].map(item => (
                            <div key={item.label} className="flex items-center justify-between group">
                                <span className="text-xs font-bold text-gray-600 transition-colors group-hover:text-gray-950">{item.label}</span>
                                <span className={`text-xs font-black p-1 px-2 rounded-lg ${item.color} text-white shadow-sm transition-transform group-hover:scale-110`}>{item.val}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-2 h-full bg-gray-50" />
                    <h4 className="text-[10px] font-bold mb-6 text-gray-400 uppercase tracking-widest">Premium Cycles</h4>
                    <div className="space-y-4">
                        {[
                            { label: 'Friday', val: '42%' },
                            { label: 'Saturday', val: '38%' },
                            { label: 'Wednesday', val: '20%' }
                        ].map(item => (
                            <div key={item.label} className="flex items-center justify-between group">
                                <span className="text-xs font-bold text-gray-600 group-hover:text-gray-950 transition-colors">{item.label}</span>
                                <span className="text-xs font-black text-gray-950">{item.val}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center">
                    <h4 className="text-[10px] font-bold mb-4 text-gray-400 uppercase tracking-widest">Client Loyalty Index</h4>
                    <div className="relative">
                        <p className="text-6xl font-heading font-black text-gray-950 drop-shadow-sm">78%</p>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#D4AF37] rounded-full" />
                    </div>
                    <p className="text-[10px] text-gray-400 mt-6 font-bold uppercase tracking-widest">30-Day Return Cycle</p>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;
