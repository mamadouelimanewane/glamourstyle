'use client';

import React, { useState } from 'react';

const AppointmentsPage = () => {
    const [filter, setFilter] = useState('all');

    const appointments = [
        { id: 'BK-001', client: 'Zainab A.', email: 'zainab@example.com', phone: '+44 7123 456789', service: 'Luxury Braids', date: '2026-01-26', time: '14:30', amount: '£220', status: 'confirmed', deposit: '£11' },
        { id: 'BK-002', client: 'Aminata K.', email: 'aminata@example.com', phone: '+44 7123 987654', service: 'Silk Press', date: '2026-01-26', time: '16:00', amount: '£180', status: 'pending', deposit: '£9' },
        { id: 'BK-003', client: 'Binta D.', email: 'binta@example.com', phone: '+44 7234 112233', service: 'Bridal Updo', date: '2026-01-27', time: '10:00', amount: '£280', status: 'confirmed', deposit: '£14' },
        { id: 'BK-004', client: 'Yasmine B.', email: 'yasmine@example.com', phone: '+44 7345 445566', service: 'Keratin Care', date: '2026-01-27', time: '13:00', amount: '£350', status: 'pending', deposit: '£17.5' },
        { id: 'BK-005', client: 'Fatou S.', email: 'fatou@example.com', phone: '+44 7456 778899', service: 'Full Color', date: '2026-01-28', time: '11:00', amount: '£150', status: 'confirmed', deposit: '£7.5' },
        { id: 'BK-006', client: 'Hawa J.', email: 'hawa@example.com', phone: '+44 7567 001122', service: 'Cut & Styling', date: '2026-01-28', time: '15:30', amount: '£85', status: 'cancelled', deposit: '£4.25' },
    ];

    const filteredAppointments = filter === 'all'
        ? appointments
        : appointments.filter(app => app.status === filter);

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-heading mb-2">Bookings</h1>
                    <p className="text-gray-500">Manage all incoming salon appointments and client requests.</p>
                </div>
                <div className="flex bg-white/5 p-1 rounded-xl border border-white/5">
                    {['all', 'pending', 'confirmed', 'cancelled'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setFilter(tab)}
                            className={`px-6 py-2 rounded-lg text-xs uppercase tracking-widest font-bold transition-all ${filter === tab ? 'bg-[#D4AF37] text-black shadow-glow' : 'text-gray-500 hover:text-white'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="glass rounded-2xl border border-white/5 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-white/[0.02] text-gray-500 text-[10px] uppercase tracking-widest border-b border-gray-900">
                                <th className="px-6 py-5">Booking ID</th>
                                <th className="px-6 py-5">Client Info</th>
                                <th className="px-6 py-5">Service & Time</th>
                                <th className="px-6 py-5">Payment</th>
                                <th className="px-6 py-5 text-center">Status</th>
                                <th className="px-6 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-900">
                            {filteredAppointments.map((app) => (
                                <tr key={app.id} className="hover:bg-white/[0.01] transition-colors group">
                                    <td className="px-6 py-5 font-mono text-xs text-[#D4AF37]">{app.id}</td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-white">{app.client}</span>
                                            <span className="text-xs text-gray-500">{app.email}</span>
                                            <span className="text-xs text-gray-600">{app.phone}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium">{app.service}</span>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-xs text-[#D4AF37]">📅 {app.date}</span>
                                                <span className="text-xs text-gray-500">at {app.time}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold">{app.amount}</span>
                                            <span className="text-[10px] text-green-500/80 uppercase font-bold">Paid Deposit: {app.deposit}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <span className={`text-[9px] uppercase font-bold px-3 py-1.5 rounded-full border ${app.status === 'confirmed' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                                                app.status === 'pending' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                                                    'bg-red-500/10 text-red-500 border-red-500/20'
                                            }`}>
                                            {app.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 hover:border-[#D4AF37]/30 transition-all">✏️</button>
                                            <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 hover:border-red-500/30 text-red-500 transition-all">🗑️</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {filteredAppointments.length === 0 && (
                <div className="text-center py-20 bg-white/[0.02] rounded-2xl border-2 border-dashed border-white/5">
                    <span className="text-4xl mb-4 block opacity-50">📂</span>
                    <p className="text-gray-500 italic">No appointments found matching this criteria.</p>
                </div>
            )}
        </div>
    );
};

export default AppointmentsPage;
