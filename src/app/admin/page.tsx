'use client';

import React from 'react';
import Link from 'next/link';

const DashboardPage = () => {
    const stats = [
        { label: 'Monthly Revenue', value: '£12,450', change: '+12.5%', positive: true, icon: '💰' },
        { label: 'Appointments', value: '48', change: '+4.2%', positive: true, icon: '📅' },
        { label: 'New Customers', value: '12', change: '+18%', positive: true, icon: '👥' },
        { label: 'Completion Rate', value: '94%', change: '+0.5%', positive: true, icon: '✅' },
    ];

    const recentBookings = [
        { id: '1', client: 'Zainab A.', service: 'Luxury Braids', date: 'Today', time: '14:30', amount: '£220', status: 'Confirmed' },
        { id: '2', client: 'Aminata K.', service: 'Silk Press', date: 'Today', time: '16:00', amount: '£180', status: 'Pending' },
        { id: '3', client: 'Binta D.', service: 'Bridal Updo', date: 'Tomorrow', time: '10:00', amount: '£280', status: 'Confirmed' },
        { id: '4', client: 'Yasmine B.', service: 'Keratin Care', date: 'Tomorrow', time: '13:00', amount: '£350', status: 'Awaiting Payment' },
        { id: '5', client: 'Fatou S.', service: 'Full Color', date: 'Jan 28', time: '11:00', amount: '£150', status: 'Confirmed' },
    ];

    return (
        <div className="space-y-10 animate-fadeIn">
            {/* Header section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-heading font-bold text-gray-950">Dashboard</h1>
                    <p className="text-gray-500 text-base font-medium mt-1">Monitor performance and salon growth.</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-6 py-3 text-sm font-bold uppercase tracking-widest text-gray-600 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all">
                        Global Report
                    </button>
                    <button className="flex-1 md:flex-none px-6 py-3 text-sm font-bold uppercase tracking-widest text-white bg-gray-950 rounded-xl hover:bg-gray-800 hover:shadow-xl transition-all shadow-lg shadow-black/10">
                        + New Booking
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-xl">
                                {stat.icon}
                            </div>
                            <span className={`text-sm font-bold px-2 py-1 rounded-lg ${stat.positive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-sm uppercase tracking-[1px] font-bold text-gray-400 mb-1">{stat.label}</p>
                        <p className="text-4xl font-heading font-bold text-gray-950">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Main Content Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-8 py-6 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
                    <div>
                        <h3 className="text-lg font-bold text-gray-950">Recent Appointments</h3>
                        <p className="text-sm text-gray-500 font-medium">Detailed tracking of the latest scheduled sessions</p>
                    </div>
                    <button className="px-4 py-2 text-base font-bold uppercase tracking-widest text-[#D4AF37] hover:bg-[#D4AF37]/5 rounded-lg transition-all">
                        Full History
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-white border-b border-gray-50">
                                <th className="px-8 py-4 text-sm font-black text-gray-400 uppercase tracking-widest">Client</th>
                                <th className="px-8 py-4 text-sm font-black text-gray-400 uppercase tracking-widest">Service</th>
                                <th className="px-8 py-4 text-sm font-black text-gray-400 uppercase tracking-widest">Schedule</th>
                                <th className="px-8 py-4 text-right text-sm font-black text-gray-400 uppercase tracking-widest">Price</th>
                                <th className="px-8 py-4 text-center text-sm font-black text-gray-400 uppercase tracking-widest">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50/50">
                            {recentBookings.map((booking) => (
                                <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-8 py-5 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gray-950 flex items-center justify-center text-sm font-bold text-white uppercase shadow-sm">
                                                {booking.client[0]}
                                            </div>
                                            <span className="font-bold text-gray-900 text-base">{booking.client}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 whitespace-nowrap text-base font-medium text-gray-600">{booking.service}</td>
                                    <td className="px-8 py-5 whitespace-nowrap">
                                        <div className="text-base text-gray-950 font-bold">{booking.date}</div>
                                        <div className="text-sm text-gray-400 font-medium">{booking.time}</div>
                                    </td>
                                    <td className="px-8 py-5 whitespace-nowrap text-base font-black text-gray-950 text-right">{booking.amount}</td>
                                    <td className="px-8 py-5 whitespace-nowrap text-center">
                                        <span className={`px-4 py-1.5 text-xs font-black uppercase tracking-widest rounded-full border shadow-sm ${booking.status === 'Confirmed'
                                            ? 'bg-green-50 text-green-600 border-green-100'
                                            : (booking.status === 'Pending' ? 'bg-amber-50 text-amber-500 border-amber-100' : 'bg-red-50 text-red-500 border-red-100')
                                            }`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Insights Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                    <h3 className="text-base font-bold text-gray-950 mb-8 border-b border-gray-50 pb-4">Performance by Category</h3>
                    <div className="space-y-6">
                        {[
                            { category: 'Hair-styling & Braids', percentage: 45, color: 'bg-gray-950' },
                            { category: 'Expert Coloration', percentage: 25, color: 'bg-[#D4AF37]' },
                            { category: 'Extensions & Weaves', percentage: 20, color: 'bg-gray-400' },
                            { category: 'Care & Boutique', percentage: 10, color: 'bg-gray-200' },
                        ].map((item) => (
                            <div key={item.category} className="space-y-2">
                                <div className="flex justify-between items-center text-xs font-black uppercase tracking-wider text-gray-500">
                                    <span>{item.category}</span>
                                    <span className="text-gray-950">{item.percentage}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                                    <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percentage}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 relative overflow-hidden flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                    <div className="absolute top-0 right-0 p-8 text-6xl opacity-[0.03] select-none">📣</div>
                    <div className="relative z-10">
                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-[3px] mb-4">Automated Marketing</p>
                        <p className="text-lg font-medium text-gray-700 leading-relaxed italic border-l-4 border-[#25D366] pl-6 py-2">
                            "Your <span className="text-[#25D366] font-black">WhatsApp</span> reminders reduced no-shows by <span className="text-gray-950 font-black">15%</span> this month. 42 new appointments generated via SMS."
                        </p>
                        <div className="mt-8 flex items-center gap-4">
                            <Link href="/admin/marketing" className="px-6 py-2 bg-gray-950 text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-lg hover:bg-gray-800 transition-all">
                                Boost Campaigns
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
