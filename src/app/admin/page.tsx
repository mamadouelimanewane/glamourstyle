'use client';

import React from 'react';

const DashboardPage = () => {
    const stats = [
        { label: 'Total Revenue', value: '£12,450', change: '+12.5%', positive: true, icon: '💰' },
        { label: 'Appointments', value: '48', change: '+4.2%', positive: true, icon: '📅' },
        { label: 'New Customers', value: '12', change: '+18%', positive: true, icon: '👥' },
        { label: 'Completion Rate', value: '94%', change: '+0.5%', positive: true, icon: '✅' },
    ];

    const recentBookings = [
        { id: '1', client: 'Zainab A.', service: 'Luxury Braids', date: 'Today', time: '14:30', amount: '£220', status: 'confirmed' },
        { id: '2', client: 'Aminata K.', service: 'Silk Press', date: 'Today', time: '16:00', amount: '£180', status: 'pending' },
        { id: '3', client: 'Binta D.', service: 'Bridal Updo', date: 'Tomorrow', time: '10:00', amount: '£280', status: 'confirmed' },
        { id: '4', client: 'Yasmine B.', service: 'Keratin Care', date: 'Tomorrow', time: '13:00', amount: '£350', status: 'pending' },
        { id: '5', client: 'Fatou S.', service: 'Full Color', date: 'Jan 28', time: '11:00', amount: '£150', status: 'confirmed' },
    ];

    return (
        <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-heading font-bold text-gray-950 leading-tight">Overview</h2>
                    <p className="text-gray-500 text-sm font-medium">Monitoring Glamour Style performance</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-gray-600 bg-white border border-gray-200 rounded-full hover:shadow-md transition-all">
                        Download Data
                    </button>
                    <button className="flex-1 md:flex-none px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white bg-gray-950 rounded-full hover:bg-gray-800 hover:shadow-lg transition-all">
                        + New Appointment
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-[#D4AF37] transition-colors" />
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-xl group-hover:bg-[#D4AF37]/10 transition-colors">
                                {stat.icon}
                            </div>
                            <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${stat.positive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">{stat.label}</p>
                        <p className="text-3xl font-heading font-bold text-gray-950">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Recent Appointments */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-8 py-6 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                    <div>
                        <h3 className="text-lg font-heading font-bold text-gray-950">Recent Appointments</h3>
                        <p className="text-xs text-gray-500 font-medium">Detailed list of upcoming sessions</p>
                    </div>
                    <button className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] hover:bg-[#D4AF37]/5 rounded-lg transition-all">Show All Records</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-white border-b border-gray-100">
                                <th className="px-8 py-4 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest">Client Name</th>
                                <th className="px-8 py-4 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest">Service Item</th>
                                <th className="px-8 py-4 text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest">Appointment Date</th>
                                <th className="px-8 py-4 text-right text-[10px] font-bold text-gray-400 uppercase tracking-widest">Amount Due</th>
                                <th className="px-8 py-4 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">Current Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {recentBookings.map((booking) => (
                                <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-8 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 rounded-full bg-gray-950 flex items-center justify-center text-xs font-bold text-white shadow-lg border border-gray-800 group-hover:bg-[#D4AF37] transition-colors">
                                                {booking.client[0]}
                                            </div>
                                            <span className="ml-4 text-sm font-bold text-gray-950">{booking.client}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-4 whitespace-nowrap text-sm font-medium text-gray-600">{booking.service}</td>
                                    <td className="px-8 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-950 font-bold">{booking.date}</div>
                                        <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">at {booking.time}</div>
                                    </td>
                                    <td className="px-8 py-4 whitespace-nowrap text-sm font-black text-gray-900 text-right">{booking.amount}</td>
                                    <td className="px-8 py-4 whitespace-nowrap text-center">
                                        <span className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full border shadow-sm ${booking.status === 'confirmed'
                                            ? 'bg-white text-green-600 border-green-100'
                                            : 'bg-white text-amber-500 border-amber-100'
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
        </div>
    );
};

export default DashboardPage;
