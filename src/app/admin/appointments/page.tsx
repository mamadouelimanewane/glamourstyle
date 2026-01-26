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
        <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-xl font-heading font-bold text-gray-950">Bookings</h1>
                    <p className="text-gray-500 text-xs font-medium">Manage all incoming salon appointments & schedules.</p>
                </div>
                <div className="flex bg-gray-200/50 p-1 rounded-full border border-gray-200">
                    {['all', 'pending', 'confirmed', 'cancelled'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setFilter(tab)}
                            className={`px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-bold transition-all ${filter === tab ? 'bg-gray-950 text-white shadow-md' : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-400 text-[9px] font-bold uppercase tracking-widest">
                                <th className="px-8 py-5">ID</th>
                                <th className="px-8 py-5">Client Info</th>
                                <th className="px-8 py-5">Service Session</th>
                                <th className="px-8 py-5 text-right">Payment</th>
                                <th className="px-8 py-5 text-center">Status</th>
                                <th className="px-8 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredAppointments.map((app) => (
                                <tr key={app.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-8 py-5 font-mono text-xs text-[#D4AF37] font-bold">{app.id}</td>
                                    <td className="px-8 py-5">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-gray-950 text-xs">{app.client}</span>
                                            <span className="text-[10px] text-gray-500 font-medium">{app.email}</span>
                                            <span className="text-[10px] text-gray-400">{app.phone}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="flex flex-col text-xs">
                                            <span className="font-bold text-gray-700">{app.service}</span>
                                            <div className="flex items-center gap-2 mt-0.5">
                                                <span className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-wider">📅 {app.date}</span>
                                                <span className="text-[9px] text-gray-400">at {app.time}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-black text-gray-950">{app.amount}</span>
                                            <span className="text-[8px] text-green-600 uppercase font-black tracking-tighter">Dep: {app.deposit}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-center">
                                        <span className={`text-[8px] uppercase font-bold px-3 py-1.5 rounded-full border shadow-sm ${app.status === 'confirmed' ? 'bg-white text-green-600 border-green-100' :
                                            app.status === 'pending' ? 'bg-white text-amber-500 border-amber-100' :
                                                'bg-white text-red-500 border-red-100'
                                            }`}>
                                            {app.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-gray-100 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all shadow-sm">✏️</button>
                                            <button className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-gray-100 hover:border-red-500 hover:text-red-500 transition-all shadow-sm text-gray-400">🗑️</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {filteredAppointments.length === 0 && (
                <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-100 shadow-sm animate-fadeIn">
                    <span className="text-5xl mb-4 block opacity-20">📂</span>
                    <p className="text-gray-400 font-medium italic">No matching records found.</p>
                </div>
            )}
        </div>
    );
};

export default AppointmentsPage;
