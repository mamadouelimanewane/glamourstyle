'use client';

import React from 'react';

const DashboardPage = () => {
    const stats = [
        { label: 'Total Revenue', value: '£12,450', change: '+12.5%', icon: '💰', color: 'text-green-500' },
        { label: 'Appointments', value: '48', change: '+4.2%', icon: '📅', color: 'text-blue-500' },
        { label: 'New Customers', value: '12', change: '+18%', icon: '👤', color: 'text-[#D4AF37]' },
        { label: 'Completion Rate', value: '94%', change: '+0.5%', icon: '✅', color: 'text-purple-500' },
    ];

    const recentBookings = [
        { id: '1', client: 'Zainab A.', service: 'Luxury Braids', date: 'Today', time: '14:30', amount: '£220', status: 'Confirmed' },
        { id: '2', client: 'Aminata K.', service: 'Silk Press', date: 'Today', time: '16:00', amount: '£180', status: 'Pending' },
        { id: '3', client: 'Binta D.', service: 'Bridal Updo', date: 'Tomorrow', time: '10:00', amount: '£280', status: 'Confirmed' },
        { id: '4', client: 'Yasmine B.', service: 'Keratin Care', date: 'Tomorrow', time: '13:00', amount: '£350', status: 'Awaiting Payment' },
        { id: '5', client: 'Fatou S.', service: 'Full Color', date: 'Jan 28', time: '11:00', amount: '£150', status: 'Confirmed' },
    ];

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-heading mb-2">Dashboard Overlook</h1>
                    <p className="text-gray-500">Welcome back, manager. Here is what's happening today.</p>
                </div>
                <div className="flex gap-3">
                    <button className="btn-secondary py-2">Generate Report</button>
                    <button className="btn-primary py-2">+ Add Booking</button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="glass p-6 rounded-2xl border border-white/5 group hover:border-[#D4AF37]/30 transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-3xl">{stat.icon}</span>
                            <span className={`text-[10px] font-bold px-2 py-1 rounded bg-white/5 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-1">{stat.label}</h3>
                        <p className="text-3xl font-bold font-heading">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Appointments */}
                <div className="lg:col-span-2 glass rounded-2xl border border-white/5 overflow-hidden">
                    <div className="p-6 border-b border-gray-900 flex justify-between items-center">
                        <h3 className="text-xl font-bold">Recent Appointments</h3>
                        <button className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold hover:underline transition-all">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-white/[0.02] text-gray-500 text-[10px] uppercase tracking-widest">
                                    <th className="px-6 py-4">Client</th>
                                    <th className="px-6 py-4">Service</th>
                                    <th className="px-6 py-4">Time</th>
                                    <th className="px-6 py-4 text-right">Amount</th>
                                    <th className="px-6 py-4 text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-900">
                                {recentBookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-white/[0.02] transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-xs font-bold text-[#D4AF37]">
                                                    {booking.client[0]}
                                                </div>
                                                <span className="font-medium">{booking.client}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-400">{booking.service}</td>
                                        <td className="px-6 py-4 text-sm">
                                            <div className="flex flex-col">
                                                <span>{booking.date}</span>
                                                <span className="text-xs text-gray-500">{booking.time}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right font-bold text-[#D4AF37]">{booking.amount}</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`text-[9px] uppercase font-bold px-2 py-1 rounded-full ${booking.status === 'Confirmed' ? 'bg-green-500/10 text-green-500' :
                                                    booking.status === 'Pending' ? 'bg-blue-500/10 text-blue-500' :
                                                        'bg-yellow-500/10 text-yellow-500'
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

                {/* Revenue Breakdown */}
                <div className="glass rounded-2xl border border-white/5 flex flex-col">
                    <div className="p-6 border-b border-gray-900">
                        <h3 className="text-xl font-bold">Revenue Breakdown</h3>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-center">
                        <div className="space-y-6">
                            {[
                                { label: 'Styling', value: 45, color: 'bg-[#D4AF37]' },
                                { label: 'Coloration', value: 25, color: 'bg-purple-500' },
                                { label: 'Extensions', value: 20, color: 'bg-blue-500' },
                                { label: 'Products', value: 10, color: 'bg-gray-500' },
                            ].map((item) => (
                                <div key={item.label} className="space-y-2">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-gray-400">{item.label}</span>
                                        <span className="text-white font-bold">{item.value}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className={`h-full ${item.color}`} style={{ width: `${item.value}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 p-4 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/10 text-center">
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Peak Performance</p>
                            <p className="text-[#D4AF37] font-bold italic">"Friday bookings are 20% higher than average"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
