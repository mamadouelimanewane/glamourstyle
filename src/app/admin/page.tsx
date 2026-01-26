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
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                                {stat.icon}
                            </div>
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${stat.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Recent Appointments */}
            <div className="bg-white rounded-xl border border-gray-200">
                <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Recent Appointments</h3>
                        <p className="text-sm text-gray-500 mt-1">Latest bookings from your clients</p>
                    </div>
                    <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">View All →</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Client</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Service</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date & Time</th>
                                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {recentBookings.map((booking) => (
                                <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-sm font-semibold text-white">
                                                {booking.client[0]}
                                            </div>
                                            <span className="ml-3 text-sm font-medium text-gray-900">{booking.client}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.service}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{booking.date}</div>
                                        <div className="text-xs text-gray-500">{booking.time}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 text-right">{booking.amount}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {booking.status === 'confirmed' ? 'Confirmed' : 'Pending'}
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
