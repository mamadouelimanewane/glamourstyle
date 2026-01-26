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
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-heading mb-2">Business Analytics</h1>
                    <p className="text-gray-500">Track performance metrics and revenue insights.</p>
                </div>
                <div className="flex gap-3">
                    <button className="btn-secondary py-2">Export Data</button>
                    <select className="glass px-4 py-2 rounded-xl border border-white/5 text-sm cursor-pointer">
                        <option>Last 6 Months</option>
                        <option>Last Year</option>
                        <option>All Time</option>
                    </select>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass p-6 rounded-2xl border border-white/5">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-3xl">💰</span>
                        <span className="text-[10px] font-bold px-2 py-1 rounded bg-green-500/10 text-green-500">+15.2%</span>
                    </div>
                    <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-1">Total Revenue</h3>
                    <p className="text-3xl font-bold">£91,050</p>
                    <p className="text-xs text-gray-600 mt-2">Last 6 months</p>
                </div>

                <div className="glass p-6 rounded-2xl border border-white/5">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-3xl">📅</span>
                        <span className="text-[10px] font-bold px-2 py-1 rounded bg-blue-500/10 text-blue-500">+8.4%</span>
                    </div>
                    <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-1">Total Bookings</h3>
                    <p className="text-3xl font-bold">339</p>
                    <p className="text-xs text-gray-600 mt-2">Last 6 months</p>
                </div>

                <div className="glass p-6 rounded-2xl border border-white/5">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-3xl">💵</span>
                        <span className="text-[10px] font-bold px-2 py-1 rounded bg-[#D4AF37]/10 text-[#D4AF37]">+2.1%</span>
                    </div>
                    <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-1">Avg. Transaction</h3>
                    <p className="text-3xl font-bold">£268</p>
                    <p className="text-xs text-gray-600 mt-2">Per booking</p>
                </div>

                <div className="glass p-6 rounded-2xl border border-white/5">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-3xl">⭐</span>
                        <span className="text-[10px] font-bold px-2 py-1 rounded bg-purple-500/10 text-purple-500">+0.3</span>
                    </div>
                    <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-1">Customer Rating</h3>
                    <p className="text-3xl font-bold">4.9/5</p>
                    <p className="text-xs text-gray-600 mt-2">Based on 127 reviews</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 glass rounded-2xl border border-white/5 p-6">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-bold">Revenue Overview</h3>
                        <div className="flex gap-4 text-xs">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#D4AF37]"></div>
                                <span className="text-gray-500">Revenue</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                <span className="text-gray-500">Bookings</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {monthlyRevenue.map((data) => (
                            <div key={data.month} className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400 font-medium">{data.month}</span>
                                    <div className="flex gap-6">
                                        <span className="text-[#D4AF37] font-bold">£{data.revenue.toLocaleString()}</span>
                                        <span className="text-blue-500 font-bold">{data.bookings} bookings</span>
                                    </div>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4C1]"
                                        style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Services */}
                <div className="glass rounded-2xl border border-white/5 p-6">
                    <h3 className="text-xl font-bold mb-6">Top Services</h3>
                    <div className="space-y-4">
                        {topServices.map((service, index) => (
                            <div key={service.name} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${index === 0 ? 'bg-[#D4AF37] text-black' :
                                        index === 1 ? 'bg-gray-400 text-black' :
                                            index === 2 ? 'bg-[#CD7F32] text-black' :
                                                'bg-white/5 text-gray-500'
                                    }`}>
                                    #{index + 1}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">{service.name}</p>
                                    <p className="text-xs text-gray-500">{service.bookings} bookings</p>
                                </div>
                                <span className="text-[#D4AF37] font-bold text-sm">{service.revenue}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Additional Insights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass p-6 rounded-2xl border border-white/5">
                    <h4 className="text-sm font-bold mb-4 text-gray-400 uppercase tracking-widest">Peak Hours</h4>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm">2:00 PM - 4:00 PM</span>
                            <span className="text-[#D4AF37] font-bold">32%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm">10:00 AM - 12:00 PM</span>
                            <span className="text-blue-500 font-bold">28%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm">4:00 PM - 6:00 PM</span>
                            <span className="text-gray-500 font-bold">24%</span>
                        </div>
                    </div>
                </div>

                <div className="glass p-6 rounded-2xl border border-white/5">
                    <h4 className="text-sm font-bold mb-4 text-gray-400 uppercase tracking-widest">Busiest Days</h4>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm">Friday</span>
                            <span className="text-[#D4AF37] font-bold">42%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm">Saturday</span>
                            <span className="text-blue-500 font-bold">38%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm">Wednesday</span>
                            <span className="text-gray-500 font-bold">20%</span>
                        </div>
                    </div>
                </div>

                <div className="glass p-6 rounded-2xl border border-white/5">
                    <h4 className="text-sm font-bold mb-4 text-gray-400 uppercase tracking-widest">Customer Retention</h4>
                    <div className="text-center py-4">
                        <p className="text-5xl font-bold text-[#D4AF37] mb-2">78%</p>
                        <p className="text-xs text-gray-500">Return within 30 days</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;
