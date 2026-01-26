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
        <div className="space-y-6 animate-fadeIn pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Registre des Rendez-vous</h1>
                    <p className="text-gray-400 text-[9px] font-medium uppercase tracking-wider mt-0.5">Planification & Suivi des Sessions</p>
                </div>
                <div className="flex bg-gray-200/50 p-1 rounded-lg border border-gray-200">
                    {['all', 'pending', 'confirmed', 'cancelled'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setFilter(tab)}
                            className={`px-3 py-1.5 rounded text-[8px] uppercase tracking-widest font-black transition-all ${filter === tab ? 'bg-white text-gray-950 shadow-sm border border-gray-200' : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100 text-gray-400 text-[9px] font-bold uppercase tracking-widest">
                                <th className="px-6 py-4">Ref. ID</th>
                                <th className="px-6 py-4">Information Client</th>
                                <th className="px-6 py-4">Service & Session</th>
                                <th className="px-6 py-4 text-right">Paiement</th>
                                <th className="px-6 py-4 text-center">Statut</th>
                                <th className="px-6 py-4 text-right">Options</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredAppointments.map((app) => (
                                <tr key={app.id} className="hover:bg-gray-50/30 transition-colors group">
                                    <td className="px-6 py-4 font-mono text-[9px] text-gray-400">{app.id}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-gray-900 text-[11px] group-hover:text-[#D4AF37] transition-colors">{app.client}</span>
                                            <span className="text-[9px] text-gray-400 font-medium">{app.email}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-gray-700 text-[10px]">{app.service}</span>
                                            <span className="text-[8px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">📅 {app.date} à {app.time}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-gray-900">{app.amount}</span>
                                            <span className="text-[7px] text-green-600 uppercase font-black tracking-tighter">Acompte: {app.deposit}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`text-[8px] uppercase font-bold px-2 py-0.5 rounded border ${app.status === 'confirmed' ? 'bg-green-50 text-green-600 border-green-100' :
                                            app.status === 'pending' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                'bg-red-50 text-red-600 border-red-100'
                                            }`}>
                                            {app.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="w-6 h-6 rounded bg-white flex items-center justify-center border border-gray-200 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">✏️</button>
                                            <button className="w-6 h-6 rounded bg-white flex items-center justify-center border border-gray-200 hover:border-red-500 hover:text-red-500 transition-all">🗑️</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {filteredAppointments.length === 0 && (
                <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-200">
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest italic">Aucun enregistrement trouvé.</p>
                </div>
            )}
        </div>
    );
};

export default AppointmentsPage;
