'use client';

import React, { useState } from 'react';

const CustomersPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const customers = [
        { id: 'CL-001', name: 'Zainab A.', email: 'zainab@example.com', phone: '+44 7123 456789', visits: 8, totalSpent: '£1,760', lastVisit: '2026-01-22', status: 'VIP' },
        { id: 'CL-002', name: 'Aminata K.', email: 'aminata@example.com', phone: '+44 7123 987654', visits: 12, totalSpent: '£2,160', lastVisit: '2026-01-18', status: 'VIP' },
        { id: 'CL-003', name: 'Binta D.', email: 'binta@example.com', phone: '+44 7234 112233', visits: 3, totalSpent: '£840', lastVisit: '2026-01-15', status: 'Regular' },
        { id: 'CL-004', name: 'Yasmine B.', email: 'yasmine@example.com', phone: '+44 7345 445566', visits: 6, totalSpent: '£1,050', lastVisit: '2026-01-05', status: 'Regular' },
        { id: 'CL-005', name: 'Fatou S.', email: 'fatou@example.com', phone: '+44 7456 778899', visits: 1, totalSpent: '£150', lastVisit: '2026-01-10', status: 'New' },
        { id: 'CL-006', name: 'Hawa J.', email: 'hawa@example.com', phone: '+44 7567 001122', visits: 15, totalSpent: '£3,200', lastVisit: '2026-01-20', status: 'VIP' },
    ];

    const filteredCustomers = customers.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.phone.includes(searchTerm)
    );

    return (
        <div className="space-y-6 animate-fadeIn pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Registre des Clients</h1>
                    <p className="text-gray-400 text-[9px] font-medium uppercase tracking-wider mt-0.5">Base de données CRM • LexPremium</p>
                </div>
                <button className="px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white bg-gray-950 rounded hover:bg-gray-800 transition-all">
                    + Ajouter Client
                </button>
            </div>

            {/* Stats Cards - Low Profile */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'Clients Totaux', value: customers.length, icon: '👥' },
                    { label: 'Statut VIP', value: customers.filter(c => c.status === 'VIP').length, icon: '⭐', color: 'text-[#D4AF37]' },
                    { label: 'Nouveautés', value: customers.filter(c => c.status === 'New').length, icon: '🆕', color: 'text-green-500' },
                    { label: 'CAB Moyen', value: '£1,527', icon: '💰' },
                ].map((s) => (
                    <div key={s.label} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-50 rounded flex items-center justify-center text-sm">
                            {s.icon}
                        </div>
                        <div>
                            <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">{s.label}</p>
                            <p className={`text-sm font-black ${s.color || 'text-gray-950'}`}>{s.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Search Bar - Compact */}
            <div className="bg-white p-1.5 rounded-lg border border-gray-200 shadow-sm flex items-center">
                <div className="pl-4 pr-3 text-gray-400 text-xs">🔍</div>
                <input
                    type="text"
                    placeholder="Chercher par nom, email ou identifiant..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 bg-transparent py-1.5 pr-4 text-[10px] font-bold text-gray-900 placeholder-gray-400 outline-none"
                />
            </div>

            {/* Customers Table - Ultra Clean */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100 text-gray-400 text-[8px] font-bold uppercase tracking-widest">
                                <th className="px-6 py-3">ID</th>
                                <th className="px-6 py-3">Identité & Contact</th>
                                <th className="px-6 py-3 text-center">Sessions</th>
                                <th className="px-6 py-3 text-right">CA Total</th>
                                <th className="px-6 py-3 text-center">Score</th>
                                <th className="px-6 py-3 text-center">Rang</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredCustomers.map((customer) => (
                                <tr key={customer.id} className="hover:bg-gray-50/30 transition-colors group">
                                    <td className="px-6 py-3 font-mono text-[8px] text-gray-400">{customer.id}</td>
                                    <td className="px-6 py-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-7 h-7 rounded bg-gray-950 flex items-center justify-center font-bold text-white text-[10px] uppercase">
                                                {customer.name[0]}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-bold text-gray-900 text-[10px]">{customer.name}</span>
                                                <span className="text-[8px] text-gray-400 font-medium">{customer.email}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-3 text-center">
                                        <span className="text-[10px] font-black text-gray-950">{customer.visits}</span>
                                    </td>
                                    <td className="px-6 py-3 text-right font-black text-gray-950 text-[10px]">{customer.totalSpent}</td>
                                    <td className="px-6 py-3 text-center text-[9px] text-gray-500 font-bold">{customer.lastVisit}</td>
                                    <td className="px-6 py-3 text-center">
                                        <span className={`text-[8px] uppercase font-bold px-2 py-0.5 rounded border ${customer.status === 'VIP' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                            customer.status === 'Regular' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                                'bg-green-50 text-green-600 border-green-100'
                                            }`}>
                                            {customer.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3 text-right">
                                        <div className="flex justify-end gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="w-5 h-5 rounded bg-white flex items-center justify-center border border-gray-200 text-[9px] hover:border-[#D4AF37] transition-all">✏️</button>
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

export default CustomersPage;
