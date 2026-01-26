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
        <div className="space-y-8 animate-fadeIn pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-gray-950">Gestion des Rendez-vous</h1>
                    <p className="text-gray-500 text-base font-medium mt-1 uppercase tracking-wide">Planification et suivi des sessions clients</p>
                </div>
                <div className="flex bg-gray-200/50 p-1.5 rounded-xl border border-gray-200">
                    {['all', 'pending', 'confirmed', 'cancelled'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setFilter(tab)}
                            className={`px-4 py-2 rounded-lg text-[10px] uppercase tracking-widest font-black transition-all ${filter === tab ? 'bg-white text-gray-950 shadow-sm' : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            {tab === 'all' ? 'Tous' : tab === 'pending' ? 'En attente' : tab === 'confirmed' ? 'Confirmé' : 'Annulé'}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100 text-gray-400 text-xs font-bold uppercase tracking-widest">
                                <th className="px-8 py-5">Identifiant</th>
                                <th className="px-8 py-5">Client</th>
                                <th className="px-8 py-5">Service & Horaire</th>
                                <th className="px-8 py-5 text-right">Montant</th>
                                <th className="px-8 py-5 text-center">Statut</th>
                                <th className="px-8 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredAppointments.map((app) => (
                                <tr key={app.id} className="hover:bg-gray-50/30 transition-colors group">
                                    <td className="px-8 py-5 font-mono text-[10px] text-gray-400">{app.id}</td>
                                    <td className="px-8 py-5">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-gray-900 text-base group-hover:text-[#D4AF37] transition-colors">{app.client}</span>
                                            <span className="text-sm text-gray-500 font-medium">{app.email}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-gray-700 text-base">{app.service}</span>
                                            <span className="text-sm text-gray-400 font-bold uppercase tracking-widest mt-1">📅 {app.date} | {app.time}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <div className="flex flex-col">
                                            <span className="text-base font-black text-gray-900">{app.amount}</span>
                                            <span className="text-sm text-green-600 font-bold uppercase tracking-tight">Acompte: {app.deposit}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-center">
                                        <span className={`text-xs uppercase font-black px-3 py-1.5 rounded-full border shadow-sm ${app.status === 'confirmed' ? 'bg-green-50 text-green-600 border-green-100' :
                                            app.status === 'pending' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                'bg-red-50 text-red-600 border-red-100'
                                            }`}>
                                            {app.status === 'confirmed' ? 'Confirmé' : app.status === 'pending' ? 'En attente' : 'Annulé'}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-gray-200 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all shadow-sm">✏️</button>
                                            <button className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-gray-200 hover:border-red-500 hover:text-red-500 transition-all shadow-sm">🗑️</button>
                                        </div>
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

export default AppointmentsPage;
